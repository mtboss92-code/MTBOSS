import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { requireRole, unauthorized } from '@/lib/auth';
import { ensureProjectManagementSchema, actorFromAdmin, writePmAudit, assertAgentAccess, assertSameDayEditable } from '@/lib/project-management';
import { cleanReceiptEmail, hasInvoiceDetails, isReceiptEmail, nextInvoiceNumber, sanitizeInvoiceDetails } from '@/lib/party-payment-receipts';

function values(b) {
  const amount = Number(b.amount);
  return Number.isFinite(amount) && amount > 0 && b.payment_date
    ? [amount, b.payment_date, String(b.mode || '').trim() || null, String(b.note || '').trim() || null]
    : null;
}

export async function PATCH(req, { params }) {
  try {
    await ensureProjectManagementSchema();
    const id = Number((await params).id);
    const body = await req.json();
    const v = values(body);
    if (!Number.isInteger(id) || !v) {
      return NextResponse.json({ success: false, error: 'Provide valid payment details' }, { status: 400 });
    }
    const clientEmail = cleanReceiptEmail(body.client_email);
    if (!isReceiptEmail(clientEmail)) {
      return NextResponse.json({ success: false, field: 'client_email', error: 'Enter a valid client email or clear the field' }, { status: 400 });
    }
    const transactionReference = String(body.transaction_reference || '').trim() || null;
    const hasInvoiceUpdate = Object.prototype.hasOwnProperty.call(body, 'invoice_details');
    let details = hasInvoiceUpdate ? sanitizeInvoiceDetails(body.invoice_details) : null;
    if (details && hasInvoiceDetails(details) && !details.invoice_number) details = { ...details, invoice_number: nextInvoiceNumber() };

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const old = (await client.query('SELECT * FROM pm_party_payments WHERE id = $1 FOR UPDATE', [id])).rows[0];
      if (!old || old.is_deleted) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Payment not found' }, { status: 404 });
      }

      const auth = await assertAgentAccess(req, old.project_id, 'payments');
      if (!auth.allowed) {
        await client.query('ROLLBACK');
        return auth.response;
      }

      const sameDay = assertSameDayEditable(old.created_at, auth.user, Boolean(body.admin_override));
      if (!sameDay.allowed) {
        await client.query('ROLLBACK');
        return sameDay.response;
      }

      const actor = actorFromAdmin(auth.user);
      const result = await client.query(
        `UPDATE pm_party_payments
            SET amount = $1, payment_date = $2, mode = $3, note = $4, transaction_reference = $5,
                client_email = $6, invoice_details = $7::jsonb, updated_by = $8, updated_at = NOW()
          WHERE id = $9 RETURNING *`,
        [...v, transactionReference, clientEmail || null, JSON.stringify(details || old.invoice_details || {}), actor, id]
      );
      await writePmAudit(client, 'party_payment', id, 'updated', actor, old, result.rows[0]);
      await client.query('COMMIT');
      return NextResponse.json({ success: true, data: result.rows[0] });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message || 'Could not update payment' }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const admin = requireRole(req, 'admin');
  if (!admin) {
    // If agent tried to delete, return 403 explicitly
    const auth = await assertAgentAccess(req, null, null);
    if (auth.role === 'agent') {
      return NextResponse.json({ success: false, error: 'Unauthorized: Agents cannot delete records (admin only)' }, { status: 403 });
    }
    return unauthorized();
  }

  try {
    await ensureProjectManagementSchema();
    const id = Number((await params).id);
    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const old = (await client.query('SELECT * FROM pm_party_payments WHERE id = $1 FOR UPDATE', [id])).rows[0];
      if (!old || old.is_deleted) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Payment not found' }, { status: 404 });
      }

      const sameDay = assertSameDayEditable(old.created_at, admin, false);
      if (!sameDay.allowed) {
        await client.query('ROLLBACK');
        return sameDay.response;
      }
      const actor = actorFromAdmin(admin);
      const result = await client.query(
        'UPDATE pm_party_payments SET is_deleted = TRUE, deleted_by = $1, deleted_at = NOW(), updated_by = $1, updated_at = NOW() WHERE id = $2 RETURNING *',
        [actor, id]
      );
      await writePmAudit(client, 'party_payment', id, 'soft_deleted', actor, old, result.rows[0]);
      await client.query('COMMIT');
      return NextResponse.json({ success: true });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message || 'Could not delete payment' }, { status: 500 });
  }
}
