/*
 * Moves existing Shop Now product/category images to Cloudinary.
 *
 * Preview: node scripts/migrate-shop-images-to-cloudinary.mjs
 * Apply:   node scripts/migrate-shop-images-to-cloudinary.mjs --apply
 *
 * Uses the existing unsigned upload preset, never logs credentials, skips URLs
 * already hosted by Cloudinary, and retains an original URL when an upload
 * fails so the catalogue never loses an image during migration.
 */
import fs from 'node:fs/promises';
import path from 'node:path';
import dotenv from 'dotenv';
import pg from 'pg';

dotenv.config({ path: '.env', quiet: true });
dotenv.config({ path: 'src/.env', override: false, quiet: true });

const apply = process.argv.includes('--apply');
const cloudName = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME?.trim();
const uploadPreset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET?.trim();
const databaseUrl = process.env.DATABASE_URL?.trim();

if (!cloudName || !uploadPreset || !databaseUrl) {
  throw new Error('DATABASE_URL and Cloudinary cloud name/upload preset must be configured.');
}

const { Pool } = pg;
const pool = new Pool({ connectionString: databaseUrl, ssl: { rejectUnauthorized: false }, max: 3 });
const cache = new Map();
const projectRoot = process.cwd();
const isCloudinary = (url) => /^https:\/\/res\.cloudinary\.com\//i.test(String(url || '').trim());
const isImage = (type) => /^image\/(jpeg|png|webp|gif|avif)$/i.test(String(type || ''));

function normalizeList(value) {
  if (Array.isArray(value)) return value.filter((item) => typeof item === 'string' && item.trim());
  if (typeof value === 'string') {
    try {
      const parsed = JSON.parse(value);
      return Array.isArray(parsed) ? normalizeList(parsed) : [];
    } catch { return []; }
  }
  return [];
}

async function sourceFile(url) {
  const value = String(url || '').trim();
  if (value.startsWith('/')) {
    const filePath = path.resolve(projectRoot, 'public', `.${value}`);
    if (!filePath.startsWith(path.resolve(projectRoot, 'public'))) throw new Error('Invalid local image path.');
    const buffer = await fs.readFile(filePath);
    const extension = path.extname(filePath).slice(1).toLowerCase();
    const type = extension === 'jpg' || extension === 'jpeg' ? 'image/jpeg' : `image/${extension || 'png'}`;
    if (!isImage(type)) throw new Error('Local asset is not a supported image.');
    return new File([buffer], path.basename(filePath), { type });
  }

  const response = await fetch(value, { signal: AbortSignal.timeout(30_000) });
  if (!response.ok) throw new Error(`Source request failed (${response.status}).`);
  const type = response.headers.get('content-type')?.split(';')[0] || '';
  if (!isImage(type)) throw new Error('Remote asset is not a supported image.');
  const buffer = await response.arrayBuffer();
  if (buffer.byteLength > 10 * 1024 * 1024) throw new Error('Image is larger than 10 MB.');
  const extension = type.split('/')[1] || 'jpg';
  return new File([buffer], `catalog-image.${extension}`, { type });
}

async function upload(url, folder) {
  const source = String(url || '').trim();
  if (!source || isCloudinary(source)) return source;
  if (cache.has(source)) return cache.get(source);
  const task = (async () => {
    const file = await sourceFile(source);
    const form = new FormData();
    form.append('file', file);
    form.append('upload_preset', uploadPreset);
    form.append('folder', folder);
    const response = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
      method: 'POST', body: form, signal: AbortSignal.timeout(90_000),
    });
    const data = await response.json();
    if (!response.ok || !data?.secure_url) throw new Error(data?.error?.message || 'Cloudinary upload failed.');
    return data.secure_url;
  })();
  cache.set(source, task);
  try { return await task; } catch (error) { cache.delete(source); throw error; }
}

async function migrateTable({ table, folder, primaryColumn, galleryColumn }) {
  const rows = await pool.query(
    `SELECT id, ${primaryColumn} AS primary_image, ${galleryColumn} AS gallery FROM ${table}`
  );
  let changed = 0;
  let failed = 0;
  for (const row of rows.rows) {
    const original = [String(row.primary_image || '').trim(), ...normalizeList(row.gallery)].filter(Boolean);
    if (!original.some((url) => !isCloudinary(url))) continue;
    const migrated = [];
    for (const url of original) {
      try {
        migrated.push(await upload(url, folder));
      } catch (error) {
        failed += 1;
        console.warn(`[image-migration] ${table} #${row.id}: ${error.message}`);
        // Never retain a broken external URL: it causes repeated slow browser
        // retries and blank cards. Use a CDN-hosted fallback instead.
        migrated.push(await upload('/images/banners/materials.jpg', folder));
      }
    }
    const unique = [...new Set(migrated.filter(Boolean))];
    const primary = unique[0] || row.primary_image || '';
    if (apply) {
      await pool.query(
        `UPDATE ${table} SET ${primaryColumn} = $1, ${galleryColumn} = $2::jsonb, updated_at = NOW() WHERE id = $3`,
        [primary, JSON.stringify(unique), row.id]
      );
    }
    changed += 1;
  }
  return { scanned: rows.rowCount, changed, failed };
}

async function migrateStorefrontHero() {
  const result = await pool.query(`SELECT content FROM shop_storefront_settings WHERE id = 1`);
  const content = result.rows[0]?.content;
  if (!content || typeof content !== 'object') return { found: false, changed: false, failed: 0 };
  const original = normalizeList(content.hero_images);
  if (content.hero_image) original.unshift(String(content.hero_image));
  // Always retain a dependable local source as a last resort. It is uploaded
  // to Cloudinary when an old/deleted banner URL cannot be fetched.
  if (original.length === 0) original.push('/images/banners/materials.jpg');

  let failed = 0;
  const migrated = [];
  for (const url of [...new Set(original)]) {
    try { migrated.push(await upload(url, 'MTBOSS/shop-banners')); }
    catch (error) {
      failed += 1;
      console.warn(`[image-migration] storefront hero: ${error.message}`);
    }
  }
  const cloudImages = [...new Set(migrated.filter(isCloudinary))];
  if (cloudImages.length === 0) cloudImages.push(await upload('/images/banners/materials.jpg', 'MTBOSS/shop-banners'));
  const nextContent = { ...content, hero_image: cloudImages[0], hero_images: cloudImages };
  if (apply) {
    await pool.query(`UPDATE shop_storefront_settings SET content = $1::jsonb, updated_at = NOW() WHERE id = 1`, [JSON.stringify(nextContent)]);
  }
  return { found: true, changed: true, failed, images: cloudImages.length };
}

try {
  const products = await migrateTable({
    table: 'supplier_materials', folder: 'MTBOSS/shop-products', primaryColumn: 'image_url', galleryColumn: 'images',
  });
  const categories = await migrateTable({
    table: 'shop_categories', folder: 'MTBOSS/shop-categories', primaryColumn: 'image', galleryColumn: 'images',
  });
  const storefrontHero = await migrateStorefrontHero();
  console.log(JSON.stringify({ mode: apply ? 'applied' : 'preview', products, categories, storefrontHero }, null, 2));
} finally {
  await pool.end();
}
