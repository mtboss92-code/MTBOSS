import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';

const unauthorized = () => NextResponse.json({ success: false, error: 'Admin access required' }, { status: 401 });

export async function GET(req) {
  if (!requireRole(req, 'admin')) return unauthorized();
  try {
    const statsRes = await pool.query(`
      SELECT 
        COUNT(*)::INT AS total_products,
        COUNT(*) FILTER (WHERE is_available = TRUE AND is_deleted = FALSE)::INT AS active_products,
        COUNT(*) FILTER (WHERE (status = 'draft' OR is_available = FALSE) AND is_deleted = FALSE)::INT AS draft_products,
        COUNT(*) FILTER (WHERE (quantity <= 0 OR stock_status = 'out_of_stock') AND is_deleted = FALSE)::INT AS out_of_stock,
        COUNT(*) FILTER (WHERE quantity > 0 AND quantity <= low_stock_threshold AND is_deleted = FALSE)::INT AS low_stock,
        COUNT(DISTINCT category) FILTER (WHERE is_deleted = FALSE)::INT AS total_categories,
        COUNT(DISTINCT brand) FILTER (WHERE brand IS NOT NULL AND TRIM(brand) != '' AND is_deleted = FALSE)::INT AS total_brands
      FROM supplier_materials
    `);

    const variantsRes = await pool.query(`SELECT COUNT(*)::INT AS total_variants FROM product_variants WHERE is_active = TRUE`);
    const recentMovementsRes = await pool.query(`
      SELECT sm.*, p.name AS product_name, p.product_code, p.sku
      FROM stock_movements sm
      LEFT JOIN supplier_materials p ON p.id = sm.product_id
      ORDER BY sm.created_at DESC
      LIMIT 10
    `);

    const stats = statsRes.rows[0] || {};
    stats.total_variants = variantsRes.rows[0]?.total_variants || 0;
    stats.recent_movements = recentMovementsRes.rows || [];

    return NextResponse.json({ success: true, data: stats });
  } catch (error) {
    console.error('GET dashboard-stats error:', error);
    return NextResponse.json({ success: false, error: 'Could not fetch dashboard statistics' }, { status: 500 });
  }
}

