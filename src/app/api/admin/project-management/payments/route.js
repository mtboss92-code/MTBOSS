import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { ensureProjectManagementSchema, pageParams, actorFromAdmin, writePmAudit, assertAgentAccess } from '@/lib/project-management';
import { cleanReceiptEmail, isReceiptEmail, nextInvoiceNumber, processPendingReceiptEmailJobs, processReceiptEmailJob, sanitizeInvoiceDetails } from '@/lib/party-payment-receipts';
import { randomUUID } from 'crypto';

function values(b) {
  const project = Number(b.project_id);
  const amount = Number(b.amount);
  return Number.isInteger(project) && Number.isFinite(amount) && amount > 0 && b.payment_date
    ? [project, amount, b.payment_date, String(b.mode || '').trim() || null, String(b.note || '').trim() || null, String(b.transaction_reference || '').trim() || null]
    : null;
}

function invoiceDetails(value) {
  const details = sanitizeInvoiceDetails(value);
  if (!details.invoice_number) details.invoice_number = nextInvoiceNumber();
  return details;
}

export async function GET(req) {
  try {
    await ensureProjectManagementSchema();
    const { searchParams } = new URL(req.url);
    const projectId = Number(searchParams.get('projectId'));
    const { page, pageSize, offset } = pageParams(searchParams);

    if (!Number.isInteger(projectId)) {
      return NextResponse.json({ success: false, error: 'projectId is required' }, { status: 400 });
    }

    const auth = await assertAgentAccess(req, projectId, 'payments');
    if (!auth.allowed) return auth.response;
    void processPendingReceiptEmailJobs();

    const result = await pool.query(
      `WITH paged AS (
         SELECT pay.*, latest.status AS email_status, latest.error_message AS receipt_email_error, COUNT(*) OVER()::int total_count
         FROM pm_party_payments pay 
         LEFT JOIN LATERAL (SELECT status, error_message FROM pm_payment_receipt_email_jobs j WHERE j.payment_id=pay.id ORDER BY j.created_at DESC LIMIT 1) latest ON TRUE
         WHERE pay.project_id = $1 AND NOT pay.is_deleted 
         ORDER BY pay.payment_date DESC, pay.created_at DESC 
         LIMIT $2 OFFSET $3
       ) 
       SELECT * FROM paged ORDER BY payment_date DESC, created_at DESC`,
      [projectId, pageSize, offset]
    );

    const total = Number(result.rows[0]?.total_count || 0);
    return NextResponse.json({
      success: true,
      data: result.rows,
      pagination: { page, pageSize, total, totalPages: Math.ceil(total / pageSize) }
    });
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message || 'Could not load payments' }, { status: 500 });
  }
}

export async function POST(req) {
  try {
    await ensureProjectManagementSchema();
    // Existing app processes may have initialized the guarded PM schema before
    // receipt-invoice fields were deployed. Keep this request compatible during
    // a rolling deployment as well as on databases where the SQL migration has
    // not yet been run.
    await pool.query(`ALTER TABLE pm_party_payments
      ADD COLUMN IF NOT EXISTS invoice_details JSONB NOT NULL DEFAULT '{}'::jsonb,
      ADD COLUMN IF NOT EXISTS client_email VARCHAR(255),
      ADD COLUMN IF NOT EXISTS receipt_number VARCHAR(80),
      ADD COLUMN IF NOT EXISTS submission_key UUID`);
    const body = await req.json();
    const v = values(body);
    if (!v) {
      return NextResponse.json({ success: false, error: 'Provide valid payment details' }, { status: 400 });
    }

    const projectId = v[0];
    const clientEmail = cleanReceiptEmail(body.client_email);
    if (!isReceiptEmail(clientEmail)) {
      return NextResponse.json({ success: false, field: 'client_email', error: 'Enter a valid client email or clear the field' }, { status: 400 });
    }
    const auth = await assertAgentAccess(req, projectId, 'payments');
    if (!auth.allowed) return auth.response;

    try {
      await pool.query('ALTER TABLE pm_party_payments ADD COLUMN IF NOT EXISTS transaction_reference VARCHAR(255)');
    } catch {}

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const actor = actorFromAdmin(auth.user);
      const submissionKey = String(req.headers.get('idempotency-key') || body.submission_key || randomUUID()).trim();
      if (!/^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(submissionKey)) {
        await client.query('ROLLBACK');
        return NextResponse.json({ success: false, error: 'Invalid submission key' }, { status: 400 });
      }
      const existing = (await client.query('SELECT * FROM pm_party_payments WHERE submission_key = $1 FOR UPDATE', [submissionKey])).rows[0];
      if (existing) {
        await client.query('COMMIT');
        return NextResponse.json({ success: true, data: existing, duplicate: true });
      }
      const receiptNumber = `RCP-${new Date().getFullYear()}-${randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()}`;
      const result = await client.query(
        `INSERT INTO pm_party_payments(project_id, amount, payment_date, mode, note, transaction_reference, client_email, receipt_number, invoice_details, submission_key, created_by)
         VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING *`,
        [...v, clientEmail || null, receiptNumber, invoiceDetails(body.invoice_details), submissionKey, actor]
      );
      let jobId = null;
      if (clientEmail) {
        const job = await client.query(
          `INSERT INTO pm_payment_receipt_email_jobs(payment_id, recipient_email, job_key, status)
           VALUES($1,$2,$3,'queued') ON CONFLICT(job_key) DO NOTHING RETURNING id`,
          [result.rows[0].id, clientEmail, `payment:${result.rows[0].id}:automatic`]
        );
        jobId = job.rows[0]?.id || null;
      }
      await writePmAudit(client, 'party_payment', result.rows[0].id, 'created', actor, null, result.rows[0]);
      await client.query('COMMIT');
      if (jobId) await processReceiptEmailJob(jobId);
      return NextResponse.json({ success: true, data: result.rows[0] }, { status: 201 });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message || 'Could not create payment' }, { status: 500 });
  }
}
