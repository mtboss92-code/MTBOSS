-- Client receipt delivery for newly-recorded Party Payments.
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
CREATE INDEX IF NOT EXISTS pm_receipt_jobs_payment_created_idx
  ON pm_payment_receipt_email_jobs(payment_id, created_at DESC);
CREATE UNIQUE INDEX IF NOT EXISTS pm_receipt_jobs_one_queued_per_payment
  ON pm_payment_receipt_email_jobs(payment_id) WHERE status = 'queued';
