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
import { recordStockMovement } from '@/lib/stock-movements';

const ensureTable = createInitializationGuard(async () => {
  await pool.query(`CREATE SEQUENCE IF NOT EXISTS shop_product_code_seq START WITH 1;`);
  await pool.query(QUALITY_TIER_COLUMN_SQL);
});

const unauthorized = () => NextResponse.json({ success: false, error: 'Vendor access required' }, { status: 401 });

async function getActiveVendor(req) {
  const decoded = requireRole(req, 'vendor');
  if (!decoded) return null;
  const result = await pool.query(
    `SELECT id, name FROM vendors
     WHERE id=$1 AND is_approved=TRUE AND status='active'
     LIMIT 1`,
    [decoded.id]
  );
  return result.rows[0] || null;
}

async function validProduct(body) {
  const name = String(body.name || '').trim();
  const category = String(body.category || '').trim();
  if (!name || name.length > 255 || !category) return { error: 'Product name and category are required' };

  const categoryResult = await pool.query(
    `SELECT name, unit FROM shop_categories
     WHERE LOWER(TRIM(name))=LOWER(TRIM($1)) AND is_active=TRUE
     LIMIT 1`,
    [category]
  );
  if (!categoryResult.rows.length) return { error: 'Choose an active Shop Now category' };
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

  const rawSellingPrice = body.selling_price !== undefined && body.selling_price !== ''
    ? Number(body.selling_price)
    : (body.price === '' || body.price == null ? null : Number(body.price));

  if (rawSellingPrice === null || !Number.isFinite(rawSellingPrice) || rawSellingPrice <= 0 || rawSellingPrice > 99999999.99) {
    return { error: 'Buy Now fixed price is required and must be a positive number' };
  }

  const rawMrp = body.mrp !== undefined && body.mrp !== ''
    ? Number(body.mrp)
    : (body.compare_at_price === '' || body.compare_at_price == null ? rawSellingPrice : Number(body.compare_at_price));

  if (!Number.isFinite(rawMrp) || rawMrp < 0 || rawMrp > 99999999.99) {
    return { error: 'Enter a valid original price / MRP' };
  }

  const quantity = Number(body.quantity ?? 0);
  if (!Number.isInteger(quantity) || quantity < 0 || quantity > 100000000) {
    return { error: 'Quantity must be a non-negative whole number' };
  }

  const gstPercent = body.gst_percent !== undefined && body.gst_percent !== '' ? Number(body.gst_percent) : 18;
  const isTaxInclusive = body.is_tax_inclusive !== false;
  const pricing = calculatePricingAndGst({ mrp: rawMrp, sellingPrice: rawSellingPrice, gstPercent, isTaxInclusive });

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

  if (images.length > 15 || images.some((url) => typeof url !== 'string' || url.length > 1000)) return { error: 'Add up to 15 image URLs' };
  if (Object.keys(specifications).length > 40) return { error: 'Add up to 40 specifications' };
  if (bulkPricing.length > 10 || bulkPricing.some((tier) => !Number.isInteger(Number(tier.min_quantity)) || Number(tier.min_quantity) < 2 || !Number.isFinite(Number(tier.price)) || Number(tier.price) <= 0)) {
    return { error: 'Bulk tiers need a minimum quantity (>=2) and positive price' };
  }

  const faqs = Array.isArray(body.faqs)
    ? body.faqs
        .map((f) => ({ q: String(f?.q || f?.question || '').trim().slice(0, 500), a: String(f?.a || f?.answer || '').trim().slice(0, 2000) }))
        .filter((f) => f.q && f.a)
    : [];

  const highlights = Array.isArray(body.highlights)
    ? body.highlights
        .map((h) => String(typeof h === 'object' && h !== null ? (h.val || h.label || '') : h).trim().slice(0, 300))
        .filter(Boolean)
    : [];

  const returnsPolicy = String(body.returns_policy || '').trim().slice(0, 3000);
  const lowStockThreshold = Number.isInteger(Number(body.low_stock_threshold)) ? Math.max(0, Number(body.low_stock_threshold)) : 5;
  const stockStatus = computeStockStatus(quantity, lowStockThreshold);

  return {
    value: {
      name,
      category: categoryResult.rows[0].name,
      subcategory: String(body.subcategory || '').trim().slice(0, 255),
      description: String(body.description || '').trim().slice(0, 5000),
      quote_price_range: normalizedQuoteRange,
      price: rawSellingPrice,
      compare_at_price: rawMrp,
      mrp: rawMrp,
      discount_percent: pricing.discountPercent,
      discount_amount: pricing.discountAmount,
      gst_percent: pricing.gstPercent,
      is_tax_inclusive: pricing.isTaxInclusive,
      currency: 'INR',
      unit: String(body.unit || categoryResult.rows[0].unit || 'pcs').trim().slice(0, 100),
      measurement_unit: String(body.measurement_unit || body.unit || categoryResult.rows[0].unit || 'pcs').trim().slice(0, 50),
      quantity,
      low_stock_threshold: lowStockThreshold,
      stock_status: stockStatus,
      weight: body.weight !== undefined && body.weight !== '' ? Number(body.weight) : null,
      weight_unit: String(body.weight_unit || 'kg').trim().slice(0, 20),
      dimensions: String(body.dimensions || '').trim().slice(0, 100),
      image_url: String(body.image_url || images[0] || '').trim().slice(0, 1000),
      brand: String(body.brand || '').trim().slice(0, 120),
      sku: String(body.sku || '').trim().slice(0, 100),
      barcode,
      barcode_type: barcodeType,
      mpn: String(body.mpn || '').trim().slice(0, 100),
      variant_id: String(body.variant_id || '').trim().slice(0, 50),
      keywords: String(body.keywords || '').trim(),
      images: images.map((url) => String(url).trim()).filter(Boolean),
      specifications,
      bulk_pricing: bulkPricing.map((tier) => ({ min_quantity: Number(tier.min_quantity), price: Number(tier.price) })).sort((a, b) => a.min_quantity - b.min_quantity),
      available_cities: [...new Set(availableCities.map((city) => String(city).trim()).filter(Boolean))],
      quality_tier: qualityTier,
      has_variants: Boolean(body.has_variants) || variants.length > 0,
      variants,
      faqs,
      returns_policy: returnsPolicy,
      highlights,
      adjustment_reason: String(body.adjustment_reason || '').trim(),
    },
  };
}

