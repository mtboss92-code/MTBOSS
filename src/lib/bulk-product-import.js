import pool from '@/lib/db';
import { createInitializationGuard } from '@/lib/api-utils';
import { QUALITY_TIER_COLUMN_SQL, normalizeQualityTier } from '@/lib/quality-tier';

export const MAX_IMPORT_ROWS = 200;

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
  await pool.query(`CREATE TABLE IF NOT EXISTS shop_categories (
    id SERIAL PRIMARY KEY, name VARCHAR(200) NOT NULL, image TEXT,
    emoji VARCHAR(20) DEFAULT '🛒', label VARCHAR(100) DEFAULT '',
    label_color VARCHAR(50) DEFAULT 'yellow', price_range VARCHAR(100) DEFAULT '',
    unit VARCHAR(100) DEFAULT 'pcs', sort_order INTEGER DEFAULT 0,
    is_active BOOLEAN DEFAULT TRUE, subcategories JSONB DEFAULT '[]'::jsonb,
    created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW()
  )`);
  await pool.query(`ALTER TABLE shop_categories ADD COLUMN IF NOT EXISTS subcategories JSONB DEFAULT '[]'::jsonb`);
  await pool.query(`CREATE TABLE IF NOT EXISTS supplier_materials (
    id SERIAL PRIMARY KEY, supplier_id INTEGER NOT NULL, vendor_id INTEGER,
    name VARCHAR(255) NOT NULL, description TEXT, quote_price_range VARCHAR(100),
    price NUMERIC(10,2), unit VARCHAR(100), quantity INTEGER DEFAULT 0,
    image_url TEXT, category VARCHAR(255), subcategory VARCHAR(255), brand VARCHAR(120),
    compare_at_price NUMERIC(10,2), is_featured_deal BOOLEAN DEFAULT FALSE,
    images JSONB DEFAULT '[]'::jsonb, specifications JSONB DEFAULT '{}'::jsonb,
    bulk_pricing JSONB DEFAULT '[]'::jsonb, available_cities JSONB DEFAULT '[]'::jsonb,
    is_available BOOLEAN DEFAULT TRUE, created_at TIMESTAMP DEFAULT NOW(), updated_at TIMESTAMP DEFAULT NOW()
  )`);
  await pool.query(`ALTER TABLE supplier_materials
    ADD COLUMN IF NOT EXISTS vendor_id INTEGER,
    ADD COLUMN IF NOT EXISTS subcategory VARCHAR(255),
    ADD COLUMN IF NOT EXISTS brand VARCHAR(120),
    ADD COLUMN IF NOT EXISTS quote_price_range VARCHAR(100),
    ADD COLUMN IF NOT EXISTS compare_at_price NUMERIC(10,2),
    ADD COLUMN IF NOT EXISTS is_featured_deal BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS specifications JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS bulk_pricing JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS available_cities JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS returns_policy TEXT,
    ADD COLUMN IF NOT EXISTS highlights JSONB DEFAULT '[]'::jsonb`);
  await pool.query(QUALITY_TIER_COLUMN_SQL);
  await pool.query('CREATE INDEX IF NOT EXISTS supplier_materials_vendor_id_idx ON supplier_materials(vendor_id)');
  await pool.query('CREATE INDEX IF NOT EXISTS supplier_materials_supplier_id_idx ON supplier_materials(supplier_id)');
});

export const text = (value, max = 1000) => String(value ?? '').trim().slice(0, max);

export const number = (value) => {
  const parsed = Number(String(value ?? '').replace(/[₹,\s]/g, ''));
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
  return Object.fromEntries(pipeList(input, 20).map((item) => {
    const divider = item.indexOf(':');
    return divider < 0 ? [item.slice(0, 100), 'Yes'] : [item.slice(0, divider).trim().slice(0, 100), item.slice(divider + 1).trim().slice(0, 500)];
  }).filter(([key, value]) => key && value));
}

