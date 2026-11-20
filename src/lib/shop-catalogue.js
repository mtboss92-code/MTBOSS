/**
 * Shared Shop Now catalogue helpers: listing filters, slim card mapping,
 * cache keys, and facet helpers used by /api/shop-material-options.
 */

export const SHOP_LIST_DEFAULT_LIMIT = 24;
export const SHOP_LIST_MAX_LIMIT = 48;
export const SHOP_LIST_MAX_IDS = 48;
/** Listing cache stays short so price/stock drift stays within business limits. */
export const SHOP_LIST_CACHE_TTL_MS = 20_000;

export const SHOP_SELLING_PRICE_SQL = `COALESCE(m.price, m.mrp, m.compare_at_price, 0)`;

/** Visibility rules shared by list + detail queries. */
export const SHOP_PUBLIC_VISIBILITY_SQL = `
  m.is_available = TRUE
  AND COALESCE(m.is_deleted, FALSE) = FALSE
  AND COALESCE(m.is_archived, FALSE) = FALSE
  AND COALESCE(m.specifications->'__approval__'->>'status', 'approved') = 'approved'
`;

export function clampShopLimit(value, fallback = SHOP_LIST_DEFAULT_LIMIT) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed) || parsed < 1) return fallback;
  return Math.min(SHOP_LIST_MAX_LIMIT, parsed);
}

export function clampShopPage(value) {
  const parsed = Number.parseInt(String(value ?? ''), 10);
  if (!Number.isFinite(parsed) || parsed < 1) return 1;
  return Math.min(parsed, 5000);
}

export function parsePriceRanges(raw) {
  const values = String(raw || '')
    .split(',')
    .map((entry) => entry.trim().toLowerCase())
    .filter(Boolean);
  const clauses = [];
  for (const range of values) {
    if (range === 'under-500') clauses.push({ key: 'under-500', min: null, max: 499.999 });
    else if (range === '500-1000') clauses.push({ key: '500-1000', min: 500, max: 1000 });
    else if (range === '1000-5000') clauses.push({ key: '1000-5000', min: 1000.001, max: 5000 });
    else if (range === 'above-5000') clauses.push({ key: 'above-5000', min: 5000.001, max: null });
  }
  return clauses;
}

export function parseCsvParam(raw) {
  return [...new Set(
    String(raw || '')
      .split(',')
      .map((entry) => entry.trim())
      .filter(Boolean),
  )];
}

export function parseShopIds(raw) {
  return parseCsvParam(raw)
    .map((id) => Number.parseInt(String(id).replace(/^supplier-/, ''), 10))
    .filter((id) => Number.isInteger(id) && id > 0)
    .slice(0, SHOP_LIST_MAX_IDS);
}

/**
 * Build WHERE + params for the public catalogue list.
 * @param {URLSearchParams} searchParams
 * @param {{ exclude?: string[] }} [options] exclude facet dimensions for accurate facet counts
 */
