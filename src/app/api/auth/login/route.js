import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { clearOtherAuthCookies, getJwtSecret, setAuthCookie } from '@/lib/auth';
import { isAdminEmail } from '@/lib/admin-email';

export const dynamic = 'force-dynamic';

function readEnv(name, fallback = '') {
  const value = process.env[name];
  if (value == null || value === '') return fallback;
  // Trim BOM/CRLF/spaces that Windows editors often leave in .env values.
  return String(value).replace(/^\uFEFF/, '').trim();
}


const ADMIN_PASSWORD = readEnv('ADMIN_PASSWORD');

function matchesEnvAdmin(email, password) {
  const normalizedEmail = String(email || '').trim().toLowerCase();
  const normalizedPassword = String(password || '').trim();
  if (!ADMIN_PASSWORD || !normalizedEmail || !normalizedPassword) return false;
  return isAdminEmail(normalizedEmail) && normalizedPassword === ADMIN_PASSWORD;
  // Exact sole admin email only — previous admin IDs cannot use env password.
}

// Environment credentials only bridge an existing administrator into the
// database-backed password flow; they are disabled after the first change.
function issueAdminToken(email, name = 'Admin', id, authVersion = 0) {
  const normalizedEmail = String(email).trim().toLowerCase();
  const token = jwt.sign(
    { id, email: normalizedEmail, role: 'admin', authVersion },
    getJwtSecret(),
    { expiresIn: process.env.JWT_EXPIRY || '7d' }
  );
  const response = NextResponse.json({
    success: true,
    token,
    user: { id, email: normalizedEmail, name, role: 'admin' },
    redirectTo: '/dashboard',
  }, { status: 200 });
  clearOtherAuthCookies(response, 'auth-token');
  return setAuthCookie(response, 'auth-token', token);
}

export async function POST(req) {
  try {
    const { email, password } = await req.json();
    const normalizedEmail = String(email || '').trim().toLowerCase();

    if (!normalizedEmail || !password) {
      return NextResponse.json({ error: 'Email and password required' }, { status: 400 });
    }

    // Admin authentication is database-backed, so a changed password applies immediately.
    const { isDatabaseConnectionError } = await import('@/lib/api-utils');
    const { BLOCKED_ACCOUNT_MESSAGE } = await import('@/lib/user-moderation');
    const {
      authLoginQuery,
      ensureAuthVersionSchema,
      softAuthLoginQuery,
      touchUserLastLogin,
    } = await import('@/lib/auth-login-db');

    await ensureAuthVersionSchema();

    let userResult;
    try {
      userResult = await authLoginQuery(
        `SELECT id, email, password, name, is_blocked, auth_version
           FROM users
          WHERE LOWER(email) = $1
          LIMIT 1`,
        [normalizedEmail]
      );
    } catch (error) {
      if (!String(error?.message || '').toLowerCase().includes('is_blocked')) throw error;
      userResult = await authLoginQuery(
        `SELECT id, email, password, name, FALSE AS is_blocked, auth_version
           FROM users
          WHERE LOWER(email) = $1
          LIMIT 1`,
        [normalizedEmail]
      );
    }

    if (userResult.rows.length === 0) {
      // Sequential soft checks — avoid opening multiple Neon connections at once.
      const vendorResult = await softAuthLoginQuery(
        'SELECT id FROM vendors WHERE LOWER(email) = $1 LIMIT 1',
        [normalizedEmail]
      );
      if (vendorResult.rows.length > 0) {
        return NextResponse.json(
          { error: 'This email is registered as a vendor. Please use vendor login at /vendor/login' },
          { status: 401 }
        );
      }

      const agentResult = await softAuthLoginQuery(
        `SELECT id FROM agents
          WHERE LOWER(TRIM(email)) = $1
            AND status = 'Approved'
            AND login_enabled IS TRUE
          LIMIT 1`,
        [normalizedEmail]
      );
      if (agentResult.rows.length > 0) {
        return NextResponse.json(
          { error: 'This email is registered as an agent. Please use Agent login at /agent/login' },
          { status: 401 }
        );
      }
      return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const user = userResult.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      // One-time migration from the former environment-only admin login. A
      // password change increments auth_version, permanently disabling this.
      if (isAdminEmail(user.email) && Number(user.auth_version) === 0 && matchesEnvAdmin(user.email, password)) {
        const { queryRaw } = await import('@/lib/db');
        const passwordHash = await bcrypt.hash(password, 10);
        await queryRaw('UPDATE users SET password = $1 WHERE id = $2 AND auth_version = 0', [passwordHash, user.id]);
      } else {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
      }
    }
    if (user.is_blocked) {
      return NextResponse.json({ error: BLOCKED_ACCOUNT_MESSAGE }, { status: 403 });
    }

    const userRole = isAdminEmail(user.email) ? 'admin' : 'user';
    touchUserLastLogin(user.id);

    if (userRole === 'admin') {
      return issueAdminToken(user.email, user.name || 'Admin', user.id, Number(user.auth_version) || 0);
    }

    const token = jwt.sign(
      { id: user.id, email: user.email, role: userRole },
      getJwtSecret(),
      { expiresIn: process.env.JWT_EXPIRY || '7d' }
    );

    const response = NextResponse.json({
      success: true,
      token,
      user: { id: user.id, email: user.email, name: user.name, role: userRole },
      redirectTo: '/userdashboard',
    }, { status: 200 });
    clearOtherAuthCookies(response, 'auth-token');
    return setAuthCookie(response, 'auth-token', token);
  } catch (error) {
    console.error('Login error:', error);
    const message = String(error?.message || '');
    if (message.includes('Query timeout') || message.includes('login_timeout')) {
      return NextResponse.json(
        {
          error:
            'Could not reach the database in time. Please wait a few seconds for Neon to wake up and try again.',
        },
        { status: 504 }
      );
    }
    try {
      const { isDatabaseConnectionError } = await import('@/lib/api-utils');
      if (isDatabaseConnectionError(error)) {
        return NextResponse.json(
          {
            error:
              'Database connection failed. Check DATABASE_URL / network, wait a moment for Neon to wake, then try again.',
          },
          { status: 503 }
        );
      }
    } catch {
      /* ignore */
    }
    return NextResponse.json({ error: 'Server error occurred.' }, { status: 500 });
  }
}
