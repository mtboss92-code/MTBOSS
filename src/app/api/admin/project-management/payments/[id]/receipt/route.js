import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { ensureProjectManagementSchema, assertAgentAccess } from '@/lib/project-management';
import { cleanReceiptEmail, isReceiptEmail, processReceiptEmailJob } from '@/lib/party-payment-receipts';
import { randomUUID } from 'crypto';

export async function POST(req, { params }) {
  await ensureProjectManagementSchema();
  const id = Number((await params).id);
  const body = await req.json();
  const email = cleanReceiptEmail(body.client_email);
  if (!Number.isInteger(id) || !email || !isReceiptEmail(email)) return NextResponse.json({ success: false, field: 'client_email', error: 'Enter a valid client email' }, { status: 400 });
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // Resolve the payment and its project before authorizing a resend.
    const payment = (await client.query('SELECT * FROM pm_party_payments WHERE id=$1 AND NOT is_deleted FOR UPDATE', [id])).rows[0];
    if (!payment) { await client.query('ROLLBACK'); return NextResponse.json({ success: false, error: 'Payment not found' }, { status: 404 }); }
    const auth = await assertAgentAccess(req, payment.project_id, 'payments');
    if (!auth.allowed) { await client.query('ROLLBACK'); return auth.response; }
    const nextAttempt = Number((await client.query('SELECT COUNT(*)::int count FROM pm_payment_receipt_email_jobs WHERE payment_id=$1', [id])).rows[0].count) + 1;
    const job = await client.query(`INSERT INTO pm_payment_receipt_email_jobs(payment_id,recipient_email,job_key,status,attempt_no)
      VALUES($1,$2,$3,'queued',$4) ON CONFLICT DO NOTHING RETURNING id`, [id, email, `payment:${id}:resend:${randomUUID()}`, nextAttempt]);
    await client.query('UPDATE pm_party_payments SET client_email=$1, updated_at=NOW() WHERE id=$2', [email, id]);
    await client.query('COMMIT');
    const delivery = job.rows[0]?.id ? await processReceiptEmailJob(job.rows[0].id) : null;
    return NextResponse.json({ success: true, queued: Boolean(job.rows[0]?.id), sent: Boolean(delivery?.sent), error: delivery?.error || null });
  } catch (error) { await client.query('ROLLBACK'); return NextResponse.json({ success: false, error: error.message || 'Could not resend receipt' }, { status: 500 }); }
  finally { client.release(); }
}
