import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import { createInitializationGuard } from '@/lib/api-utils';
import { QUALITY_TIER_COLUMN_SQL, normalizeQualityTier } from '@/lib/quality-tier';
import {
  generateNextProductCode,
  generateSku,
  isSkuUnique,
  validateBarcode,
  generateInternalBarcode,
  calculatePricingAndGst,
  computeStockStatus,
} from '@/lib/product-identifiers';
import { recordStockMovement, recordProductAuditLog } from '@/lib/stock-movements';

const ensureTable = createInitializationGuard(async () => {
  await pool.query(`CREATE SEQUENCE IF NOT EXISTS shop_product_code_seq START WITH 1;`);
  await pool.query(`CREATE TABLE IF NOT EXISTS supplier_materials (
    id SERIAL PRIMARY KEY,
    supplier_id INTEGER NOT NULL,
    vendor_id INTEGER,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    quote_price_range VARCHAR(100),
    price NUMERIC(10,2),
    unit VARCHAR(100),
    quantity INTEGER DEFAULT 0,
    image_url TEXT,
    category VARCHAR(255),
    subcategory VARCHAR(255),
    brand VARCHAR(120),
    compare_at_price NUMERIC(10,2),
    is_featured_deal BOOLEAN DEFAULT FALSE,
    images JSONB DEFAULT '[]'::jsonb,
    specifications JSONB DEFAULT '{}'::jsonb,
    bulk_pricing JSONB DEFAULT '[]'::jsonb,
    available_cities JSONB DEFAULT '[]'::jsonb,
    is_available BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  )`);
  await pool.query(`ALTER TABLE supplier_materials
    ADD COLUMN IF NOT EXISTS vendor_id INTEGER,
    ADD COLUMN IF NOT EXISTS brand VARCHAR(120),
    ADD COLUMN IF NOT EXISTS subcategory VARCHAR(255),
    ADD COLUMN IF NOT EXISTS quote_price_range VARCHAR(100),
    ADD COLUMN IF NOT EXISTS compare_at_price NUMERIC(10,2),
    ADD COLUMN IF NOT EXISTS is_featured_deal BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS specifications JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS bulk_pricing JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS available_cities JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS returns_policy TEXT,
    ADD COLUMN IF NOT EXISTS highlights JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS product_code VARCHAR(50),
    ADD COLUMN IF NOT EXISTS sku VARCHAR(100),
    ADD COLUMN IF NOT EXISTS barcode VARCHAR(100),
    ADD COLUMN IF NOT EXISTS barcode_type VARCHAR(30) DEFAULT 'CODE128',
    ADD COLUMN IF NOT EXISTS mpn VARCHAR(100),
    ADD COLUMN IF NOT EXISTS variant_id VARCHAR(50),
    ADD COLUMN IF NOT EXISTS keywords TEXT,
    ADD COLUMN IF NOT EXISTS product_url_slug VARCHAR(255),
    ADD COLUMN IF NOT EXISTS extraction_notes TEXT,
    ADD COLUMN IF NOT EXISTS http_status VARCHAR(20),
    ADD COLUMN IF NOT EXISTS mrp NUMERIC(10,2),
    ADD COLUMN IF NOT EXISTS discount_percent NUMERIC(5,2) DEFAULT 0,
    ADD COLUMN IF NOT EXISTS discount_amount NUMERIC(10,2) DEFAULT 0,
    ADD COLUMN IF NOT EXISTS gst_percent NUMERIC(5,2) DEFAULT 18.00,
    ADD COLUMN IF NOT EXISTS is_tax_inclusive BOOLEAN DEFAULT TRUE,
    ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT 'INR',
    ADD COLUMN IF NOT EXISTS weight NUMERIC(10,3),
    ADD COLUMN IF NOT EXISTS weight_unit VARCHAR(20) DEFAULT 'kg',
    ADD COLUMN IF NOT EXISTS dimensions VARCHAR(100),
    ADD COLUMN IF NOT EXISTS measurement_unit VARCHAR(50),
    ADD COLUMN IF NOT EXISTS low_stock_threshold INTEGER DEFAULT 5,
    -- The catalog list, stock filter, and create/edit flows all read this
    -- field. Existing production databases can predate it, so keep the
    -- runtime schema upgrade complete as well as the SQL migration below.
    ADD COLUMN IF NOT EXISTS stock_status VARCHAR(30) DEFAULT 'in_stock',
    ADD COLUMN IF NOT EXISTS has_variants BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'active',
    ADD COLUMN IF NOT EXISTS is_archived BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN DEFAULT FALSE`);
  await pool.query(QUALITY_TIER_COLUMN_SQL);

  await pool.query(`CREATE TABLE IF NOT EXISTS product_variants (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
    variant_code VARCHAR(50) UNIQUE,
    name VARCHAR(255) NOT NULL,
    sku VARCHAR(100) UNIQUE,
    barcode VARCHAR(100),
    mpn VARCHAR(100),
    size VARCHAR(100),
    color VARCHAR(100),
    material VARCHAR(100),
    attributes JSONB DEFAULT '{}'::jsonb,
    image_url TEXT,
    mrp NUMERIC(10,2),
    price NUMERIC(10,2) NOT NULL,
    quantity INTEGER DEFAULT 0,
    stock_status VARCHAR(30) DEFAULT 'in_stock',
    weight NUMERIC(10,3),
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
  )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS stock_movements (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
    variant_id INTEGER REFERENCES product_variants(id) ON DELETE SET NULL,
    change_type VARCHAR(50) NOT NULL,
    quantity_change INTEGER NOT NULL,
    quantity_before INTEGER NOT NULL,
    quantity_after INTEGER NOT NULL,
    reason TEXT,
    performed_by_id INTEGER,
    performed_by_role VARCHAR(50) DEFAULT 'admin',
    performed_by_name VARCHAR(150),
    created_at TIMESTAMP DEFAULT NOW()
  )`);

  await pool.query(`CREATE TABLE IF NOT EXISTS product_audit_logs (
    id SERIAL PRIMARY KEY,
    product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
    action VARCHAR(50) NOT NULL,
    previous_values JSONB,
    new_values JSONB,
    performed_by_id INTEGER,
    performed_by_role VARCHAR(50),
    performed_by_name VARCHAR(150),
    notes TEXT,
    created_at TIMESTAMP DEFAULT NOW()
  )`);
});