export function buildShopListFilters(searchParams, options = {}) {
  const exclude = new Set(options.exclude || []);
  const category = String(searchParams.get('category') || '').trim();
  const subcategory = String(searchParams.get('subcategory') || '').trim();
  const parent = String(searchParams.get('parent') || '').trim();
  const search = String(searchParams.get('q') || searchParams.get('search') || '').trim();
  const brands = parseCsvParam(searchParams.get('brand') || searchParams.get('brands'));
  const types = parseCsvParam(searchParams.get('type') || searchParams.get('types'));
  const thicknesses = parseCsvParam(searchParams.get('thickness') || searchParams.get('thicknesses'));
  const sizes = parseCsvParam(searchParams.get('size') || searchParams.get('sizes'));
  const colors = parseCsvParam(searchParams.get('color') || searchParams.get('colors'));
  const materials = parseCsvParam(searchParams.get('material') || searchParams.get('materials'));
  const grades = parseCsvParam(searchParams.get('grade') || searchParams.get('grades'));
  const packSizes = parseCsvParam(searchParams.get('pack_size') || searchParams.get('packSizes'));
  const availability = String(searchParams.get('availability') || searchParams.get('stock') || '').trim().toLowerCase();
  const section = String(searchParams.get('section') || '').trim().toLowerCase();
  const sort = String(searchParams.get('sort') || 'featured').trim().toLowerCase();
  const minPriceRaw = searchParams.get('minPrice');
  const maxPriceRaw = searchParams.get('maxPrice');
  const minPrice = minPriceRaw == null || minPriceRaw === '' ? Number.NaN : Number(minPriceRaw);
  const maxPrice = maxPriceRaw == null || maxPriceRaw === '' ? Number.NaN : Number(maxPriceRaw);
  const priceRanges = parsePriceRanges(searchParams.get('priceRange') || searchParams.get('priceRanges'));
  const ids = parseShopIds(searchParams.get('ids'));

  const where = [SHOP_PUBLIC_VISIBILITY_SQL];
  const params = [];
  const add = (value) => {
    params.push(value);
    return `$${params.length}`;
  };

  if (ids.length) {
    where.push(`m.id = ANY(${add(ids)}::int[])`);
  }

  if (!exclude.has('category') && category) {
    const catParam = add(category);
    where.push(`LOWER(TRIM(m.category)) = LOWER(TRIM(${catParam}))`);
  }

  if (!exclude.has('subcategory') && subcategory) {
    const subParam = add(subcategory);
    where.push(`(
      LOWER(TRIM(COALESCE(m.subcategory, ''))) = LOWER(TRIM(${subParam}))
      OR LOWER(TRIM(m.name)) = LOWER(TRIM(${subParam}))
      OR LOWER(TRIM(m.name)) LIKE '%' || LOWER(TRIM(${subParam})) || '%'
    )`);
  }

  if (!exclude.has('parent') && parent && !category && !subcategory) {
    const children = parseCsvParam(searchParams.get('children'));
    const parentParam = add(parent);
    if (children.length) {
      const childParam = add(children.map((c) => c.toLowerCase()));
      where.push(`(
        LOWER(TRIM(m.category)) = LOWER(TRIM(${parentParam}))
        OR LOWER(TRIM(m.category)) = ANY(${childParam}::text[])
        OR LOWER(TRIM(COALESCE(m.subcategory, ''))) = ANY(${childParam}::text[])
      )`);
    } else {
      where.push(`LOWER(TRIM(m.category)) = LOWER(TRIM(${parentParam}))`);
    }
  }

  if (!exclude.has('search') && search) {
    const like = add(`%${search.toLowerCase()}%`);
    where.push(`(
      LOWER(m.name) LIKE ${like}
      OR LOWER(COALESCE(m.brand, '')) LIKE ${like}
      OR LOWER(COALESCE(m.category, '')) LIKE ${like}
      OR LOWER(COALESCE(m.subcategory, '')) LIKE ${like}
      OR LOWER(COALESCE(m.keywords, '')) LIKE ${like}
      OR LOWER(COALESCE(m.sku, '')) LIKE ${like}
      OR LOWER(COALESCE(m.product_code, '')) LIKE ${like}
      OR LOWER(COALESCE(m.barcode, '')) LIKE ${like}
    )`);
  }

  if (!exclude.has('brands') && brands.length) {
    const brandParam = add(brands.map((b) => b.toLowerCase()));
    where.push(`LOWER(TRIM(COALESCE(m.brand, ''))) = ANY(${brandParam}::text[])`);
  }

  const attributeClause = (excludeKey, keys, values) => {
    if (exclude.has(excludeKey) || !values.length) return;
    const normalized = values.map((v) => v.toLowerCase());
    const valueParam = add(normalized);
    const keyChecks = keys.map((key) => {
      const keyParam = add(key);
      return `LOWER(TRIM(COALESCE(m.specifications->>${keyParam}, ''))) = ANY(${valueParam}::text[])`;
    });
    const nameChecks = values.map((value) => {
      const like = add(`%${value.toLowerCase()}%`);
      return `(LOWER(m.name) LIKE ${like} OR LOWER(COALESCE(m.subcategory, '')) LIKE ${like})`;
    });
    where.push(`(${[...keyChecks, ...nameChecks].join(' OR ')})`);
  };

  attributeClause('types', ['type', 'Type', 'finish', 'Finish'], types);
  attributeClause('thicknesses', ['thickness', 'Thickness', 'mm', 'gauge'], thicknesses);
  attributeClause('sizes', ['size', 'Size', 'dimension', 'dimensions'], sizes);
  attributeClause('colors', ['color', 'Color', 'shade', 'Shade'], colors);
  attributeClause('materials', ['material', 'Material', 'composition'], materials);
  attributeClause('grades', ['grade', 'Grade', 'quality_grade'], grades);
  attributeClause('packSizes', ['pack_size', 'packSize', 'Pack Size', 'pack', 'Pack'], packSizes);

  if (!exclude.has('availability')) {
    if (availability === 'in_stock' || availability === 'available') {
      where.push(`COALESCE(m.quantity, 0) > 0 AND COALESCE(m.stock_status, 'in_stock') <> 'out_of_stock'`);
    } else if (availability === 'out_of_stock') {
      where.push(`(COALESCE(m.quantity, 0) <= 0 OR COALESCE(m.stock_status, '') = 'out_of_stock')`);
    }
  }

  if (section === 'deals') {
    where.push(`m.is_featured_deal = TRUE`);
  }

  if (!exclude.has('price')) {
    if (Number.isFinite(minPrice)) {
      where.push(`${SHOP_SELLING_PRICE_SQL} >= ${add(minPrice)}`);
    }
    if (Number.isFinite(maxPrice)) {
      where.push(`${SHOP_SELLING_PRICE_SQL} <= ${add(maxPrice)}`);
    }
    if (priceRanges.length) {
      const rangeSql = priceRanges.map((range) => {
        const parts = [];
        if (range.min != null) parts.push(`${SHOP_SELLING_PRICE_SQL} >= ${add(range.min)}`);
        if (range.max != null) parts.push(`${SHOP_SELLING_PRICE_SQL} <= ${add(range.max)}`);
        return `(${parts.join(' AND ')})`;
      });
      where.push(`(${rangeSql.join(' OR ')})`);
    }
  }

  let orderBy = `m.name ASC, m.id ASC`;
  if (sort === 'price-asc' || sort === 'price_asc' || sort === 'price-low') {
    orderBy = `${SHOP_SELLING_PRICE_SQL} ASC NULLS LAST, m.id ASC`;
  } else if (sort === 'price-desc' || sort === 'price_desc' || sort === 'price-high') {
    orderBy = `${SHOP_SELLING_PRICE_SQL} DESC NULLS LAST, m.id ASC`;
  } else if (sort === 'newest' || sort === 'arrivals' || section === 'arrivals') {
    orderBy = `m.created_at DESC NULLS LAST, m.id DESC`;
  } else if (sort === 'name') {
    orderBy = `m.name ASC, m.id ASC`;
  } else if (sort === 'featured' || section === 'featured') {
    orderBy = `m.is_featured_deal DESC, m.created_at DESC NULLS LAST, m.id DESC`;
  } else if (search) {
    orderBy = `
      CASE WHEN LOWER(TRIM(m.name)) = LOWER(TRIM(${add(search)})) THEN 0
           WHEN LOWER(m.name) LIKE ${add(`${search.toLowerCase()}%`)} THEN 1
           ELSE 2 END,
      m.name ASC, m.id ASC
    `;
  }

  return {
    whereSql: where.join('\n         AND '),
    params,
    orderBy,
    meta: {
      category,
      subcategory,
      parent,
      search,
      brands,
      sort,
      section,
      availability,
    },
  };
}

