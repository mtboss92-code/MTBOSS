-- Keeps pre-existing production catalog tables compatible with the product
-- manager list/create/edit queries. Safe to apply more than once.
ALTER TABLE supplier_materials
  ADD COLUMN IF NOT EXISTS stock_status VARCHAR(30) DEFAULT 'in_stock';

UPDATE supplier_materials
SET stock_status = CASE
  WHEN COALESCE(quantity, 0) <= 0 THEN 'out_of_stock'
  WHEN COALESCE(quantity, 0) <= COALESCE(low_stock_threshold, 5) THEN 'low_stock'
  ELSE 'in_stock'
END
WHERE stock_status IS NULL OR TRIM(stock_status) = '';

ALTER TABLE supplier_materials
  ALTER COLUMN stock_status SET DEFAULT 'in_stock';

CREATE INDEX IF NOT EXISTS idx_supplier_materials_stock_status
  ON supplier_materials(stock_status);
