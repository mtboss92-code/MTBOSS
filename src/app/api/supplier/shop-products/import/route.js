import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import { ensureVendorForSupplier } from '@/lib/shop-commissions';
import {
  ensureImportTables,
  executeBulkProductImport,
  MAX_IMPORT_ROWS,
} from '@/lib/bulk-product-import';

const unauthorized = () =>
  NextResponse.json({ success: false, error: 'Supplier access required' }, { status: 401 });

async function getActiveSupplier(req) {
  const user = requireRole(req, 'supplier');
  if (!user || !user.id) return null;
  const result = await pool.query(
    'SELECT id, email, shop_name, status, is_active FROM suppliers WHERE id = $1',
    [user.id]
  );
  if (!result.rows.length) return null;
  const supplier = result.rows[0];
  if (!supplier.is_active || supplier.status === 'blocked') return null;
  return supplier;
}

export async function POST(req) {
  try {
    await ensureImportTables();
    const supplier = await getActiveSupplier(req);
    if (!supplier) return unauthorized();

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

    let vendorId = null;
    try {
      vendorId = await ensureVendorForSupplier(supplier);
    } catch (vErr) {
      console.warn('[supplier-bulk-import] Could not ensure vendor for supplier:', vErr.message);
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const result = await executeBulkProductImport({
        client,
        rows,
        mode,
        role: 'supplier',
        supplierId: supplier.id,
        vendorId,
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
    console.error('POST supplier shop-products/import error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not import products' }, { status: 500 });
  }
}

