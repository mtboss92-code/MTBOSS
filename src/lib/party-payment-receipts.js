import { randomUUID } from 'crypto';
import pool from '@/lib/db';
import { isSmtpConfigured, sendMail } from '@/lib/email';
import { clientInvoiceEmail, hasInvoiceDetails, isCompletedInvoice, sanitizeInvoiceDetails } from '@/lib/tax-invoice-values.mjs';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export const cleanReceiptEmail = (value) => String(value || '').trim().toLowerCase();
export const isReceiptEmail = (value) => !value || EMAIL_RE.test(value);
export { hasInvoiceDetails, isCompletedInvoice, sanitizeInvoiceDetails };

export function nextInvoiceNumber() {
  return `INV-${new Date().getFullYear()}-${randomUUID().replace(/-/g, '').slice(0, 10).toUpperCase()}`;
}

export async function ensurePartyPaymentReceiptSchema() {
  await pool.query(`
    ALTER TABLE pm_party_payments
      ADD COLUMN IF NOT EXISTS client_email VARCHAR(255),
      ADD COLUMN IF NOT EXISTS receipt_number VARCHAR(80),
      ADD COLUMN IF NOT EXISTS invoice_details JSONB NOT NULL DEFAULT '{}'::jsonb,
      ADD COLUMN IF NOT EXISTS submission_key UUID;
    CREATE UNIQUE INDEX IF NOT EXISTS pm_party_payments_submission_key_uniq
      ON pm_party_payments(submission_key) WHERE submission_key IS NOT NULL;
    CREATE UNIQUE INDEX IF NOT EXISTS pm_party_payments_receipt_number_uniq
      ON pm_party_payments(receipt_number) WHERE receipt_number IS NOT NULL;
    CREATE TABLE IF NOT EXISTS pm_payment_receipt_email_jobs (
      id BIGSERIAL PRIMARY KEY,
      payment_id BIGINT NOT NULL REFERENCES pm_party_payments(id) ON DELETE CASCADE,
      recipient_email VARCHAR(255) NOT NULL,
      job_key VARCHAR(180) NOT NULL UNIQUE,
      status VARCHAR(20) NOT NULL DEFAULT 'queued' CHECK(status IN ('queued','processing','sent','failed','delivered','bounced')),
      attempt_no INTEGER NOT NULL DEFAULT 1,
      provider_message_id TEXT,
      error_message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      sent_at TIMESTAMPTZ,
      updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    );
    CREATE INDEX IF NOT EXISTS pm_receipt_jobs_payment_created_idx ON pm_payment_receipt_email_jobs(payment_id, created_at DESC);
    CREATE UNIQUE INDEX IF NOT EXISTS pm_receipt_jobs_one_queued_per_payment
      ON pm_payment_receipt_email_jobs(payment_id) WHERE status = 'queued';
  `);
  await pool.query(`
    DO $$
    DECLARE c name;
    BEGIN
      SELECT conname INTO c FROM pg_constraint
       WHERE conrelid = 'pm_payment_receipt_email_jobs'::regclass
         AND contype = 'c'
         AND pg_get_constraintdef(oid) ILIKE '%status%';
      IF c IS NOT NULL THEN
        EXECUTE format('ALTER TABLE pm_payment_receipt_email_jobs DROP CONSTRAINT %I', c);
      END IF;
    END $$;
    ALTER TABLE pm_payment_receipt_email_jobs
      ADD CONSTRAINT pm_payment_receipt_email_jobs_status_check
      CHECK (status IN ('queued','processing','sent','failed','delivered','bounced'));
  `);
  try {
    await processPendingReceiptEmailJobs();
  } catch (error) {
    console.error('[invoice-email] pending job sweep failed', error?.message || error);
  }
}

async function jobPayload(client, jobId) {
  const result = await client.query(`
    SELECT j.*, pay.amount, pay.payment_date, pay.mode, pay.receipt_number, pay.invoice_details,
           p.name project_name, party.name party_name
      FROM pm_payment_receipt_email_jobs j
      JOIN pm_party_payments pay ON pay.id = j.payment_id
      JOIN pm_projects p ON p.id = pay.project_id
      JOIN pm_parties party ON party.id = p.party_id
     WHERE j.id = $1`, [jobId]);
  return result.rows[0];
}

export async function processReceiptEmailJob(jobId) {
  const client = await pool.connect();
  let claimed = false;
  try {
    const claim = await client.query(
      `UPDATE pm_payment_receipt_email_jobs
          SET status = 'processing', updated_at = NOW(), error_message = NULL
        WHERE id = $1 AND status = 'queued'
        RETURNING id`,
      [jobId]
    );
    if (!claim.rows[0]) return { sent: false, skipped: true };
    claimed = true;
    const row = await jobPayload(client, jobId);
    if (!row) throw new Error('Payment email job could not be loaded');
    let details = typeof row.invoice_details === 'string' ? JSON.parse(row.invoice_details) : (row.invoice_details || {});
    const invoiceEmail = isCompletedInvoice(details);
    if (invoiceEmail && !String(details.invoice_number || '').trim()) {
      details = { ...details, invoice_number: nextInvoiceNumber() };
      await client.query(`UPDATE pm_party_payments SET invoice_details = $2::jsonb, updated_at = NOW() WHERE id = $1`, [row.payment_id, JSON.stringify(details)]);
    }
    const message = clientInvoiceEmail(row);
    if (!isSmtpConfigured()) throw new Error('Receipt email is not configured (set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, and SMTP_FROM)');
    const info = await sendMail({
      to: row.recipient_email,
      subject: `Payment received for ${row.project_name} | ${row.receipt_number}`,
      text: message.text,
    });
    await client.query(`UPDATE pm_payment_receipt_email_jobs SET status='sent', provider_message_id=$2, sent_at=NOW(), updated_at=NOW(), error_message=NULL WHERE id=$1 AND status='processing'`, [jobId, info?.messageId || null]);
    return { sent: true };
  } catch (error) {
    if (claimed) {
      await client.query(`UPDATE pm_payment_receipt_email_jobs SET status='failed', error_message=$2, updated_at=NOW() WHERE id=$1 AND status='processing'`, [jobId, String(error.message || 'Email delivery failed').slice(0, 1000)]).catch(() => {});
    }
    return { sent: false, error: error.message || 'Email delivery failed' };
  } finally {
    client.release();
  }
}

export async function processPendingReceiptEmailJobs() {
  await pool.query(`
    UPDATE pm_payment_receipt_email_jobs
       SET status = 'queued', updated_at = NOW(),
           error_message = 'Invoice email was interrupted and will be retried'
     WHERE status = 'processing' AND updated_at < NOW() - INTERVAL '10 minutes'
  `);
  const pending = await pool.query(`SELECT id FROM pm_payment_receipt_email_jobs WHERE status = 'queued' ORDER BY id ASC LIMIT 20`);
  for (const row of pending.rows) await processReceiptEmailJob(row.id);
}
