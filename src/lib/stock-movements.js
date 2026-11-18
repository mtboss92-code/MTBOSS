/**
 * Stock Movement and Product Audit Trail system for MT-Boss ShopNow
 */

/**
 * Record a stock movement in stock_movements table
 */
export async function recordStockMovement({
  clientOrPool,
  productId,
  variantId = null,
  changeType, // 'initial_stock' | 'restock' | 'adjustment_addition' | 'adjustment_reduction' | 'order_deduction' | 'order_return' | 'damaged' | 'audit_correction'
  quantityChange,
  quantityBefore,
  quantityAfter,
  reason = '',
  userId = null,
  userRole = 'admin',
  userName = 'System',
}) {
  if (!productId) return null;
  const sql = `
    INSERT INTO stock_movements (
      product_id, variant_id, change_type, quantity_change, quantity_before, quantity_after,
      reason, performed_by_id, performed_by_role, performed_by_name, created_at
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, NOW())
    RETURNING *
  `;
  const values = [
    productId,
    variantId,
    changeType,
    Number(quantityChange),
    Number(quantityBefore),
    Number(quantityAfter),
    String(reason || '').trim(),
    userId,
    userRole,
    userName,
  ];

  const res = await clientOrPool.query(sql, values);
  return res.rows[0];
}

/**
 * Record an audit log for product changes
 */
export async function recordProductAuditLog({
  clientOrPool,
  productId,
  action, // 'create' | 'update' | 'stock_adjust' | 'archive' | 'restore' | 'delete' | 'duplicate'
  previousValues = null,
  newValues = null,
  userId = null,
  userRole = 'admin',
  userName = 'Admin',
  notes = '',
}) {
  if (!productId) return null;
  const sql = `
    INSERT INTO product_audit_logs (
      product_id, action, previous_values, new_values, performed_by_id, performed_by_role, performed_by_name, notes, created_at
    ) VALUES ($1, $2, $3::jsonb, $4::jsonb, $5, $6, $7, $8, NOW())
    RETURNING *
  `;
  const values = [
    productId,
    action,
    previousValues ? JSON.stringify(previousValues) : null,
    newValues ? JSON.stringify(newValues) : null,
    userId,
    userRole,
    userName,
    String(notes || '').trim(),
  ];

  const res = await clientOrPool.query(sql, values);
  return res.rows[0];
}