const unauthorized = () => NextResponse.json({ success: false, error: 'Admin access required' }, { status: 401 });

async function validProduct(body, { allowUnassigned = false } = {}) {
  const name = String(body.name || '').trim();
  const category = String(body.category || '').trim();
  if (!name || name.length > 255 || (!category && !allowUnassigned)) {
    return { error: 'Product name and category are required' };
  }

  const categoryResult = category ? await pool.query(
    'SELECT name, unit FROM shop_categories WHERE LOWER(TRIM(name)) = LOWER(TRIM($1)) LIMIT 1',
    [category]
  ) : { rows: [{ name: '', unit: body.unit || 'pcs' }] };
  if (!categoryResult.rows.length) return { error: 'Choose an existing Shop Now category' };

  const qualityTier = normalizeQualityTier(body.quality_tier);
  if (!qualityTier) return { error: 'Choose a Quality Tier: All, Basic, Standard, Premium or Luxury' };

  const quotePriceRange = String(body.quote_price_range || '').trim();
  let normalizedQuoteRange = null;
  if (quotePriceRange) {
    const rangeMatch = quotePriceRange.match(/^(?:₹\s*|rs\.?\s*)?(\d+(?:\.\d{1,2})?)\s*[-–]\s*(?:₹\s*|rs\.?\s*)?(\d+(?:\.\d{1,2})?)$/i);
    if (!rangeMatch) return { error: 'Enter the Get Quote price range like 40-80 or leave empty' };
    const quoteMinimum = Number(rangeMatch[1]);
    const quoteMaximum = Number(rangeMatch[2]);
    if (!(quoteMinimum > 0) || quoteMaximum <= quoteMinimum || quoteMaximum > 99999999.99) {
      return { error: 'Get Quote maximum price must be greater than its minimum, e.g. 40-80' };
    }
    normalizedQuoteRange = `${quoteMinimum}-${quoteMaximum}`;
  }

  // Price & MRP validation
  const rawSellingPrice = body.selling_price !== undefined && body.selling_price !== ''
    ? Number(body.selling_price)
    : (body.price === '' || body.price == null ? null : Number(body.price));

  if (rawSellingPrice === null || !Number.isFinite(rawSellingPrice) || rawSellingPrice <= 0 || rawSellingPrice > 99999999.99) {
    return { error: 'Selling price is required and must be a positive number' };
  }

  const rawMrp = body.mrp !== undefined && body.mrp !== ''
    ? Number(body.mrp)
    : (body.compare_at_price === '' || body.compare_at_price == null ? rawSellingPrice : Number(body.compare_at_price));

  if (!Number.isFinite(rawMrp) || rawMrp < 0 || rawMrp > 99999999.99) {
    return { error: 'Enter a valid MRP' };
  }

  const quantity = Number(body.quantity ?? 0);
  if (!Number.isInteger(quantity) || quantity < 0 || quantity > 100000000) {
    return { error: 'Quantity must be a non-negative whole number' };
  }

  const gstPercent = body.gst_percent !== undefined && body.gst_percent !== '' ? Number(body.gst_percent) : 18;
  const isTaxInclusive = body.is_tax_inclusive !== false;
  const pricingBreakdown = calculatePricingAndGst({
    mrp: rawMrp,
    sellingPrice: rawSellingPrice,
    gstPercent,
    isTaxInclusive,
  });

  // Barcode validation if provided
  const barcode = String(body.barcode || '').trim();
  const barcodeType = String(body.barcode_type || 'CODE128').trim().toUpperCase();
  if (barcode) {
    const barcodeValidation = validateBarcode(barcode, barcodeType);
    if (!barcodeValidation.valid) {
      return { error: barcodeValidation.error };
    }
  }

  const images = Array.isArray(body.images) ? body.images : [];
  const specifications = body.specifications && typeof body.specifications === 'object' && !Array.isArray(body.specifications) ? body.specifications : {};
  const bulkPricing = Array.isArray(body.bulk_pricing) ? body.bulk_pricing : [];
  const availableCities = Array.isArray(body.available_cities) ? body.available_cities : [];
  const variants = Array.isArray(body.variants) ? body.variants : [];

  const faqs = Array.isArray(body.faqs)
    ? body.faqs
        .map((f) => ({
          q: String(f?.q || f?.question || '').trim().slice(0, 500),
          a: String(f?.a || f?.answer || '').trim().slice(0, 2000),
        }))
        .filter((f) => f.q && f.a)
    : [];

  const highlights = Array.isArray(body.highlights)
    ? body.highlights
        .map((h) => String(typeof h === 'object' && h !== null ? (h.val || h.label || '') : h).trim().slice(0, 300))
        .filter(Boolean)
    : [];

  const returnsPolicy = String(body.returns_policy || '').trim().slice(0, 3000);

  if (images.length > 15 || images.some((url) => typeof url !== 'string' || url.length > 1000)) {
    return { error: 'Add up to 15 image URLs' };
  }
  if (Object.keys(specifications).length > 40) {
    return { error: 'Add up to 40 specifications' };
  }
  if (bulkPricing.length > 10 || bulkPricing.some((tier) => !Number.isInteger(Number(tier.min_quantity)) || Number(tier.min_quantity) < 2 || !Number.isFinite(Number(tier.price)) || Number(tier.price) <= 0)) {
    return { error: 'Bulk tiers need a minimum quantity (>=2) and positive price' };
  }

  const lowStockThreshold = Number.isInteger(Number(body.low_stock_threshold)) ? Math.max(0, Number(body.low_stock_threshold)) : 5;
  // Quantity is the source of truth.  The edit form can contain the status
  // that was loaded before a stock change; accepting that stale value lets a
  // zero-quantity product remain marked "in stock".
  const stockStatus = computeStockStatus(quantity, lowStockThreshold);

  let productStatus = String(body.status || 'active').trim();
  let isAvailable = body.is_available !== false;
  if (body.approval_status) {
    const appStatus = String(body.approval_status).toLowerCase().trim();
    if (appStatus === 'approved') {
      specifications.__approval__ = {
        ...(specifications.__approval__ || {}),
        status: 'approved',
        approved_at: new Date().toISOString(),
        approved_by: 'Admin',
      };
      productStatus = 'active';
      isAvailable = true;
    } else if (appStatus === 'rejected') {
      specifications.__approval__ = {
        ...(specifications.__approval__ || {}),
        status: 'rejected',
        rejected_at: new Date().toISOString(),
        rejected_by: 'Admin',
        reason: String(body.rejection_reason || '').trim().slice(0, 1000),
      };
      productStatus = 'rejected';
      isAvailable = false;
    } else if (appStatus === 'pending') {
      specifications.__approval__ = {
        ...(specifications.__approval__ || {}),
        status: 'pending',
        updated_at: new Date().toISOString(),
      };
      productStatus = 'pending_approval';
      isAvailable = false;
    }
  }

  const productUrlSlug = String(body.product_url_slug || '')
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 255);

  return {
    value: {
      name,
      category: categoryResult.rows[0].name,
      subcategory: String(body.subcategory || '').trim().slice(0, 255),
      brand: String(body.brand || '').trim().slice(0, 120),
      description: String(body.description || '').trim().slice(0, 5000),
      quote_price_range: normalizedQuoteRange,
      price: rawSellingPrice,
      compare_at_price: rawMrp,
      mrp: rawMrp,
      discount_percent: pricingBreakdown.discountPercent,
      discount_amount: pricingBreakdown.discountAmount,
      gst_percent: pricingBreakdown.gstPercent,
      is_tax_inclusive: pricingBreakdown.isTaxInclusive,
      currency: String(body.currency || 'INR').trim().slice(0, 10),
      unit: String(body.unit || categoryResult.rows[0].unit || 'pcs').trim().slice(0, 100),
      measurement_unit: String(body.measurement_unit || body.unit || categoryResult.rows[0].unit || 'pcs').trim().slice(0, 50),
      quantity,
      low_stock_threshold: lowStockThreshold,
      stock_status: stockStatus,
      weight: body.weight !== undefined && body.weight !== '' ? Number(body.weight) : null,
      weight_unit: String(body.weight_unit || 'kg').trim().slice(0, 20),
      dimensions: String(body.dimensions || '').trim().slice(0, 100),
      product_code: String(body.product_code || '').trim().slice(0, 50),
      sku: String(body.sku || '').trim().slice(0, 100),
      barcode,
      barcode_type: barcodeType,
      mpn: String(body.mpn || '').trim().slice(0, 100),
      variant_id: String(body.variant_id || '').trim().slice(0, 50),
      keywords: String(body.keywords || '').trim(),
      product_url_slug: productUrlSlug,
      extraction_notes: String(body.extraction_notes || '').trim(),
      http_status: String(body.http_status || '200').trim().slice(0, 20),
      image_url: String(body.image_url || images[0] || '').trim().slice(0, 1000),
      images: images.map((url) => String(url).trim()).filter(Boolean),
      is_featured_deal: body.is_featured_deal === true,
      specifications,
      bulk_pricing: bulkPricing.map((tier) => ({ min_quantity: Number(tier.min_quantity), price: Number(tier.price) })).sort((a, b) => a.min_quantity - b.min_quantity),
      available_cities: [...new Set(availableCities.map((city) => String(city).trim()).filter(Boolean))],
      is_available: isAvailable,
      quality_tier: qualityTier,
      has_variants: Boolean(body.has_variants) || variants.length > 0,
      variants,
      status: productStatus,
      is_archived: body.is_archived === true,
      faqs,
      returns_policy: returnsPolicy,
      highlights,
      adjustment_reason: String(body.adjustment_reason || '').trim(),
    },
  };
}

