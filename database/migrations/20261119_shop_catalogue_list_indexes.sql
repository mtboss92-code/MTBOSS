-- Shop Now catalogue listing indexes
-- Safe / reversible: CREATE INDEX IF NOT EXISTS only. No data mutations.
-- Supports case-insensitive category/brand filters and public-visibility scans
-- used by /api/shop-material-options paginated listings.

CREATE INDEX IF NOT EXISTS idx_supplier_materials_category_lower
  ON supplier_materials (LOWER(TRIM(category)));

CREATE INDEX IF NOT EXISTS idx_supplier_materials_subcategory_lower
  ON supplier_materials (LOWER(TRIM(subcategory)));

CREATE INDEX IF NOT EXISTS idx_supplier_materials_brand_lower
  ON supplier_materials (LOWER(TRIM(brand)));

CREATE INDEX IF NOT EXISTS idx_supplier_materials_name_lower
  ON supplier_materials (LOWER(name));

CREATE INDEX IF NOT EXISTS idx_shop_categories_name_lower
  ON shop_categories (LOWER(TRIM(name)));

-- Hot path for public storefront listings (approved + available + not deleted).
CREATE INDEX IF NOT EXISTS idx_supplier_materials_public_created
  ON supplier_materials (created_at DESC, id DESC)
  WHERE is_available = TRUE
    AND COALESCE(is_deleted, FALSE) = FALSE
    AND COALESCE(is_archived, FALSE) = FALSE;

CREATE INDEX IF NOT EXISTS idx_supplier_materials_public_price
  ON supplier_materials (price ASC NULLS LAST, id ASC)
  WHERE is_available = TRUE
    AND COALESCE(is_deleted, FALSE) = FALSE
    AND COALESCE(is_archived, FALSE) = FALSE;

CREATE INDEX IF NOT EXISTS idx_supplier_materials_featured_deal
  ON supplier_materials (is_featured_deal, created_at DESC)
  WHERE is_available = TRUE
    AND COALESCE(is_deleted, FALSE) = FALSE
    AND COALESCE(is_archived, FALSE) = FALSE
    AND is_featured_deal = TRUE;

-- Approval status used by public visibility rules.
CREATE INDEX IF NOT EXISTS idx_supplier_materials_approval_status
  ON supplier_materials ((COALESCE(specifications->'__approval__'->>'status', 'approved')))
  WHERE is_available = TRUE
    AND COALESCE(is_deleted, FALSE) = FALSE
    AND COALESCE(is_archived, FALSE) = FALSE;
