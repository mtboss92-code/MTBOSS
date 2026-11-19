import dotenv from 'dotenv';
import pg from 'pg';
import fs from 'fs';
import path from 'path';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL;

if (!connectionString) {
  console.error('No database connection string found in environment variables.');
  process.exit(1);
}

const pool = new Pool({ connectionString });

async function run() {
  try {
    const sqlPath = path.resolve('database/migrations/20261119_shop_catalogue_list_indexes.sql');
    const sql = fs.readFileSync(sqlPath, 'utf8');
    console.log('Applying Shop Catalogue list indexes migration...');
    await pool.query(sql);
    console.log('✅ Shop catalogue indexes applied successfully!');

    const idxRes = await pool.query(`
      SELECT indexname
      FROM pg_indexes
      WHERE tablename IN ('supplier_materials', 'shop_categories')
        AND indexname LIKE 'idx_%materials%' OR indexname LIKE 'idx_shop_categories_name_lower'
      ORDER BY indexname
    `);
    console.log('Verified indexes:');
    for (const row of idxRes.rows) console.log(`  - ${row.indexname}`);
  } catch (error) {
    console.error('Migration failed:', error.message);
    process.exitCode = 1;
  } finally {
    await pool.end();
  }
}

run();