export async function GET(req) {
  if (!requireRole(req, 'admin')) return unauthorized();
  try {
    await ensureTable();
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    // Single Product Detailed View
    if (id) {
      const one = await pool.query(
        `SELECT id, supplier_id, vendor_id, name, description, quote_price_range, price, unit,
          quantity, image_url, category, subcategory, brand, compare_at_price, is_featured_deal,
          images, specifications, bulk_pricing, available_cities, is_available, quality_tier,
          COALESCE(faqs, '[]'::jsonb) AS faqs, returns_policy, COALESCE(highlights, '[]'::jsonb) AS highlights,
          product_code, sku, barcode, barcode_type, mpn, variant_id, keywords, product_url_slug,
          extraction_notes, http_status, mrp, discount_percent, discount_amount, gst_percent,
          is_tax_inclusive, currency, weight, weight_unit, dimensions, measurement_unit,
          low_stock_threshold, has_variants, status, is_archived, is_deleted,
          created_at, updated_at
         FROM supplier_materials WHERE id=$1 AND is_deleted=FALSE`,
        [id]
      );
      if (!one.rows.length) return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      const product = one.rows[0];

      // Fetch variants if any
      const variantsRes = await pool.query(
        'SELECT * FROM product_variants WHERE product_id = $1 ORDER BY id ASC',
        [id]
      );
      product.variants = variantsRes.rows;

      // Fetch recent stock movements
      const movementsRes = await pool.query(
        'SELECT * FROM stock_movements WHERE product_id = $1 ORDER BY created_at DESC LIMIT 20',
        [id]
      );
      product.stock_movements = movementsRes.rows;

      return NextResponse.json({ success: true, data: product });
    }

    // List View with Advanced Search & Filters
    const q = String(searchParams.get('q') || '').trim();
    const category = String(searchParams.get('category') || '').trim();
    const subcategory = String(searchParams.get('subcategory') || '').trim();
    const brand = String(searchParams.get('brand') || '').trim();
    const status = String(searchParams.get('status') || '').trim();
    const stockStatus = String(searchParams.get('stock_status') || '').trim();
    const tier = String(searchParams.get('tier') || searchParams.get('quality_tier') || '').trim();
    const approvalStatus = String(searchParams.get('approval_status') || searchParams.get('approval') || '').trim().toLowerCase();
    const page = Math.max(1, parseInt(searchParams.get('page') || '1', 10) || 1);
    const limit = Math.min(100, Math.max(1, parseInt(searchParams.get('limit') || '25', 10) || 25));
    const offset = (page - 1) * limit;

    const sortFieldMap = {
      created_at: 'created_at',
      name: 'name',
      price: 'price',
      quantity: 'quantity',
      product_code: 'product_code',
      category: 'category',
    };
    const sort = sortFieldMap[searchParams.get('sort')] || 'created_at';
    const order = String(searchParams.get('order') || 'desc').toLowerCase() === 'asc' ? 'ASC' : 'DESC';

    const where = ['is_deleted = FALSE'];
    const params = [];

    if (q) {
      params.push(`%${q}%`);
      const pIdx = params.length;
      where.push(`(
        name ILIKE $${pIdx} OR 
        category ILIKE $${pIdx} OR 
        COALESCE(brand,'') ILIKE $${pIdx} OR 
        COALESCE(product_code,'') ILIKE $${pIdx} OR 
        COALESCE(sku,'') ILIKE $${pIdx} OR 
        COALESCE(barcode,'') ILIKE $${pIdx} OR 
        COALESCE(mpn,'') ILIKE $${pIdx}
      )`);
    }

    if (category && category !== 'all') {
      params.push(category);
      where.push(`LOWER(TRIM(category)) = LOWER(TRIM($${params.length}))`);
    }

    if (subcategory) {
      params.push(subcategory);
      where.push(`LOWER(TRIM(subcategory)) = LOWER(TRIM($${params.length}))`);
    }

    if (brand) {
      params.push(brand);
      where.push(`LOWER(TRIM(brand)) = LOWER(TRIM($${params.length}))`);
    }

    if (status && status !== 'all') {
      params.push(status);
      where.push(`status = $${params.length}`);
    }

    if (stockStatus && stockStatus !== 'all') {
      params.push(stockStatus);
      where.push(`stock_status = $${params.length}`);
    }

    if (tier === 'none') {
      where.push(`(quality_tier IS NULL OR TRIM(quality_tier) = '')`);
    } else if (tier && tier !== 'any' && tier !== 'all') {
      params.push(tier);
      where.push(`quality_tier = $${params.length}`);
    }

    if (approvalStatus && approvalStatus !== 'all') {
      if (approvalStatus === 'pending') {
        where.push(`(
          specifications->'__approval__'->>'status' = 'pending'
          OR status = 'pending_approval'
          OR (vendor_id IS NOT NULL AND (specifications->'__approval__'->>'status' IS NULL OR specifications->'__approval__'->>'status' = 'pending'))
        )`);
      } else if (approvalStatus === 'rejected') {
        where.push(`(
          specifications->'__approval__'->>'status' = 'rejected'
          OR status = 'rejected'
        )`);
      } else if (approvalStatus === 'approved') {
        where.push(`(
          COALESCE(specifications->'__approval__'->>'status', 'approved') = 'approved'
          AND COALESCE(status, 'active') NOT IN ('rejected', 'pending_approval')
          AND (vendor_id IS NULL OR specifications->'__approval__'->>'status' = 'approved')
        )`);
      } else if (approvalStatus === 'hidden') {
        where.push(`is_available = FALSE`);
      } else if (approvalStatus === 'live') {
        where.push(`is_available = TRUE`);
      }
    }

    const whereSql = `WHERE ${where.join(' AND ')}`;
    const countRes = await pool.query(`SELECT COUNT(*)::INT AS total FROM supplier_materials ${whereSql}`, params);
    const total = countRes.rows[0]?.total || 0;

    const selectList = `id, supplier_id, vendor_id, name, description, quote_price_range, price, unit, quantity, image_url,
      images, specifications, category, subcategory, brand, compare_at_price, is_featured_deal, is_available, quality_tier,
      product_code, sku, barcode, barcode_type, mpn, variant_id, keywords, product_url_slug,
      mrp, discount_percent, discount_amount, gst_percent, is_tax_inclusive, currency,
      weight, dimensions, measurement_unit, low_stock_threshold, stock_status, has_variants,
      status, is_archived, created_at, updated_at`;

    params.push(limit, offset);
    const result = await pool.query(
      `SELECT ${selectList}
       FROM supplier_materials
       ${whereSql}
       ORDER BY ${sort} ${order}, id DESC
       LIMIT $${params.length - 1} OFFSET $${params.length}`,
      params
    );

    return NextResponse.json({
      success: true,
      data: result.rows,
      pagination: { page, limit, total, pages: Math.ceil(total / limit) || 1 },
      sort: { field: sort, order: order.toLowerCase() },
    });
  } catch (error) {
    console.error('GET admin shop-products error:', error);
    return NextResponse.json({ success: false, error: 'Could not load products' }, { status: 500 });
  }
}