export async function GET(req) {
  try {
    await ensureTable();
    const vendor = await getActiveVendor(req);
    if (!vendor) return unauthorized();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (id) {
      const one = await pool.query(
        `SELECT id, supplier_id, vendor_id, name, description, quote_price_range, price, unit,
                quantity, image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images, specifications,
                bulk_pricing, available_cities, is_available, quality_tier,
                product_code, sku, barcode, barcode_type, mpn, variant_id, keywords, product_url_slug,
                mrp, discount_percent, discount_amount, gst_percent, is_tax_inclusive, currency,
                weight, dimensions, measurement_unit, low_stock_threshold, stock_status, has_variants, status,
                COALESCE(faqs, '[]'::jsonb) AS faqs, returns_policy, COALESCE(highlights, '[]'::jsonb) AS highlights, created_at
         FROM supplier_materials
         WHERE id=$1 AND vendor_id=$2 AND is_deleted=FALSE`,
        [id, vendor.id]
      );
      if (!one.rows.length) return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      const product = one.rows[0];

      const variants = await pool.query('SELECT * FROM product_variants WHERE product_id = $1 ORDER BY id ASC', [id]);
      product.variants = variants.rows;

      return NextResponse.json({ success: true, data: product });
    }

    const result = await pool.query(
      `SELECT id, supplier_id, vendor_id, name, description, quote_price_range, price, unit,
              quantity, image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images, specifications,
              bulk_pricing, available_cities, is_available, quality_tier,
              product_code, sku, barcode, barcode_type, mpn, variant_id, keywords, product_url_slug,
              mrp, discount_percent, discount_amount, gst_percent, is_tax_inclusive, currency,
              weight, dimensions, measurement_unit, low_stock_threshold, stock_status, has_variants, status,
              COALESCE(faqs, '[]'::jsonb) AS faqs, returns_policy, COALESCE(highlights, '[]'::jsonb) AS highlights, created_at
       FROM supplier_materials
       WHERE vendor_id=$1 AND is_deleted=FALSE
       ORDER BY created_at DESC, id DESC`,
      [vendor.id]
    );
    return NextResponse.json({ success: true, data: result.rows });
  } catch (error) {
    console.error('GET vendor shop-products error:', error);
    return NextResponse.json({ success: false, error: 'Could not load products' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await ensureTable();
    const vendor = await getActiveVendor(req);
    if (!vendor) return unauthorized();

    const client = await pool.connect();
    try {
      const parsed = await validProduct(await req.json());
      if (parsed.error) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
      const p = parsed.value;

      await client.query('BEGIN');

      const productCode = await generateNextProductCode(client);
      let sku = p.sku;
      if (!sku) {
        const seqNum = Number(productCode.replace(/\D/g, '')) || Math.floor(Math.random() * 9000 + 1000);
        sku = generateSku(p.category, seqNum);
      }
      const isUnique = await isSkuUnique(client, sku);
      if (!isUnique) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: `SKU '${sku}' is already taken.` }, { status: 400 });
      }

      const barcode = p.barcode || generateInternalBarcode(productCode);

      // Clean specifications and attach approval tag
      const cleanSpecs = { ...(p.specifications || {}) };
      delete cleanSpecs.__approval__;
      cleanSpecs.__approval__ = {
        status: 'pending',
        created_at: new Date().toISOString(),
        submitted_by: 'vendor',
      };

      const result = await client.query(
        `INSERT INTO supplier_materials (
          supplier_id, vendor_id, name, description, quote_price_range, price, unit, quantity,
          image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images,
          specifications, bulk_pricing, available_cities, is_available, quality_tier, faqs,
          returns_policy, highlights, product_code, sku, barcode, barcode_type, mpn, variant_id,
          keywords, mrp, discount_percent, discount_amount, gst_percent, is_tax_inclusive, currency,
          weight, weight_unit, dimensions, measurement_unit, low_stock_threshold, stock_status,
          has_variants, status
        ) VALUES (
          0, $1, $2, $3, $4, $5, $6, $7,
          $8, $9, $10, $11, $12, FALSE, $13::jsonb,
          $14::jsonb, $15::jsonb, $16::jsonb, FALSE, $17, $18::jsonb,
          $19, $20::jsonb, $21, $22, $23, $24, $25, $26,
          $27, $28, $29, $30, $31, $32, $33,
          $34, $35, $36, $37, $38, $39,
          $40, 'pending_approval'
        ) RETURNING *`,
        [
          vendor.id, p.name, p.description, p.quote_price_range, p.price, p.unit, p.quantity,
          p.image_url, p.category, p.subcategory, p.brand, p.compare_at_price, JSON.stringify(p.images),
          JSON.stringify(cleanSpecs), JSON.stringify(p.bulk_pricing), JSON.stringify(p.available_cities), p.quality_tier, JSON.stringify(p.faqs),
          p.returns_policy, JSON.stringify(p.highlights), productCode, sku, barcode, p.barcode_type, p.mpn, p.variant_id,
          p.keywords, p.mrp, p.discount_percent, p.discount_amount, p.gst_percent, p.is_tax_inclusive, p.currency,
          p.weight, p.weight_unit, p.dimensions, p.measurement_unit, p.low_stock_threshold, p.stock_status,
          p.has_variants,
        ]
      );

      const newProduct = result.rows[0];
      const productId = newProduct.id;

      // Variants
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

      // Record Initial Stock
      if (p.quantity > 0) {
        await recordStockMovement({
          clientOrPool: client,
          productId,
          changeType: 'initial_stock',
          quantityChange: p.quantity,
          quantityBefore: 0,
          quantityAfter: p.quantity,
          reason: p.adjustment_reason || 'Initial Vendor Stock Submission',
          userId: vendor.id,
          userRole: 'vendor',
          userName: vendor.name || 'Vendor',
        });
      }

      await client.query('COMMIT');
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: newProduct, pending_approval: true }, { status: 201 });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('POST vendor shop-products error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not add product' }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    await ensureTable();
    const vendor = await getActiveVendor(req);
    if (!vendor) return unauthorized();

    const client = await pool.connect();
    try {
      const body = await req.json();
      const id = Number(body.id);
      if (!Number.isInteger(id) || id < 1) return NextResponse.json({ success: false, error: 'Valid product ID required' }, { status: 400 });

      const existingRes = await client.query(
        `SELECT * FROM supplier_materials WHERE id=$1 AND vendor_id=$2 AND is_deleted=FALSE`,
        [id, vendor.id]
      );
      if (!existingRes.rows.length) return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
      const oldProduct = existingRes.rows[0];

      const parsed = await validProduct(body);
      if (parsed.error) return NextResponse.json({ success: false, error: parsed.error }, { status: 400 });
      const p = parsed.value;

      await client.query('BEGIN');

      // Check SKU uniqueness if changed
      if (p.sku && p.sku !== oldProduct.sku) {
        const isUnique = await isSkuUnique(client, p.sku, id);
        if (!isUnique) {
          await client.query('ROLLBACK');
          return NextResponse.json({ success: false, error: `SKU '${p.sku}' is already taken.` }, { status: 400 });
        }
      }

      // Stock adjustment tracking
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
          reason: p.adjustment_reason || 'Vendor Stock Adjustment',
          userId: vendor.id,
          userRole: 'vendor',
          userName: vendor.name || 'Vendor',
        });
      }

      // Check if price/core info changed to determine if re-approval is needed
      const priceChanged = Number(p.price) !== Number(oldProduct.price);
      const categoryChanged = p.category !== oldProduct.category;
      const requiresReapproval = priceChanged || categoryChanged;

      const cleanSpecs = { ...(p.specifications || {}) };
      if (requiresReapproval) {
        delete cleanSpecs.__approval__;
        cleanSpecs.__approval__ = {
          status: 'pending',
          updated_at: new Date().toISOString(),
          reason: priceChanged ? 'Price updated by vendor' : 'Category updated by vendor',
        };
      }

      const updateSql = `
        UPDATE supplier_materials SET
          name = $1, description = $2, quote_price_range = $3, price = $4, unit = $5, quantity = $6,
          image_url = $7, category = $8, subcategory = $9, brand = $10, compare_at_price = $11,
          images = $12::jsonb, specifications = $13::jsonb, bulk_pricing = $14::jsonb,
          available_cities = $15::jsonb, quality_tier = $16, faqs = $17::jsonb, returns_policy = $18,
          highlights = $19::jsonb, sku = $20, barcode = $21, barcode_type = $22, mpn = $23,
          keywords = $24, mrp = $25, discount_percent = $26, discount_amount = $27, gst_percent = $28,
          is_tax_inclusive = $29, currency = $30, weight = $31, weight_unit = $32, dimensions = $33,
          measurement_unit = $34, low_stock_threshold = $35, stock_status = $36, has_variants = $37,
          is_available = CASE WHEN $38 = TRUE THEN FALSE ELSE is_available END,
          status = CASE WHEN $38 = TRUE THEN 'pending_approval' ELSE status END,
          updated_at = NOW()
        WHERE id = $39 AND vendor_id = $40
        RETURNING *
      `;

      const values = [
        p.name, p.description, p.quote_price_range, p.price, p.unit, p.quantity,
        p.image_url, p.category, p.subcategory, p.brand, p.compare_at_price,
        JSON.stringify(p.images), JSON.stringify(cleanSpecs), JSON.stringify(p.bulk_pricing),
        JSON.stringify(p.available_cities), p.quality_tier, JSON.stringify(p.faqs), p.returns_policy,
        JSON.stringify(p.highlights), p.sku || oldProduct.sku, p.barcode || oldProduct.barcode, p.barcode_type,
        p.mpn, p.keywords, p.mrp, p.discount_percent, p.discount_amount, p.gst_percent,
        p.is_tax_inclusive, p.currency, p.weight, p.weight_unit, p.dimensions,
        p.measurement_unit, p.low_stock_threshold, p.stock_status, p.has_variants,
        requiresReapproval, id, vendor.id,
      ];

      const result = await client.query(updateSql, values);

      // Sync Variants
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

      await client.query('COMMIT');
      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({
        success: true,
        data: result.rows[0],
        resubmitted_for_approval: requiresReapproval,
      });
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('PUT vendor shop-products error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not update product' }, { status: 500 });
  }
}

export async function DELETE(req) {
  try {
    await ensureTable();
    const vendor = await getActiveVendor(req);
    if (!vendor) return unauthorized();

    const id = Number(new URL(req.url).searchParams.get('id'));
    if (!Number.isInteger(id) || id < 1) return NextResponse.json({ success: false, error: 'Valid product ID required' }, { status: 400 });

    const result = await pool.query(
      `UPDATE supplier_materials
       SET is_deleted = TRUE, is_available = FALSE, status = 'archived', updated_at = NOW()
       WHERE id = $1 AND vendor_id = $2 AND is_deleted = FALSE
       RETURNING id`,
      [id, vendor.id]
    );

    if (!result.rows.length) return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, message: 'Product archived successfully' });
  } catch (error) {
    console.error('DELETE vendor shop-products error:', error);
    return NextResponse.json({ success: false, error: 'Could not delete product' }, { status: 500 });
  }
}
