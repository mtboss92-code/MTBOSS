import pool from '@/lib/db';
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

export const MAX_IMPORT_ROWS = 500;

export const CSV_27_COLUMNS = [
  'Product Name',
  'Product ID',
  'SKU',
  'Barcode',
  'Brand',
  'Category',
  'Subcategory',
  'MRP',
  'Selling Price',
  'Discount',
  'Available Quantity Stock',
  'Stock Status',
  'Product Description',
  'Product Image URL',
  'Additional Image URLs',
  'Weight Size Unit',
  'GST Tax',
  'Product Specifications',
  'Product Variants',
  'Bulk Prices',
  'Keywords',
  'Product URL',
  'Currency',
  'MPN',
  'Variant ID',
  'HTTP Status',
  'Extraction Notes',
];

export const RELATED_CATEGORY_RULES = [
  { parent: 'Building Materials', match: /cement|brick|block|sand|aggregate|barjri|steel|iron|tile|marble|glass|pop|gypsum/ },
  { parent: 'Carpentry', match: /ply|wood|timber|mdf|hdhmr|laminate|veneer|carpentry/ },
  { parent: 'Plumbing', match: /plumb|pipe|cpvc|upvc|pvc|sanitary|bath|tap|faucet|tank|sink/ },
  { parent: 'Electrical', match: /electric|wire|cable|switch|socket|mcb|light|led|fan|conduit|router|cctv/ },
  { parent: 'Furniture & Architectural Hardware', match: /hardware|hinge|channel|handle|lock|wardrobe|kitchen system|saddle/ },
  { parent: 'Chemicals', match: /adhesive|fevicol|chemical|waterproof|grout|solvent|sealant|epoxy|laticrete|roff/ },
  { parent: 'Paints', match: /paint|primer|putty|enamel|emulsion|sanding/ },
];

export const ensureImportTables = createInitializationGuard(async () => {
  await pool.query(`CREATE SEQUENCE IF NOT EXISTS shop_product_code_seq START WITH 1;`);
  await pool.query(`ALTER TABLE supplier_materials
    ADD COLUMN IF NOT EXISTS stock_status VARCHAR(30) DEFAULT 'in_stock'`);
  await pool.query(QUALITY_TIER_COLUMN_SQL);
});

export const text = (value, max = 1000) => String(value ?? '').trim().slice(0, max);

export const number = (value) => {
  if (value === null || value === undefined || value === '') return null;
  const parsed = Number(String(value).replace(/[₹,\s]/g, ''));
  return Number.isFinite(parsed) ? parsed : null;
};

export const bool = (value) => ['true', 'yes', '1', 'active', 'visible'].includes(String(value ?? '').trim().toLowerCase());

export const pipeList = (value, max = 100) => text(value, 10000).split('|').map((item) => item.trim()).filter(Boolean).slice(0, max);

export function specifications(value) {
  const input = text(value, 10000);
  if (!input) return {};
  try {
    const parsed = JSON.parse(input);
    if (parsed && typeof parsed === 'object' && !Array.isArray(parsed)) return parsed;
  } catch { /* Key: Value syntax accepted */ }
  return Object.fromEntries(pipeList(input, 40).map((item) => {
    const divider = item.indexOf(':');
    return divider < 0 ? [item.slice(0, 100), 'Yes'] : [item.slice(0, divider).trim().slice(0, 100), item.slice(divider + 1).trim().slice(0, 500)];
  }).filter(([key, value]) => key && value));
}

export function bulkPricing(value) {
  return pipeList(value, 10).map((item) => {
    const [minimum, price] = item.split(/[:=-]/).map((part) => number(part));
    return Number.isInteger(minimum) && minimum >= 2 && price > 0 ? { min_quantity: minimum, price } : null;
  }).filter(Boolean).sort((a, b) => a.min_quantity - b.min_quantity);
}

