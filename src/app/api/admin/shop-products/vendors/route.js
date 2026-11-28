import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ success: false, error: 'Admin access required' }, { status: 401 });

async function ensureSchema() {
  await pool.query(`CREATE TABLE IF NOT EXISTS shop_product_vendors (
    product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
    vendor_id INTEGER NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
    assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(), assigned_by INTEGER,
    PRIMARY KEY (product_id, vendor_id)
  )`);
  await pool.query(`CREATE INDEX IF NOT EXISTS shop_product_vendors_vendor_idx ON shop_product_vendors(vendor_id)`);
}

export async function GET(req) {
  if (!requireRole(req, 'admin')) return unauthorized();
  try {
    await ensureSchema();
    const productId = Number(new URL(req.url).searchParams.get('product_id'));
    if (!productId) {
      const summary = await pool.query(`SELECT spv.vendor_id,
        COALESCE(NULLIF(TRIM(v.shop_name), ''), NULLIF(TRIM(v.vendor_name), ''), 'Vendor #' || v.id) AS vendor_name,
        COUNT(*)::int AS product_count,
        COALESCE(json_agg(json_build_object('id', sm.id, 'name', sm.name) ORDER BY sm.name), '[]'::json) AS products
        FROM shop_product_vendors spv
        JOIN vendors v ON v.id = spv.vendor_id
        JOIN supplier_materials sm ON sm.id = spv.product_id AND sm.is_deleted = FALSE
        GROUP BY spv.vendor_id, v.id, v.shop_name, v.vendor_name
        ORDER BY vendor_name ASC`);
      return NextResponse.json({ success: true, data: summary.rows });
    }
    if (!Number.isInteger(productId) || productId <= 0) return NextResponse.json({ success: false, error: 'Valid product_id is required' }, { status: 400 });
    const [vendors, assigned] = await Promise.all([
      pool.query(`SELECT id, COALESCE(NULLIF(TRIM(shop_name), ''), NULLIF(TRIM(vendor_name), ''), 'Vendor #' || id) AS name
        FROM vendors WHERE is_approved = TRUE AND status = 'active' ORDER BY name ASC`),
      pool.query('SELECT vendor_id FROM shop_product_vendors WHERE product_id = $1', [productId]),
    ]);
    return NextResponse.json({ success: true, data: vendors.rows, assigned_vendor_ids: assigned.rows.map((row) => Number(row.vendor_id)) });
  } catch (error) {
    console.error('GET product vendors error:', error);
    return NextResponse.json({ success: false, error: 'Could not load vendors' }, { status: 500 });
  }
}

export async function POST(req) {
  const admin = requireRole(req, 'admin');
  if (!admin) return unauthorized();
  try {
    await ensureSchema();
    const body = await req.json();
    const productIds = Array.isArray(body.product_ids) ? [...new Set(body.product_ids.map(Number))] : [Number(body.product_id)];
    const vendorId = Number(body.vendor_id);
    if (!productIds.length || productIds.length > 100 || productIds.some((id) => !Number.isInteger(id) || id <= 0) || !Number.isInteger(vendorId) || vendorId <= 0) return NextResponse.json({ success: false, error: 'Select up to 100 valid products and one vendor' }, { status: 400 });
    const check = await pool.query(`SELECT
      (SELECT COUNT(*)::int FROM supplier_materials WHERE id = ANY($1::int[]) AND is_deleted = FALSE) AS products_found,
      EXISTS(SELECT 1 FROM vendors WHERE id = $2 AND is_approved = TRUE AND status = 'active') AS vendor_exists`, [productIds, vendorId]);
    if (Number(check.rows[0].products_found) !== productIds.length || !check.rows[0].vendor_exists) return NextResponse.json({ success: false, error: 'One or more products or the active vendor were not found' }, { status: 404 });
    const saved = await pool.query(`INSERT INTO shop_product_vendors(product_id, vendor_id, assigned_by)
      SELECT UNNEST($1::int[]), $2, $3 ON CONFLICT (product_id, vendor_id) DO NOTHING RETURNING product_id`, [productIds, vendorId, admin.id || null]);
    return NextResponse.json({ success: true, assigned_count: saved.rowCount, message: `${saved.rowCount} product(s) attached to vendor. Existing commission rules continue to apply.` });
  } catch (error) {
    console.error('POST product vendor error:', error);
    return NextResponse.json({ success: false, error: 'Could not attach vendor' }, { status: 500 });
  }
}

export async function DELETE(req) {
  if (!requireRole(req, 'admin')) return unauthorized();
  try {
    await ensureSchema();
    const { searchParams } = new URL(req.url);
    const productId = Number(searchParams.get('product_id'));
    const vendorId = Number(searchParams.get('vendor_id'));
    await pool.query('DELETE FROM shop_product_vendors WHERE product_id = $1 AND vendor_id = $2', [productId, vendorId]);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Could not detach vendor' }, { status: 500 });
  }
}
