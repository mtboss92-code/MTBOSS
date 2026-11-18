import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import {
  MAX_IMPORT_ROWS,
  CSV_27_COLUMNS,
  generateCsvTemplate,
  executeBulkProductImport,
  exportProductsToCsv,
} from '@/lib/bulk-product-import';

const unauthorized = () => NextResponse.json({ success: false, error: 'Admin access required' }, { status: 401 });

export async function GET(req) {
  const admin = requireRole(req, 'admin');
  if (!admin) return unauthorized();

  const { searchParams } = new URL(req.url);
  const format = searchParams.get('format') || 'template';

  // 1. Download 27-Column CSV Template
  if (format === 'template') {
    const csvContent = generateCsvTemplate();
    return new NextResponse(csvContent, {
      status: 200,
      headers: {
        'Content-Type': 'text/csv; charset=utf-8',
        'Content-Disposition': 'attachment; filename="MT-Boss-Product-Import-Template-27-Columns.csv"',
      },
    });
  }

  // 2. Export All Products to 27-Column CSV
  if (format === 'export') {
    try {
      const result = await pool.query(`
        SELECT id, name, product_code, sku, barcode, brand, category, subcategory,
               mrp, price, discount_percent, quantity, stock_status, description,
               image_url, images, measurement_unit, unit, gst_percent, specifications,
               bulk_pricing, keywords, product_url_slug, currency, mpn, variant_id,
               http_status, extraction_notes
        FROM supplier_materials
        WHERE is_deleted = FALSE
        ORDER BY id ASC
      `);

      const csvContent = exportProductsToCsv(result.rows);
      return new NextResponse(csvContent, {
        status: 200,
        headers: {
          'Content-Type': 'text/csv; charset=utf-8',
          'Content-Disposition': `attachment; filename="MT-Boss-Catalog-Export-${Date.now()}.csv"`,
        },
      });
    } catch (error) {
      console.error('Export products error:', error);
      return NextResponse.json({ success: false, error: 'Could not export products' }, { status: 500 });
    }
  }

  return NextResponse.json({ success: true, columns: CSV_27_COLUMNS });
}

export async function POST(req) {
  const admin = requireRole(req, 'admin');
  if (!admin) return unauthorized();

  try {
    const body = await req.json();
    const rows = Array.isArray(body.rows) ? body.rows : [];
    const mode = body.mode === 'update' ? 'update' : 'skip';

    if (!rows.length) {
      return NextResponse.json({ success: false, error: 'No rows provided to import' }, { status: 400 });
    }
    if (rows.length > MAX_IMPORT_ROWS) {
      return NextResponse.json({ success: false, error: `Maximum ${MAX_IMPORT_ROWS} rows allowed per batch` }, { status: 400 });
    }

    const client = await pool.connect();
    let importResult;
    try {
      await client.query('BEGIN');
      importResult = await executeBulkProductImport({
        client,
        rows,
        mode,
        role: 'admin',
        supplierId: 0,
        vendorId: null,
        userId: admin.id,
        userName: admin.name || 'Admin',
      });
      await client.query('COMMIT');
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }

    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, data: importResult });
  } catch (error) {
    console.error('POST admin shop-products/import error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not import products' }, { status: 500 });
  }
}
