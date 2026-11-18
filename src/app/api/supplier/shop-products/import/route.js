import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import { ensureVendorForSupplier } from '@/lib/shop-commissions';
import {
  ensureImportTables,
  executeBulkProductImport,
  exportProductsToCsv,
  generateCsvTemplate,
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

export async function GET(req) {
  try {
    const supplier = await getActiveSupplier(req);
    if (!supplier) return unauthorized();

    const { searchParams } = new URL(req.url);
    const format = searchParams.get('format') || 'template';

    if (format === 'template') {
      const csv = generateCsvTemplate();
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': 'attachment; filename="Supplier-Product-Import-Template-27-Columns.csv"',
        },
      });
    }

    if (format === 'export') {
      const result = await pool.query(`
        SELECT id, name, product_code, sku, barcode, brand, category, subcategory,
               mrp, price, discount_percent, quantity, stock_status, description,
               image_url, images, measurement_unit, unit, gst_percent, specifications,
               bulk_pricing, keywords, product_url_slug, currency, mpn, variant_id,
               http_status
        FROM supplier_materials
        WHERE supplier_id = $1 AND is_deleted = FALSE
        ORDER BY id ASC
      `, [supplier.id]);

      const csv = exportProductsToCsv(result.rows);
      return new NextResponse(csv, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="Supplier-Products-Export-${Date.now()}.csv"`,
        },
      });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error('GET supplier import route error:', err);
    return NextResponse.json({ success: false, error: 'Could not process request' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await ensureImportTables();
    const supplier = await getActiveSupplier(req);
    if (!supplier) return unauthorized();

    let body = {};
    try { body = await req.json(); } catch { body = {}; }
    const rows = Array.isArray(body.products || body.rows) ? (body.products || body.rows) : [];
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