export async function POST(req) {
  const adminUser = requireRole(req, 'admin');
  if (!adminUser) return unauthorized();

  const client = await pool.connect();
  try {
    await ensureTable();
    const rawBody = await req.json();
    const parsed = await validProduct(rawBody);
    if (parsed.error) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
    const p = parsed.value;

    await client.query('BEGIN');

    // 1. Concurrency-safe Product Code (Product ID)
    let productCode = p.product_code;
    if (!productCode) {
      productCode = await generateNextProductCode(client);
    } else {
      // Verify not already used
      const existingCode = await client.query('SELECT id FROM supplier_materials WHERE product_code = $1', [productCode]);
      if (existingCode.rows.length > 0) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: `Product ID ${productCode} is already in use.` }, { status: 400 });
      }
    }

    // 2. SKU Generation & Uniqueness Check
    let sku = p.sku;
    if (!sku) {
      const seqNum = Number(productCode.replace(/\D/g, '')) || Math.floor(Math.random() * 9000 + 1000);
      sku = generateSku(p.category, seqNum);
    }
    const isUnique = await isSkuUnique(client, sku);
    if (!isUnique) {
      await client.query('ROLLBACK');
      return NextResponse.json({ success: false, error: `SKU '${sku}' already exists. Please choose a unique SKU.` }, { status: 400 });
    }

    // 3. Barcode (Internal fallback if empty)
    const barcode = p.barcode || generateInternalBarcode(productCode);

    // 4. Insert into supplier_materials
    const insertSql = `
      INSERT INTO supplier_materials (
        supplier_id, vendor_id, name, description, quote_price_range, price, unit, quantity,
        image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images,
        specifications, bulk_pricing, available_cities, is_available, quality_tier, faqs,
        returns_policy, highlights, product_code, sku, barcode, barcode_type, mpn, variant_id,
        keywords, product_url_slug, extraction_notes, http_status, mrp, discount_percent,
        discount_amount, gst_percent, is_tax_inclusive, currency, weight, weight_unit,
        dimensions, measurement_unit, low_stock_threshold, stock_status, has_variants, status
      ) VALUES (
        0, NULL, $1, $2, $3, $4, $5, $6,
        $7, $8, $9, $10, $11, $12, $13::jsonb,
        $14::jsonb, $15::jsonb, $16::jsonb, $17, $18, $19::jsonb,
        $20, $21::jsonb, $22, $23, $24, $25, $26, $27,
        $28, $29, $30, $31, $32, $33,
        $34, $35, $36, $37, $38, $39,
        $40, $41, $42, $43, $44, $45
      ) RETURNING *
    `;

    const values = [
      p.name, p.description, p.quote_price_range, p.price, p.unit, p.quantity,
      p.image_url, p.category, p.subcategory, p.brand, p.compare_at_price, p.is_featured_deal, JSON.stringify(p.images),
      JSON.stringify(p.specifications), JSON.stringify(p.bulk_pricing), JSON.stringify(p.available_cities), p.is_available, p.quality_tier, JSON.stringify(p.faqs),
      p.returns_policy, JSON.stringify(p.highlights), productCode, sku, barcode, p.barcode_type, p.mpn, p.variant_id,
      p.keywords, p.product_url_slug || `${sku.toLowerCase()}-${Date.now()}`, p.extraction_notes, p.http_status, p.mrp, p.discount_percent,
      p.discount_amount, p.gst_percent, p.is_tax_inclusive, p.currency, p.weight, p.weight_unit,
      p.dimensions, p.measurement_unit, p.low_stock_threshold, p.stock_status, p.has_variants, p.status,
    ];

    const result = await client.query(insertSql, values);
    const newProduct = result.rows[0];
    const productId = newProduct.id;

    // 5. Insert Variants if any
    if (p.has_variants && Array.isArray(p.variants) && p.variants.length > 0) {
      for (let i = 0; i < p.variants.length; i++) {
        const v = p.variants[i];
        const vCode = `MTB-VAR-${String(productId).padStart(4, '0')}-${String(i + 1).padStart(2, '0')}`;
        const vSku = v.sku || `${sku}-V${i + 1}`;
        await client.query(`
          INSERT INTO product_variants (
            product_id, variant_code, name, sku, barcode, mpn, size, color, material,
            attributes, image_url, mrp, price, quantity, stock_status, weight, is_active
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10::jsonb, $11, $12, $13, $14, $15, $16, $17)
        `, [
          productId, vCode, v.name || `${p.name} - ${v.size || v.color || `V${i + 1}`}`,
          vSku, v.barcode || null, v.mpn || null, v.size || null, v.color || null, v.material || null,
          JSON.stringify(v.attributes || {}), v.image_url || null, Number(v.mrp) || p.mrp,
          Number(v.price) || p.price, Number(v.quantity) || 0,
          computeStockStatus(v.quantity || 0, p.low_stock_threshold),
          Number(v.weight) || null, v.is_active !== false,
        ]);
      }
    }

    // 6. Record Initial Stock Movement
    if (p.quantity > 0) {
      await recordStockMovement({
        clientOrPool: client,
        productId,
        changeType: 'initial_stock',
        quantityChange: p.quantity,
        quantityBefore: 0,
        quantityAfter: p.quantity,
        reason: p.adjustment_reason || 'Initial Catalog Stock',
        userId: adminUser.id,
        userRole: 'admin',
        userName: adminUser.name || 'Admin',
      });
    }

    // 7. Record Audit Log
    await recordProductAuditLog({
      clientOrPool: client,
      productId,
      action: 'create',
      newValues: { product_code: productCode, sku, name: p.name, price: p.price, quantity: p.quantity },
      userId: adminUser.id,
      userRole: 'admin',
      userName: adminUser.name || 'Admin',
      notes: 'Product created via Admin Panel',
    });

    await client.query('COMMIT');
    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, data: newProduct }, { status: 201 });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('POST admin shop-products error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not add product' }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function PUT(req) {
  const adminUser = requireRole(req, 'admin');
  if (!adminUser) return unauthorized();

  const client = await pool.connect();
  try {
    await ensureTable();
    const body = await req.json();
    const id = Number(body.id);
    if (!Number.isInteger(id) || id < 1) {
      return NextResponse.json({ success: false, error: 'Valid product ID required' }, { status: 400 });
    }

    // Quick Action: Toggle Availability
    if (body.action === 'toggle') {
      const isAvailable = body.is_available === true;
      const toggled = await pool.query(
        `UPDATE supplier_materials
         SET is_available = $1,
             updated_at = NOW()
         WHERE id = $2 AND is_deleted = FALSE
         RETURNING *`,
        [isAvailable, id]
      );
      if (!toggled.rows.length) return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: toggled.rows[0] });
    }

    // Quick Action: Approve Product
    if (body.action === 'approve') {
      await client.query('BEGIN');
      const approvalData = {
        status: 'approved',
        approved_at: new Date().toISOString(),
        approved_by: adminUser.name || 'Admin',
        approved_by_id: adminUser.id,
      };

      const updateRes = await client.query(
        `UPDATE supplier_materials
         SET is_available = TRUE,
             status = 'active',
             specifications = jsonb_set(
               COALESCE(specifications, '{}'::jsonb),
               '{__approval__}',
               $1::jsonb
             ),
             updated_at = NOW()
         WHERE id = $2 AND is_deleted = FALSE
         RETURNING *`,
        [JSON.stringify(approvalData), id]
      );

      if (!updateRes.rows.length) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      }

      await recordProductAuditLog({
        clientOrPool: client,
        productId: id,
        action: 'approve',
        newValues: { status: 'active', is_available: true, approval: approvalData },
        userId: adminUser.id,
        userRole: 'admin',
        userName: adminUser.name || 'Admin',
        notes: body.notes || 'Product approved by admin',
      });

      await client.query('COMMIT');
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: updateRes.rows[0], message: 'Product approved successfully' });
    }

    // Quick Action: Reject Product
    if (body.action === 'reject') {
      await client.query('BEGIN');
      const reason = String(body.reason || 'Rejected by Admin').trim().slice(0, 1000);
      const approvalData = {
        status: 'rejected',
        rejected_at: new Date().toISOString(),
        rejected_by: adminUser.name || 'Admin',
        rejected_by_id: adminUser.id,
        reason,
      };

      const updateRes = await client.query(
        `UPDATE supplier_materials
         SET is_available = FALSE,
             status = 'rejected',
             specifications = jsonb_set(
               COALESCE(specifications, '{}'::jsonb),
               '{__approval__}',
               $1::jsonb
             ),
             updated_at = NOW()
         WHERE id = $2 AND is_deleted = FALSE
         RETURNING *`,
        [JSON.stringify(approvalData), id]
      );

      if (!updateRes.rows.length) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      }

      await recordProductAuditLog({
        clientOrPool: client,
        productId: id,
        action: 'reject',
        newValues: { status: 'rejected', is_available: false, approval: approvalData },
        userId: adminUser.id,
        userRole: 'admin',
        userName: adminUser.name || 'Admin',
        notes: `Product rejected by admin: ${reason}`,
      });

      await client.query('COMMIT');
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: updateRes.rows[0], message: 'Product rejected successfully' });
    }

    // Quick Action: Duplicate Product
    if (body.action === 'duplicate') {
      await client.query('BEGIN');
      const originalRes = await client.query('SELECT * FROM supplier_materials WHERE id = $1', [id]);
      if (!originalRes.rows.length) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Original product not found' }, { status: 404 });
      }
      const orig = originalRes.rows[0];
      const newProductCode = await generateNextProductCode(client);
      const newSeqNum = Number(newProductCode.replace(/\D/g, '')) || Math.floor(Math.random() * 9000 + 1000);
      const newSku = generateSku(orig.category, newSeqNum);
      const newBarcode = generateInternalBarcode(newProductCode);

      const dupRes = await client.query(`
        INSERT INTO supplier_materials (
          supplier_id, vendor_id, name, description, quote_price_range, price, unit, quantity,
          image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images,
          specifications, bulk_pricing, available_cities, is_available, quality_tier, faqs,
          returns_policy, highlights, product_code, sku, barcode, barcode_type, mpn,
          keywords, product_url_slug, mrp, discount_percent, discount_amount, gst_percent,
          is_tax_inclusive, currency, weight, weight_unit, dimensions, measurement_unit,
          low_stock_threshold, stock_status, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8,
          $9, $10, $11, $12, $13, $14, $15,
          $16, $17, $18, FALSE, $19, $20,
          $21, $22, $23, $24, $25, $26, $27,
          $28, $29, $30, $31, $32, $33,
          $34, $35, $36, $37, $38, $39,
          $40, $41, 'draft'
        ) RETURNING *
      `, [
        orig.supplier_id, orig.vendor_id, `${orig.name} (Copy)`, orig.description, orig.quote_price_range, orig.price, orig.unit, 0,
        orig.image_url, orig.category, orig.subcategory, orig.brand, orig.compare_at_price, false, JSON.stringify(orig.images || []),
        JSON.stringify(orig.specifications || {}), JSON.stringify(orig.bulk_pricing || []), JSON.stringify(orig.available_cities || []), orig.quality_tier, JSON.stringify(orig.faqs || []),
        orig.returns_policy, JSON.stringify(orig.highlights || []), newProductCode, newSku, newBarcode, orig.barcode_type || 'CODE128', orig.mpn,
        orig.keywords, `${newSku.toLowerCase()}-${Date.now()}`, orig.mrp, orig.discount_percent, orig.discount_amount, orig.gst_percent,
        orig.is_tax_inclusive, orig.currency, orig.weight, orig.weight_unit, orig.dimensions, orig.measurement_unit,
        orig.low_stock_threshold, 'out_of_stock',
      ]);

      await recordProductAuditLog({
        clientOrPool: client,
        productId: dupRes.rows[0].id,
        action: 'duplicate',
        newValues: { duplicated_from_id: id, product_code: newProductCode, sku: newSku },
        userId: adminUser.id,
        userRole: 'admin',
        userName: adminUser.name || 'Admin',
        notes: `Duplicated from product ID ${id}`,
      });

      await client.query('COMMIT');
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: dupRes.rows[0], message: 'Product duplicated successfully' });
    }

    // Standard Full Product Update
    const parsed = await validProduct(body, { allowUnassigned: true });
    if (parsed.error) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
    const p = parsed.value;

    await client.query('BEGIN');

    // Fetch existing product for change comparison
    const existingRes = await client.query('SELECT * FROM supplier_materials WHERE id = $1 AND is_deleted = FALSE', [id]);
    if (!existingRes.rows.length) {
      await client.query('ROLLBACK');
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }
    const oldProduct = existingRes.rows[0];

    // Check SKU uniqueness if changed
    if (p.sku && p.sku !== oldProduct.sku) {
      const isUnique = await isSkuUnique(client, p.sku, id);
      if (!isUnique) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: `SKU '${p.sku}' is already in use by another product.` }, { status: 400 });
      }
    }

    // Track Inventory Quantity Change
    const oldQuantity = Number(oldProduct.quantity || 0);
    const newQuantity = Number(p.quantity);
    if (oldQuantity !== newQuantity) {
      const qtyDiff = newQuantity - oldQuantity;
      const changeType = qtyDiff > 0 ? 'adjustment_addition' : 'adjustment_reduction';
      await recordStockMovement({
        clientOrPool: client,
        productId: id,
        changeType,
        quantityChange: qtyDiff,
        quantityBefore: oldQuantity,
        quantityAfter: newQuantity,
        reason: p.adjustment_reason || 'Manual Admin Stock Adjustment',
        userId: adminUser.id,
        userRole: 'admin',
        userName: adminUser.name || 'Admin',
      });
    }

    const updateSql = `
      UPDATE supplier_materials SET
        name = $1, description = $2, quote_price_range = $3, price = $4, unit = $5, quantity = $6,
        image_url = $7, category = $8, subcategory = $9, brand = $10, compare_at_price = $11,
        is_featured_deal = $12, images = $13::jsonb, specifications = $14::jsonb, bulk_pricing = $15::jsonb,
        available_cities = $16::jsonb, is_available = $17, quality_tier = $18, faqs = $19::jsonb,
        returns_policy = $20, highlights = $21::jsonb, sku = $22, barcode = $23, barcode_type = $24,
        mpn = $25, variant_id = $26, keywords = $27, product_url_slug = $28, extraction_notes = $29,
        http_status = $30, mrp = $31, discount_percent = $32, discount_amount = $33, gst_percent = $34,
        is_tax_inclusive = $35, currency = $36, weight = $37, weight_unit = $38, dimensions = $39,
        measurement_unit = $40, low_stock_threshold = $41, stock_status = $42, has_variants = $43,
        status = $44, is_archived = $45, updated_at = NOW()
      WHERE id = $46
      RETURNING *
    `;

    const values = [
      p.name, p.description, p.quote_price_range, p.price, p.unit, p.quantity,
      p.image_url, p.category, p.subcategory, p.brand, p.compare_at_price, p.is_featured_deal, JSON.stringify(p.images),
      JSON.stringify(p.specifications), JSON.stringify(p.bulk_pricing), JSON.stringify(p.available_cities), p.is_available, p.quality_tier, JSON.stringify(p.faqs),
      p.returns_policy, JSON.stringify(p.highlights), p.sku || oldProduct.sku, p.barcode || oldProduct.barcode, p.barcode_type,
      p.mpn, p.variant_id, p.keywords, p.product_url_slug || oldProduct.product_url_slug, p.extraction_notes,
      p.http_status, p.mrp, p.discount_percent, p.discount_amount, p.gst_percent,
      p.is_tax_inclusive, p.currency, p.weight, p.weight_unit, p.dimensions,
      p.measurement_unit, p.low_stock_threshold, p.stock_status, p.has_variants,
      p.status, p.is_archived, id,
    ];

    const result = await client.query(updateSql, values);

    // Sync Variants if provided
    if (p.has_variants && Array.isArray(p.variants)) {
      await client.query('DELETE FROM product_variants WHERE product_id = $1', [id]);
      for (let i = 0; i < p.variants.length; i++) {
        const v = p.variants[i];
        const vCode = v.variant_code || `MTB-VAR-${String(id).padStart(4, '0')}-${String(i + 1).padStart(2, '0')}`;
        const vSku = v.sku || `${p.sku || oldProduct.sku}-V${i + 1}`;
        await client.query(`
          INSERT INTO product_variants (
            product_id, variant_code, name, sku, barcode, mpn, size, color, material,
            attributes, image_url, mrp, price, quantity, stock_status, weight, is_active
          ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10::jsonb, $11, $12, $13, $14, $15, $16, $17)
        `, [
          id, vCode, v.name || `${p.name} - ${v.size || v.color || `V${i + 1}`}`,
          vSku, v.barcode || null, v.mpn || null, v.size || null, v.color || null, v.material || null,
          JSON.stringify(v.attributes || {}), v.image_url || null, Number(v.mrp) || p.mrp,
          Number(v.price) || p.price, Number(v.quantity) || 0,
          computeStockStatus(v.quantity || 0, p.low_stock_threshold),
          Number(v.weight) || null, v.is_active !== false,
        ]);
      }
    }

    // Record Audit Log
    await recordProductAuditLog({
      clientOrPool: client,
      productId: id,
      action: 'update',
      previousValues: { price: oldProduct.price, quantity: oldProduct.quantity, mrp: oldProduct.mrp, sku: oldProduct.sku },
      newValues: { price: p.price, quantity: p.quantity, mrp: p.mrp, sku: p.sku },
      userId: adminUser.id,
      userRole: 'admin',
      userName: adminUser.name || 'Admin',
      notes: p.adjustment_reason || 'Product updated via Admin Panel',
    });

    await client.query('COMMIT');
    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('PUT admin shop-products error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not update product' }, { status: 500 });
  } finally {
    client.release();
  }
}