export function parseVariantsList(value) {
  const input = text(value, 10000);
  if (!input) return [];
  try {
    const parsed = JSON.parse(input);
    if (Array.isArray(parsed)) return parsed;
  } catch {}
  // Pipe separated format: Red / XL : 500 : 10 | Blue / L : 450 : 5
  return pipeList(input, 20).map((item, idx) => {
    const parts = item.split(':').map((s) => s.trim());
    const name = parts[0] || `Variant ${idx + 1}`;
    const price = number(parts[1]) || 0;
    const qty = Math.max(0, Math.floor(number(parts[2]) || 0));
    return { name, price, quantity: qty };
  });
}

export function resolveCatalogPlacement(rawCategory, rawSubcategory, productName) {
  const sourceCategory = text(rawCategory, 200);
  const sourceSubcategory = text(rawSubcategory, 255);
  const matchingText = `${sourceCategory} ${productName}`.toLowerCase();
  const parentMatch = RELATED_CATEGORY_RULES.find((rule) => rule.match.test(matchingText));
  const knownParent = RELATED_CATEGORY_RULES.some((rule) => rule.parent.toLowerCase() === sourceCategory.toLowerCase());
  const categoryName = parentMatch?.parent || sourceCategory;
  const subcategory = sourceSubcategory || (parentMatch && !knownParent ? sourceCategory : 'General');
  return { categoryName, subcategory };
}

export async function findOrCreateCategory(client, name, unit, subcategory = '') {
  const existing = await client.query(
    `SELECT id, name, unit, COALESCE(subcategories, '[]'::jsonb) AS subcategories
     FROM shop_categories
     WHERE LOWER(TRIM(name)) = LOWER(TRIM($1))
     LIMIT 1`,
    [name]
  );
  if (existing.rows[0]) {
    const category = existing.rows[0];
    const current = Array.isArray(category.subcategories) ? category.subcategories : [];
    const hasSubcategory = current.some((item) => String(typeof item === 'object' ? item?.name || '' : item).trim().toLowerCase() === subcategory.toLowerCase());
    if (subcategory && !hasSubcategory) {
      const next = [...current, subcategory];
      await client.query('UPDATE shop_categories SET subcategories=$1::jsonb, updated_at=NOW() WHERE id=$2', [JSON.stringify(next), category.id]);
      category.subcategories = next;
    }
    return category;
  }
  const created = await client.query(
    `INSERT INTO shop_categories (name, unit, subcategories, is_active, sort_order)
     VALUES ($1, $2, $3::jsonb, TRUE, (SELECT COALESCE(MAX(sort_order), 0) + 1 FROM shop_categories))
     RETURNING id, name, unit, subcategories`,
    [name, unit || 'pcs', JSON.stringify(subcategory ? [subcategory] : [])]
  );
  return created.rows[0];
}

/**
 * Generate standard CSV template string with 27 headers and sample row
 */
export function generateCsvTemplate() {
  const header = CSV_27_COLUMNS.join(',');
  const sample = [
    '"Ultratech Super Cement"',
    '""', // Product ID (leave empty for auto-generation)
    '"MTB-CEM-0101"',
    '"8901234567890"',
    '"Ultratech"',
    '"Building Materials"',
    '"Cement"',
    '450.00',
    '390.00',
    '13.33',
    '500',
    '"in_stock"',
    '"High performance OPC 53 Grade Cement for robust construction."',
    '"https://images.unsplash.com/photo-1518709268805-4e9042af9f23"',
    '""',
    '"50 kg"',
    '18.00',
    '"Grade: OPC 53 | Pack: 50 Kg Bag"',
    '""',
    '"50:380 | 100:365"',
    '"cement, ultratech, opc53"',
    '""',
    '"INR"',
    '"UT-53-01"',
    '""',
    '"200"',
    '""',
  ].join(',');
  return `${header}\n${sample}\n`;
}

/**
 * Process a batch of product import rows.
 * Concurrency-safe, transactional, supports full 27-column standard.
 */
