/**
 * Shop Now catalogue load / correctness harness.
 *
 * - Measures real queries against the configured database (read-only).
 * - Uses EXPLAIN ANALYZE on listing patterns.
 * - Runs a TEMPORARY synthetic scale test inside a transaction that ROLLBACKs
 *   so production data is never polluted.
 *
 * Usage: node scripts/shop-catalogue-load-test.mjs
 */
import dotenv from 'dotenv';
import pg from 'pg';
import {
  buildPaginationMeta,
  buildShopListFilters,
  clampShopLimit,
  clampShopPage,
  mapShopListProduct,
  mergeSelectedFacetOptions,
  SHOP_PUBLIC_VISIBILITY_SQL,
} from '../src/lib/shop-catalogue.js';

dotenv.config({ path: '.env.local' });
dotenv.config({ path: '.env' });

const { Pool } = pg;
const connectionString = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.NEON_DATABASE_URL;

if (!connectionString) {
  console.error('No database connection string found.');
  process.exit(1);
}

const pool = new Pool({ connectionString });

function percentile(sorted, p) {
  if (!sorted.length) return null;
  const idx = Math.min(sorted.length - 1, Math.ceil((p / 100) * sorted.length) - 1);
  return sorted[idx];
}

async function timeQuery(label, sql, params = []) {
  const samples = [];
  let last = null;
  for (let i = 0; i < 5; i += 1) {
    const t0 = Date.now();
    last = await pool.query(sql, params);
    samples.push(Date.now() - t0);
  }
  samples.sort((a, b) => a - b);
  return {
    label,
    p50: percentile(samples, 50),
    p95: percentile(samples, 95),
    rows: last?.rowCount ?? last?.rows?.length ?? 0,
    samples,
  };
}

async function measureLiveCatalogue() {
  const searchParams = new URLSearchParams('page=1&limit=24&sort=featured');
  const page = clampShopPage(1);
  const limit = clampShopLimit(24);
  const { whereSql, params, orderBy } = buildShopListFilters(searchParams);

  const countSql = `SELECT COUNT(*)::int AS total FROM supplier_materials m WHERE ${whereSql}`;
  const listSql = `
    SELECT m.id, m.name, m.price, m.mrp, m.compare_at_price, m.unit, m.quantity,
           m.image_url, m.category, m.subcategory, m.brand, m.is_featured_deal,
           m.discount_percent, m.stock_status, m.created_at, m.images, m.specifications,
           m.bulk_pricing, m.available_cities, m.supplier_id, m.vendor_id, m.product_code, m.sku
    FROM supplier_materials m
    WHERE ${whereSql}
    ORDER BY ${orderBy}
    LIMIT $${params.length + 1} OFFSET $${params.length + 2}`;

  const countTiming = await timeQuery('live-count', countSql, params);
  const listTiming = await timeQuery('live-list-24', listSql, [...params, limit, 0]);
  const total = Number((await pool.query(countSql, params)).rows[0]?.total) || 0;
  const page1 = await pool.query(listSql, [...params, limit, 0]);
  const page2 = await pool.query(listSql, [...params, limit, limit]);
  const ids1 = new Set(page1.rows.map((r) => r.id));
  const overlap = page2.rows.filter((r) => ids1.has(r.id)).length;
  const payloadKb = Math.round(JSON.stringify(page1.rows.map(mapShopListProduct)).length / 1024);
  const pagination = buildPaginationMeta(page, limit, total);

  const explain = await pool.query(`EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT) ${listSql}`, [...params, limit, 0]);

  return {
    total,
    payloadKb,
    pagination,
    overlapAcrossPages: overlap,
    countTiming,
    listTiming,
    explain: explain.rows.map((r) => r['QUERY PLAN']).join('\n'),
  };
}

