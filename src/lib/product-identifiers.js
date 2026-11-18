/**
 * Product Identification, SKU, Barcode & Pricing calculation utilities for MT-Boss ShopNow
 */

/**
 * Concurrency-safe generation of unique Product Code (e.g. MTB-PROD-000101)
 * Uses database sequence shop_product_code_seq
 */
export async function generateNextProductCode(clientOrPool) {
  const res = await clientOrPool.query("SELECT nextval('shop_product_code_seq') AS seq");
  const seq = Number(res.rows[0]?.seq || 1);
  return `MTB-PROD-${String(seq).padStart(6, '0')}`;
}

/**
 * Generate a clean, readable SKU based on category
 * Format: MTB-[CAT_CODE]-[ID_OR_SEQ]
 */
export function generateSku(category = 'GEN', seed = 1) {
  const cleanCat = String(category || 'GEN')
    .replace(/[^a-zA-Z]/g, '')
    .toUpperCase();
  const catCode = (cleanCat.slice(0, 4) || 'PROD').padEnd(4, 'X');
  return `MTB-${catCode}-${String(seed).padStart(4, '0')}`;
}

/**
 * Validate SKU uniqueness across supplier_materials and product_variants
 */
export async function isSkuUnique(clientOrPool, sku, excludeProductId = null) {
  if (!sku) return true;
  const cleanSku = String(sku).trim();

  let mainSql = 'SELECT id FROM supplier_materials WHERE LOWER(TRIM(sku)) = LOWER(TRIM($1))';
  const params = [cleanSku];
  if (excludeProductId) {
    mainSql += ' AND id != $2';
    params.push(excludeProductId);
  }
  const mainRes = await clientOrPool.query(mainSql, params);
  if (mainRes.rows.length > 0) return false;

  const varSql = 'SELECT id FROM product_variants WHERE LOWER(TRIM(sku)) = LOWER(TRIM($1))' + (excludeProductId ? ' AND product_id != $2' : '');
  const varRes = await clientOrPool.query(varSql, params);
  return varRes.rows.length === 0;
}

/**
 * Validate Barcode Checksum for EAN-13 and UPC-A (Modulo 10 check digit)
 */
export function validateBarcode(barcode, type = 'CODE128') {
  if (!barcode) return { valid: true };
  const str = String(barcode).trim();
  const upperType = String(type || 'CODE128').toUpperCase();

  if (upperType === 'EAN13' || upperType === 'EAN-13') {
    if (!/^\d{13}$/.test(str)) {
      return { valid: false, error: 'EAN-13 barcode must be exactly 13 digits (0-9).' };
    }
    // Checksum calculation (odd positions * 1, even positions * 3 for 1st to 12th digits)
    let sum = 0;
    for (let i = 0; i < 12; i++) {
      const digit = parseInt(str[i], 10);
      sum += (i % 2 === 0) ? digit : digit * 3;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    const actualCheck = parseInt(str[12], 10);
    if (checkDigit !== actualCheck) {
      return { valid: false, error: `Invalid EAN-13 checksum. Expected check digit ${checkDigit}, got ${actualCheck}.` };
    }
    return { valid: true, type: 'EAN13' };
  }

  if (upperType === 'UPCA' || upperType === 'UPC-A') {
    if (!/^\d{12}$/.test(str)) {
      return { valid: false, error: 'UPC-A barcode must be exactly 12 digits (0-9).' };
    }
    let sum = 0;
    for (let i = 0; i < 11; i++) {
      const digit = parseInt(str[i], 10);
      sum += (i % 2 === 0) ? digit * 3 : digit;
    }
    const checkDigit = (10 - (sum % 10)) % 10;
    const actualCheck = parseInt(str[11], 10);
    if (checkDigit !== actualCheck) {
      return { valid: false, error: `Invalid UPC-A checksum. Expected check digit ${checkDigit}, got ${actualCheck}.` };
    }
    return { valid: true, type: 'UPCA' };
  }

  // Code 128 / QR allows standard printable ASCII
  if (str.length > 100) {
    return { valid: false, error: 'Barcode cannot exceed 100 characters.' };
  }

  return { valid: true, type: upperType };
}

/**
 * Generate a standard internal barcode for MT-Boss products
 */
export function generateInternalBarcode(productCode) {
  if (!productCode) return '';
  return String(productCode).replace(/[^A-Za-z0-9]/g, '').toUpperCase();
}

/**
 * Precision Pricing, Discount & GST calculations
 * Prevents double-taxation and maintains clean accounting breakdown
 */
export function calculatePricingAndGst({
  mrp,
  compare_at_price,
  sellingPrice,
  selling_price,
  price,
  gstPercent,
  gst_percent = 18,
  isTaxInclusive,
  is_tax_inclusive = true,
}) {
  const mrpNum = Math.max(0, Number(mrp ?? compare_at_price) || 0);
  const sellNum = Math.max(0, Number(sellingPrice ?? selling_price ?? price) || 0);
  const gstNum = Math.max(0, Number(gstPercent ?? gst_percent) || 0);
  const taxInclusive = isTaxInclusive !== undefined ? Boolean(isTaxInclusive) : Boolean(is_tax_inclusive);

  let discountPercent = 0;
  let discountAmount = 0;
  if (mrpNum > sellNum && mrpNum > 0) {
    discountAmount = Math.round((mrpNum - sellNum) * 100) / 100;
    discountPercent = Math.round(((mrpNum - sellNum) / mrpNum) * 10000) / 100;
  }

  let basePrice = sellNum;
  let gstAmount = 0;
  let finalPrice = sellNum;

  if (taxInclusive) {
    // Selling Price already includes GST
    basePrice = Math.round((sellNum / (1 + (gstNum / 100))) * 100) / 100;
    gstAmount = Math.round((sellNum - basePrice) * 100) / 100;
    finalPrice = sellNum;
  } else {
    // Selling price is exclusive, GST added on top
    basePrice = sellNum;
    gstAmount = Math.round((sellNum * (gstNum / 100)) * 100) / 100;
    finalPrice = Math.round((sellNum + gstAmount) * 100) / 100;
  }

  return {
    mrp: mrpNum,
    sellingPrice: sellNum,
    discountPercent,
    discountAmount,
    gstPercent: gstNum,
    isTaxInclusive: Boolean(isTaxInclusive),
    basePrice,
    gstAmount,
    finalPrice,
  };
}

/**
 * Compute stock status string
 */
export function computeStockStatus(quantity, threshold = 5) {
  const qty = Number(quantity || 0);
  if (qty <= 0) return 'out_of_stock';
  if (qty <= threshold) return 'low_stock';
  return 'in_stock';
}