export async function executeBulkProductImport({
  client,
  rows,
  mode = 'create', // 'create' | 'update' | 'skip'
  role = 'admin',
  supplierId = 0,
  vendorId = null,
  userId = null,
  userName = 'Admin',
}) {
  const isSeller = role === 'vendor' || role === 'supplier';
  const result = { total: rows.length, created: 0, updated: 0, skipped: 0, errors: [] };

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index] || {};
    const rowNum = index + 2;

    // Normalizing column names from 27-column standard
    const name = text(row['Product Name'] || row.name || row.product_name, 255);
    const categoryName = text(row['Category'] || row.category || row.main_category, 200);
    const rawSubcategory = text(row['Subcategory'] || row.subcategory || row.sub_category || '', 255);
    const brand = text(row['Brand'] || row.brand, 120);

    const rawSellingPrice = number(row['Selling Price'] || row.selling_price || row.price);
    const rawMrp = number(row['MRP'] || row.mrp || row.compare_at_price || rawSellingPrice);
    const rawStock = number(row['Available Quantity Stock'] || row.quantity || row.stock || 0);

    // Row-level validations
    if (!name) {
      result.skipped += 1;
      result.errors.push({ row: rowNum, message: 'Product Name is missing' });
      continue;
    }
    if (!categoryName) {
      result.skipped += 1;
      result.errors.push({ row: rowNum, message: `Category missing for product '${name}'` });
      continue;
    }
    if (!(rawSellingPrice > 0)) {
      result.skipped += 1;
      result.errors.push({ row: rowNum, message: `Valid Selling Price (>0) required for '${name}'` });
      continue;
    }

    const price = rawSellingPrice;
    const mrp = rawMrp && rawMrp >= price ? rawMrp : price;
    const quantity = Math.max(0, Math.floor(rawStock ?? 0));
    const gstPercent = number(row['GST Tax'] || row.gst_percent) ?? 18.00;

    const pricing = calculatePricingAndGst({ mrp, sellingPrice: price, gstPercent, isTaxInclusive: true });

    // Inventory status & Weight
    const weightSizeUnit = text(row['Weight Size Unit'] || row.unit || 'pcs', 100);
    const stockStatus = text(row['Stock Status'] || row.stock_status) || computeStockStatus(quantity);

    // Identifiers
    const externalProductId = text(row['Product ID'] || row.product_code || row.product_id, 50);
    let sku = text(row['SKU'] || row.sku, 100);
    const barcode = text(row['Barcode'] || row.barcode, 100);
    const mpn = text(row['MPN'] || row.mpn, 100);
    const variantId = text(row['Variant ID'] || row.variant_id, 50);

    // Media
    const mainImg = text(row['Product Image URL'] || row.image_url, 1000);
    const addlImgs = pipeList(row['Additional Image URLs'] || row.images || '', 10);
    const images = Array.from(new Set([mainImg, ...addlImgs].filter(Boolean)));

    // Content
    const description = text(row['Product Description'] || row.description, 5000);
    const specs = { ...specifications(row['Product Specifications'] || row.specifications) };
    const bulkPricingTiers = bulkPricing(row['Bulk Prices'] || row.bulk_pricing);
    const keywords = text(row['Keywords'] || row.keywords, 1000);
    const productUrl = text(row['Product URL'] || row.product_url, 255);
    const httpStatus = text(row['HTTP Status'] || row.http_status || '200', 20);
    const extractionNotes = role === 'admin' ? text(row['Extraction Notes'] || row.extraction_notes, 2000) : '';

    const placement = resolveCatalogPlacement(categoryName, rawSubcategory, name);
    const category = await findOrCreateCategory(client, placement.categoryName, weightSizeUnit, placement.subcategory);

    // Seller vs Admin Approval logic
    let isAvailable = true;
    if (isSeller) {
      delete specs.__approval__;
      specs.__approval__ = { status: 'pending', created_at: new Date().toISOString() };
      isAvailable = false;
    } else {
      isAvailable = row.is_available === undefined || row.is_available === '' ? true : bool(row.is_available);
    }

    // Match existing product safely by SKU or Product ID or (Name + Brand)
    let matchSql = '';
    let matchParams = [];

    if (sku) {
      matchSql = `SELECT id, product_code, sku, quantity FROM supplier_materials WHERE LOWER(TRIM(sku)) = LOWER(TRIM($1)) AND is_deleted=FALSE LIMIT 1`;
      matchParams = [sku];
    } else if (externalProductId && externalProductId.startsWith('MTB-PROD-')) {
      matchSql = `SELECT id, product_code, sku, quantity FROM supplier_materials WHERE product_code = $1 AND is_deleted=FALSE LIMIT 1`;
      matchParams = [externalProductId];
    } else {
      matchSql = `SELECT id, product_code, sku, quantity FROM supplier_materials WHERE LOWER(TRIM(name)) = LOWER(TRIM($1)) AND LOWER(TRIM(COALESCE(brand,''))) = LOWER(TRIM($2)) AND is_deleted=FALSE LIMIT 1`;
      matchParams = [name, brand];
    }

    const matched = await client.query(matchSql, matchParams);

    // If product exists
    if (matched.rows.length > 0) {
      const existingProd = matched.rows[0];
      if (mode === 'skip' || mode === 'create') {
        result.skipped += 1;
        continue;
      }

      // Update existing product
      const oldQty = Number(existingProd.quantity || 0);
      await client.query(`
        UPDATE supplier_materials SET
          name=$1, description=$2, price=$3, mrp=$4, compare_at_price=$4,
          discount_percent=$5, discount_amount=$6, gst_percent=$7, quantity=$8,
          unit=$9, measurement_unit=$9, image_url=$10, images=$11::jsonb,
          category=$12, subcategory=$13, brand=$14, specifications=$15::jsonb,
          bulk_pricing=$16::jsonb, keywords=$17, barcode=COALESCE(NULLIF($18,''), barcode),
          mpn=COALESCE(NULLIF($19,''), mpn), extraction_notes=COALESCE(NULLIF($20,''), extraction_notes),
          http_status=$21, stock_status=$22, is_available=$23, updated_at=NOW()
        WHERE id=$24
      `, [
        name, description, price, mrp, pricing.discountPercent, pricing.discountAmount, gstPercent, quantity,
        weightSizeUnit, images[0] || '', JSON.stringify(images), category.name, placement.subcategory, brand,
        JSON.stringify(specs), JSON.stringify(bulkPricingTiers), keywords, barcode, mpn, extractionNotes,
        httpStatus, stockStatus, isAvailable, existingProd.id,
      ]);

      if (oldQty !== quantity) {
        await recordStockMovement({
          clientOrPool: client,
          productId: existingProd.id,
          changeType: quantity > oldQty ? 'adjustment_addition' : 'adjustment_reduction',
          quantityChange: quantity - oldQty,
          quantityBefore: oldQty,
          quantityAfter: quantity,
          reason: 'CSV Bulk Import Update',
          userId,
          userRole: role,
          userName,
        });
      }

      result.updated += 1;
    } else {
      // Create new product
      const productCode = await generateNextProductCode(client);
      if (!sku) {
        const seqNum = Number(productCode.replace(/\D/g, '')) || Math.floor(Math.random() * 9000 + 1000);
        sku = generateSku(category.name, seqNum);
      }
      const finalBarcode = barcode || generateInternalBarcode(productCode);

      const insertSupplierId = role === 'supplier' ? supplierId : 0;
      const insertVendorId = role === 'vendor' ? vendorId : null;

      const newInsert = await client.query(`
        INSERT INTO supplier_materials (
          supplier_id, vendor_id, name, description, price, mrp, compare_at_price,
          discount_percent, discount_amount, gst_percent, is_tax_inclusive, currency,
          quantity, unit, measurement_unit, image_url, images, category, subcategory,
          brand, specifications, bulk_pricing, keywords, product_code, sku, barcode,
          mpn, variant_id, extraction_notes, http_status, stock_status, is_available,
          product_url_slug, status
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $6,
          $7, $8, $9, TRUE, 'INR',
          $10, $11, $11, $12, $13::jsonb, $14, $15,
          $16, $17::jsonb, $18::jsonb, $19, $20, $21, $22,
          $23, $24, $25, $26, $27, $28,
          $29, $30
        ) RETURNING id
      `, [
        insertSupplierId, insertVendorId, name, description, price, mrp,
        pricing.discountPercent, pricing.discountAmount, gstPercent,
        quantity, weightSizeUnit, images[0] || '', JSON.stringify(images), category.name, placement.subcategory,
        brand, JSON.stringify(specs), JSON.stringify(bulkPricingTiers), keywords, productCode, sku, finalBarcode,
        mpn, variantId, extractionNotes, httpStatus, stockStatus, isAvailable,
        `${sku.toLowerCase()}-${Date.now()}`, isSeller ? 'pending_approval' : 'active',
      ]);

      const newId = newInsert.rows[0].id;

      if (quantity > 0) {
        await recordStockMovement({
          clientOrPool: client,
          productId: newId,
          changeType: 'initial_stock',
          quantityChange: quantity,
          quantityBefore: 0,
          quantityAfter: quantity,
          reason: 'CSV Bulk Import Initial Stock',
          userId,
          userRole: role,
          userName,
        });
      }

      result.created += 1;
    }
  }

  return result;
}

