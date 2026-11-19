import fs from 'fs';
import path from 'path';
import pool from '../src/lib/db.js';

async function runMigration() {
  console.log('🚀 Starting Complete Product Management System Migration & Backfill...');
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // 1. Execute SQL schema changes
    const sqlPath = path.resolve(process.cwd(), 'database/migrations/20261118_complete_product_management_system.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    await client.query(sql);
    console.log('✅ Schema migration executed successfully.');

    // 2. Sync shop_product_code_seq with current MAX(id)
    const maxRes = await client.query('SELECT COALESCE(MAX(id), 0) AS max_id FROM supplier_materials');
    const maxId = Number(maxRes.rows[0]?.max_id || 0);
    const nextSeq = Math.max(maxId + 1, 100);
    await client.query(`SELECT setval('shop_product_code_seq', $1, false)`, [nextSeq]);
    console.log(`✅ Product ID sequence initialized to ${nextSeq}.`);

    // 3. Fetch all existing products that need backfilling
    const existing = await client.query(`
      SELECT id, name, category, brand, price, compare_at_price, quantity, unit,
             product_code, sku, mrp, stock_status, status
      FROM supplier_materials
      ORDER BY id ASC
    `);

    console.log(`📦 Found ${existing.rows.length} existing products in catalog. Starting backfill...`);

    let backfilledCount = 0;
    for (const p of existing.rows) {
      const pId = p.id;
      const productCode = p.product_code || `MTB-PROD-${String(pId).padStart(6, '0')}`;

      // Clean category code for SKU
      const rawCat = String(p.category || 'GEN').replace(/[^a-zA-Z]/g, '').toUpperCase();
      const catCode = (rawCat.slice(0, 4) || 'PROD').padEnd(4, 'X');
      const sku = p.sku || `MTB-${catCode}-${String(pId).padStart(4, '0')}`;

      // Pricing & Discount
      const priceNum = Number(p.price || 0);
      const compareNum = Number(p.compare_at_price || 0);
      const mrpNum = Number(p.mrp || (compareNum > 0 ? compareNum : priceNum));
      let discountPercent = 0;
      let discountAmount = 0;
      if (mrpNum > priceNum && mrpNum > 0) {
        discountPercent = Math.round(((mrpNum - priceNum) / mrpNum) * 10000) / 100;
        discountAmount = Math.round((mrpNum - priceNum) * 100) / 100;
      }

      // Stock status
      const qty = Number(p.quantity || 0);
      let stockStatus = 'in_stock';
      if (qty <= 0) stockStatus = 'out_of_stock';
      else if (qty <= 5) stockStatus = 'low_stock';

      // Barcode generation (Code-128 internal code)
      const barcode = p.barcode || productCode.replace(/-/g, '');

      // Slug
      const cleanSlug = String(p.name || `product-${pId}`)
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/^-+|-+$/g, '')
        .slice(0, 100) + `-${pId}`;

      await client.query(`
        UPDATE supplier_materials
        SET product_code = COALESCE(product_code, $1),
            sku = COALESCE(sku, $2),
            barcode = COALESCE(barcode, $3),
            barcode_type = COALESCE(barcode_type, 'CODE128'),
            mrp = COALESCE(mrp, $4),
            discount_percent = COALESCE(discount_percent, $5),
            discount_amount = COALESCE(discount_amount, $6),
            gst_percent = COALESCE(gst_percent, 18.00),
            is_tax_inclusive = COALESCE(is_tax_inclusive, TRUE),
            currency = COALESCE(currency, 'INR'),
            measurement_unit = COALESCE(measurement_unit, unit, 'pcs'),
            stock_status = COALESCE(stock_status, $7),
            status = COALESCE(status, 'active'),
            product_url_slug = COALESCE(product_url_slug, $8),
            low_stock_threshold = COALESCE(low_stock_threshold, 5)
        WHERE id = $9
      `, [productCode, sku, barcode, mrpNum, discountPercent, discountAmount, stockStatus, cleanSlug, pId]);

      // Seed initial stock movement if not present
      const movementExists = await client.query(
        'SELECT 1 FROM stock_movements WHERE product_id = $1 LIMIT 1',
        [pId]
      );
      if (!movementExists.rows.length) {
        await client.query(`
          INSERT INTO stock_movements (
            product_id, change_type, quantity_change, quantity_before, quantity_after,
            reason, performed_by_id, performed_by_role, performed_by_name, created_at
          ) VALUES ($1, 'initial_stock', $2, 0, $2, 'Legacy Catalog Opening Stock Backfill', 0, 'system', 'System Migration', NOW())
        `, [pId, qty]);
      }

      backfilledCount++;
    }

    await client.query('COMMIT');
    console.log(`🎉 Successfully backfilled all ${backfilledCount} products with complete identifiers, pricing, and stock history!`);
  } catch (err) {
    await client.query('ROLLBACK');
    console.error('❌ Migration failed:', err);
    throw err;
  } finally {
    client.release();
    process.exit(0);
  }
}

runMigration().catch((err) => {
  console.error(err);
  process.exit(1);
});

