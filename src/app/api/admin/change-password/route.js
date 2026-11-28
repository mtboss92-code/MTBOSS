import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import pool, { withClient } from '@/lib/db';
import { requireRole, unauthorized } from '@/lib/auth';
import { isAdminEmail } from '@/lib/admin-email';
import { validateNewAdminPassword } from '@/lib/admin-password';

export const dynamic = 'force-dynamic';

const WINDOW_MINUTES = 15;
const MAX_ATTEMPTS = 5;

async function ensurePasswordChangeSchema() {
  await pool.query(`ALTER TABLE users ADD COLUMN IF NOT EXISTS auth_version INTEGER NOT NULL DEFAULT 0`);
  await pool.query(`CREATE TABLE IF NOT EXISTS admin_password_change_attempts (
    id BIGSERIAL PRIMARY KEY,
    admin_id INTEGER NOT NULL,
    ip_address VARCHAR(64),
    attempted_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
  await pool.query(`CREATE INDEX IF NOT EXISTS admin_password_change_attempts_limit_idx
    ON admin_password_change_attempts (admin_id, attempted_at DESC)`);
  await pool.query(`CREATE TABLE IF NOT EXISTS admin_security_audit_log (
    id BIGSERIAL PRIMARY KEY,
    admin_id INTEGER NOT NULL,
    action VARCHAR(80) NOT NULL,
    ip_address VARCHAR(64),
    user_agent VARCHAR(512),
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )`);
}

function clientIp(req) {
  return String(req.headers.get('x-forwarded-for') || '').split(',')[0].trim()
    || req.headers.get('x-real-ip') || null;
}

function clearedAuthResponse(body, status) {
  const response = NextResponse.json(body, { status });
  response.cookies.set('auth-token', '', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', path: '/', maxAge: 0 });
  return response;
}

export async function POST(req) {
  // Require the explicit bearer token used by the admin panel. This endpoint does
  // not authenticate from a cookie, so a cross-site form cannot invoke it.
  if (!/^Bearer\s+\S+$/i.test(req.headers.get('authorization') || '')) {
    return unauthorized();
  }
  const admin = requireRole(req, 'admin');
  if (!admin || !Number.isInteger(Number(admin.id)) || Number(admin.id) <= 0 || !isAdminEmail(admin.email)) {
    return unauthorized();
  }

  let body;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ success: false, error: 'Invalid request body.' }, { status: 400 });
  }
  const { currentPassword, newPassword, confirmPassword } = body || {};
  const errors = validateNewAdminPassword(currentPassword, newPassword, confirmPassword);
  if (Object.keys(errors).length) {
    return NextResponse.json({ success: false, error: 'Please correct the highlighted fields.', errors }, { status: 400 });
  }

  const ip = clientIp(req);
  const userAgent = String(req.headers.get('user-agent') || '').slice(0, 512) || null;
  try {
    await ensurePasswordChangeSchema();
    const tokenVersion = Number(admin.authVersion);
    const activeSession = await pool.query(
      'SELECT auth_version FROM users WHERE id = $1 AND LOWER(email) = $2',
      [admin.id, String(admin.email).toLowerCase()]
    );
    if (!activeSession.rows[0] || tokenVersion !== Number(activeSession.rows[0].auth_version)) {
      return clearedAuthResponse({ success: false, error: 'Session expired. Please sign in again.' }, 401);
    }
    const result = await withClient(async (client) => {
      await client.query('BEGIN');
      try {
        const attempts = await client.query(
          `SELECT COUNT(*)::int AS count FROM admin_password_change_attempts
            WHERE admin_id = $1 AND attempted_at > NOW() - ($2 * INTERVAL '1 minute')`,
          [admin.id, WINDOW_MINUTES]
        );
        if (attempts.rows[0].count >= MAX_ATTEMPTS) {
          await client.query('ROLLBACK');
          return { limited: true };
        }
        await client.query('INSERT INTO admin_password_change_attempts (admin_id, ip_address) VALUES ($1, $2)', [admin.id, ip]);
        const account = await client.query(
          'SELECT id, email, password FROM users WHERE id = $1 AND LOWER(email) = $2 FOR UPDATE',
          [admin.id, String(admin.email).toLowerCase()]
        );
        const user = account.rows[0];
        if (!user || !isAdminEmail(user.email)) {
          await client.query('ROLLBACK');
          return { unauthorized: true };
        }
        const currentMatches = await bcrypt.compare(currentPassword, user.password);
        if (!currentMatches) {
          await client.query('COMMIT');
          return { incorrect: true };
        }
        const passwordHash = await bcrypt.hash(newPassword, 10);
        await client.query('UPDATE users SET password = $1, auth_version = auth_version + 1 WHERE id = $2', [passwordHash, user.id]);
        await client.query(
          'INSERT INTO admin_security_audit_log (admin_id, action, ip_address, user_agent) VALUES ($1, $2, $3, $4)',
          [user.id, 'password_changed', ip, userAgent]
        );
        await client.query('COMMIT');
        return { changed: true };
      } catch (error) {
        await client.query('ROLLBACK');
        throw error;
      }
    });
    if (result.limited) return NextResponse.json({ success: false, error: 'Too many password change attempts. Please try again later.' }, { status: 429 });
    if (result.unauthorized) return unauthorized();
    if (result.incorrect) return NextResponse.json({ success: false, error: 'Current password is incorrect.', errors: { currentPassword: 'Current password is incorrect.' } }, { status: 401 });
    // Incrementing auth_version revokes every previously issued database-backed
    // admin token; sign out this browser as well so a fresh login is required.
    return clearedAuthResponse({ success: true, message: 'Password changed successfully.' }, 200);
  } catch (error) {
    console.error('Admin password change failed:', error?.code || error?.name || 'unknown');
    return NextResponse.json({ success: false, error: 'Unable to change password. Please try again.' }, { status: 500 });
  }
}