/**
 * Export products to 27-column CSV string
 */
export function exportProductsToCsv(products = []) {
  const header = CSV_27_COLUMNS.join(',');
  const escapeCsv = (val) => {
    if (val === null || val === undefined) return '""';
    const str = String(val).replace(/"/g, '""');
    return `"${str}"`;
  };

  const rows = products.map((p) => {
    const images = Array.isArray(p.images) ? p.images : [];
    const mainImg = p.image_url || images[0] || '';
    const addlImgs = images.filter((img) => img !== mainImg).join(' | ');

    let specsStr = '';
    if (p.specifications && typeof p.specifications === 'object') {
      specsStr = Object.entries(p.specifications)
        .filter(([k]) => k !== '__approval__')
        .map(([k, v]) => `${k}: ${v}`)
        .join(' | ');
    }

    let bulkStr = '';
    if (Array.isArray(p.bulk_pricing)) {
      bulkStr = p.bulk_pricing.map((b) => `${b.min_quantity}:${b.price}`).join(' | ');
    }

    return [
      escapeCsv(p.name),
      escapeCsv(p.product_code),
      escapeCsv(p.sku),
      escapeCsv(p.barcode),
      escapeCsv(p.brand),
      escapeCsv(p.category),
      escapeCsv(p.subcategory),
      Number(p.mrp || p.compare_at_price || p.price || 0).toFixed(2),
      Number(p.price || 0).toFixed(2),
      Number(p.discount_percent || 0).toFixed(2),
      p.quantity || 0,
      escapeCsv(p.stock_status || 'in_stock'),
      escapeCsv(p.description),
      escapeCsv(mainImg),
      escapeCsv(addlImgs),
      escapeCsv(p.measurement_unit || p.unit || 'pcs'),
      Number(p.gst_percent || 18.00).toFixed(2),
      escapeCsv(specsStr),
      escapeCsv(''), // variants
      escapeCsv(bulkStr),
      escapeCsv(p.keywords),
      escapeCsv(p.product_url_slug),
      escapeCsv(p.currency || 'INR'),
      escapeCsv(p.mpn),
      escapeCsv(p.variant_id),
      escapeCsv(p.http_status || '200'),
      escapeCsv(p.extraction_notes),
    ].join(',');
  });

  return [header, ...rows].join('\n');
}
