-- Attach an existing Shop Now catalog product to one or more approved vendors.
-- Product and commission rules remain shared; no duplicate catalog product is created.
CREATE TABLE IF NOT EXISTS shop_product_vendors (
  product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
  vendor_id INTEGER NOT NULL REFERENCES vendors(id) ON DELETE CASCADE,
  assigned_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  assigned_by INTEGER,
  PRIMARY KEY (product_id, vendor_id)
);
CREATE INDEX IF NOT EXISTS shop_product_vendors_vendor_idx ON shop_product_vendors(vendor_id);
