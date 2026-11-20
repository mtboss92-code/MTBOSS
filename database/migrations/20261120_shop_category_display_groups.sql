-- Shop Now display groups are presentation metadata only. They do not alter
-- the admin category hierarchy or any product category/subcategory values.
ALTER TABLE shop_categories
  ADD COLUMN IF NOT EXISTS shop_display_groups JSONB NOT NULL DEFAULT '[]'::jsonb;