export async function DELETE(req) {
  const adminUser = requireRole(req, 'admin');
  if (!adminUser) return unauthorized();

  try {
    await ensureTable();
    const id = Number(new URL(req.url).searchParams.get('id'));
    if (!Number.isInteger(id) || id < 1) {
      return NextResponse.json({ success: false, error: 'Valid product ID required' }, { status: 400 });
    }

    // Soft Delete to maintain complete historical and order audit integrity
    const result = await pool.query(
      `UPDATE supplier_materials
       SET is_deleted = TRUE, is_available = FALSE, status = 'archived', updated_at = NOW()
       WHERE id = $1 AND is_deleted = FALSE
       RETURNING id, product_code, name`,
      [id]
    );

    if (!result.rows.length) {
      return NextResponse.json({ success: false, error: 'Product not found or already deleted' }, { status: 404 });
    }

    await recordProductAuditLog({
      clientOrPool: pool,
      productId: id,
      action: 'delete',
      previousValues: { is_deleted: false, is_available: true },
      newValues: { is_deleted: true, is_available: false },
      userId: adminUser.id,
      userRole: 'admin',
      userName: adminUser.name || 'Admin',
      notes: 'Product soft deleted by admin',
    });

    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, message: 'Product archived successfully' });
  } catch (error) {
    console.error('DELETE admin shop-products error:', error);
    return NextResponse.json({ success: false, error: 'Could not delete product' }, { status: 500 });
  }
}