export function buildShopListCacheKey(searchParams) {
  const keys = [
    'page', 'limit', 'category', 'subcategory', 'parent', 'children',
    'q', 'search', 'brand', 'brands', 'type', 'types',
    'thickness', 'thicknesses', 'size', 'sizes', 'color', 'colors',
    'material', 'materials', 'grade', 'grades', 'pack_size', 'packSizes',
    'availability', 'stock', 'section', 'sort',
    'minPrice', 'maxPrice', 'priceRange', 'priceRanges', 'ids', 'facets',
  ];
  return keys
    .map((key) => `${key}=${String(searchParams.get(key) || '').trim().toLowerCase()}`)
    .join('&');
}

export function mapShopListProduct(row) {
  const specifications = { ...(row.specifications || {}) };
  delete specifications.__approval__;

  const fallbackImage = row.category_image || '';
  const rawImages = Array.isArray(row.images) ? row.images.filter(Boolean) : [];
  const firstImage = rawImages[0];
  const firstImageUrl = typeof firstImage === 'string'
    ? firstImage
    : (firstImage?.secure_url || firstImage?.url || '');
  const resolvedImageUrl = row.image_url || fallbackImage || firstImageUrl || '';
  const cardImages = resolvedImageUrl ? [resolvedImageUrl] : [];

  const effectiveMrp = row.mrp !== null && row.mrp !== undefined
    ? Number(row.mrp)
    : (row.compare_at_price !== null && row.compare_at_price !== undefined ? Number(row.compare_at_price) : null);
  const effectiveSellingPrice = row.price !== null && row.price !== undefined
    ? Number(row.price)
    : (effectiveMrp || 0);

  return {
    id: row.id,
    product_id: row.id,
    product_code: row.product_code || null,
    sku: row.sku || null,
    barcode: row.barcode || null,
    mpn: row.mpn || null,
    keywords: row.keywords || null,
    product_url_slug: row.product_url_slug || null,
    // Numeric seller refs only — no supplier/vendor PII in list payloads.
    supplier_id: row.supplier_id ?? null,
    vendor_id: row.vendor_id ?? null,
    name: row.name,
    description: '',
    quote_price_range: row.quote_price_range || '',
    price: effectiveSellingPrice,
    mrp: effectiveMrp,
    compare_at_price: effectiveMrp,
    discount_percent: row.discount_percent,
    gst_percent: row.gst_percent !== null && row.gst_percent !== undefined ? Number(row.gst_percent) : 18,
    is_tax_inclusive: row.is_tax_inclusive !== false,
    unit: row.unit || '',
    quantity: row.quantity,
    stock_status: row.stock_status || (Number(row.quantity) > 0 ? 'in_stock' : 'out_of_stock'),
    has_variants: row.has_variants === true,
    image_url: resolvedImageUrl,
    category_image: fallbackImage,
    category: row.category || '',
    subcategory: row.subcategory || '',
    brand: row.brand || '',
    is_featured_deal: row.is_featured_deal === true,
    images: cardImages,
    specifications,
    bulk_pricing: Array.isArray(row.bulk_pricing) ? row.bulk_pricing : [],
    available_cities: Array.isArray(row.available_cities) ? row.available_cities : [],
    created_at: row.created_at,
  };
}

