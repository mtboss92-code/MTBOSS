import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole } from '@/lib/auth';
import { recordStockMovement } from '@/lib/stock-movements';
import { computeStockStatus } from '@/lib/product-identifiers';

const unauthorized = () => NextResponse.json({ success: false, error: 'Admin access required' }, { status: 401 });

// GET: Fetch stock movement history for a product
export async function GET(req) {
  if (!requireRole(req, 'admin')) return unauthorized();
  try {
    const { searchParams } = new URL(req.url);
    const productId = Number(searchParams.get('product_id'));
    if (!Number.isInteger(productId) || productId < 1) {
      return NextResponse.json({ success: false, error: 'Valid product_id is required' }, { status: 400 });
    }

    const movements = await pool.query(
      `SELECT sm.*, p.name AS product_name, p.product_code, p.sku
       FROM stock_movements sm
       LEFT JOIN supplier_materials p ON p.id = sm.product_id
       WHERE sm.product_id = $1
       ORDER BY sm.created_at DESC`,
      [productId]
    );

    return NextResponse.json({ success: true, data: movements.rows });
  } catch (error) {
    console.error('GET stock movements error:', error);
    return NextResponse.json({ success: false, error: 'Could not fetch stock movements' }, { status: 500 });
  }
}

// POST: Perform a fast stock adjustment with mandatory reason
export async function POST(req) {
  const adminUser = requireRole(req, 'admin');
  if (!adminUser) return unauthorized();

  const client = await pool.connect();
  try {
    const body = await req.json();
    const productId = Number(body.product_id);
    const newQuantity = Number(body.new_quantity);
    const reason = String(body.reason || '').trim();

    if (!Number.isInteger(productId) || productId < 1) {
      return NextResponse.json({ success: false, error: 'Valid product_id is required' }, { status: 400 });
    }
    if (!Number.isInteger(newQuantity) || newQuantity < 0) {
      return NextResponse.json({ success: false, error: 'Quantity must be a non-negative whole number' }, { status: 400 });
    }
    if (!reason) {
      return NextResponse.json({ success: false, error: 'Stock adjustment reason is mandatory' }, { status: 400 });
    }

    await client.query('BEGIN');
    const existing = await client.query('SELECT id, quantity, low_stock_threshold FROM supplier_materials WHERE id = $1 FOR UPDATE', [productId]);
    if (!existing.rows.length) {
      await client.query('ROLLBACK');
      return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
    }

    const oldQuantity = Number(existing.rows[0].quantity || 0);
    const qtyDiff = newQuantity - oldQuantity;
    if (qtyDiff === 0) {
      await client.query('ROLLBACK');
      return NextResponse.json({ success: false, error: 'New quantity is identical to current quantity' }, { status: 400 });
    }

    const changeType = qtyDiff > 0 ? 'adjustment_addition' : 'adjustment_reduction';
    const newStatus = computeStockStatus(newQuantity, existing.rows[0].low_stock_threshold);

    await client.query(
      `UPDATE supplier_materials
       SET quantity = $1, stock_status = $2, updated_at = NOW()
       WHERE id = $3`,
      [newQuantity, newStatus, productId]
    );

    const movement = await recordStockMovement({
      clientOrPool: client,
      productId,
      changeType,
      quantityChange: qtyDiff,
      quantityBefore: oldQuantity,
      quantityAfter: newQuantity,
      reason,
      userId: adminUser.id,
      userRole: 'admin',
      userName: adminUser.name || 'Admin',
    });

    await client.query('COMMIT');
    if (globalThis.__shopProductCache) globalThis.__shopProductCache.clear();
    return NextResponse.json({ success: true, data: { newQuantity, stock_status: newStatus, movement } });
  } catch (error) {
    await client.query('ROLLBACK');
    console.error('POST stock adjustment error:', error);
    return NextResponse.json({ success: false, error: error.message || 'Could not adjust stock' }, { status: 500 });
  } finally {
    client.release();
  }
}

