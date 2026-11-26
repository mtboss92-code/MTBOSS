-- Supports secure admin self-service password changes and server-side token versioning.
ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_version INTEGER NOT NULL DEFAULT 0;

CREATE TABLE IF NOT EXISTS admin_password_change_attempts (
  id BIGSERIAL PRIMARY KEY,
  admin_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  ip_address VARCHAR(64),
  attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
CREATE INDEX IF NOT EXISTS admin_password_change_attempts_limit_idx
  ON admin_password_change_attempts (admin_id, attempted_at DESC);

CREATE TABLE IF NOT EXISTS admin_security_audit_log (
  id BIGSERIAL PRIMARY KEY,
  admin_id INTEGER NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  action VARCHAR(80) NOT NULL,
  ip_address VARCHAR(64),
  user_agent VARCHAR(512),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);