async function syntheticScaleTest(targetCount) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    await client.query(`
      CREATE TEMP TABLE tmp_shop_scale (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        brand TEXT,
        category TEXT,
        subcategory TEXT,
        price NUMERIC(10,2),
        quantity INTEGER DEFAULT 10,
        is_available BOOLEAN DEFAULT TRUE,
        is_deleted BOOLEAN DEFAULT FALSE,
        is_archived BOOLEAN DEFAULT FALSE,
        is_featured_deal BOOLEAN DEFAULT FALSE,
        specifications JSONB DEFAULT '{}'::jsonb,
        created_at TIMESTAMP DEFAULT NOW()
      ) ON COMMIT DROP
    `);

    // Insert in batches without touching production tables.
    const batch = 500;
    for (let start = 0; start < targetCount; start += batch) {
      const values = [];
      const params = [];
      let p = 1;
      const end = Math.min(targetCount, start + batch);
      for (let i = start; i < end; i += 1) {
        values.push(`($${p++}, $${p++}, $${p++}, $${p++}, $${p++}, $${p++}, $${p++})`);
        params.push(
          `Scale Product ${i + 1}`,
          i % 7 === 0 ? 'Ambuja' : i % 7 === 1 ? 'Ultratech' : `Brand-${i % 20}`,
          i % 5 === 0 ? 'Building Materials' : `Category-${i % 12}`,
          `Sub-${i % 8}`,
          (50 + (i % 9000)) / 1,
          i % 15 === 0 ? 0 : 10 + (i % 40),
          i % 11 === 0,
        );
      }
      await client.query(
        `INSERT INTO tmp_shop_scale (name, brand, category, subcategory, price, quantity, is_featured_deal)
         VALUES ${values.join(',')}`,
        params,
      );
    }

    await client.query(`CREATE INDEX ON tmp_shop_scale (LOWER(TRIM(category)))`);
    await client.query(`CREATE INDEX ON tmp_shop_scale (LOWER(TRIM(brand)))`);
    await client.query(`CREATE INDEX ON tmp_shop_scale (price ASC, id ASC)`);
    await client.query(`CREATE INDEX ON tmp_shop_scale (created_at DESC, id DESC)`);
    await client.query('ANALYZE tmp_shop_scale');

    const where = `
      is_available = TRUE
      AND COALESCE(is_deleted, FALSE) = FALSE
      AND COALESCE(is_archived, FALSE) = FALSE
      AND COALESCE(specifications->'__approval__'->>'status', 'approved') = 'approved'
    `;

    const samples = [];
    for (let i = 0; i < 5; i += 1) {
      const t0 = Date.now();
      await client.query(
        `SELECT id, name, brand, category, price
         FROM tmp_shop_scale
         WHERE ${where}
         ORDER BY is_featured_deal DESC, created_at DESC, id DESC
         LIMIT 24 OFFSET 0`,
      );
      samples.push(Date.now() - t0);
    }
    samples.sort((a, b) => a - b);

    const deepSamples = [];
    const deepOffset = Math.max(0, targetCount - 48);
    for (let i = 0; i < 5; i += 1) {
      const t0 = Date.now();
      await client.query(
        `SELECT id, name, brand, category, price
         FROM tmp_shop_scale
         WHERE ${where}
         ORDER BY price ASC NULLS LAST, id ASC
         LIMIT 24 OFFSET $1`,
        [deepOffset],
      );
      deepSamples.push(Date.now() - t0);
    }
    deepSamples.sort((a, b) => a - b);

    const brandFacetT0 = Date.now();
    const brandFacet = await client.query(
      `SELECT brand AS value, COUNT(*)::int AS count
       FROM tmp_shop_scale
       WHERE ${where} AND brand IS NOT NULL
       GROUP BY brand
       ORDER BY count DESC
       LIMIT 50`,
    );
    const brandFacetMs = Date.now() - brandFacetT0;

    const explain = await client.query(
      `EXPLAIN (ANALYZE, BUFFERS, FORMAT TEXT)
       SELECT id FROM tmp_shop_scale
       WHERE ${where}
       ORDER BY price ASC NULLS LAST, id ASC
       LIMIT 24 OFFSET $1`,
      [Math.floor(targetCount / 2)],
    );

    await client.query('ROLLBACK');
    return {
      targetCount,
      page1p50: percentile(samples, 50),
      page1p95: percentile(samples, 95),
      deepOffsetp50: percentile(deepSamples, 50),
      deepOffsetp95: percentile(deepSamples, 95),
      brandFacetMs,
      brandFacetCount: brandFacet.rowCount,
      explainDeep: explain.rows.map((r) => r['QUERY PLAN']).join('\n'),
    };
  } catch (error) {
    try { await client.query('ROLLBACK'); } catch { /* ignore */ }
    throw error;
  } finally {
    client.release();
  }
}

function assert(condition, message) {
  if (!condition) throw new Error(`Assertion failed: ${message}`);
}

async function runUnitAssertions() {
  assert(clampShopLimit(999) === 48, 'max limit 48');
  assert(clampShopPage(0) === 1, 'page floor 1');
  const empty = buildPaginationMeta(1, 24, 0);
  assert(empty.totalPages === 0 && empty.hasNextPage === false, 'empty pagination');
  const full = buildPaginationMeta(2, 24, 50);
  assert(full.hasNextPage === true && full.hasPreviousPage === true, 'mid pagination');
  const merged = mergeSelectedFacetOptions([{ value: 'A', count: 3 }], ['A', 'B']);
  assert(merged.some((e) => e.value === 'B' && e.count === 0), 'selected facet remains visible');
  assert(SHOP_PUBLIC_VISIBILITY_SQL.includes('approved'), 'visibility sql present');
  console.log('✅ unit assertions passed');
}

async function main() {
  console.log('=== Shop catalogue load test ===');
  await runUnitAssertions();

  const live = await measureLiveCatalogue();
  console.log('\n--- Live catalogue ---');
  console.log(JSON.stringify({
    total: live.total,
    payloadKb: live.payloadKb,
    pagination: live.pagination,
    overlapAcrossPages: live.overlapAcrossPages,
    countMs: { p50: live.countTiming.p50, p95: live.countTiming.p95 },
    listMs: { p50: live.listTiming.p50, p95: live.listTiming.p95 },
  }, null, 2));
  console.log('\nEXPLAIN ANALYZE (live list page 1):\n' + live.explain);

  const scales = [500, 5000, 10000];
  const synthetic = [];
  for (const n of scales) {
    console.log(`\n--- Synthetic scale ${n} (temp table, rolled back) ---`);
    const result = await syntheticScaleTest(n);
    synthetic.push(result);
    console.log(JSON.stringify({
      targetCount: result.targetCount,
      page1Ms: { p50: result.page1p50, p95: result.page1p95 },
      deepOffsetMs: { p50: result.deepOffsetp50, p95: result.deepOffsetp95 },
      brandFacetMs: result.brandFacetMs,
    }, null, 2));
  }

  console.log('\n=== SUMMARY ===');
  console.log(JSON.stringify({ live: {
    total: live.total,
    listP95: live.listTiming.p95,
    overlapAcrossPages: live.overlapAcrossPages,
  }, synthetic: synthetic.map((s) => ({
    n: s.targetCount,
    page1p95: s.page1p95,
    deepOffsetp95: s.deepOffsetp95,
  })) }, null, 2));
}

main()
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  })
  .finally(async () => {
    await pool.end();
  });
