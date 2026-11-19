-- ==============================================================================
-- Migration: Complete Product Management, Catalog & Inventory System
-- Compatible with existing MT-Boss database and all 46+ existing products
-- ==============================================================================

-- 1. Create concurrency-safe sequence for Product ID (MTB-PROD-XXXXXX)
CREATE SEQUENCE IF NOT EXISTS shop_product_code_seq START WITH 1;

-- 2. Alter supplier_materials to add all required fields safely
ALTER TABLE supplier_materials
  -- Product Identification
  ADD COLUMN IF NOT EXISTS product_code VARCHAR(50),
  ADD COLUMN IF NOT EXISTS sku VARCHAR(100),
  ADD COLUMN IF NOT EXISTS barcode VARCHAR(100),
  ADD COLUMN IF NOT EXISTS barcode_type VARCHAR(30) DEFAULT 'CODE128',
  ADD COLUMN IF NOT EXISTS mpn VARCHAR(100),
  ADD COLUMN IF NOT EXISTS variant_id VARCHAR(50),

  -- Classification & SEO
  ADD COLUMN IF NOT EXISTS keywords TEXT,
  ADD COLUMN IF NOT EXISTS product_url_slug VARCHAR(255),
  ADD COLUMN IF NOT EXISTS extraction_notes TEXT,
  ADD COLUMN IF NOT EXISTS http_status VARCHAR(20),

  -- Pricing & Tax
  ADD COLUMN IF NOT EXISTS mrp NUMERIC(10,2),
  ADD COLUMN IF NOT EXISTS discount_percent NUMERIC(5,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS discount_amount NUMERIC(10,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS gst_percent NUMERIC(5,2) DEFAULT 18.00,
  ADD COLUMN IF NOT EXISTS is_tax_inclusive BOOLEAN DEFAULT TRUE,
  ADD COLUMN IF NOT EXISTS currency VARCHAR(10) DEFAULT 'INR',

  -- Inventory & Shipping
  ADD COLUMN IF NOT EXISTS weight NUMERIC(10,3),
  ADD COLUMN IF NOT EXISTS weight_unit VARCHAR(20) DEFAULT 'kg',
  ADD COLUMN IF NOT EXISTS dimensions VARCHAR(100),
  ADD COLUMN IF NOT EXISTS measurement_unit VARCHAR(50),
  ADD COLUMN IF NOT EXISTS low_stock_threshold INTEGER DEFAULT 5,
  ADD COLUMN IF NOT EXISTS stock_status VARCHAR(30) DEFAULT 'in_stock',
  ADD COLUMN IF NOT EXISTS has_variants BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS status VARCHAR(30) DEFAULT 'active',
  ADD COLUMN IF NOT EXISTS is_archived BOOLEAN DEFAULT FALSE,
  ADD COLUMN IF NOT EXISTS is_deleted BOOLEAN DEFAULT FALSE;

-- 3. Unique indexes for Identification (where not null)
CREATE UNIQUE INDEX IF NOT EXISTS idx_supplier_materials_product_code 
  ON supplier_materials(product_code) WHERE product_code IS NOT NULL;

CREATE UNIQUE INDEX IF NOT EXISTS idx_supplier_materials_sku 
  ON supplier_materials(sku) WHERE sku IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_supplier_materials_barcode 
  ON supplier_materials(barcode) WHERE barcode IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_supplier_materials_mpn 
  ON supplier_materials(mpn) WHERE mpn IS NOT NULL;

CREATE INDEX IF NOT EXISTS idx_supplier_materials_status 
  ON supplier_materials(status);

CREATE INDEX IF NOT EXISTS idx_supplier_materials_category 
  ON supplier_materials(category);

CREATE INDEX IF NOT EXISTS idx_supplier_materials_brand 
  ON supplier_materials(brand);

-- 4. Create product_variants table
CREATE TABLE IF NOT EXISTS product_variants (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
  variant_code VARCHAR(50) UNIQUE,
  name VARCHAR(255) NOT NULL,
  sku VARCHAR(100) UNIQUE,
  barcode VARCHAR(100),
  mpn VARCHAR(100),
  size VARCHAR(100),
  color VARCHAR(100),
  material VARCHAR(100),
  attributes JSONB DEFAULT '{}'::jsonb,
  image_url TEXT,
  mrp NUMERIC(10,2),
  price NUMERIC(10,2) NOT NULL,
  quantity INTEGER DEFAULT 0,
  stock_status VARCHAR(30) DEFAULT 'in_stock',
  weight NUMERIC(10,3),
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_product_variants_product_id ON product_variants(product_id);
CREATE INDEX IF NOT EXISTS idx_product_variants_sku ON product_variants(sku);
CREATE INDEX IF NOT EXISTS idx_product_variants_barcode ON product_variants(barcode);

-- 5. Create stock_movements table for complete audit trail
CREATE TABLE IF NOT EXISTS stock_movements (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
  variant_id INTEGER REFERENCES product_variants(id) ON DELETE SET NULL,
  change_type VARCHAR(50) NOT NULL, -- 'initial_stock', 'restock', 'adjustment_addition', 'adjustment_reduction', 'order_deduction', 'order_return', 'damaged', 'audit_correction'
  quantity_change INTEGER NOT NULL,
  quantity_before INTEGER NOT NULL,
  quantity_after INTEGER NOT NULL,
  reason TEXT,
  performed_by_id INTEGER,
  performed_by_role VARCHAR(50) DEFAULT 'admin',
  performed_by_name VARCHAR(150),
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_stock_movements_product_id ON stock_movements(product_id);
CREATE INDEX IF NOT EXISTS idx_stock_movements_created_at ON stock_movements(created_at DESC);

-- 6. Create product_audit_logs table
CREATE TABLE IF NOT EXISTS product_audit_logs (
  id SERIAL PRIMARY KEY,
  product_id INTEGER NOT NULL REFERENCES supplier_materials(id) ON DELETE CASCADE,
  action VARCHAR(50) NOT NULL, -- 'create', 'update', 'stock_adjust', 'archive', 'restore', 'delete', 'duplicate'
  previous_values JSONB,
  new_values JSONB,
  performed_by_id INTEGER,
  performed_by_role VARCHAR(50),
  performed_by_name VARCHAR(150),
  notes TEXT,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_product_audit_logs_product_id ON product_audit_logs(product_id);

-- 7. Create product_import_jobs table
CREATE TABLE IF NOT EXISTS product_import_jobs (
  id SERIAL PRIMARY KEY,
  filename VARCHAR(255),
  total_rows INTEGER DEFAULT 0,
  successful_rows INTEGER DEFAULT 0,
  failed_rows INTEGER DEFAULT 0,
  status VARCHAR(50) DEFAULT 'completed',
  summary JSONB DEFAULT '{}'::jsonb,
  errors JSONB DEFAULT '[]'::jsonb,
  performed_by_id INTEGER,
  performed_by_role VARCHAR(50) DEFAULT 'admin',
  created_at TIMESTAMP DEFAULT NOW()
);

