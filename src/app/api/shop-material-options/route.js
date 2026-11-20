import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { createInitializationGuard, isDatabaseConnectionError } from '@/lib/api-utils';
import {
  SHOP_LIST_CACHE_TTL_MS,
  SHOP_LIST_DEFAULT_LIMIT,
  SHOP_PUBLIC_VISIBILITY_SQL,
  SHOP_SELLING_PRICE_SQL,
  buildPaginationMeta,
  buildShopListCacheKey,
  buildShopListFilters,
  clampShopLimit,
  clampShopPage,
  mapShopListProduct,
  normalizeFacetRows,
  parseShopIds,
} from '@/lib/shop-catalogue';

const productCache = (globalThis.__shopProductCache = globalThis.__shopProductCache || new Map());

const listCacheHeaders = {
  // Keep short: listing includes live-ish price and stock.
  'Cache-Control': 'public, max-age=15, s-maxage=20, stale-while-revalidate=60',
};

const ensureTable = createInitializationGuard(async () => {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS supplier_materials (
      id SERIAL PRIMARY KEY,
      supplier_id INTEGER NOT NULL,
      vendor_id INTEGER,
      name VARCHAR(255) NOT NULL,
      description TEXT,
      quote_price_range VARCHAR(100),
      price NUMERIC(10,2),
      unit VARCHAR(100),
      quantity INTEGER DEFAULT 0,
      image_url TEXT,
      category VARCHAR(255),
      subcategory VARCHAR(255),
      brand VARCHAR(120),
      compare_at_price NUMERIC(10,2),
      is_featured_deal BOOLEAN DEFAULT FALSE,
      images JSONB DEFAULT '[]'::jsonb,
      specifications JSONB DEFAULT '{}'::jsonb,
      bulk_pricing JSONB DEFAULT '[]'::jsonb,
      available_cities JSONB DEFAULT '[]'::jsonb,
      is_available BOOLEAN DEFAULT TRUE,
      created_at TIMESTAMP DEFAULT NOW(),
      updated_at TIMESTAMP DEFAULT NOW()
    )
  `);
  await pool.query(`ALTER TABLE supplier_materials
    ADD COLUMN IF NOT EXISTS vendor_id INTEGER,
    ADD COLUMN IF NOT EXISTS brand VARCHAR(120),
    ADD COLUMN IF NOT EXISTS subcategory VARCHAR(255),
    ADD COLUMN IF NOT EXISTS quote_price_range VARCHAR(100),
    ADD COLUMN IF NOT EXISTS compare_at_price NUMERIC(10,2),
    ADD COLUMN IF NOT EXISTS is_featured_deal BOOLEAN DEFAULT FALSE,
    ADD COLUMN IF NOT EXISTS images JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS specifications JSONB DEFAULT '{}'::jsonb,
    ADD COLUMN IF NOT EXISTS bulk_pricing JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS available_cities JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS faqs JSONB DEFAULT '[]'::jsonb,
    ADD COLUMN IF NOT EXISTS returns_policy TEXT,
    ADD COLUMN IF NOT EXISTS highlights JSONB DEFAULT '[]'::jsonb`);
});

function uniq(values) {
  return [...new Set(values.map((v) => String(v || '').trim()).filter(Boolean))];
}

const LIST_SELECT = `
  SELECT m.id, m.product_code, m.sku, m.barcode, m.mpn, m.keywords, m.product_url_slug,
    m.supplier_id, m.vendor_id, m.name, m.quote_price_range, m.price,
    m.mrp, m.discount_percent, m.gst_percent, m.is_tax_inclusive, m.unit, m.quantity,
    m.stock_status, m.has_variants, m.image_url, m.category, m.subcategory,
    m.brand, m.compare_at_price, m.is_featured_deal,
    CASE
      WHEN jsonb_typeof(m.images) = 'array' AND jsonb_array_length(m.images) > 0
        THEN jsonb_build_array(m.images->0)
      ELSE '[]'::jsonb
    END AS images,
    m.specifications, m.bulk_pricing,
    c.image AS category_image,
    CASE
      WHEN jsonb_array_length(COALESCE(m.available_cities, '[]'::jsonb)) > 0 THEN m.available_cities
      WHEN m.vendor_id IS NOT NULL AND v.city IS NOT NULL THEN jsonb_build_array(v.city)
      WHEN m.supplier_id <> 0 AND s.city IS NOT NULL THEN jsonb_build_array(s.city)
      ELSE '[]'::jsonb
    END AS available_cities,
    m.created_at
  FROM supplier_materials m
  LEFT JOIN suppliers s ON s.id = m.supplier_id
  LEFT JOIN vendors v ON v.id = m.vendor_id
  LEFT JOIN shop_categories c ON LOWER(TRIM(c.name)) = LOWER(TRIM(m.category))
`;

async function handleProductDetail(searchParams) {
  const idParam = searchParams.get('id');
  if (!idParam) return null;

  const rawId = String(idParam).replace(/^supplier-/, '');

  if (rawId.startsWith('catalog-')) {
    const parts = rawId.split('-');
    const catId = parseInt(parts[1], 10);
    const typeIdx = parseInt(parts[2], 10);

    if (!isNaN(catId)) {
      const catRes = await pool.query(
        `SELECT id, name, unit, image, images, types, price_range
         FROM shop_categories
         WHERE id = $1`,
        [catId],
      );

      if (catRes.rows.length > 0) {
        const cat = catRes.rows[0];
        const types = Array.isArray(cat.types) && cat.types.length ? cat.types : [cat.name];
        const name = types[typeIdx] || types[0] || cat.name;
        const catImg = cat.image || '';
        const catImgs = Array.isArray(cat.images) && cat.images.length > 0 ? cat.images : (catImg ? [catImg] : []);

        const product = {
          id: `catalog-${cat.id}-${isNaN(typeIdx) ? 0 : typeIdx}`,
          product_id: `catalog-${cat.id}-${isNaN(typeIdx) ? 0 : typeIdx}`,
          supplier_id: 0,
          vendor_id: null,
          name,
          description: `Standard ${name} material for construction. Available for quotation and delivery from verified suppliers in your city.`,
          quote_price_range: cat.price_range || '',
          price: null,
          unit: cat.unit || 'unit',
          quantity: 10000,
          image_url: catImg,
          category_image: catImg,
          category: cat.name,
          subcategory: '',
          brand: '',
          compare_at_price: null,
          is_featured_deal: false,
          images: catImgs,
          specifications: {},
          bulk_pricing: [],
          available_cities: [],
          created_at: new Date().toISOString(),
        };

        return NextResponse.json({ success: true, data: { product } });
      }
    }
    return NextResponse.json({ success: false, error: 'Catalog material not found' }, { status: 404 });
  }

  const numId = parseInt(rawId, 10);
  const lookupRes = await pool.query(
    `SELECT m.id, m.product_code, m.sku, m.barcode, m.barcode_type, m.mpn, m.variant_id,
      m.keywords, m.product_url_slug, m.supplier_id, m.vendor_id, m.name, m.description,
      m.quote_price_range, m.price, m.mrp, m.discount_percent, m.discount_amount,
      m.gst_percent, m.is_tax_inclusive, m.currency, m.unit, m.quantity, m.image_url,
      m.category, m.subcategory, m.brand, m.compare_at_price, m.weight, m.weight_unit,
      m.dimensions, m.measurement_unit, m.low_stock_threshold, m.stock_status,
      m.has_variants, m.status, m.is_archived, m.is_deleted, m.is_featured_deal,
      m.images, m.specifications, m.bulk_pricing,
      COALESCE(m.faqs, '[]'::jsonb) AS faqs, m.returns_policy, COALESCE(m.highlights, '[]'::jsonb) AS highlights,
      c.image AS category_image, c.images AS category_images,
      CASE
        WHEN jsonb_array_length(COALESCE(m.available_cities, '[]'::jsonb)) > 0 THEN m.available_cities
        WHEN m.vendor_id IS NOT NULL AND v.city IS NOT NULL THEN jsonb_build_array(v.city)
        WHEN m.supplier_id <> 0 AND s.city IS NOT NULL THEN jsonb_build_array(s.city)
        ELSE '[]'::jsonb
      END AS available_cities,
      m.created_at
     FROM supplier_materials m
     LEFT JOIN suppliers s ON s.id = m.supplier_id
     LEFT JOIN vendors v ON v.id = m.vendor_id
     LEFT JOIN shop_categories c ON LOWER(TRIM(c.name)) = LOWER(TRIM(m.category))
     WHERE (m.id = $1 OR m.product_code = $2 OR m.product_url_slug = $2)
       AND ${SHOP_PUBLIC_VISIBILITY_SQL}`,
    [isNaN(numId) ? -1 : numId, rawId],
  );

  if (lookupRes.rows.length === 0) {
    return NextResponse.json({ success: false, error: 'Product not found' }, { status: 404 });
  }

  const row = lookupRes.rows[0];
  const specifications = { ...(row.specifications || {}) };
  delete specifications.__approval__;

  const fallbackImage = row.category_image || '';
  const rawImages = Array.isArray(row.images) ? row.images.filter(Boolean) : [];
  const resolvedImageUrl = row.image_url || fallbackImage || '';
  const productImages = rawImages.length > 0 ? rawImages : (resolvedImageUrl ? [resolvedImageUrl] : []);

  let variants = [];
  try {
    const varRes = await pool.query(
      `SELECT id, variant_code, sku, barcode, size, color, material, style,
              mrp, selling_price, stock_quantity, stock_status, image_url, attributes, is_active
       FROM product_variants
       WHERE product_id = $1 AND is_active = TRUE
       ORDER BY id ASC`,
      [row.id],
    );
    variants = varRes.rows || [];
  } catch (err) {
    console.warn('Could not load product variants for', row.id, err.message);
  }

  const effectiveMrp = row.mrp !== null ? Number(row.mrp) : (row.compare_at_price !== null ? Number(row.compare_at_price) : null);
  const effectiveSellingPrice = row.price !== null ? Number(row.price) : (effectiveMrp || 0);

  const product = {
    id: row.id,
    product_id: row.id,
    product_code: row.product_code,
    sku: row.sku,
    barcode: row.barcode,
    barcode_type: row.barcode_type,
    mpn: row.mpn,
    variant_id: row.variant_id,
    keywords: row.keywords,
    product_url_slug: row.product_url_slug,
    supplier_id: row.supplier_id,
    vendor_id: row.vendor_id,
    name: row.name,
    description: row.description || '',
    quote_price_range: row.quote_price_range || '',
    price: effectiveSellingPrice,
    mrp: effectiveMrp,
    compare_at_price: effectiveMrp,
    discount_percent: row.discount_percent,
    discount_amount: row.discount_amount,
    gst_percent: row.gst_percent !== null ? Number(row.gst_percent) : 18,
    is_tax_inclusive: row.is_tax_inclusive !== false,
    currency: row.currency || 'INR',
    unit: row.unit || '',
    quantity: row.quantity,
    // Inventory is authoritative. This also keeps old rows that contain a
    // stale saved status consistent until they are edited again.
    stock_status: Number(row.quantity) <= 0
      ? 'out_of_stock'
      : (Number(row.quantity) <= Number(row.low_stock_threshold ?? 5) ? 'low_stock' : 'in_stock'),
    low_stock_threshold: row.low_stock_threshold || 10,
    weight: row.weight,
    weight_unit: row.weight_unit || 'kg',
    dimensions: row.dimensions,
    measurement_unit: row.measurement_unit,
    has_variants: row.has_variants === true || variants.length > 0,
    variants,
    image_url: resolvedImageUrl,
    category_image: fallbackImage,
    category: row.category || '',
    subcategory: row.subcategory || '',
    brand: row.brand || '',
    is_featured_deal: row.is_featured_deal === true,
    images: productImages,
    specifications,
    bulk_pricing: Array.isArray(row.bulk_pricing) ? row.bulk_pricing : [],
    available_cities: Array.isArray(row.available_cities) ? row.available_cities : [],
    faqs: Array.isArray(row.faqs) ? row.faqs : [],
    returns_policy: row.returns_policy || '',
    highlights: Array.isArray(row.highlights) ? row.highlights : [],
    created_at: row.created_at,
  };

  return NextResponse.json(
    { success: true, data: { product } },
    { headers: { 'Cache-Control': 'public, max-age=60, s-maxage=120, stale-while-revalidate=300' } },
  );
}

export async function GET(req) {
  try {
    await ensureTable();
    const { searchParams } = new URL(req.url);

    const detailResponse = await handleProductDetail(searchParams);
    if (detailResponse) return detailResponse;

    const bypassCache = searchParams.get('fresh') === '1';
    const includeFacets = searchParams.get('facets') === '1' || searchParams.get('facets') === 'true';
    // Paginate by default. Legacy callers that only pass category (quote modal /
    // related products) still get a bounded page instead of the full catalogue.
    const page = clampShopPage(searchParams.get('page') || 1);
    const limit = clampShopLimit(
      searchParams.get('limit') || SHOP_LIST_DEFAULT_LIMIT,
      SHOP_LIST_DEFAULT_LIMIT,
    );
    const offset = (page - 1) * limit;

    const cacheKey = buildShopListCacheKey(searchParams);
    const cached = productCache.get(cacheKey);
    if (!bypassCache && cached?.expiresAt > Date.now()) {
      return NextResponse.json(cached.payload, { headers: listCacheHeaders });
    }

    // Reject oversized ids lists early (also capped in parseShopIds).
    if (parseShopIds(searchParams.get('ids')).length === 0 && String(searchParams.get('ids') || '').trim()) {
      // ids provided but none valid
      return NextResponse.json({
        success: true,
        data: {
          products: [],
          types: [],
          units: [],
          pagination: buildPaginationMeta(page, limit, 0),
        },
      }, { headers: listCacheHeaders });
    }

    const { whereSql, params, orderBy } = buildShopListFilters(searchParams);
    const countParams = [...params];
    const listParams = [...params, limit, offset];
    const limitPlaceholder = `$${params.length + 1}`;
    const offsetPlaceholder = `$${params.length + 2}`;

    const countPromise = pool.query(
      `SELECT COUNT(*)::int AS total
       FROM supplier_materials m
       WHERE ${whereSql}`,
      countParams,
    );

    const listPromise = pool.query(
      `${LIST_SELECT}
       WHERE ${whereSql}
       ORDER BY ${orderBy}
       LIMIT ${limitPlaceholder} OFFSET ${offsetPlaceholder}`,
      listParams,
    );

    // Brand facets exclude the brand filter so other brands stay visible/selectable.
    const brandFacetFilters = includeFacets
      ? buildShopListFilters(searchParams, { exclude: ['brands'] })
      : null;
    // Attribute/price/availability facets use the current result set filters
    // (excluding their own dimension where noted).
    const attrFacetFilters = includeFacets
      ? buildShopListFilters(searchParams, {
        exclude: ['types', 'thicknesses', 'sizes', 'colors', 'materials', 'grades', 'packSizes', 'availability', 'price'],
      })
      : null;

    const brandFacetsPromise = brandFacetFilters
      ? pool.query(
        `SELECT NULLIF(TRIM(m.brand), '') AS value, COUNT(*)::int AS count
         FROM supplier_materials m
         WHERE ${brandFacetFilters.whereSql}
           AND NULLIF(TRIM(m.brand), '') IS NOT NULL
         GROUP BY 1
         ORDER BY count DESC, value ASC
         LIMIT 50`,
        brandFacetFilters.params,
      )
      : Promise.resolve({ rows: [] });

    const categoryFacetsPromise = includeFacets
      ? pool.query(
        `SELECT NULLIF(TRIM(m.category), '') AS value, COUNT(*)::int AS count
         FROM supplier_materials m
         WHERE ${whereSql}
           AND NULLIF(TRIM(m.category), '') IS NOT NULL
         GROUP BY 1
         ORDER BY count DESC, value ASC
         LIMIT 50`,
        countParams,
      )
      : Promise.resolve({ rows: [] });

    const summaryFacetsPromise = attrFacetFilters
      ? pool.query(
        `SELECT
           COUNT(*) FILTER (
             WHERE COALESCE(m.quantity, 0) > 0 AND COALESCE(m.stock_status, 'in_stock') <> 'out_of_stock'
           )::int AS in_stock,
           COUNT(*) FILTER (
             WHERE COALESCE(m.quantity, 0) <= 0 OR COALESCE(m.stock_status, '') = 'out_of_stock'
           )::int AS out_of_stock,
           COUNT(*) FILTER (WHERE ${SHOP_SELLING_PRICE_SQL} < 500)::int AS under_500,
           COUNT(*) FILTER (WHERE ${SHOP_SELLING_PRICE_SQL} >= 500 AND ${SHOP_SELLING_PRICE_SQL} <= 1000)::int AS range_500_1000,
           COUNT(*) FILTER (WHERE ${SHOP_SELLING_PRICE_SQL} > 1000 AND ${SHOP_SELLING_PRICE_SQL} <= 5000)::int AS range_1000_5000,
           COUNT(*) FILTER (WHERE ${SHOP_SELLING_PRICE_SQL} > 5000)::int AS above_5000
         FROM supplier_materials m
         WHERE ${attrFacetFilters.whereSql}`,
        attrFacetFilters.params,
      )
      : Promise.resolve({ rows: [{}] });

    const attributeFacetsPromise = attrFacetFilters
      ? pool.query(
        `WITH base AS (
           SELECT m.specifications
           FROM supplier_materials m
           WHERE ${attrFacetFilters.whereSql}
         )
         SELECT facet, value, COUNT(*)::int AS count
         FROM (
           SELECT 'types' AS facet, NULLIF(TRIM(COALESCE(specifications->>'type', specifications->>'Type', specifications->>'finish')), '') AS value FROM base
           UNION ALL
           SELECT 'thicknesses', NULLIF(TRIM(COALESCE(specifications->>'thickness', specifications->>'Thickness')), '') FROM base
           UNION ALL
           SELECT 'sizes', NULLIF(TRIM(COALESCE(specifications->>'size', specifications->>'Size')), '') FROM base
           UNION ALL
           SELECT 'colors', NULLIF(TRIM(COALESCE(specifications->>'color', specifications->>'Color', specifications->>'shade')), '') FROM base
           UNION ALL
           SELECT 'materials', NULLIF(TRIM(COALESCE(specifications->>'material', specifications->>'Material')), '') FROM base
           UNION ALL
           SELECT 'grades', NULLIF(TRIM(COALESCE(specifications->>'grade', specifications->>'Grade')), '') FROM base
           UNION ALL
           SELECT 'packSizes', NULLIF(TRIM(COALESCE(specifications->>'pack_size', specifications->>'packSize', specifications->>'Pack Size')), '') FROM base
         ) extracted
         WHERE value IS NOT NULL
         GROUP BY facet, value
         ORDER BY facet ASC, count DESC, value ASC`,
        attrFacetFilters.params,
      )
      : Promise.resolve({ rows: [] });

    const [countRes, listRes, brandFacetsRes, categoryFacetsRes, summaryFacetsRes, attributeFacetsRes] = await Promise.all([
      countPromise,
      listPromise,
      brandFacetsPromise,
      categoryFacetsPromise,
      summaryFacetsPromise,
      attributeFacetsPromise,
    ]);
    const total = Number(countRes.rows[0]?.total) || 0;
    const products = listRes.rows.map(mapShopListProduct);
    const pagination = buildPaginationMeta(page, limit, total);

    const attributeFacetMap = {
      types: [],
      thicknesses: [],
      sizes: [],
      colors: [],
      materials: [],
      grades: [],
      packSizes: [],
    };
    for (const row of attributeFacetsRes.rows || []) {
      if (!attributeFacetMap[row.facet]) continue;
      attributeFacetMap[row.facet].push({
        value: row.value,
        label: row.value,
        count: Number(row.count) || 0,
      });
    }
    // Cap each attribute facet list for payload size.
    Object.keys(attributeFacetMap).forEach((key) => {
      attributeFacetMap[key] = attributeFacetMap[key].slice(0, 40);
    });

    const summary = summaryFacetsRes.rows?.[0] || {};
    const payload = {
      success: true,
      data: {
        products,
        types: uniq(products.map((p) => p.name)),
        units: uniq(products.map((p) => p.unit)),
        pagination,
        facets: includeFacets
          ? {
            brands: normalizeFacetRows(
              (brandFacetsRes.rows || []).map((row) => ({ value: row.value, label: row.value, count: row.count })),
            ),
            categories: normalizeFacetRows(
              (categoryFacetsRes.rows || []).map((row) => ({ value: row.value, label: row.value, count: row.count })),
            ),
            availability: [
              { value: 'in_stock', label: 'In stock', count: Number(summary.in_stock) || 0 },
              { value: 'out_of_stock', label: 'Out of stock', count: Number(summary.out_of_stock) || 0 },
            ].filter((entry) => entry.count > 0),
            priceRanges: [
              { value: 'under-500', label: 'Under ₹500', count: Number(summary.under_500) || 0 },
              { value: '500-1000', label: '₹500 - ₹1,000', count: Number(summary.range_500_1000) || 0 },
              { value: '1000-5000', label: '₹1,000 - ₹5,000', count: Number(summary.range_1000_5000) || 0 },
              { value: 'above-5000', label: 'Above ₹5,000', count: Number(summary.above_5000) || 0 },
            ].filter((entry) => entry.count > 0),
            ...attributeFacetMap,
          }
          : undefined,
      },
    };

    productCache.set(cacheKey, {
      expiresAt: Date.now() + SHOP_LIST_CACHE_TTL_MS,
      payload,
    });

    // Bound cache size so filter combinations cannot grow without limit.
    if (productCache.size > 200) {
      const oldest = productCache.keys().next().value;
      if (oldest) productCache.delete(oldest);
    }

    return NextResponse.json(payload, { headers: listCacheHeaders });
  } catch (error) {
    console.error('GET shop-material-options error:', error);
    const isConnectionError = isDatabaseConnectionError(error);
    return NextResponse.json(
      { success: false, error: isConnectionError ? 'Database connection unavailable' : error.message },
      { status: isConnectionError ? 503 : 500 },
    );
  }
}