export function productSpecifications(row) {
  const result = { ...specifications(row.specifications) };
  const attributeColumns = [
    ['grade', 'Grade'], ['type', 'Type'], ['pack_size', 'PackSize'], ['thickness', 'Thickness'],
    ['size', 'Size'], ['material', 'Material'], ['color', 'Colors'],
  ];
  attributeColumns.forEach(([column, label]) => {
    const value = text(row[column], 500);
    if (value) result[label] = value;
  });
  return result;
}

export function bulkPricing(value) {
  return pipeList(value, 10).map((item) => {
    const [minimum, price] = item.split(/[:=-]/).map((part) => number(part));
    return Number.isInteger(minimum) && minimum >= 2 && price > 0 ? { min_quantity: minimum, price } : null;
  }).filter(Boolean).sort((a, b) => a.min_quantity - b.min_quantity);
}

export function faqs(value) {
  const input = text(value, 20000);
  if (!input) return [];
  try {
    const parsed = JSON.parse(input);
    if (Array.isArray(parsed)) return parsed
      .map((item) => ({ q: text(item?.q || item?.question, 500), a: text(item?.a || item?.answer, 2000) }))
      .filter((item) => item.q && item.a).slice(0, 20);
  } catch { /* Q::A format supported */ }
  return pipeList(input, 20).map((item) => {
    const divider = item.indexOf('::');
    return divider < 0 ? null : { q: text(item.slice(0, divider), 500), a: text(item.slice(divider + 2), 2000) };
  }).filter((item) => item?.q && item?.a);
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
 * Process a batch of product import rows.
 * @param {Object} options
 * @param {import('pg').PoolClient} options.client Database client in a transaction
 * @param {Array<Object>} options.rows Raw product rows from CSV
 * @param {'create'|'update'} options.mode Duplicate mode
 * @param {'admin'|'supplier'|'vendor'} options.role Uploader role
 * @param {number} [options.supplierId=0] Supplier ID (if role === 'supplier')
 * @param {number|null} [options.vendorId=null] Vendor ID (if vendor or linked vendor)
 */
export async function executeBulkProductImport({
  client,
  rows,
  mode = 'create',
  role = 'admin',
  supplierId = 0,
  vendorId = null,
}) {
  const isSeller = role === 'vendor' || role === 'supplier';
  const result = { created: 0, updated: 0, skipped: 0, errors: [] };

  for (let index = 0; index < rows.length; index += 1) {
    const row = rows[index] || {};
    const name = text(row.name || row.product_name, 255);
    const categoryName = text(row.category || row.main_category || row.category_name, 200);
    const rawSubcategory = text(
      row.subcategory || row.sub_category || row.sub_cat || row['sub category'] || row['sub-category'] || row['subcategory_name'] || '',
      255
    );
    const price = number(row.price || row.selling_price);

    if (!name || !categoryName || !(price > 0)) {
      result.skipped += 1;
      result.errors.push({
        row: index + 2,
        message: 'Product name, category and a positive price are required',
      });
      continue;
    }

    const quantity = Math.max(0, Math.floor(number(row.quantity ?? row.stock) ?? 0));
    const placement = resolveCatalogPlacement(categoryName, rawSubcategory, name);
    const category = await findOrCreateCategory(client, placement.categoryName, text(row.unit, 100) || 'pcs', placement.subcategory);
    const tier = normalizeQualityTier(row.quality_tier || row.quality || 'all') || 'all';
    const images = pipeList(row.images || row.image_urls || row.image_url, 8).filter((url) => url.length <= 1000);
    const compareAt = number(row.compare_at_price || row.mrp || row.original_price);
    const brand = text(row.brand, 120);

    // Vendor and Supplier products ALWAYS require admin approval (is_available = false)
    let isAvailable = false;
    const specs = productSpecifications(row);

    if (isSeller) {
      delete specs.__approval__;
      specs.__approval__ = {
        status: 'pending',
        created_at: new Date().toISOString(),
      };
      isAvailable = false;
    } else {
      isAvailable = row.is_available === undefined || row.is_available === '' ? true : bool(row.is_available);
    }

    const fields = [
      name,
      text(row.description, 2000),
      text(row.quote_price_range, 100) || null,
      price,
      text(row.unit, 100) || category.unit || 'pcs',
      quantity,
      images[0] || '',
      category.name,
      placement.subcategory,
      brand,
      compareAt && compareAt >= 0 ? compareAt : null,
      bool(row.is_featured_deal || row.featured),
      JSON.stringify(images),
      JSON.stringify(specs),
      JSON.stringify(bulkPricing(row.bulk_pricing || row.bulk_prices)),
      JSON.stringify(pipeList(row.available_cities || row.cities)),
      isAvailable,
      tier,
      JSON.stringify(faqs(row.faqs)),
      text(row.returns_policy || row.return_policy, 3000),
      JSON.stringify(pipeList(row.highlights, 20)),
    ];

    // Check duplicate strictly scoped to this owner
    let duplicateQuery = '';
    let duplicateParams = [];

    if (role === 'supplier') {
      duplicateQuery = `
        SELECT id FROM supplier_materials
        WHERE supplier_id = $1
          AND LOWER(TRIM(name)) = LOWER(TRIM($2))
          AND LOWER(TRIM(COALESCE(brand, ''))) = LOWER(TRIM($3))
        LIMIT 1`;
      duplicateParams = [supplierId, name, brand];
    } else if (role === 'vendor') {
      duplicateQuery = `
        SELECT id FROM supplier_materials
        WHERE vendor_id = $1
          AND LOWER(TRIM(name)) = LOWER(TRIM($2))
          AND LOWER(TRIM(COALESCE(brand, ''))) = LOWER(TRIM($3))
        LIMIT 1`;
      duplicateParams = [vendorId, name, brand];
    } else {
      // Admin owns products where supplier_id = 0 AND vendor_id IS NULL
      duplicateQuery = `
        SELECT id FROM supplier_materials
        WHERE supplier_id = 0 AND (vendor_id IS NULL OR vendor_id = 0)
          AND LOWER(TRIM(name)) = LOWER(TRIM($1))
          AND LOWER(TRIM(COALESCE(brand, ''))) = LOWER(TRIM($2))
        LIMIT 1`;
      duplicateParams = [name, brand];
    }

    const duplicate = await client.query(duplicateQuery, duplicateParams);

    if (duplicate.rows[0] && mode !== 'update') {
      result.skipped += 1;
      result.errors.push({ row: index + 2, message: `Duplicate: ${name} (already exists)` });
      continue;
    }

    if (duplicate.rows[0]) {
      await client.query(
        `UPDATE supplier_materials SET
          name=$1, description=$2, quote_price_range=$3, price=$4,
          unit=$5, quantity=$6, image_url=$7, category=$8, subcategory=$9, brand=$10, compare_at_price=$11,
          is_featured_deal=$12, images=$13::jsonb, specifications=$14::jsonb, bulk_pricing=$15::jsonb,
          available_cities=$16::jsonb, is_available=$17, quality_tier=$18, faqs=$19::jsonb, returns_policy=$20,
          highlights=$21::jsonb, updated_at=NOW()
         WHERE id=$22`,
        [...fields, duplicate.rows[0].id]
      );
      result.updated += 1;
    } else {
      const insertSupplierId = role === 'supplier' ? supplierId : 0;
      const insertVendorId = role === 'vendor' ? vendorId : role === 'supplier' ? vendorId : null;

      await client.query(
        `INSERT INTO supplier_materials (
          supplier_id, vendor_id, name, description, quote_price_range, price,
          unit, quantity, image_url, category, subcategory, brand, compare_at_price, is_featured_deal, images,
          specifications, bulk_pricing, available_cities, is_available, quality_tier, faqs, returns_policy, highlights
        ) VALUES (
          $1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15::jsonb,
          $16::jsonb, $17::jsonb, $18::jsonb, $19, $20, $21::jsonb, $22, $23::jsonb
        )`,
        [insertSupplierId, insertVendorId, ...fields]
      );
      result.created += 1;
    }
  }

  return result;
}

