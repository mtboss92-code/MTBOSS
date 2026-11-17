import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import {
  ensureImportTables,
  executeBulkProductImport,
  MAX_IMPORT_ROWS,
} from '@/lib/bulk-product-import';

const unauthorized = () =>
  NextResponse.json({ success: false, error: 'Vendor access required' }, { status: 401 });

async function getActiveVendor(req) {
  const decoded = requireRole(req, 'vendor');
  if (!decoded) return null;
  const result = await pool.query(
    `SELECT id FROM vendors
     WHERE id=$1 AND is_approved=TRUE AND status='active'
     LIMIT 1`,
    [decoded.id]
  );
  return result.rows[0] || null;
}

export async function POST(req) {
  try {
    await ensureImportTables();
    const vendor = await getActiveVendor(req);
    if (!vendor) return unauthorized();

    const body = await req.json();
    const rows = Array.isArray(body.products) ? body.products : [];
    const mode = body.mode === 'update' ? 'update' : 'create';

    if (!rows.length) {
      return NextResponse.json({ success: false, error: 'Upload at least one product row' }, { status: 400 });
    }
    if (rows.length > MAX_IMPORT_ROWS) {
      return NextResponse.json(
        { success: false, error: `Maximum ${MAX_IMPORT_ROWS} products can be imported at once` },
        { status: 400 }
      );
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const result = await executeBulkProductImport({
        client,
        rows,
        mode,
        role: 'vendor',
        supplierId: 0,
        vendorId: vendor.id,
      });
      await client.query('COMMIT');

      if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
      return NextResponse.json({ success: true, data: result });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    console.error('POST vendor shop-products/import error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not import products' }, { status: 500 });
  }
}