/** Map API list product into the Storefront card shape. */
export function toStorefrontProduct(product, categories = []) {
  if (!product) return null;
  const categoryName = typeof product.category === 'object'
    ? product.category?.name
    : product.category;
  const matched = categories.find((entry) =>
    String(entry.name || '').trim().toLowerCase() === String(categoryName || '').trim().toLowerCase()
  );
  const category = matched || {
    id: `custom-${categoryName || 'other'}`,
    name: categoryName || 'Other Materials',
    image: product.category_image || product.image_url || '',
    unit: product.unit || 'unit',
  };

  return {
    id: `supplier-${product.id}`,
    product_id: product.id,
    product_code: product.product_code,
    sku: product.sku,
    barcode: product.barcode,
    mpn: product.mpn,
    keywords: product.keywords,
    name: product.name,
    category,
    subcategory: product.subcategory,
    unit: product.unit || category.unit || 'unit',
    price: product.price,
    mrp: product.mrp ?? product.compare_at_price,
    image: product.image_url || category?.image || '',
    description: product.description || '',
    quote_price_range: product.quote_price_range,
    brand: product.brand,
    compare_at_price: product.mrp ?? product.compare_at_price,
    discount_percent: product.discount_percent,
    gst_percent: product.gst_percent,
    is_tax_inclusive: product.is_tax_inclusive,
    is_featured_deal: product.is_featured_deal === true,
    images: product.images,
    specifications: product.specifications,
    bulk_pricing: product.bulk_pricing,
    quantity: product.quantity,
    stock_status: product.stock_status,
    has_variants: product.has_variants === true,
    supplier_id: product.supplier_id,
    available_cities: product.available_cities,
    created_at: product.created_at,
    fromSupplier: true,
  };
}

export function buildPaginationMeta(page, limit, total) {
  const safeTotal = Math.max(0, Number(total) || 0);
  const totalPages = safeTotal === 0 ? 0 : Math.ceil(safeTotal / limit);
  return {
    page,
    limit,
    total: safeTotal,
    totalPages,
    hasNextPage: totalPages > 0 && page < totalPages,
    hasPreviousPage: page > 1 && safeTotal > 0,
  };
}

/** Merge selected values into facet options so chips stay visible at count 0. */
export function mergeSelectedFacetOptions(options = [], selected = []) {
  const map = new Map(
    (options || []).map((entry) => {
      const value = typeof entry === 'object' ? entry.value : entry;
      return [String(value), typeof entry === 'object' ? entry : { value, label: value, count: 0 }];
    }),
  );
  for (const value of selected || []) {
    const key = String(value);
    if (!map.has(key)) {
      map.set(key, { value: key, label: key, count: 0, selected: true });
    }
  }
  return [...map.values()];
}

export function normalizeFacetRows(rows = []) {
  return (rows || [])
    .filter((row) => row?.value)
    .map((row) => ({
      value: String(row.value),
      label: String(row.label || row.value),
      count: Number(row.count) || 0,
    }));
}
