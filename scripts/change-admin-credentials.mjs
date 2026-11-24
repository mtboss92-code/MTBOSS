/**
 * One-off: set admin login email + password in the users table (bcrypt).
 *
 * Uses DATABASE_URL from .env (your prod Neon URL).
 *
 * Usage:
 *   node --use-system-ca scripts/change-admin-credentials.mjs
 *
 * Optional overrides:
 *   NEW_ADMIN_EMAIL=... NEW_ADMIN_PASSWORD=... node --use-system-ca scripts/change-admin-credentials.mjs
 *
 * IMPORTANT: Auth also checks env ADMIN_EMAIL / ADMIN_PASSWORD on the host.
 * After running this, set those same values in production env (Vercel / host).
 */
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env'), quiet: true });
dotenv.config({ path: path.join(__dirname, '..', 'src', '.env'), quiet: true });

const { Client } = pg;

const NEW_EMAIL = String(process.env.NEW_ADMIN_EMAIL || 'mtboss2016@gmail.com')
  .trim()
  .toLowerCase();
const NEW_PASSWORD = String(process.env.NEW_ADMIN_PASSWORD || 'Mubarak@2016').trim();
const NEW_NAME = String(process.env.NEW_ADMIN_NAME || 'Admin').trim() || 'Admin';

const OLD_ADMIN_EMAILS = [
  'admin@mtboss.com',
  'admin@mtboss.in',
  'admin@MTBOSS.in',
  'admin@gmail.com',
];

function normalizePostgresUrl(url) {
  if (!url) return url;
  const parsed = new URL(url);
  parsed.searchParams.delete('channel_binding');
  parsed.searchParams.set('uselibpqcompat', 'true');
  parsed.searchParams.set('sslmode', 'require');
  return parsed.toString();
}

function maskHost(url) {
  try {
    const u = new URL(url);
    return `${u.protocol}//***:***@${u.hostname}:${u.port || '5432'}${u.pathname}`;
  } catch {
    return '(invalid DATABASE_URL)';
  }
}

async function columnExists(client, table, column) {
  const res = await client.query(
    `SELECT 1
       FROM information_schema.columns
      WHERE table_schema = 'public'
        AND table_name = $1
        AND column_name = $2
      LIMIT 1`,
    [table, column]
  );
  return res.rowCount > 0;
}

async function main() {
  if (!NEW_EMAIL || !NEW_PASSWORD) {
    console.error('NEW_ADMIN_EMAIL and NEW_ADMIN_PASSWORD are required');
    process.exit(1);
  }

  const raw = process.env.DATABASE_URL?.trim();
  if (!raw) {
    console.error('DATABASE_URL is not set');
    process.exit(1);
  }

  const connectionString = normalizePostgresUrl(raw);
  console.log('Connecting to', maskHost(raw));

  const client = new Client({
    connectionString,
    ssl: { rejectUnauthorized: true },
    connectionTimeoutMillis: 20000,
  });

  await client.connect();

  try {
    const hasRole = await columnExists(client, 'users', 'role');
    const hasUpdatedAt = await columnExists(client, 'users', 'updated_at');
    const hasIsBlocked = await columnExists(client, 'users', 'is_blocked');
    const passwordHash = await bcrypt.hash(NEW_PASSWORD, 10);

    await client.query('BEGIN');

    const existing = await client.query(
      `SELECT id, email, name
         FROM users
        WHERE LOWER(TRIM(email)) = $1
        LIMIT 1`,
      [NEW_EMAIL]
    );

    let userId;

    if (existing.rows.length > 0) {
      userId = existing.rows[0].id;
      const sets = ['password = $2', 'name = COALESCE(NULLIF($3, \'\'), name)'];
      const params = [userId, passwordHash, NEW_NAME];

      if (hasUpdatedAt) sets.push('updated_at = NOW()');
      if (hasIsBlocked) sets.push('is_blocked = FALSE');
      if (hasRole) {
        params.push('Admin');
        sets.push(`role = $${params.length}`);
      }

      await client.query(
        `UPDATE users SET ${sets.join(', ')} WHERE id = $1`,
        params
      );
      console.log(`Updated existing user id=${userId} email=${NEW_EMAIL}`);
    } else {
      const old = await client.query(
        `SELECT id, email
           FROM users
          WHERE LOWER(TRIM(email)) = ANY($1::text[])
          ORDER BY id ASC
          LIMIT 1`,
        [OLD_ADMIN_EMAILS.map((e) => e.toLowerCase())]
      );

      if (old.rows.length > 0) {
        userId = old.rows[0].id;
        const sets = ['email = $2', 'password = $3', 'name = COALESCE(NULLIF($4, \'\'), name)'];
        const params = [userId, NEW_EMAIL, passwordHash, NEW_NAME];

        if (hasUpdatedAt) sets.push('updated_at = NOW()');
        if (hasIsBlocked) sets.push('is_blocked = FALSE');
        if (hasRole) {
          params.push('Admin');
          sets.push(`role = $${params.length}`);
        }

        await client.query(
          `UPDATE users SET ${sets.join(', ')} WHERE id = $1`,
          params
        );
        console.log(
          `Migrated old admin ${old.rows[0].email} → ${NEW_EMAIL} (id=${userId})`
        );
      } else {
        const cols = ['name', 'email', 'password'];
        const vals = ['$1', '$2', '$3'];
        const params = [NEW_NAME, NEW_EMAIL, passwordHash];

        if (hasRole) {
          params.push('Admin');
          cols.push('role');
          vals.push(`$${params.length}`);
        }
        if (hasIsBlocked) {
          cols.push('is_blocked');
          vals.push('FALSE');
        }
        if (hasUpdatedAt) {
          cols.push('created_at', 'updated_at');
          vals.push('NOW()', 'NOW()');
        }

        const inserted = await client.query(
          `INSERT INTO users (${cols.join(', ')})
           VALUES (${vals.join(', ')})
           RETURNING id`,
          params
        );
        userId = inserted.rows[0].id;
        console.log(`Inserted new admin user id=${userId} email=${NEW_EMAIL}`);
      }
    }

    const verify = await client.query(
      `SELECT id, email, name${hasRole ? ', role' : ''}
         FROM users
        WHERE id = $1`,
      [userId]
    );

    await client.query('COMMIT');

    console.log('OK — admin row:', verify.rows[0]);
    console.log('');
    console.log('Next: set production env to match:');
    console.log(`  ADMIN_EMAIL=${NEW_EMAIL}`);
    console.log(`  ADMIN_PASSWORD=<same password you used>`);
    console.log('Then redeploy / restart the app so env login picks them up.');
  } catch (err) {
    try {
      await client.query('ROLLBACK');
    } catch {
      /* ignore */
    }
    console.error('Failed:', err.message || err);
    process.exitCode = 1;
  } finally {
    await client.end();
  }
}

main();
