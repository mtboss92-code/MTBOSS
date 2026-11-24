/**
 * Ensure only mtboss2016@gmail.com keeps Admin role in users table.
 * Usage: node --use-system-ca scripts/lock-sole-admin.mjs
 */
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import pg from 'pg';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: path.join(__dirname, '..', '.env'), quiet: true });

const { Client } = pg;
const SOLE_ADMIN = 'mtboss2016@gmail.com';

function normalizePostgresUrl(url) {
  const parsed = new URL(url);
  parsed.searchParams.delete('channel_binding');
  parsed.searchParams.set('uselibpqcompat', 'true');
  parsed.searchParams.set('sslmode', 'require');
  return parsed.toString();
}

async function main() {
  const raw = process.env.DATABASE_URL?.trim();
  if (!raw) throw new Error('DATABASE_URL is not set');

  const client = new Client({
    connectionString: normalizePostgresUrl(raw),
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();

  try {
    const before = await client.query(
      `SELECT id, email, role
         FROM users
        WHERE LOWER(COALESCE(role, '')) IN ('admin', 'super_admin')
           OR LOWER(TRIM(email)) = ANY($1::text[])
        ORDER BY id`,
      [[
        SOLE_ADMIN,
        'admin@mtboss.com',
        'admin@mtboss.in',
        'admin@gmail.com',
      ]]
    );
    console.log('Before:', before.rows);

    const demoted = await client.query(
      `UPDATE users
          SET role = 'Customer',
              updated_at = NOW()
        WHERE LOWER(COALESCE(role, '')) IN ('admin', 'super_admin')
          AND LOWER(TRIM(email)) <> $1
        RETURNING id, email, role`,
      [SOLE_ADMIN]
    );
    console.log('Demoted:', demoted.rows);

    const kept = await client.query(
      `UPDATE users
          SET role = 'Admin',
              is_blocked = FALSE,
              updated_at = NOW()
        WHERE LOWER(TRIM(email)) = $1
        RETURNING id, email, role`,
      [SOLE_ADMIN]
    );
    console.log('Kept admin:', kept.rows);
  } finally {
    await client.end();
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
