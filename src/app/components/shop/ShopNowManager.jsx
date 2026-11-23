'use client';

import { useCallback, useEffect, useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { strFromU8, unzipSync } from 'fflate';
import { UploadCloud, Plus, X, Star, Sparkles, Image as ImageIcon, ArrowLeft, HelpCircle, ShieldCheck, CheckCircle2, RotateCcw, FileText, ListChecks, Barcode, Copy, History, Download, RefreshCw, Layers, Tag, DollarSign, Box, ShieldAlert, Check, ChevronUp, ChevronDown, Trash2 } from 'lucide-react';
import VendorCommissionSummary from './VendorCommissionSummary';
import { defaultShopStorefront, defaultShopHeroBanners } from '@/lib/shop-storefront-defaults';
import { QUALITY_TIER_OPTIONS, qualityTierLabel } from '@/lib/quality-tier';
import { getCategoryAttributeConfig, extractProductAttributes } from '@/lib/product-attributes';
import './ShopNowManager.css';

const ShopCategoriesManager = dynamic(() => import('./ShopCategoriesManager'), {
  ssr: false,
  loading: () => <p>Loading categories…</p>,
});
const ShopCouponsManager = dynamic(() => import('./ShopCouponsManager'), {
  ssr: false,
  loading: () => <p>Loading coupons…</p>,
});

const units = ['bag', 'bags', 'pcs', 'kg', 'quintal', 'box', 'bundle', 'cft', 'ton', 'meter', 'set', 'bucket'];
const emptyProduct = {
  name: '',
  description: '',
  category: '',
  subcategory: '',
  quality_tier: 'all',
  quote_price_range: '',
  price: '',
  compare_at_price: '',
  mrp: '',
  discount_percent: 0,
  discount_amount: 0,
  gst_percent: 18,
  is_tax_inclusive: true,
  currency: 'INR',
  is_featured_deal: false,
  brand: '',
  unit: '',
  measurement_unit: '',
  quantity: 0,
  low_stock_threshold: 5,
  stock_status: 'in_stock',
  weight: '',
  weight_unit: 'kg',
  dimensions: '',
  product_code: '',
  sku: '',
  barcode: '',
  barcode_type: 'CODE128',
  mpn: '',
  variant_id: '',
  keywords: '',
  product_url_slug: '',
  extraction_notes: '',
  http_status: '200',
  image_url: '',
  available_cities: [],
  is_available: true,
  has_variants: false,
  variants: [],
  adjustment_reason: '',
  approval_status: 'approved',
  rejection_reason: '',
};
const mobileHeaderFields = [
  ['delivery_tagline', 'Delivery Tagline (e.g. 60 Mins delivery)'],
  ['search_placeholder', 'Search Placeholder (e.g. Search for Cement, TMT Bars, Tiles...)'],
  ['trust_badge_1', 'Trust Badge 1 (e.g. Free Delivery)'],
  ['trust_badge_2', 'Trust Badge 2 (e.g. 2% Cashback)'],
  ['trust_badge_3', 'Trust Badge 3 (e.g. Pay on Delivery)'],
  ['trust_badge_4', 'Trust Badge 4 (e.g. 60 Mins Express)'],
];

const mobileBannerFields = [
  ['mobile_banner_pill', 'Top Badge / Pill (e.g. ⚡ Delivered in 60 mins)'],
  ['mobile_banner_subpill', 'Top Sub-badge (e.g. Direct Factory Rates)'],
  ['mobile_banner_title', 'Promo Banner Heading'],
  ['mobile_banner_btn', 'CTA Button Text (e.g. Request Bulk Quote)'],
];

const desktopBannerFields = [
  ['hero_kicker', 'Banner eyebrow'], ['hero_title', 'Banner title'],
  ['hero_highlight', 'Highlighted title'], ['hero_description', 'Banner description'],
  ['hero_badge', 'Image badge text'],
  ['hero_button', 'Banner button'],
  ['categories_heading', 'Categories heading'], ['featured_heading', 'Featured heading'],
  ['deals_heading', 'Deals heading'], ['arrivals_heading', 'New arrivals heading'],
  ['catalog_heading', 'Catalogue heading'], ['footer_tagline', 'Footer tagline'],
];

const storefrontHeadingFields = [
  ['categories_heading', 'Categories heading'],
  ['featured_heading', 'Featured heading'],
  ['deals_heading', 'Deals heading'],
  ['arrivals_heading', 'New arrivals heading'],
  ['catalog_heading', 'Catalogue heading'],
  ['footer_tagline', 'Footer tagline'],
];

const ATTRIBUTE_FIELD_DEFS = {
  grade: {
    icon: '⭐',
    label: 'Grade / Standard',
    eg: 'e.g. OPC 53 Grade, Fe 500D, Class 1, Zone II',
    placeholder: 'e.g. OPC 53 Grade, Fe 500D',
  },
  type: {
    icon: '🏷️',
    label: 'Type / Variety',
    eg: 'e.g. PPC Cement, TMT Rebar, AAC Block, M-Sand',
    placeholder: 'e.g. PPC Cement, TMT Rebar',
  },
  pack_size: {
    icon: '📦',
    label: 'Pack / Bag Size',
    eg: 'e.g. 50 Kg Bag, 1 Ton, CFT, 25 Kg Bag',
    placeholder: 'e.g. 50 Kg Bag, 1 Ton',
  },
  thickness: {
    icon: '📏',
    label: 'Thickness / Diameter',
    eg: 'e.g. 8mm, 10mm, 12mm, 16mm, 20mm',
    placeholder: 'e.g. 12mm, 16mm, 20mm',
  },
  size: {
    icon: '📐',
    label: 'Dimensions / Size',
    eg: 'e.g. 9x4x3 inch, 600x600 mm, 12m Length',
    placeholder: 'e.g. 9x4x3 inch, 600x600 mm',
  },
  material: {
    icon: '🧱',
    label: 'Material Composition',
    eg: 'e.g. Primary Virgin Steel, Vitrified Porcelain, Clay',
    placeholder: 'e.g. Primary Virgin Steel, Clay',
  },
  color: {
    icon: '🎨',
    label: 'Color / Shade / Finish',
    eg: 'e.g. Grey, Super White, Terracotta',
    placeholder: 'e.g. Grey, Super White',
  },
};


const shopHeaders = (ownerRole = 'admin') => ({
  'Content-Type': 'application/json',
  Authorization: `Bearer ${
    ownerRole === 'vendor'
      ? localStorage.getItem('vendor-token') || localStorage.getItem('service-provider-token') || ''
      : ownerRole === 'supplier'
      ? localStorage.getItem('supplier-token') || ''
      : localStorage.getItem('admin-token') || localStorage.getItem('token') || ''
  }`,
});

async function readApiJson(response) {
  let text = '';
  try {
    text = await response.text();
  } catch {
    return { success: false, error: 'Could not read server response' };
  }

  if (!text || !text.trim()) {
    if (!response.ok) {
      throw new Error(`Shop product service returned status ${response.status}.`);
    }
    return { success: true, data: null };
  }

  try {
    return JSON.parse(text);
  } catch {
    if (!response.ok) {
      throw new Error(`Shop product service returned an error (${response.status}): ${text.slice(0, 150)}`);
    }
    return { success: false, error: 'Invalid JSON response from server' };
  }
}

function notifyShopProductsUpdated() {
  try { localStorage.setItem('MTBOSS-shop-products-updated', String(Date.now())); }
  catch { /* Same-tab refresh event still keeps Shop Now in sync. */ }
  window.dispatchEvent(new Event('MTBOSSShopProductsUpdated'));
}

async function uploadImage(file) {
  const cloud = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;
  const preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET;
  if (!cloud || !preset) throw new Error('Cloudinary upload is not configured. Paste an image URL instead.');
  const body = new FormData();
  body.append('file', file);
  body.append('upload_preset', preset);
  // Keep all Shop Now product media together in Cloudinary. Cloudinary will
  // then serve the right compressed/resized version from its CDN.
  body.append('folder', 'MTBOSS/shop-products');
  const response = await fetch(`https://api.cloudinary.com/v1_1/${cloud}/image/upload`, { method: 'POST', body });
  const data = await readApiJson(response);
  if (!response.ok || !data?.secure_url) throw new Error(data?.error?.message || data?.error || 'Image upload failed');
  return data.secure_url;
}

function ProductManager({ ownerRole = 'admin', formId = 'shop-product-form', initialShowForm = false, isDarkMode = false }) {
  const isVendor = ownerRole === 'vendor';
  const isSupplier = ownerRole === 'supplier';
  const isSeller = isVendor || isSupplier;
  const productEndpoint = isSupplier
    ? '/api/supplier/shop-products'
    : isVendor
    ? '/api/vendor/shop-products'
    : '/api/admin/shop-products';
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cities, setCities] = useState([]);
  const [form, setForm] = useState(emptyProduct);
  const [imagesList, setImagesList] = useState([]);
  const [newImageUrl, setNewImageUrl] = useState('');
  const [galleryText, setGalleryText] = useState('');
  const [specsText, setSpecsText] = useState('');
  const [bulkText, setBulkText] = useState('');
  const [highlights, setHighlights] = useState([]);
  const [newHighlight, setNewHighlight] = useState('');
  const [faqs, setFaqs] = useState([]);
  const [returnsPolicy, setReturnsPolicy] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [showProductForm, setShowProductForm] = useState(initialShowForm);
  const [isCustomSubcategory, setIsCustomSubcategory] = useState(false);
  const [formAttributes, setFormAttributes] = useState({ thickness: '', size: '', type: '', color: '', material: '', grade: '', pack_size: '' });
  const [isDark, setIsDark] = useState(isDarkMode);
  const [commissionInfo, setCommissionInfo] = useState({ rate: 0, rateSource: 'default', loaded: false, loading: false });

  // Resolve admin commission rate whenever category or editing product changes
  useEffect(() => {
    if (!isSeller) {
      setCommissionInfo({ rate: 0, rateSource: 'default', loaded: false, loading: false });
      return undefined;
    }
    let isCancelled = false;
    async function fetchCommissionRate() {
      if (!form.category) {
        setCommissionInfo({ rate: 0, rateSource: 'default', loaded: false, loading: false });
        return;
      }
      setCommissionInfo((prev) => ({ ...prev, loading: true }));
      try {
        const params = new URLSearchParams({ category: form.category });
        if (editingId) params.set('product_id', String(editingId));
        const res = await fetch(`/api/shop-commissions/resolve?${params}`);
        const data = await readApiJson(res);
        if (!isCancelled && data?.success && data?.data) {
          setCommissionInfo({
            rate: Number(data.data.rate || 0),
            rateSource: data.data.rateSource || 'default',
            ruleId: data.data.ruleId || null,
            loaded: true,
            loading: false,
          });
        }
      } catch (err) {
        if (!isCancelled) {
          setCommissionInfo((prev) => ({ ...prev, loading: false }));
        }
      }
    }
    fetchCommissionRate();
    return () => {
      isCancelled = true;
    };
  }, [form.category, editingId, isSeller]);

  useEffect(() => {
    setIsDark(isDarkMode);
  }, [isDarkMode]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const html = document.documentElement;
    const checkDark = () => {
      const dark = html.classList.contains('dark-mode') || html.classList.contains('dark') || localStorage.getItem('theme') === 'dark';
      setIsDark(dark);
    };
    checkDark();
    const observer = new MutationObserver(checkDark);
    observer.observe(html, { attributes: true, attributeFilter: ['class'] });
    window.addEventListener('storage', checkDark);
    return () => {
      observer.disconnect();
      window.removeEventListener('storage', checkDark);
    };
  }, []);

  useEffect(() => {
    if (initialShowForm) setShowProductForm(true);
  }, [initialShowForm]);

  useEffect(() => {
    const handleOpen = () => setShowProductForm(true);
    window.addEventListener('openSupplierAddProduct', handleOpen);
    return () => window.removeEventListener('openSupplierAddProduct', handleOpen);
  }, []);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState('');
  const [tierFilter, setTierFilter] = useState('any');
  const [approvalFilter, setApprovalFilter] = useState('all');
  const [productPage, setProductPage] = useState(1);
  const [productPagination, setProductPagination] = useState({ page: 1, limit: 25, total: 0, pages: 1 });
  const [productSearch, setProductSearch] = useState('');
  const [debouncedProductSearch, setDebouncedProductSearch] = useState('');
  const [importRows, setImportRows] = useState([]);
  const [importFileName, setImportFileName] = useState('');
  const [importMode, setImportMode] = useState('create');
  const [importing, setImporting] = useState(false);
  const [normalizingCategories, setNormalizingCategories] = useState(false);
  const [formTab, setFormTab] = useState('basic');
  const [dashboardStats, setDashboardStats] = useState(null);
  const [stockHistoryModal, setStockHistoryModal] = useState({ open: false, product: null, movements: [], loading: false });
  const [quickStockModal, setQuickStockModal] = useState({ open: false, product: null, newQuantity: 0, reason: 'Restock / New Shipment', saving: false });
  const untieredCount = 0;

  const getApprovalStatus = (product) => {
    const approval = product.specifications?.__approval__;
    if (approval?.status) return approval.status;
    if (product.status === 'rejected') return 'rejected';
    if (product.status === 'pending_approval') return 'pending';
    if (product.vendor_id && !approval?.status) return 'pending';
    return 'approved';
  };

  const visibleProducts = products.filter((p) => {
    if (isSeller && approvalFilter !== 'all') {
      const status = getApprovalStatus(p);
      if (approvalFilter === 'approved') return status === 'approved';
      if (approvalFilter === 'pending') return status === 'pending';
      if (approvalFilter === 'rejected') return status === 'rejected';
      if (approvalFilter === 'hidden') return p.is_available === false;
      if (approvalFilter === 'live') return p.is_available === true;
    }
    return true;
  });

  const approveProduct = async (product) => {
    try {
      const response = await fetch(productEndpoint, {
        method: 'PUT',
        headers: shopHeaders(ownerRole),
        body: JSON.stringify({ id: product.id, action: 'approve' }),
      });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not approve product');
      notifyShopProductsUpdated();
      setNotice(`Product "${product.name}" approved successfully.`);
      await load();
    } catch (err) {
      setNotice(err.message);
    }
  };

  const rejectProduct = async (product) => {
    const reason = window.prompt(`Enter rejection reason for "${product.name}" (optional):`, 'Review required before listing');
    if (reason === null) return;
    try {
      const response = await fetch(productEndpoint, {
        method: 'PUT',
        headers: shopHeaders(ownerRole),
        body: JSON.stringify({ id: product.id, action: 'reject', reason: reason.trim() }),
      });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not reject product');
      notifyShopProductsUpdated();
      setNotice(`Product "${product.name}" marked as rejected.`);
      await load();
    } catch (err) {
      setNotice(err.message);
    }
  };

  const loadStats = useCallback(async () => {
    if (isSeller) return;
    try {
      const res = await fetch('/api/admin/shop-products/dashboard-stats', { headers: shopHeaders('admin') });
      const d = await readApiJson(res);
      if (res.ok && d.data) setDashboardStats(d.data);
    } catch (e) {
      console.warn('Could not load dashboard stats:', e);
    }
  }, [isSeller]);

  useEffect(() => {
    const t = setTimeout(() => setDebouncedProductSearch(productSearch.trim()), 300);
    return () => clearTimeout(t);
  }, [productSearch]);

  useEffect(() => { setProductPage(1); }, [tierFilter, approvalFilter, debouncedProductSearch]);

  const loadReferenceData = useCallback(async () => {
    try {
      const [categoryRes, cityRes] = await Promise.all([
        fetch(isSeller ? '/api/shop-categories' : '/api/shop-categories?admin=true', { headers: shopHeaders(ownerRole) }),
        fetch('/api/cities'),
      ]);
      const [categoryData, cityData] = await Promise.all([readApiJson(categoryRes), readApiJson(cityRes)]);
      if (!categoryRes.ok || !cityRes.ok) throw new Error(categoryData.error || cityData.error || 'Could not load shop reference data');
      setCategories(categoryData.data || []);
      setCities(cityData.cities || []);
      if (!isSeller) loadStats();
    } catch (error) {
      setNotice(error.message);
    }
  }, [isSeller, ownerRole, loadStats]);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const productUrl = isSeller
        ? productEndpoint
        : (() => {
            const params = new URLSearchParams({
              page: String(productPage),
              limit: '25',
              fields: 'list',
              sort: 'created_at',
              order: 'desc',
            });
            if (debouncedProductSearch) params.set('q', debouncedProductSearch);
            if (tierFilter !== 'any') params.set('tier', tierFilter);
            if (approvalFilter !== 'all') params.set('approval_status', approvalFilter);
            return `${productEndpoint}?${params}`;
          })();
      const productRes = await fetch(productUrl, { headers: shopHeaders(ownerRole) });
      const productData = await readApiJson(productRes);
      if (!productRes.ok) throw new Error(productData.error || 'Could not load shop data');
      // Normalize images & specifications — pg JSONB may arrive as a string in some Next.js/edge environments
      const normalizeProduct = (p) => {
        const imgs = (() => {
          if (Array.isArray(p.images)) return p.images;
          try { const parsed = JSON.parse(p.images); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
        })();
        const specs = (() => {
          if (p.specifications && typeof p.specifications === 'object') return p.specifications;
          try { return JSON.parse(p.specifications) || {}; } catch { return {}; }
        })();
        return { ...p, images: imgs, specifications: specs };
      };
      setProducts((productData.data || []).map(normalizeProduct));
      setProductPagination(productData.pagination || { page: 1, limit: 25, total: (productData.data || []).length, pages: 1 });
    } catch (error) { setNotice(error.message); }
    finally { setLoading(false); }
  }, [isSeller, ownerRole, productEndpoint, productPage, debouncedProductSearch, tierFilter, approvalFilter]);

  useEffect(() => { loadReferenceData(); }, [loadReferenceData]);
  useEffect(() => { load(); }, [load]);

  // CSV parser that supports quoted commas and escaped quotes. The import API
  // remains the authority for field validation and duplicate handling.
  const parseCsv = (content) => {
    const rows = [];
    let row = [], cell = '', quoted = false;
    for (let i = 0; i < content.length; i += 1) {
      const char = content[i];
      if (char === '"') {
        if (quoted && content[i + 1] === '"') { cell += '"'; i += 1; }
        else quoted = !quoted;
      } else if (char === ',' && !quoted) { row.push(cell); cell = ''; }
      else if ((char === '\n' || char === '\r') && !quoted) {
        if (char === '\r' && content[i + 1] === '\n') i += 1;
        row.push(cell); if (row.some((value) => value.trim())) rows.push(row); row = []; cell = '';
      } else cell += char;
    }
    row.push(cell); if (row.some((value) => value.trim())) rows.push(row);
    if (rows.length < 2) throw new Error('CSV needs a header row and at least one product.');
    const rawHeaders = rows[0].map((header) => header.replace(/^\uFEFF/, '').trim());
    return rows.slice(1).map((values) => {
      const rowObj = {};
      rawHeaders.forEach((header, index) => {
        const val = (values[index] || '').trim();
        rowObj[header] = val;
        const normKey = header.toLowerCase().replace(/[\s-]+/g, '_');
        rowObj[normKey] = val;
      });
      return rowObj;
    });
  };

  const normalizeImportRows = (headers, rows, fileLabel) => {
    const rawHeaders = headers.map((header) => String(header ?? '').replace(/^\uFEFF/, '').trim());
    if (!rawHeaders.some(Boolean) || !rows.length) {
      throw new Error(`${fileLabel} needs a header row and at least one product.`);
    }
    return rows
      .filter((values) => values.some((value) => String(value ?? '').trim()))
      .map((values) => {
        const rowObj = {};
        rawHeaders.forEach((header, index) => {
          if (!header) return;
          const val = String(values[index] ?? '').trim();
          rowObj[header] = val;
          rowObj[header.toLowerCase().replace(/[\s-]+/g, '_')] = val;
        });
        return rowObj;
      });
  };

  const parseXlsx = async (file) => {
    let files;
    try {
      files = unzipSync(new Uint8Array(await file.arrayBuffer()));
    } catch {
      throw new Error('This Excel file could not be read. Please upload a valid .xlsx file.');
    }
    const readXml = (name) => files[name] ? strFromU8(files[name]) : '';
    const parser = new DOMParser();
    const sharedStrings = [];
    const sharedXml = readXml('xl/sharedStrings.xml');
    if (sharedXml) {
      parser.parseFromString(sharedXml, 'application/xml').querySelectorAll('si').forEach((item) => {
        sharedStrings.push(Array.from(item.querySelectorAll('t')).map((node) => node.textContent || '').join(''));
      });
    }

    const workbook = parser.parseFromString(readXml('xl/workbook.xml'), 'application/xml');
    const firstSheet = workbook.querySelector('sheet');
    const relationId = firstSheet?.getAttribute('r:id');
    const relationships = parser.parseFromString(readXml('xl/_rels/workbook.xml.rels'), 'application/xml');
    const target = Array.from(relationships.querySelectorAll('Relationship')).find((item) => item.getAttribute('Id') === relationId)?.getAttribute('Target');
    const sheetName = target ? `xl/${target.replace(/^\//, '').replace(/^xl\//, '')}` : Object.keys(files).find((name) => /^xl\/worksheets\/[^/]+\.xml$/i.test(name));
    const sheetXml = sheetName ? readXml(sheetName) : '';
    if (!sheetXml) throw new Error('No worksheet was found in this Excel file.');

    const sheet = parser.parseFromString(sheetXml, 'application/xml');
    const matrix = Array.from(sheet.querySelectorAll('sheetData > row')).map((row) => {
      const values = [];
      row.querySelectorAll('c').forEach((cell) => {
        const reference = cell.getAttribute('r') || '';
        const letters = reference.match(/[A-Z]+/i)?.[0]?.toUpperCase() || '';
        let column = 0;
        for (let i = 0; i < letters.length; i += 1) column = (column * 26) + letters.charCodeAt(i) - 64;
        const index = Math.max(0, column - 1);
        const type = cell.getAttribute('t');
        const raw = cell.querySelector('v')?.textContent || '';
        const inline = Array.from(cell.querySelectorAll('is t')).map((node) => node.textContent || '').join('');
        values[index] = type === 's' ? (sharedStrings[Number(raw)] || '') : type === 'inlineStr' ? inline : raw;
      });
      return values;
    });
    if (matrix.length < 2) throw new Error('Excel file needs a header row and at least one product.');
    return normalizeImportRows(matrix[0], matrix.slice(1), 'Excel file');
  };

  const selectImportFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const lowerName = file.name.toLowerCase();
    if (!/\.(csv|xlsx)$/i.test(lowerName)) {
      setNotice('Please upload a CSV or Excel (.xlsx) file.');
      return;
    }
    try {
      const rows = lowerName.endsWith('.xlsx') ? await parseXlsx(file) : parseCsv(await file.text());
      if (rows.length > 500) throw new Error('A maximum of 500 products can be imported at once.');
      setImportRows(rows);
      setImportFileName(file.name);
      setNotice(`${rows.length} product row(s) ready for import. Review the preview, then click Import.`);
    } catch (error) { setImportRows([]); setImportFileName(''); setNotice(error.message); }
  };

  const downloadImportTemplate = () => {
    window.open(`${productEndpoint}/import?format=template`, '_blank');
  };

  const exportCatalogCsv = () => {
    window.open(`${productEndpoint}/import?format=export`, '_blank');
  };

  const importProducts = async () => {
    if (!importRows.length || importing) return;
    setImporting(true);
    setNotice('');
    try {
      // Keep every request comfortably below serverless timeouts. The server
      // still validates and commits each batch atomically; a completed batch
      // remains saved if a later batch needs attention.
      // Hosted functions have a short execution window. Ten products keeps a
      // request well below that limit while the user still uploads one file
      // and clicks Import only once for all 200 products.
      const batchSize = 10;
      const totals = { created: 0, updated: 0, skipped: 0, total: 0, errors: [] };
      for (let start = 0; start < importRows.length; start += batchSize) {
        const batch = importRows.slice(start, start + batchSize);
        setNotice(`Importing all ${importRows.length} products… currently saving ${start + 1}-${start + batch.length}. Please keep this page open.`);
        let data;
        let response;
        let lastError;
        // A transient gateway timeout must not force the user to start the
        // entire 200-row upload again. Retry the small, idempotent-safe batch.
        for (let attempt = 1; attempt <= 2; attempt += 1) {
          try {
            response = await fetch(`${productEndpoint}/import`, {
              method: 'POST',
              headers: {
                ...shopHeaders(ownerRole),
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                rows: batch,
                products: batch,
                mode: importMode === 'update' ? 'update' : 'create',
              }),
            });
            data = await readApiJson(response);
            if (response.ok) break;
            lastError = new Error(data?.error || `Import service returned status ${response.status}.`);
          } catch (error) {
            lastError = error;
          }
          if (attempt < 2) await new Promise((resolve) => setTimeout(resolve, 500));
        }
        if (!response?.ok) {
          throw new Error(`Import stopped at row ${start + 1}: ${lastError?.message || 'Failed to import products.'}`);
        }
        const res = data.data || {};
        totals.created += Number(res.created || 0);
        totals.updated += Number(res.updated || 0);
        totals.skipped += Number(res.skipped || 0);
        totals.total += Number(res.total || batch.length);
        if (Array.isArray(res.errors)) {
          totals.errors.push(...res.errors.map((item) => ({ ...item, row: Number(item.row || 0) + start })));
        }
      }

      const { created, updated, skipped, total, errors: errorList } = totals;

      let msg = isSeller
        ? `Successfully submitted ${created + updated} product(s) for approval!`
        : `Import completed: ${created} created, ${updated} updated, ${skipped} skipped (out of ${total}).`;

      if (errorList.length > 0) {
        const sample = errorList.slice(0, 3).map((e) => `Row ${e.row}: ${e.message}`).join('; ');
        msg += ` Note: ${errorList.length} row(s) had warnings (${sample}${errorList.length > 3 ? '...' : ''}).`;
      }

      setNotice(msg);
      setImportRows([]);
      setImportFileName('');
      notifyShopProductsUpdated();
      await load();
      if (!isSeller) await loadStats();
    } catch (err) {
      setNotice(err.message || 'Error processing product import.');
    } finally {
      setImporting(false);
    }
  };

  const fixExistingProductCategories = async () => {
    setNormalizingCategories(true);
    try {
      await loadReferenceData();
      await load();
      setNotice('Categories and catalog refreshed and verified.');
    } catch (err) {
      setNotice(err.message || 'Failed to refresh categories.');
    } finally {
      setNormalizingCategories(false);
    }
  };

  const duplicateProduct = async (product) => {
    if (!window.confirm(`Duplicate "${product.name}"? A new product with a fresh unique Product ID and SKU will be created.`)) return;
    setSaving(true);
    setNotice('');
    try {
      const response = await fetch(productEndpoint, {
        method: 'PUT',
        headers: shopHeaders(ownerRole),
        body: JSON.stringify({ id: product.id, action: 'duplicate' }),
      });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not duplicate product');
      setNotice(`Product duplicated successfully! New Code: ${data.data?.product_code || ''}`);
      notifyShopProductsUpdated();
      await load();
      if (!isSeller) await loadStats();
    } catch (err) {
      setNotice(err.message);
    } finally {
      setSaving(false);
    }
  };

  const openStockHistory = async (product) => {
    setStockHistoryModal({ open: true, product, movements: [], loading: true });
    try {
      const res = await fetch(`/api/admin/shop-products/stock?product_id=${product.id}`, {
        headers: shopHeaders(ownerRole),
      });
      const data = await readApiJson(res);
      setStockHistoryModal({ open: true, product, movements: data.data || [], loading: false });
    } catch (err) {
      setStockHistoryModal((prev) => ({ ...prev, loading: false }));
    }
  };

  const submitQuickStockAdjust = async (e) => {
    e.preventDefault();
    if (!quickStockModal.product) return;
    setQuickStockModal((prev) => ({ ...prev, saving: true }));
    try {
      const res = await fetch('/api/admin/shop-products/stock', {
        method: 'POST',
        headers: shopHeaders(ownerRole),
        body: JSON.stringify({
          product_id: quickStockModal.product.id,
          new_quantity: quickStockModal.newQuantity,
          reason: quickStockModal.reason,
        }),
      });
      const data = await readApiJson(res);
      if (!res.ok) throw new Error(data.error || 'Could not adjust stock');
      setNotice(`Stock updated for ${quickStockModal.product.name} to ${quickStockModal.newQuantity}`);
      setQuickStockModal({ open: false, product: null, newQuantity: 0, reason: '', saving: false });
      notifyShopProductsUpdated();
      await load();
      if (!isSeller) await loadStats();
    } catch (err) {
      setNotice(err.message);
      setQuickStockModal((prev) => ({ ...prev, saving: false }));
    }
  };

  const handleAutoGenerateSku = () => {
    const rawCat = String(form.category || 'GEN').replace(/[^a-zA-Z]/g, '').toUpperCase();
    const catCode = (rawCat.slice(0, 4) || 'PROD').padEnd(4, 'X');
    const rand = Math.floor(1000 + Math.random() * 9000);
    setForm((prev) => ({ ...prev, sku: `MTB-${catCode}-${rand}` }));
  };

  const handleGenerateBarcode = () => {
    const code = form.product_code || `MTBPROD${Math.floor(100000 + Math.random() * 900000)}`;
    setForm((prev) => ({ ...prev, barcode: code.replace(/[^A-Za-z0-9]/g, '').toUpperCase(), barcode_type: 'CODE128' }));
  };

  const handlePriceChange = (field, val) => {
    const nextForm = { ...form, [field]: val };
    const priceVal = Number(field === 'price' ? val : nextForm.price) || 0;
    const mrpVal = Number(field === 'mrp' ? val : nextForm.mrp) || priceVal;
    if (mrpVal > priceVal && mrpVal > 0) {
      nextForm.discount_percent = Math.round(((mrpVal - priceVal) / mrpVal) * 10000) / 100;
      nextForm.discount_amount = Math.round((mrpVal - priceVal) * 100) / 100;
    } else {
      nextForm.discount_percent = 0;
      nextForm.discount_amount = 0;
    }
    setForm(nextForm);
  };

  const addVariantRow = () => {
    const nextVar = {
      id: `temp_${Date.now()}`,
      variant_code: '',
      name: '',
      sku: `${form.sku ? `${form.sku}-V${(form.variants || []).length + 1}` : ''}`,
      barcode: '',
      size: '',
      color: '',
      material: '',
      price: form.price || '',
      mrp: form.mrp || form.price || '',
      quantity: 0,
      is_active: true,
    };
    setForm((prev) => ({ ...prev, variants: [...(prev.variants || []), nextVar], has_variants: true }));
  };

  const updateVariantRow = (index, field, value) => {
    setForm((prev) => {
      const list = [...(prev.variants || [])];
      list[index] = { ...list[index], [field]: value };
      return { ...prev, variants: list };
    });
  };

  const removeVariantRow = (index) => {
    setForm((prev) => {
      const list = (prev.variants || []).filter((_, i) => i !== index);
      return { ...prev, variants: list, has_variants: list.length > 0 };
    });
  };

  const edit = async (product) => {
    let full = product;
    // The catalog endpoint intentionally returns a compact row for speed. It
    // omits editor-only values such as bulk pricing, FAQs, delivery cities and
    // policies. Never initialise an admin edit form from that partial row:
    // saving it again would overwrite those stored values with empty defaults.
    if (!isSeller) {
      try {
        const res = await fetch(`${productEndpoint}?id=${product.id}`, { headers: shopHeaders(ownerRole) });
        const data = await readApiJson(res);
        if (!res.ok || !data?.data) {
          throw new Error(data?.error || 'Could not load the complete product details for editing.');
        }
        full = data.data;
      } catch (error) {
        // Failing closed prevents an incomplete list row from erasing details
        // on the next save.
        setNotice(error.message || 'Could not load complete product details. Please try again.');
        return;
      }
    }
    const jsonArray = (value) => {
      if (Array.isArray(value)) return value;
      try { const parsed = JSON.parse(value); return Array.isArray(parsed) ? parsed : []; } catch { return []; }
    };
    const fullImages = (() => {
      if (Array.isArray(full.images)) return full.images;
      try { const p = JSON.parse(full.images); return Array.isArray(p) ? p : []; } catch { return []; }
    })();
    const fullSpecs = (() => {
      if (full.specifications && typeof full.specifications === 'object') return full.specifications;
      try { return JSON.parse(full.specifications) || {}; } catch { return {}; }
    })();
    full = { ...full, images: fullImages, specifications: fullSpecs };
    setEditingId(full.id);
    setShowProductForm(true);
    setFormTab('basic');
    const existingImgs = Array.from(new Set([
      full.image_url,
      ...fullImages
    ].filter(Boolean)));
    setImagesList(existingImgs);
    const extractedAttrs = extractProductAttributes(full);
    setFormAttributes({
      thickness: extractedAttrs.thickness || '',
      size: extractedAttrs.size || '',
      type: extractedAttrs.type || '',
      color: extractedAttrs.color || '',
      material: extractedAttrs.material || '',
      grade: extractedAttrs.grade || '',
      pack_size: extractedAttrs.pack_size || '',
    });
    setForm({
      name: full.name || '',
      description: full.description || '',
      category: full.category || '',
      subcategory: full.subcategory || '',
      quality_tier: full.quality_tier || 'all',
      quote_price_range: full.quote_price_range || '',
      price: full.price ?? '',
      compare_at_price: full.compare_at_price ?? full.mrp ?? '',
      mrp: full.mrp ?? full.compare_at_price ?? full.price ?? '',
      discount_percent: full.discount_percent ?? 0,
      discount_amount: full.discount_amount ?? 0,
      gst_percent: full.gst_percent ?? 18,
      is_tax_inclusive: full.is_tax_inclusive !== false,
      currency: full.currency || 'INR',
      is_featured_deal: full.is_featured_deal === true,
      brand: full.brand || '',
      unit: full.unit || '',
      measurement_unit: full.measurement_unit || full.unit || '',
      quantity: full.quantity ?? 0,
      low_stock_threshold: full.low_stock_threshold ?? 5,
      stock_status: full.stock_status || 'in_stock',
      weight: full.weight ?? '',
      weight_unit: full.weight_unit || 'kg',
      dimensions: full.dimensions || '',
      product_code: full.product_code || '',
      sku: full.sku || '',
      barcode: full.barcode || '',
      barcode_type: full.barcode_type || 'CODE128',
      mpn: full.mpn || '',
      variant_id: full.variant_id || '',
      keywords: full.keywords || '',
      product_url_slug: full.product_url_slug || '',
      extraction_notes: full.extraction_notes || '',
      http_status: full.http_status || '200',
      image_url: existingImgs[0] || full.image_url || '',
      available_cities: jsonArray(full.available_cities),
      is_available: full.is_available !== false,
      has_variants: full.has_variants === true || jsonArray(full.variants).length > 0,
      variants: jsonArray(full.variants),
      adjustment_reason: '',
      approval_status: full.specifications?.__approval__?.status || (full.status === 'rejected' ? 'rejected' : full.status === 'pending_approval' ? 'pending' : (full.vendor_id ? 'pending' : 'approved')),
      rejection_reason: full.specifications?.__approval__?.reason || '',
    });
    setGalleryText(existingImgs.join('\n'));
    setSpecsText(Object.entries(full.specifications || {}).filter(([key]) => key !== '__approval__').map(([key, value]) => `${key}: ${value}`).join('\n'));
    setBulkText(jsonArray(full.bulk_pricing).map((tier) => `${tier.min_quantity}: ${tier.price}`).join('\n'));
    setHighlights(jsonArray(full.highlights));
    setNewHighlight('');
    setFaqs(jsonArray(full.faqs));
    setReturnsPolicy(full.returns_policy || '');
    setNotice('');
    document.getElementById(formId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const reset = () => {
    setEditingId(null);
    setShowProductForm(false);
    setFormTab('basic');
    setIsCustomSubcategory(false);
    setFormAttributes({ thickness: '', size: '', type: '', color: '', material: '', grade: '', pack_size: '' });
    setForm(emptyProduct);
    setImagesList([]);
    setNewImageUrl('');
    setGalleryText('');
    setSpecsText('');
    setBulkText('');
    setHighlights([]);
    setNewHighlight('');
    setFaqs([]);
    setReturnsPolicy('');
    setNotice('');
  };

  const startAddProduct = () => {
    setEditingId(null);
    setFormTab('basic');
    setIsCustomSubcategory(false);
    setFormAttributes({ thickness: '', size: '', type: '', color: '', material: '', grade: '', pack_size: '' });
    setForm(emptyProduct);
    setImagesList([]);
    setNewImageUrl('');
    setGalleryText('');
    setSpecsText('');
    setBulkText('');
    setHighlights([]);
    setNewHighlight('');
    setFaqs([]);
    setReturnsPolicy('');
    setNotice('');
    setShowProductForm(true);
    requestAnimationFrame(() => {
      document.getElementById(formId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setNotice('');
    try {
      if (form.price === '' || form.price == null || Number(form.price) <= 0 || !Number.isFinite(Number(form.price))) {
        throw new Error('Please enter a valid positive Buy Now fixed price.');
      }

      const parseLines = (value) => (value || '').split('\n').map((line) => line.trim()).filter(Boolean);
      const specifications = {};
      if (formAttributes.thickness?.trim()) specifications.Thickness = formAttributes.thickness.trim();
      if (formAttributes.size?.trim()) specifications.Size = formAttributes.size.trim();
      if (formAttributes.type?.trim()) specifications.Type = formAttributes.type.trim();
      if (formAttributes.color?.trim()) specifications.Colors = formAttributes.color.trim();
      if (formAttributes.material?.trim()) specifications.Material = formAttributes.material.trim();
      if (formAttributes.grade?.trim()) specifications.Grade = formAttributes.grade.trim();
      if (formAttributes.pack_size?.trim()) specifications.PackSize = formAttributes.pack_size.trim();
      parseLines(specsText).forEach((line) => {
        const separator = line.indexOf(':');
        if (separator !== -1) {
          const key = line.slice(0, separator).trim();
          const val = line.slice(separator + 1).trim();
          if (key && val) specifications[key] = val;
        } else if (line.trim()) {
          specifications[line.trim()] = 'Yes';
        }
      });

      const bulk_pricing = [];
      parseLines(bulkText).forEach((line) => {
        const parts = line.split(/[:\s-]+/).map((part) => part.trim()).filter(Boolean);
        if (parts.length >= 2) {
          const minQty = Number(parts[0]);
          const tierPrice = Number(parts[1]);
          if (Number.isInteger(minQty) && minQty >= 1 && Number.isFinite(tierPrice) && tierPrice > 0) {
            bulk_pricing.push({ min_quantity: minQty, price: tierPrice });
          }
        }
      });

      const allImgs = Array.from(new Set([
        ...imagesList,
        ...parseLines(galleryText)
      ].filter(Boolean)));
      const mainCover = allImgs[0] || form.image_url || '';

      if (!isSeller) {
        const appStatus = form.approval_status || 'approved';
        specifications.__approval__ = {
          status: appStatus,
          updated_at: new Date().toISOString(),
          updated_by: 'admin',
          reason: appStatus === 'rejected' ? (form.rejection_reason || '') : '',
        };
      }

      const isEditing = Boolean(editingId);
      const response = await fetch(productEndpoint, {
        method: isEditing ? 'PUT' : 'POST', headers: shopHeaders(ownerRole),
        body: JSON.stringify({
          ...form,
          quote_price_range: form.quote_price_range || null,
          image_url: mainCover,
          images: allImgs,
          specifications,
          bulk_pricing,
          highlights: highlights.map((h) => String(h).trim()).filter(Boolean),
          faqs: faqs.map((f) => ({ q: String(f.q || '').trim(), a: String(f.a || '').trim() })).filter((f) => f.q && f.a),
          returns_policy: returnsPolicy.trim(),
          approval_status: form.approval_status || 'approved',
          rejection_reason: form.rejection_reason || '',
          ...(isEditing ? { id: editingId } : {})
        }),
      });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not save product');
      notifyShopProductsUpdated();
      reset();
      if (isSeller) {
        setNotice(
          isEditing
            ? (data?.resubmitted_for_approval ? 'Submitted for admin approval.' : 'Product updated.')
            : 'Submitted for admin approval.'
        );
      } else {
        setNotice(isEditing ? 'Product updated.' : 'Product added successfully.');
      }
      await load();
    } catch (error) { setNotice(error.message); }
    finally { setSaving(false); }
  };

  const toggle = async (product) => {
    try {
      const response = await fetch(productEndpoint, {
        method: 'PUT', headers: shopHeaders(ownerRole),
        body: JSON.stringify({ id: product.id, action: 'toggle', is_available: !product.is_available }),
      });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not update product');
      notifyShopProductsUpdated();
      await load();
    } catch (error) { setNotice(error.message); }
  };

  const remove = async (product) => {
    if (!window.confirm(`Delete ${product.name}?`)) return;
    try {
      const response = await fetch(`${productEndpoint}?id=${product.id}`, { method: 'DELETE', headers: shopHeaders(ownerRole) });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not delete product');
      notifyShopProductsUpdated();
      setNotice('Product deleted.');
      await load();
    } catch (error) { setNotice(error.message); }
  };

  const handleUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploading(true);
    try {
      const imageUrl = await uploadImage(file);
      setForm((current) => ({ ...current, image_url: imageUrl }));
      const nextList = Array.from(new Set([imageUrl, ...imagesList]));
      setImagesList(nextList);
      setGalleryText(nextList.join('\n'));
    }
    catch (error) { setNotice(error.message); }
    finally { setUploading(false); event.target.value = ''; }
  };

  const handleMultipleUpload = async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) return;
    setUploading(true);
    setNotice('');
    try {
      const uploadedUrls = [];
      // Upload a few files at a time. This is much faster than one-by-one,
      // without flooding the browser or Cloudinary when a large gallery is
      // selected.
      for (let start = 0; start < files.length; start += 3) {
        const batch = await Promise.all(files.slice(start, start + 3).map(uploadImage));
        uploadedUrls.push(...batch.filter(Boolean));
      }
      if (uploadedUrls.length > 0) {
        const nextList = Array.from(new Set([...imagesList, ...uploadedUrls]));
        setImagesList(nextList);
        setGalleryText(nextList.join('\n'));
        if (!form.image_url) {
          setForm((current) => ({ ...current, image_url: nextList[0] }));
        }
        setNotice(`Uploaded ${uploadedUrls.length} image(s) successfully.`);
      }
    } catch (error) {
      setNotice(error.message);
    } finally {
      setUploading(false);
      event.target.value = '';
    }
  };

  const addImageUrl = () => {
    const url = newImageUrl.trim();
    if (!url) return;
    const nextList = Array.from(new Set([...imagesList, url]));
    setImagesList(nextList);
    setGalleryText(nextList.join('\n'));
    if (!form.image_url) {
      setForm((current) => ({ ...current, image_url: url }));
    }
    setNewImageUrl('');
  };

  const removeImage = (index) => {
    const nextList = imagesList.filter((_, i) => i !== index);
    setImagesList(nextList);
    setGalleryText(nextList.join('\n'));
    setForm((current) => ({
      ...current,
      image_url: nextList[0] || ''
    }));
  };

  const setAsCover = (index) => {
    const target = imagesList[index];
    if (!target) return;
    const nextList = [target, ...imagesList.filter((_, i) => i !== index)];
    setImagesList(nextList);
    setGalleryText(nextList.join('\n'));
    setForm((current) => ({
      ...current,
      image_url: target
    }));
  };

  const addHighlightItem = () => {
    const trimmed = newHighlight.trim();
    if (!trimmed) return;
    setHighlights((prev) => [...prev, trimmed]);
    setNewHighlight('');
  };

  const removeHighlightItem = (index) => {
    setHighlights((prev) => prev.filter((_, idx) => idx !== index));
  };

  const loadPresetHighlights = () => {
    const presets = [
      '100% Genuine & Brand Certified Material',
      'Tested for Structural Strength & Load Bearing Capacity',
      'Direct Sourced from Authorized Manufacturers / Mills',
      'Standard Weight & Packaging Verification at Dispatch',
      'Express Delivery & Safe On-site Unloading Support'
    ];
    setHighlights((prev) => Array.from(new Set([...prev, ...presets])));
  };

  const addFaqItem = () => {
    setFaqs((prev) => [...prev, { q: '', a: '' }]);
  };

  const updateFaqItem = (index, field, value) => {
    setFaqs((prev) => {
      const next = [...prev];
      next[index] = { ...next[index], [field]: value };
      return next;
    });
  };

  const removeFaqItem = (index) => {
    setFaqs((prev) => prev.filter((_, idx) => idx !== index));
  };

  const loadPresetFaqs = () => {
    const presets = [
      {
        q: 'How should this material be stored at the site?',
        a: 'Store in an elevated, dry, covered shed on wooden pallets away from moisture and direct rainwater.'
      },
      {
        q: 'Is an official GST tax invoice provided?',
        a: 'Yes, 100% genuine manufacturer test certificate and GST invoice accompany every delivery.'
      },
      {
        q: 'How do bulk order discounts work?',
        a: 'Bulk discounts unlock automatically for high volume orders or above ₹50,000 at checkout.'
      },
      {
        q: 'What is the estimated delivery timeline?',
        a: 'Orders within service cities are typically dispatched and delivered within 24 to 48 hours.'
      }
    ];
    setFaqs((prev) => (prev.length === 0 ? presets : [...prev, ...presets]));
  };

  const loadPresetReturnsPolicy = () => {
    setReturnsPolicy(
      'Site Inspection: Customers can inspect quantity, brand stamps, and packaging at the time of truck unloading.\n' +
      'Transit Damage: Any burst bags or damaged items reported on the delivery challan will be replaced immediately or refunded.\n' +
      'Unopened Materials: Standard 48-hour return policy applies for unopened, undamaged materials.'
    );
  };

  return <div className="shop-admin-panel">
    {/* Stock Movement History Modal */}
    {stockHistoryModal.open && (
      <div className="shop-modal-overlay" onClick={() => setStockHistoryModal({ open: false, product: null, movements: [], loading: false })}>
        <div className="shop-modal-container" onClick={(e) => e.stopPropagation()}>
          <div className="shop-modal-header">
            <div>
              <h3>Stock Movement Audit History</h3>
              <small style={{ color: 'var(--shop-admin-muted)' }}>
                {stockHistoryModal.product?.name} ({stockHistoryModal.product?.product_code || 'ID: ' + stockHistoryModal.product?.id})
              </small>
            </div>
            <button type="button" className="shop-action-btn-sm" onClick={() => setStockHistoryModal({ open: false, product: null, movements: [], loading: false })}>✕</button>
          </div>
          <div className="shop-modal-body">
            {stockHistoryModal.loading ? (
              <p>Loading stock movements…</p>
            ) : !stockHistoryModal.movements.length ? (
              <p style={{ color: 'var(--shop-admin-muted)', textAlign: 'center', padding: '24px 0' }}>No stock movements recorded yet.</p>
            ) : (
              <div className="shop-admin-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Date & Time</th>
                      <th>Type</th>
                      <th>Change</th>
                      <th>Before → After</th>
                      <th>Reason</th>
                      <th>Performed By</th>
                    </tr>
                  </thead>
                  <tbody>
                    {stockHistoryModal.movements.map((m) => (
                      <tr key={m.id}>
                        <td style={{ fontSize: 12 }}>{new Date(m.created_at).toLocaleString()}</td>
                        <td>
                          <span className={`shop-stock-pill ${m.quantity_change > 0 ? 'in_stock' : 'out_of_stock'}`}>
                            {m.change_type}
                          </span>
                        </td>
                        <td style={{ fontWeight: 800, color: m.quantity_change > 0 ? '#16a34a' : '#dc2626' }}>
                          {m.quantity_change > 0 ? `+${m.quantity_change}` : m.quantity_change}
                        </td>
                        <td>{m.quantity_before} → <strong>{m.quantity_after}</strong></td>
                        <td style={{ fontSize: 12 }}>{m.reason || '—'}</td>
                        <td style={{ fontSize: 12 }}>{m.performed_by_name || m.performed_by_role || 'System'}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          <div className="shop-modal-footer">
            <button type="button" className="shop-action-btn-sm" onClick={() => setStockHistoryModal({ open: false, product: null, movements: [], loading: false })}>Close</button>
          </div>
        </div>
      </div>
    )}

    {/* Quick Stock Adjustment Modal */}
    {quickStockModal.open && (
      <div className="shop-modal-overlay" onClick={() => setQuickStockModal({ open: false, product: null, newQuantity: 0, reason: '', saving: false })}>
        <form className="shop-modal-container" style={{ maxWidth: 480 }} onSubmit={submitQuickStockAdjust} onClick={(e) => e.stopPropagation()}>
          <div className="shop-modal-header">
            <h3>Quick Stock Adjustment</h3>
            <button type="button" className="shop-action-btn-sm" onClick={() => setQuickStockModal({ open: false, product: null, newQuantity: 0, reason: '', saving: false })}>✕</button>
          </div>
          <div className="shop-modal-body" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
            <p style={{ margin: 0, fontSize: 13, color: 'var(--shop-admin-muted)' }}>
              Adjust current stock for <strong>{quickStockModal.product?.name}</strong>. Current quantity: <strong>{quickStockModal.product?.quantity}</strong> units.
            </p>
            <label>
              <span style={{ fontSize: 12, fontWeight: 700 }}>New Quantity Available <span style={{ color: '#ef4444' }}>*</span></span>
              <input
                type="number"
                min="0"
                step="1"
                required
                value={quickStockModal.newQuantity}
                onChange={(e) => setQuickStockModal({ ...quickStockModal, newQuantity: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid var(--shop-admin-border)', background: 'var(--shop-admin-input)' }}
              />
            </label>
            <label>
              <span style={{ fontSize: 12, fontWeight: 700 }}>Adjustment Reason <span style={{ color: '#ef4444' }}>*</span></span>
              <select
                required
                value={quickStockModal.reason}
                onChange={(e) => setQuickStockModal({ ...quickStockModal, reason: e.target.value })}
                style={{ width: '100%', padding: '8px 10px', borderRadius: 6, border: '1px solid var(--shop-admin-border)', background: 'var(--shop-admin-input)' }}
              >
                <option value="Restock / New Shipment">📦 Shipment Received / Restock</option>
                <option value="Inventory Count Correction">📋 Physical Inventory Count Correction</option>
                <option value="Damaged / Spoiled Stock">⚠️ Damaged / Spoiled Stock</option>
                <option value="Customer Return">🔄 Customer Return / Restocked</option>
                <option value="Audit Adjustment">⚖️ Audit Adjustment</option>
                <option value="Other">📝 Other Adjustment</option>
              </select>
            </label>
          </div>
          <div className="shop-modal-footer">
            <button type="button" className="shop-action-btn-sm" onClick={() => setQuickStockModal({ open: false, product: null, newQuantity: 0, reason: '', saving: false })}>Cancel</button>
            <button type="submit" disabled={quickStockModal.saving} style={{ background: 'var(--brand-blue)', color: '#fff', border: 'none', borderRadius: 6, padding: '7px 16px', fontWeight: 700, cursor: 'pointer' }}>
              {quickStockModal.saving ? 'Updating…' : 'Save Adjustment'}
            </button>
          </div>
        </form>
      </div>
    )}

    {showProductForm || editingId ? (
      <>
        <div className="shop-form-header-bar">
          <button
            type="button"
            onClick={reset}
            className="shop-admin-back-btn"
          >
            <ArrowLeft size={16} /> Back to products
          </button>
          <div className="shop-form-header-title-wrap">
            <h2>{editingId ? `Edit Product: ${form.name || `#${editingId}`}` : 'Add New Product'}</h2>
            <p>{isSeller ? 'Fill out product details, pricing and inventory for admin approval.' : 'Complete Product Management, Catalog & Inventory System'}</p>
          </div>
          {editingId && (
            <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
              <button
                type="button"
                className="shop-action-btn-sm"
                onClick={() => openStockHistory({ id: editingId, name: form.name, product_code: form.product_code })}
              >
                <History size={14} /> Stock History
              </button>
            </div>
          )}
        </div>
        {notice && <p className="shop-admin-notice" role="status">{notice}</p>}

        <form id={formId} className="shop-admin-card" onSubmit={save}>
          {/* Tab Navigation Header (Modern Segmented Pill Strip - No Horizontal Scrollbar) */}
          <div className="shop-form-tabs-bar">
            <div className="shop-form-tabs">
              {[
                { id: 'basic', label: 'Basic Info', icon: '🏷️', num: 1 },
                { id: 'identifiers', label: 'Identifiers', icon: '🆔', num: 2 },
                { id: 'pricing', label: 'Pricing & GST', icon: '💰', num: 3 },
                { id: 'inventory', label: 'Inventory & Stock', icon: '📦', num: 4 },
                { id: 'media', label: 'Media', icon: '📸', num: 5, badge: imagesList.length },
                { id: 'specs', label: 'Specifications', icon: '⚙️', num: 6 },
                { id: 'variants', label: 'Variants', icon: '🧬', num: 7, badge: form.variants?.length || 0 },
                { id: 'bulk', label: 'Bulk Prices', icon: '📊', num: 8 },
                { id: 'seo', label: 'SEO & Policies', icon: '🔍', num: 9 },
                ...(!isSeller ? [{ id: 'admin_only', label: 'Admin Internal', icon: '🔒', num: 10 }] : []),
              ].map((tab) => {
                const isActive = formTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    className={`shop-form-tab-btn ${isActive ? 'active' : ''}`}
                    onClick={() => setFormTab(tab.id)}
                  >
                    <span className="shop-tab-icon">{tab.icon}</span>
                    <span className="shop-tab-label">{tab.num}. {tab.label}</span>
                    {typeof tab.badge === 'number' && tab.badge > 0 && (
                      <span className="shop-tab-counter">{tab.badge}</span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="shop-admin-fields">
            {/* TAB 1: BASIC INFO */}
            {formTab === 'basic' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                {!isSeller && (
                  <div
                    className="shop-admin-wide"
                    style={{
                      background: 'var(--shop-admin-subtle, #f8fafc)',
                      padding: '14px 18px',
                      borderRadius: 10,
                      border: '1px solid var(--shop-admin-border, #cbd5e1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: 14,
                    }}
                  >
                    <div>
                      <strong style={{ fontSize: 13, display: 'block', color: 'var(--shop-admin-text, #0f172a)' }}>
                        🛡️ Product Approval & Store Status
                      </strong>
                      <span style={{ fontSize: 12, color: 'var(--shop-admin-muted, #64748b)' }}>
                        Control whether this product is approved for customers to buy on Shop Now.
                      </span>
                    </div>

                    <div style={{ display: 'flex', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
                      <label style={{ margin: 0, fontSize: 13, fontWeight: 700, display: 'flex', alignItems: 'center', gap: 6 }}>
                        Approval Status:
                        <select
                          value={form.approval_status || 'approved'}
                          onChange={(e) => {
                            const val = e.target.value;
                            setForm({
                              ...form,
                              approval_status: val,
                              is_available: val === 'approved',
                            });
                          }}
                          style={{
                            padding: '6px 12px',
                            borderRadius: 6,
                            fontWeight: 700,
                            borderColor: form.approval_status === 'approved' ? '#16a34a' : form.approval_status === 'rejected' ? '#dc2626' : '#d97706',
                          }}
                        >
                          <option value="approved">✓ Approved (Active on Store)</option>
                          <option value="pending">⏳ Pending Approval</option>
                          <option value="rejected">✕ Rejected</option>
                        </select>
                      </label>

                      {form.approval_status === 'rejected' && (
                        <input
                          value={form.rejection_reason || ''}
                          onChange={(e) => setForm({ ...form, rejection_reason: e.target.value })}
                          placeholder="Rejection reason for seller..."
                          style={{ minWidth: 260, padding: '6px 10px', fontSize: 12 }}
                        />
                      )}
                    </div>
                  </div>
                )}

                <label className="shop-admin-wide">
                  <span>Product Name <span style={{ color: '#ef4444' }}>*</span></span>
                  <input required maxLength={255} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="e.g. UltraTech Super Cement 50 Kg Bag" />
                </label>

                <label>
                  <span>Category <span style={{ color: '#ef4444' }}>*</span></span>
                  <select
                    required
                    value={form.category}
                    onChange={(e) => {
                      const selectedVal = e.target.value;
                      const cat = categories.find((item) => (item.name || '').trim().toLowerCase() === selectedVal.trim().toLowerCase());
                      setForm({
                        ...form,
                        category: selectedVal,
                        subcategory: '',
                        unit: cat?.unit || form.unit,
                        measurement_unit: cat?.unit || form.measurement_unit || form.unit,
                      });
                      setIsCustomSubcategory(false);
                    }}
                  >
                    <option value="">Select category</option>
                    {(() => {
                      const standardNavbarCats = [
                        'Building Materials', 'Carpentry', 'Plumbing', 'Electrical',
                        'Furniture & Architectural Hardware', 'New Launches', 'Chemicals', 'Paints',
                      ];
                      const catNames = new Set(standardNavbarCats);
                      categories.forEach((c) => { if (c.name && c.name.trim()) catNames.add(c.name.trim()); });
                      if (form.category && !catNames.has(form.category)) catNames.add(form.category);
                      return Array.from(catNames).map((name) => <option key={name} value={name}>{name}</option>);
                    })()}
                  </select>
                </label>

                <label>
                  <span>Subcategory</span>
                  {!isCustomSubcategory ? (
                    <select
                      value={form.subcategory}
                      onChange={(e) => {
                        if (e.target.value === '__CUSTOM__') {
                          setIsCustomSubcategory(true);
                          setForm({ ...form, subcategory: '' });
                        } else {
                          setForm({ ...form, subcategory: e.target.value });
                        }
                      }}
                    >
                      <option value="">Select subcategory (optional)</option>
                      {(() => {
                        const cat = categories.find(
                          (item) => (item.name || '').trim().toLowerCase() === (form.category || '').trim().toLowerCase()
                        );
                        const list = [];
                        let rawSubs = cat?.subcategories;
                        if (typeof rawSubs === 'string') { try { rawSubs = JSON.parse(rawSubs); } catch {} }
                        if (Array.isArray(rawSubs)) {
                          rawSubs.forEach((s) => {
                            const name = typeof s === 'object' && s !== null ? s.name : s;
                            if (name && typeof name === 'string' && name.trim() && !list.includes(name.trim())) list.push(name.trim());
                          });
                        }
                        const defaultTree = {
                          'building materials': ['Cement', 'Iron', 'Steel', 'Aggregate (Barjri)', 'Coarse Sand', 'Fine Sand', 'Brick', 'Block', 'POP', 'Tiles', 'Marble', 'Glass', 'Waterproofing'],
                          'carpentry': ['Timber', 'Plywood', 'HPL', 'Rough Carpentry', 'Veneer', 'Flush Doors', 'Laminates'],
                          'plumbing': ['Sanitary', 'CPVC Pipes', 'Bath Fittings', 'Overhead Tanks', 'Pipes & Fittings', 'Drainage', 'Water Tanks', 'Taps & Showers'],
                          'electrical': ['Sockets', 'Switches', 'MCB', 'Distribution Board (DB)', 'LED Lights', 'Electrical Cables', 'Wires & Conduits', 'Fans'],
                          'furniture & architectural hardware': ['Hinges, Channels & Handles', 'Kitchen Systems & Accessories', 'Wardrobe & Bed Fittings', 'Door Locks & Hardware'],
                          'chemicals': ['Construction Chemicals', 'Waterproofing Chemicals', 'Tile Adhesives', 'Admixtures'],
                          'paints': ['Interior Paints', 'Exterior Paints', 'Primers', 'Enamels & Distempers', 'Wall Putty'],
                        };
                        const normCatKey = (form.category || '').toLowerCase().trim();
                        const matchedKey = Object.keys(defaultTree).find((key) => normCatKey === key || normCatKey.includes(key));
                        if (matchedKey && defaultTree[matchedKey]) {
                          defaultTree[matchedKey].forEach((name) => { if (!list.includes(name)) list.push(name); });
                        }
                        if (form.subcategory && !list.includes(form.subcategory)) list.unshift(form.subcategory);
                        return list.map((name) => <option key={name} value={name}>{name}</option>);
                      })()}
                      <option value="__CUSTOM__">✍️ + Type custom subcategory...</option>
                    </select>
                  ) : (
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <input
                        type="text"
                        placeholder="Enter subcategory name..."
                        value={form.subcategory}
                        onChange={(e) => setForm({ ...form, subcategory: e.target.value })}
                        style={{ flex: 1 }}
                        autoFocus
                      />
                      <button type="button" onClick={() => setIsCustomSubcategory(false)} className="shop-admin-subcat-btn">Choose from list</button>
                    </div>
                  )}
                </label>

                <label>
                  <span>Brand</span>
                  <input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} placeholder="e.g. UltraTech, Astral, Havells" />
                </label>

                <label>
                  <span>Quality Tier <span style={{ color: '#ef4444' }}>*</span></span>
                  <select required value={form.quality_tier} onChange={(e) => setForm({ ...form, quality_tier: e.target.value })}>
                    <option value="">Select quality tier</option>
                    {QUALITY_TIER_OPTIONS.map((tier) => <option key={tier.value} value={tier.value}>{tier.label}</option>)}
                  </select>
                </label>

                <label className="shop-admin-wide">
                  <span>Product Description</span>
                  <textarea rows="3" value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} placeholder="Enter detailed product description, grade, applications and handling..." />
                </label>

                <fieldset className="shop-admin-wide shop-admin-city-field">
                  <legend>Delivery cities for this product</legend>
                  <div>
                    {cities.map((city) => (
                      <label key={city}>
                        <input
                          type="checkbox"
                          checked={form.available_cities.includes(city)}
                          onChange={(event) =>
                            setForm({
                              ...form,
                              available_cities: event.target.checked
                                ? [...form.available_cities, city]
                                : form.available_cities.filter((item) => item !== city),
                            })
                          }
                        />{' '}
                        {city}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <div className="shop-admin-wide" style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
                  <label className="shop-admin-check">
                    <input
                      type="checkbox"
                      checked={form.is_available}
                      onChange={(e) => setForm({ ...form, is_available: e.target.checked })}
                    />{' '}
                    Show on Shop Now Storefront
                  </label>
                  <label className="shop-admin-check">
                    <input
                      type="checkbox"
                      checked={form.is_featured_deal}
                      onChange={(e) => setForm({ ...form, is_featured_deal: e.target.checked })}
                    />{' '}
                    Feature in Deals of the Week
                  </label>
                </div>
              </div>
            )}

            {/* TAB 2: IDENTIFICATION */}
            {formTab === 'identifiers' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 }}>
                <label>
                  <span>Product ID (Unique Permanent Identifier)</span>
                  <div className="shop-inline-input-action">
                    <input
                      readOnly
                      disabled
                      value={form.product_code || (editingId ? `MTB-PROD-${String(editingId).padStart(6, '0')}` : 'Auto-generated on creation (e.g. MTB-PROD-000101)')}
                      style={{
                        background: 'var(--shop-admin-subtle)',
                        fontWeight: 700,
                        cursor: 'not-allowed',
                        fontFamily: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace'
                      }}
                    />
                    {(form.product_code || editingId) && (
                      <button
                        type="button"
                        className="shop-action-btn-sm"
                        onClick={() => {
                          const code = form.product_code || `MTB-PROD-${String(editingId).padStart(6, '0')}`;
                          if (typeof navigator !== 'undefined' && navigator.clipboard) {
                            navigator.clipboard.writeText(code);
                            setNotice(`Copied Product ID: ${code}`);
                            setTimeout(() => setNotice(''), 2500);
                          }
                        }}
                        title="Copy Product ID"
                      >
                        <Copy size={12} style={{ display: 'inline', marginRight: 2 }} /> Copy
                      </button>
                    )}
                  </div>
                  <small style={{ color: 'var(--shop-admin-muted)' }}>Unique system generated ID. Never reused upon deletion.</small>
                </label>

                <label>
                  <span>SKU (Stock Keeping Unit)</span>
                  <div className="shop-inline-input-action">
                    <input
                      value={form.sku}
                      onChange={(e) => setForm({ ...form, sku: e.target.value.toUpperCase() })}
                      placeholder="e.g. MTB-BUIL-0001"
                    />
                    <button type="button" className="shop-action-btn-sm" onClick={handleAutoGenerateSku}>
                      ⚡ Generate
                    </button>
                  </div>
                  <small style={{ color: 'var(--shop-admin-muted)' }}>Unique across catalog. Format: MTB-CATEGORY-0001.</small>
                </label>

                <label>
                  <span>Barcode (EAN-13, UPC-A, Code 128)</span>
                  <div className="shop-inline-input-action">
                    <input
                      value={form.barcode}
                      onChange={(e) => setForm({ ...form, barcode: e.target.value })}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          setNotice(`Barcode scanner input captured: ${form.barcode}`);
                        }
                      }}
                      placeholder="Scan with USB Scanner or type barcode..."
                    />
                    <button type="button" className="shop-action-btn-sm" onClick={handleGenerateBarcode}>
                      ⚡ Generate Code
                    </button>
                  </div>
                  <small style={{ color: 'var(--shop-admin-muted)' }}>Supports USB Barcode Scanners. Scans ending in Enter are captured automatically.</small>
                </label>

                <label>
                  <span>Barcode Standard</span>
                  <select value={form.barcode_type} onChange={(e) => setForm({ ...form, barcode_type: e.target.value })}>
                    <option value="CODE128">Code 128 (Internal / General alphanumeric)</option>
                    <option value="EAN13">EAN-13 (Standard 13-digit retail barcode)</option>
                    <option value="UPCA">UPC-A (Standard 12-digit retail barcode)</option>
                    <option value="QR">QR Code</option>
                  </select>
                </label>

                <label>
                  <span>MPN (Manufacturer Part Number)</span>
                  <input
                    value={form.mpn}
                    onChange={(e) => setForm({ ...form, mpn: e.target.value })}
                    placeholder="e.g. UT-53-01 (Part number given by manufacturer)"
                  />
                  <small style={{ color: 'var(--shop-admin-muted)' }}>Optional: Used for searching genuine OEM parts.</small>
                </label>

                <label>
                  <span>Variant ID</span>
                  <input
                    value={form.variant_id}
                    onChange={(e) => setForm({ ...form, variant_id: e.target.value })}
                    placeholder="e.g. VAR-001 (If this product is a sub-variant)"
                  />
                </label>
              </div>
            )}

            {/* TAB 3: PRICING & GST */}
            {formTab === 'pricing' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 16 }}>
                  <label>
                    <span>Product MRP (₹)</span>
                    <input
                      type="number"
                      min="0"
                      step="0.01"
                      value={form.mrp}
                      onChange={(e) => handlePriceChange('mrp', e.target.value)}
                      placeholder="e.g. 500"
                    />
                    <small>Maximum Retail Price before discount.</small>
                  </label>

                  <label>
                    <span>Selling Price (Buy Now Fixed) (₹) <span style={{ color: '#ef4444' }}>*</span></span>
                    <input
                      required
                      type="number"
                      min="0.01"
                      step="0.01"
                      value={form.price}
                      onChange={(e) => handlePriceChange('price', e.target.value)}
                      placeholder="e.g. 450"
                    />
                    <small>The price the customer will pay.</small>
                  </label>

                  <label>
                    <span>GST Tax Rate</span>
                    <select
                      value={form.gst_percent}
                      onChange={(e) => setForm({ ...form, gst_percent: Number(e.target.value) })}
                    >
                      <option value="0">0% (GST Exempt)</option>
                      <option value="5">5% (Essential Materials)</option>
                      <option value="12">12% (Standard Building Items)</option>
                      <option value="18">18% (Standard Rate - Most Products)</option>
                      <option value="28">28% (Luxury / Cement / Heavy Materials)</option>
                    </select>
                  </label>

                  <label>
                    <span>Tax Inclusion Mode</span>
                    <select
                      value={form.is_tax_inclusive ? 'inclusive' : 'exclusive'}
                      onChange={(e) => setForm({ ...form, is_tax_inclusive: e.target.value === 'inclusive' })}
                    >
                      <option value="inclusive">Price is Inclusive of GST (Recommended)</option>
                      <option value="exclusive">Price is Exclusive of GST (GST added on top)</option>
                    </select>
                  </label>

                  <label>
                    <span>Get Quote Price Range (Optional)</span>
                    <input
                      value={form.quote_price_range || ''}
                      onChange={(e) => setForm({ ...form, quote_price_range: e.target.value })}
                      placeholder="e.g. 40-80"
                    />
                    <small>Leave empty if product only uses fixed Buy Now price.</small>
                  </label>
                </div>

                {/* Real-Time Price & Tax Breakdown Card */}
                {(() => {
                  const numPrice = Number(form.price) > 0 ? Number(form.price) : 0;
                  const numMrp = Number(form.mrp) > 0 ? Number(form.mrp) : numPrice;
                  const gstRate = Number(form.gst_percent) || 0;
                  const isInc = form.is_tax_inclusive;

                  let basePrice = numPrice;
                  let gstAmount = 0;
                  let finalCheckoutPrice = numPrice;

                  if (isInc) {
                    basePrice = Math.round((numPrice / (1 + gstRate / 100)) * 100) / 100;
                    gstAmount = Math.round((numPrice - basePrice) * 100) / 100;
                    finalCheckoutPrice = numPrice;
                  } else {
                    basePrice = numPrice;
                    gstAmount = Math.round((numPrice * (gstRate / 100)) * 100) / 100;
                    finalCheckoutPrice = Math.round((numPrice + gstAmount) * 100) / 100;
                  }

                  const savings = numMrp > finalCheckoutPrice ? numMrp - finalCheckoutPrice : 0;
                  const discountPct = numMrp > 0 && savings > 0 ? Math.round((savings / numMrp) * 10000) / 100 : 0;

                  return (
                    <div className="shop-price-breakdown-card">
                      <div className="breakdown-item">
                        <span className="breakdown-label">MRP (Original)</span>
                        <span className="breakdown-val">₹{numMrp.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span className="breakdown-label">Discount Benefit</span>
                        <span className="breakdown-val" style={{ color: discountPct > 0 ? '#16a34a' : 'inherit' }}>
                          {discountPct > 0 ? `${discountPct}% OFF (Save ₹${savings.toFixed(2)})` : 'No discount'}
                        </span>
                      </div>
                      <div className="breakdown-item">
                        <span className="breakdown-label">Base Price (Ex-GST)</span>
                        <span className="breakdown-val">₹{basePrice.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span className="breakdown-label">GST Tax ({gstRate}%)</span>
                        <span className="breakdown-val">₹{gstAmount.toFixed(2)}</span>
                      </div>
                      <div className="breakdown-item">
                        <span className="breakdown-label">Final Customer Price</span>
                        <span className="breakdown-val" style={{ color: 'var(--brand-blue)' }}>₹{finalCheckoutPrice.toFixed(2)}</span>
                      </div>
                    </div>
                  );
                })()}

                {/* Vendor Platform Commission Card */}
                {isSeller && (() => {
                  const numPrice = Number(form.price) > 0 && Number.isFinite(Number(form.price)) ? Number(form.price) : 0;
                  const currentRate = Number(commissionInfo?.rate ?? 0);
                  const adminFee = Math.round((numPrice * (currentRate / 100)) * 100) / 100;
                  const vendorPayout = Math.max(0, Math.round((numPrice - adminFee) * 100) / 100);
                  const rateSourceText = commissionInfo.rateSource === 'product'
                    ? 'Product Rule'
                    : commissionInfo.rateSource === 'category'
                    ? `Category Rule (${form.category})`
                    : 'Default Platform Rate';

                  return (
                    <div className="shop-commission-calculator-card">
                      <div className="shop-commission-card-header">
                        <div className="shop-commission-header-left">
                          <span style={{ fontSize: '1.25rem' }}>💰</span>
                          <div>
                            <h4 className="shop-commission-title">Platform Charges &amp; Admin Commission</h4>
                            <span className="shop-commission-subtitle">
                              {form.category ? `Live platform rate for ${form.category}` : 'Select category to resolve commission'}
                            </span>
                          </div>
                        </div>
                        {form.category && (
                          <span className={`shop-commission-badge ${currentRate > 0 ? 'badge-rate' : 'badge-zero'}`}>
                            {rateSourceText}: {currentRate.toFixed(2)}%
                          </span>
                        )}
                      </div>
                      <div className="shop-commission-grid">
                        <div className="shop-commission-col">
                          <span className="shop-commission-label">Product Selling Price</span>
                          <span className="shop-commission-val">₹{numPrice.toFixed(2)}</span>
                        </div>
                        <div className="shop-commission-col comm-charge">
                          <span className="shop-commission-label">Admin Commission ({currentRate}%)</span>
                          <span className={`shop-commission-val ${adminFee > 0 ? 'text-red' : ''}`}>- ₹{adminFee.toFixed(2)}</span>
                        </div>
                        <div className="shop-commission-col comm-payout">
                          <span className="shop-commission-label">Your Net Earning (Vendor Payout)</span>
                          <span className="shop-commission-val text-green">₹{vendorPayout.toFixed(2)}</span>
                        </div>
                      </div>
                    </div>
                  );
                })()}
              </div>
            )}

            {/* TAB 4: INVENTORY & SHIPPING */}
            {formTab === 'inventory' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <label>
                  <span>Available Stock Quantity <span style={{ color: '#ef4444' }}>*</span></span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    required
                    value={form.quantity}
                    onChange={(e) => setForm({ ...form, quantity: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                  />
                  <div style={{ marginTop: 6 }}>
                    <span className={`shop-stock-pill ${Number(form.quantity) <= 0 ? 'out_of_stock' : Number(form.quantity) <= Number(form.low_stock_threshold || 5) ? 'low_stock' : 'in_stock'}`}>
                      {Number(form.quantity) <= 0 ? '● Out of Stock' : Number(form.quantity) <= Number(form.low_stock_threshold || 5) ? '● Low Stock' : '● In Stock'}
                    </span>
                  </div>
                </label>

                <label>
                  <span>Low Stock Alert Threshold</span>
                  <input
                    type="number"
                    min="0"
                    step="1"
                    value={form.low_stock_threshold}
                    onChange={(e) => setForm({ ...form, low_stock_threshold: Math.max(0, parseInt(e.target.value, 10) || 0) })}
                    placeholder="e.g. 5"
                  />
                  <small>When stock falls to or below this number, product is flagged as Low Stock.</small>
                </label>

                <label>
                  <span>Measurement Unit <span style={{ color: '#ef4444' }}>*</span></span>
                  <select required value={form.unit} onChange={(e) => setForm({ ...form, unit: e.target.value, measurement_unit: e.target.value })}>
                    <option value="">Select unit</option>
                    {form.unit && !units.includes(form.unit) && <option value={form.unit}>{form.unit}</option>}
                    {units.map((unit) => <option key={unit} value={unit}>{unit}</option>)}
                  </select>
                </label>

                <label>
                  <span>Weight &amp; Unit</span>
                  <div className="shop-inline-input-action">
                    <input
                      type="number"
                      step="0.001"
                      min="0"
                      value={form.weight || ''}
                      onChange={(e) => setForm({ ...form, weight: e.target.value })}
                      placeholder="e.g. 50"
                    />
                    <select
                      value={form.weight_unit || 'kg'}
                      onChange={(e) => setForm({ ...form, weight_unit: e.target.value })}
                      style={{ width: 90 }}
                    >
                      <option value="kg">kg</option>
                      <option value="gm">gm</option>
                      <option value="quintal">quintal</option>
                      <option value="ton">ton</option>
                    </select>
                  </div>
                  <small>Used for logistics and freight calculation.</small>
                </label>

                <label>
                  <span>Dimensions (L × W × H)</span>
                  <input
                    value={form.dimensions || ''}
                    onChange={(e) => setForm({ ...form, dimensions: e.target.value })}
                    placeholder="e.g. 45 × 30 × 15 cm"
                  />
                </label>

                {editingId && (
                  <label className="shop-admin-wide">
                    <span>Stock Adjustment Reason (If modifying quantity)</span>
                    <select
                      value={form.adjustment_reason}
                      onChange={(e) => setForm({ ...form, adjustment_reason: e.target.value })}
                    >
                      <option value="">No stock change / Minor catalog edit</option>
                      <option value="Shipment Received / Restock">📦 Shipment Received / Restock</option>
                      <option value="Inventory Count Correction">📋 Physical Inventory Count Correction</option>
                      <option value="Damaged / Spoiled Stock">⚠️ Damaged / Spoiled Stock</option>
                      <option value="Customer Return">🔄 Customer Return / Restocked</option>
                      <option value="Other">📝 Other Adjustment</option>
                    </select>
                    <small style={{ color: 'var(--shop-admin-muted)' }}>Recorded in stock movement ledger for complete audit trail.</small>
                  </label>
                )}
              </div>
            )}

            {/* TAB 5: MEDIA */}
            {formTab === 'media' && (
              <div className="shop-tab-pane shop-admin-wide">
                <div className="shop-admin-gallery-box">
                  <div className="shop-admin-gallery-head">
                    <div>
                      <strong>📸 Product Images ({imagesList.length})</strong>
                      <div style={{ marginTop: 4 }}>
                        {imagesList.length > 1 ? (
                          <span className="shop-admin-carousel-status multi">
                            ✨ Embla Auto-Swiper Active ({imagesList.length} images will auto-rotate on product view)
                          </span>
                        ) : imagesList.length === 1 ? (
                          <span className="shop-admin-carousel-status single">
                            Static view (1 image uploaded — swiper activates with 2+ images)
                          </span>
                        ) : (
                          <span className="shop-admin-carousel-status single">
                            No images added yet. Upload files or paste URLs below.
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="shop-admin-gallery-actions">
                      <label className="shop-admin-upload-multi">
                        {uploading ? 'Uploading...' : '📁 + Upload Images (Multiple)'}
                        <input
                          type="file"
                          accept="image/*"
                          multiple
                          onChange={handleMultipleUpload}
                          disabled={uploading}
                          hidden
                        />
                      </label>
                    </div>
                  </div>

                  <div className="shop-admin-url-add">
                    <input
                      type="text"
                      value={newImageUrl}
                      onChange={(e) => setNewImageUrl(e.target.value)}
                      placeholder="Or paste image URL (https://...)"
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          addImageUrl();
                        }
                      }}
                    />
                    <button type="button" onClick={addImageUrl}>+ Add URL</button>
                  </div>

                  {imagesList.length > 0 && (
                    <div className="shop-admin-gallery-grid">
                      {imagesList.map((img, idx) => {
                        const isCover = idx === 0;
                        return (
                          <div key={`${img}-${idx}`} className={`shop-admin-gallery-item ${isCover ? 'is-cover' : ''}`}>
                            {isCover && <span className="shop-admin-gallery-cover-badge">Primary Cover</span>}
                            <button
                              type="button"
                              className="shop-admin-gallery-del"
                              title="Remove image"
                              onClick={() => removeImage(idx)}
                            >
                              ✕
                            </button>
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img src={img} alt={`Product ${idx + 1}`} className="shop-admin-gallery-img" />
                            {!isCover && (
                              <button
                                type="button"
                                className="shop-admin-gallery-set-cover"
                                onClick={() => setAsCover(idx)}
                              >
                                Set as Cover
                              </button>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  )}

                  <details className="shop-admin-gallery-details" style={{ marginTop: 12 }}>
                    <summary>Bulk edit URLs / Manual raw list</summary>
                    <div style={{ marginTop: 6 }}>
                      <textarea
                        rows="3"
                        value={galleryText}
                        onChange={(e) => {
                          const val = e.target.value;
                          setGalleryText(val);
                          const parsed = val.split('\n').map((l) => l.trim()).filter(Boolean);
                          setImagesList(parsed);
                          if (parsed.length > 0) {
                            setForm((curr) => ({ ...curr, image_url: parsed[0] }));
                          }
                        }}
                        placeholder="One URL per line..."
                      />
                    </div>
                  </details>
                </div>
              </div>
            )}

            {/* TAB 6: SPECIFICATIONS */}
            {formTab === 'specs' && (
              <div className="shop-tab-pane shop-admin-wide">
                {/* Dynamic Category Specifications Section (HomeRun Engine) */}
                {form.category && form.subcategory && (() => {
                  const config = getCategoryAttributeConfig(form.category, form.subcategory);
                  const fields = config.fields || [];
                  if (!fields.length) return null;

                  const renderFieldCard = (key) => {
                    const def = ATTRIBUTE_FIELD_DEFS[key] || {
                      icon: '⚙️',
                      label: key.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
                      eg: `Enter ${key.replace(/_/g, ' ')}...`,
                      placeholder: `e.g. ${key.replace(/_/g, ' ')}`,
                    };
                    const valList = Array.isArray(config[key]) ? config[key] : [];
                    const currentVal = formAttributes[key] || '';

                    return (
                      <div key={key} className="shop-spec-card">
                        <div>
                          <div className="shop-spec-card-head">
                            <label className="shop-spec-label">
                              <span>{def.icon}</span> {def.label}
                            </label>
                            {currentVal && (
                              <button
                                type="button"
                                onClick={() => setFormAttributes({ ...formAttributes, [key]: '' })}
                                className="shop-spec-clear-btn"
                                title="Clear selection"
                              >
                                ✕ Clear
                              </button>
                            )}
                          </div>
                          <div className="shop-spec-eg">{def.eg}</div>
                          <input
                            type="text"
                            placeholder={def.placeholder}
                            value={currentVal}
                            onChange={(e) => setFormAttributes({ ...formAttributes, [key]: e.target.value })}
                            className="shop-spec-input"
                          />
                        </div>
                        {valList.length > 0 && (
                          <div className="shop-spec-pills">
                            {valList.map((val) => {
                              const isSelected = currentVal.toLowerCase().trim() === val.toLowerCase().trim();
                              return (
                                <button
                                  key={val}
                                  type="button"
                                  onClick={() => setFormAttributes({ ...formAttributes, [key]: isSelected ? '' : val })}
                                  className={`shop-spec-pill ${isSelected ? 'selected' : ''}`}
                                >
                                  {isSelected && <span className="shop-spec-pill-check">✓</span>}
                                  {val}
                                </button>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    );
                  };

                  return (
                    <div className="shop-admin-wide shop-spec-box" style={{ marginBottom: 16 }}>
                      <div className="shop-spec-head">
                        <div>
                          <div className="shop-spec-title-row">
                            <Sparkles size={17} className="shop-spec-sparkle-icon" />
                            <strong className="shop-spec-title">
                              {config.label}
                            </strong>
                          </div>
                          <small className="shop-spec-sub">
                            Fill specifications for {form.subcategory} so buyers on Shop Now can filter by these exact attributes.
                          </small>
                        </div>
                        <span className="shop-spec-badge">
                          <span>✓</span> Subcategory: {form.subcategory}
                        </span>
                      </div>

                      <div className="shop-spec-grid">
                        {fields.map((fKey) => renderFieldCard(fKey))}
                      </div>
                    </div>
                  );
                })()}

                <label className="shop-admin-wide">
                  <span>Custom Specifications (one Name: Value per line)</span>
                  <textarea rows="4" value={specsText} onChange={(e) => setSpecsText(e.target.value)} placeholder="e.g. Grade: PPC&#10;Standard: IS 1489 Part 1&#10;Packaging: Weather-proof laminated HDPE&#10;Origin: India" />
                  <small>Add any technical parameters or test standard specifications.</small>
                </label>
              </div>
            )}

            {/* TAB 7: VARIANTS */}
            {formTab === 'variants' && (
              <div className="shop-tab-pane shop-admin-wide">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div>
                    <strong style={{ fontSize: 15 }}>Product Variants Matrix</strong>
                    <p style={{ margin: '2px 0 0', fontSize: 13, color: 'var(--shop-admin-muted)' }}>
                      Manage sizes, colors, grades with individual SKU, Barcode, price and inventory.
                    </p>
                  </div>
                  <button type="button" className="shop-action-btn-sm" onClick={addVariantRow}>
                    <Plus size={14} /> Add Variant Option
                  </button>
                </div>

                {(!form.variants || form.variants.length === 0) ? (
                  <div style={{ padding: 24, textAlign: 'center', border: '1px dashed var(--shop-admin-border)', borderRadius: 8, background: 'var(--shop-admin-subtle)' }}>
                    <p style={{ margin: 0, color: 'var(--shop-admin-muted)', fontSize: 13 }}>
                      This product is currently configured as a <strong>Simple Product</strong> without variants.
                    </p>
                    <button type="button" className="shop-action-btn-sm" style={{ marginTop: 10 }} onClick={addVariantRow}>
                      Enable Variants (Add First Variant)
                    </button>
                  </div>
                ) : (
                  <div className="shop-admin-table-wrap">
                    <table className="shop-variant-table">
                      <thead>
                        <tr>
                          <th>Variant Name</th>
                          <th>SKU</th>
                          <th>Barcode</th>
                          <th>Size</th>
                          <th>Color</th>
                          <th>Selling Price (₹)</th>
                          <th>Stock Qty</th>
                          <th style={{ width: 50 }}>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {form.variants.map((v, vIdx) => (
                          <tr key={v.id || vIdx}>
                            <td>
                              <input
                                value={v.name}
                                onChange={(e) => updateVariantRow(vIdx, 'name', e.target.value)}
                                placeholder="e.g. 50 Kg Bag / Fe 500D"
                              />
                            </td>
                            <td>
                              <input
                                value={v.sku}
                                onChange={(e) => updateVariantRow(vIdx, 'sku', e.target.value)}
                                placeholder="Variant SKU"
                              />
                            </td>
                            <td>
                              <input
                                value={v.barcode}
                                onChange={(e) => updateVariantRow(vIdx, 'barcode', e.target.value)}
                                placeholder="Barcode"
                              />
                            </td>
                            <td>
                              <input
                                value={v.size}
                                onChange={(e) => updateVariantRow(vIdx, 'size', e.target.value)}
                                placeholder="Size"
                              />
                            </td>
                            <td>
                              <input
                                value={v.color}
                                onChange={(e) => updateVariantRow(vIdx, 'color', e.target.value)}
                                placeholder="Color"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                step="0.01"
                                min="0"
                                value={v.price}
                                onChange={(e) => updateVariantRow(vIdx, 'price', e.target.value)}
                                placeholder="Price"
                              />
                            </td>
                            <td>
                              <input
                                type="number"
                                step="1"
                                min="0"
                                value={v.quantity}
                                onChange={(e) => updateVariantRow(vIdx, 'quantity', e.target.value)}
                                placeholder="Qty"
                              />
                            </td>
                            <td>
                              <button
                                type="button"
                                onClick={() => removeVariantRow(vIdx)}
                                className="shop-variant-del-btn"
                                title="Remove Variant"
                              >
                                ✕
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )}

            {/* TAB 8: BULK PRICING */}
            {formTab === 'bulk' && (
              <div className="shop-tab-pane shop-admin-wide">
                <label className="shop-admin-wide">
                  <span>Quantity-Based Bulk Prices (one Quantity: Price per line)</span>
                  <textarea
                    rows="4"
                    value={bulkText}
                    onChange={(e) => setBulkText(e.target.value)}
                    placeholder="e.g.&#10;10: 420&#10;50: 400&#10;100: 380"
                  />
                  <small>Example: 10: 420 means when a buyer orders 10 or more units, price drops to ₹420/unit automatically at checkout.</small>
                </label>
              </div>
            )}

            {/* TAB 9: SEO & POLICIES */}
            {formTab === 'seo' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                  <label>
                    <span>SEO Keywords / Search Tags</span>
                    <input
                      value={form.keywords}
                      onChange={(e) => setForm({ ...form, keywords: e.target.value })}
                      placeholder="e.g. cement, ultratech, opc53, concrete, structural building"
                    />
                    <small>Comma-separated keywords for instant search indexing.</small>
                  </label>

                  <label>
                    <span>Product URL Slug</span>
                    <input
                      value={form.product_url_slug}
                      onChange={(e) => setForm({ ...form, product_url_slug: e.target.value })}
                      placeholder="e.g. ultratech-super-cement-50kg"
                    />
                    <small>Clean SEO URL slug for product detail page.</small>
                  </label>
                </div>

                {/* Highlights, FAQs & Return Policy */}
                <div className="shop-spec-box shop-pdp-content-box">
                  <div className="shop-spec-head">
                    <div>
                      <div className="shop-spec-title-row">
                        <Sparkles size={17} className="shop-spec-sparkle-icon" />
                        <strong className="shop-spec-title">Product Page Highlights, FAQs &amp; Return Policy</strong>
                      </div>
                      <small className="shop-spec-sub">Appears in accordions on customer-facing product pages.</small>
                    </div>
                  </div>

                  <div className="shop-pdp-sections-grid">
                    {/* Highlights */}
                    <div className="shop-pdp-card">
                      <div className="shop-pdp-card-head">
                        <div>
                          <div className="shop-pdp-card-title">
                            <span className="shop-pdp-card-icon">✨</span>
                            <strong>Product Highlights</strong>
                          </div>
                        </div>
                        <button type="button" onClick={loadPresetHighlights} className="shop-pdp-preset-btn">⚡ Preset</button>
                      </div>
                      <div className="shop-pdp-input-row">
                        <input
                          type="text"
                          value={newHighlight}
                          onChange={(e) => setNewHighlight(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addHighlightItem(); } }}
                          placeholder="e.g. 100% Genuine &amp; Brand Certified Material"
                          className="shop-spec-input"
                        />
                        <button type="button" onClick={addHighlightItem} className="shop-pdp-add-btn">+ Add</button>
                      </div>
                      {highlights.length > 0 && (
                        <div className="shop-pdp-list">
                          {highlights.map((h, idx) => (
                            <div key={idx} className="shop-pdp-list-item">
                              <span className="shop-pdp-bullet-check">✓</span>
                              <span className="shop-pdp-item-text">{h}</span>
                              <button type="button" onClick={() => removeHighlightItem(idx)} className="shop-pdp-del-btn">✕</button>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* FAQs */}
                    <div className="shop-pdp-card">
                      <div className="shop-pdp-card-head">
                        <div>
                          <div className="shop-pdp-card-title">
                            <span className="shop-pdp-card-icon">❓</span>
                            <strong>Frequently Asked Questions</strong>
                          </div>
                        </div>
                        <div style={{ display: 'flex', gap: 6 }}>
                          <button type="button" onClick={loadPresetFaqs} className="shop-pdp-preset-btn">📋 Standard</button>
                          <button type="button" onClick={addFaqItem} className="shop-pdp-add-btn">+ Question</button>
                        </div>
                      </div>
                      {faqs.map((f, idx) => (
                        <div key={idx} className="shop-pdp-faq-card">
                          <div className="shop-pdp-faq-head">
                            <span className="shop-pdp-faq-num">Q{idx + 1}</span>
                            <input
                              type="text"
                              value={f.q}
                              onChange={(e) => updateFaqItem(idx, 'q', e.target.value)}
                              placeholder="Question..."
                              className="shop-spec-input shop-pdp-faq-q-input"
                            />
                            <button type="button" onClick={() => removeFaqItem(idx)} className="shop-pdp-del-btn">✕</button>
                          </div>
                          <textarea
                            rows="2"
                            value={f.a}
                            onChange={(e) => updateFaqItem(idx, 'a', e.target.value)}
                            placeholder="Answer..."
                            className="shop-pdp-faq-a-input"
                          />
                        </div>
                      ))}
                    </div>

                    {/* Returns Policy */}
                    <div className="shop-pdp-card">
                      <div className="shop-pdp-card-head">
                        <div>
                          <div className="shop-pdp-card-title">
                            <span className="shop-pdp-card-icon">🔄</span>
                            <strong>Returns &amp; Exchange Policy</strong>
                          </div>
                        </div>
                        <button type="button" onClick={loadPresetReturnsPolicy} className="shop-pdp-preset-btn">📋 Standard</button>
                      </div>
                      <textarea
                        rows="3"
                        value={returnsPolicy}
                        onChange={(e) => setReturnsPolicy(e.target.value)}
                        placeholder="Site Inspection & Transit damage policy..."
                        className="shop-pdp-policy-textarea"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 10: ADMIN INTERNAL (Admin Only) */}
            {!isSeller && formTab === 'admin_only' && (
              <div className="shop-tab-pane shop-admin-wide" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 16 }}>
                <label>
                  <span>HTTP Status Code</span>
                  <input
                    value={form.http_status || '200'}
                    onChange={(e) => setForm({ ...form, http_status: e.target.value })}
                    placeholder="200"
                  />
                  <small style={{ color: 'var(--shop-admin-muted)' }}>Extraction / import tracking status.</small>
                </label>

                <label className="shop-admin-wide">
                  <span>Internal Extraction Notes (Admin Only)</span>
                  <textarea
                    rows="4"
                    value={form.extraction_notes}
                    onChange={(e) => setForm({ ...form, extraction_notes: e.target.value })}
                    placeholder="Internal administrative notes, source supplier reference, scraper remarks (Never shown to vendors or customers)..."
                  />
                </label>
              </div>
            )}
          </div>

          {/* Form Actions Footer */}
          <div className="shop-admin-form-footer">
            <button
              type="button"
              className="shop-tab-nav-btn"
              onClick={() => {
                const tabs = ['basic', 'identifiers', 'pricing', 'inventory', 'media', 'specs', 'variants', 'bulk', 'seo', ...(!isSeller ? ['admin_only'] : [])];
                const curIdx = tabs.indexOf(formTab);
                if (curIdx > 0) setFormTab(tabs[curIdx - 1]);
              }}
              disabled={formTab === 'basic'}
            >
              ← Previous Tab
            </button>
            <button
              type="button"
              className="shop-tab-nav-btn"
              onClick={() => {
                const tabs = ['basic', 'identifiers', 'pricing', 'inventory', 'media', 'specs', 'variants', 'bulk', 'seo', ...(!isSeller ? ['admin_only'] : [])];
                const curIdx = tabs.indexOf(formTab);
                if (curIdx < tabs.length - 1) setFormTab(tabs[curIdx + 1]);
              }}
              disabled={formTab === (isSeller ? 'seo' : 'admin_only')}
            >
              Next Tab →
            </button>
            <div style={{ flex: 1 }} />
            <button type="button" onClick={reset} className="shop-form-cancel-btn">
              Cancel
            </button>
            <button type="submit" disabled={saving} className="shop-form-save-btn">
              {saving ? 'Saving…' : editingId ? 'Save Changes' : (isSeller ? 'Submit for Approval' : 'Add Product')}
            </button>
          </div>
        </form>
      </>
    ) : (
      <>
        <div className="shop-admin-heading">
          <div>
            <h2>{isSeller ? 'My Products & Inventory' : 'Product & Inventory Management'}</h2>
            <p>{isSeller ? 'Manage your catalog, stock and pricing. All updates comply with MT-Boss standards.' : 'Complete Product Management, Inventory Tracking & 27-Column CSV Engine.'}</p>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', flexWrap: 'wrap' }}>
            <button
              type="button"
              onClick={startAddProduct}
              style={{
                background: 'var(--brand-blue, #2563eb)',
                color: '#fff',
                border: 'none',
                borderRadius: 6,
                padding: '8px 16px',
                fontWeight: 700,
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: 6,
                fontSize: 13
              }}
            >
              <Plus size={16} /> Add Product
            </button>
            <button type="button" className="shop-action-btn-sm" onClick={downloadImportTemplate} title="Download 27-Column CSV Template">
              <Download size={14} /> 27-Col Template
            </button>
            {/* <button type="button" className="shop-action-btn-sm" onClick={exportCatalogCsv} title="Export Catalog to 27-Column CSV">
              <FileText size={14} /> Export CSV
            </button> */}
            <button type="button" className="shop-action-btn-sm" onClick={load}>
              <RefreshCw size={14} /> Refresh
            </button>
          </div>
        </div>

        {/* Dashboard Statistics Summary (Admin only) */}
        {!isSeller && dashboardStats && (
          <div className="shop-stats-grid">
            <div className="shop-stat-card stat-blue">
              <span className="stat-label">Total Catalog</span>
              <span className="stat-val">{dashboardStats.total_products || 0}</span>
            </div>
            <div className="shop-stat-card stat-green">
              <span className="stat-label">Active / Live</span>
              <span className="stat-val">{dashboardStats.active_products || 0}</span>
            </div>
            <div className="shop-stat-card stat-amber">
              <span className="stat-label">Draft / Pending</span>
              <span className="stat-val">{dashboardStats.draft_products || 0}</span>
            </div>
            <div className="shop-stat-card stat-red">
              <span className="stat-label">Out of Stock</span>
              <span className="stat-val">{dashboardStats.out_of_stock || 0}</span>
            </div>
            <div className="shop-stat-card stat-amber">
              <span className="stat-label">Low Stock Alert</span>
              <span className="stat-val">{dashboardStats.low_stock || 0}</span>
            </div>
            <div className="shop-stat-card">
              <span className="stat-label">Categories</span>
              <span className="stat-val">{dashboardStats.total_categories || 0}</span>
            </div>
            <div className="shop-stat-card">
              <span className="stat-label">Brands</span>
              <span className="stat-val">{dashboardStats.total_brands || 0}</span>
            </div>
            <div className="shop-stat-card">
              <span className="stat-label">Variants</span>
              <span className="stat-val">{dashboardStats.total_variants || 0}</span>
            </div>
          </div>
        )}

        {notice && <p className="shop-admin-notice" role="status">{notice}</p>}

        {/* 27-Column Bulk CSV Import Section */}
        <section className="shop-admin-card" style={{ marginBottom: 16, border: '1px dashed var(--border, #cbd5e1)' }}>
          <div className="shop-admin-list-head" style={{ gap: 12 }}>
            <div>
              <h3 style={{ marginBottom: 4 }}>Complete 27-Column CSV &amp; Excel Import</h3>
              <p style={{ margin: 0, fontSize: 13 }}>
                Upload CSV or Excel (.xlsx) with all 27 standard columns (Product ID, SKU, Barcode, Brand, Category, Subcategory, MRP, Price, Stock, Specifications, Variants, Bulk Prices, etc.).
              </p>
            </div>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              <button type="button" className="shop-import-button secondary" onClick={downloadImportTemplate}>
                <FileText size={15} /> 27-Col Template
              </button>
              <label htmlFor="shop-products-import-file" className="shop-import-button primary">
                <UploadCloud size={15} /> Choose CSV / Excel File
              </label>
              <input id="shop-products-import-file" className="shop-import-file-input" type="file" accept=".csv,text/csv,.xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" onChange={selectImportFile} />
              {!isSeller && (
                <button type="button" className="shop-import-button secondary" onClick={fixExistingProductCategories} disabled={normalizingCategories}>
                  {normalizingCategories ? 'Fixing…' : 'Fix Categories'}
                </button>
              )}
            </div>
          </div>

          {importRows.length > 0 && (
            <div style={{ marginTop: 12 }}>
              <p style={{ margin: '0 0 8px', fontWeight: 700, fontSize: 13 }}>
                {importFileName}: {importRows.length} product(s) ready for validation and import
              </p>
              <div className="shop-admin-table-wrap shop-import-preview">
                <table>
                  <thead>
                    <tr>
                      <th>Product Name</th>
                      <th>Product ID</th>
                      <th>SKU</th>
                      <th>Category</th>
                      <th>Subcategory</th>
                      <th>Brand</th>
                      <th>Price</th>
                      <th>Stock</th>
                    </tr>
                  </thead>
                  <tbody>
                    {importRows.slice(0, 5).map((item, index) => {
                      const img = item['Product Image URL'] || item.product_image_url || item.image_url || '';
                      const name = item['Product Name'] || item.product_name || item.name || '—';
                      const pId = item['Product ID'] || item.product_id || item.product_code || '(Auto)';
                      const sku = item['SKU'] || item.sku || '(Auto)';
                      const cat = item['Category'] || item.category || item.main_category || '—';
                      const subcat = item['Subcategory'] || item.subcategory || item.sub_category || '—';
                      const brand = item['Brand'] || item.brand || '—';
                      const price = item['Selling Price'] || item.selling_price || item.price || '—';
                      const stock = item['Available Quantity Stock'] || item.available_quantity_stock || item.quantity || item.stock || '0';
                      return (
                        <tr key={index}>
                          <td>
                            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                              <div style={{ width: 36, height: 36, minWidth: 36, borderRadius: 6, overflow: 'hidden', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--border)', flexShrink: 0 }}>
                                {img ? <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} /> : null}
                                <span style={{ fontSize: 16, opacity: 0.5 }}>📦</span>
                              </div>
                              <span>{name}</span>
                            </div>
                          </td>
                          <td><code style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{pId}</code></td>
                          <td><code style={{ fontSize: 11, whiteSpace: 'nowrap' }}>{sku}</code></td>
                          <td>{cat}</td>
                          <td>{subcat}</td>
                          <td>{brand}</td>
                          <td>₹{price}</td>
                          <td>{stock}</td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
              {importRows.length > 5 && (
                <small className="shop-import-preview-note">
                  Showing first 5 of {importRows.length} products. Click Import once to add all {importRows.length} products; processing continues automatically in the background.
                </small>
              )}
              <div className="shop-import-actions" style={{ marginTop: 10 }}>
                <label className="shop-admin-tier-filter">
                  Matching products
                  <select value={importMode} onChange={(event) => setImportMode(event.target.value)}>
                    <option value="create">Skip duplicates (Safe)</option>
                    <option value="update">Update existing matched products</option>
                  </select>
                </label>
                <button type="button" className="shop-import-confirm" onClick={importProducts} disabled={importing}>
                  {importing ? 'Importing…' : isSeller ? `✓ Submit ${importRows.length} products for approval` : `✓ Process Import (${importRows.length} items)`}
                </button>
                <button type="button" className="shop-import-clear" onClick={() => { setImportRows([]); setImportFileName(''); }}>
                  Clear file
                </button>
              </div>
            </div>
          )}
        </section>

        {/* Product Catalog Table */}
        <div className="shop-admin-card">
          <div className="shop-admin-list-head">
            <h3>{isSeller ? 'My Products' : 'All Products'} ({isSeller ? products.length : productPagination.total})</h3>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center' }}>
              {!isSeller && (
                <input
                  value={productSearch}
                  onChange={(e) => setProductSearch(e.target.value)}
                  placeholder="Search by Name, SKU, ID, Barcode…"
                  style={{ padding: '6px 10px', borderRadius: 6, border: '1px solid var(--shop-admin-border)', minWidth: 230 }}
                />
              )}
              <label className="shop-admin-tier-filter">
                Quality Tier
                <select value={tierFilter} onChange={(e) => setTierFilter(e.target.value)}>
                  <option value="any">All products</option>
                  <option value="none">No Quality Tier set</option>
                  {QUALITY_TIER_OPTIONS.map((tier) => (
                    <option key={tier.value} value={tier.value}>{tier.value === 'all' ? 'All tiers' : tier.label}</option>
                  ))}
                </select>
              </label>
              <label className="shop-admin-tier-filter">
                Approval Status
                <select value={approvalFilter} onChange={(e) => setApprovalFilter(e.target.value)}>
                  <option value="all">All Products</option>
                  <option value="approved">✓ Approved / Live</option>
                  <option value="pending">⏳ Pending Approval</option>
                  <option value="rejected">✕ Rejected Products</option>
                  <option value="hidden">👁️ Hidden / Inactive</option>
                </select>
              </label>
            </div>
          </div>

          {loading ? (
            <p>Loading products…</p>
          ) : !products.length ? (
            <p>No products yet. Click &quot;Add Product&quot; above to create your first catalog entry.</p>
          ) : (
            <div className="shop-admin-table-wrap">
              <table className="shop-catalog-table">
                <thead>
                  <tr>
                    <th style={{ minWidth: 260 }}>Product</th>
                    <th style={{ minWidth: 120 }}>Category</th>
                    <th style={{ minWidth: 110 }}>Subcategory</th>
                    <th style={{ minWidth: 110 }}>Price / MRP</th>
                    <th style={{ minWidth: 130 }}>Inventory / Stock</th>
                    {!isSeller && <th style={{ minWidth: 85 }}>Source</th>}
                    <th style={{ minWidth: 110 }}>Status</th>
                    <th style={{ minWidth: 290 }}>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {visibleProducts.map((product) => {
                    const price = Number(product.price);
                    const originalPrice = Number(product.mrp || product.compare_at_price);
                    const discountPercent = originalPrice > price && price > 0 ? Math.round(((originalPrice - price) / originalPrice) * 100) : null;
                    const stockQty = Number(product.quantity || 0);
                    // Defend against legacy rows that saved a stale status:
                    // zero inventory must always be shown as out of stock.
                    const stockStatus = stockQty <= 0
                      ? 'out_of_stock'
                      : (stockQty <= Number(product.low_stock_threshold ?? 5) ? 'low_stock' : 'in_stock');
                    const productCode = product.product_code || `MTB-PROD-${String(product.id).padStart(6, '0')}`;

                    return (
                      <tr key={product.id}>
                        <td className="shop-product-cell" style={{ minWidth: 260 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                            <div
                              style={{ width: 44, height: 44, minWidth: 44, borderRadius: 8, overflow: 'hidden', background: 'rgba(255, 255, 255, 0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--shop-admin-border)', flexShrink: 0, cursor: 'pointer' }}
                              onClick={() => { const img = product.image_url || (Array.isArray(product.images) && product.images[0]); if (img) window.open(img, '_blank'); }}
                              title="Click to view full image"
                            >
                              {(() => {
                                const img = product.image_url || (Array.isArray(product.images) && product.images[0]);
                                return img ? (
                                  <img src={img} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} onError={(e) => { e.currentTarget.style.display = 'none'; }} />
                                ) : (
                                  <span style={{ fontSize: 18, opacity: 0.6 }}>📦</span>
                                );
                              })()}
                            </div>
                            <div style={{ minWidth: 0, flex: 1 }}>
                              <strong style={{ fontSize: 13, lineHeight: 1.35, wordBreak: 'break-word', color: 'var(--shop-admin-text)' }}>
                                {product.name}
                              </strong>
                              <div className="shop-product-badges">
                                <span
                                  className="shop-product-code-badge"
                                  title={`Product ID: ${productCode} (Click to copy)`}
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (typeof navigator !== 'undefined' && navigator.clipboard) {
                                      navigator.clipboard.writeText(productCode);
                                      setNotice(`Copied Product ID: ${productCode}`);
                                      setTimeout(() => setNotice(''), 2500);
                                    }
                                  }}
                                >
                                  {productCode}
                                </span>
                                {product.sku && (
                                  <span
                                    className="shop-product-sku-badge"
                                    title={`SKU: ${product.sku} (Click to copy)`}
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (typeof navigator !== 'undefined' && navigator.clipboard) {
                                        navigator.clipboard.writeText(product.sku);
                                        setNotice(`Copied SKU: ${product.sku}`);
                                        setTimeout(() => setNotice(''), 2500);
                                      }
                                    }}
                                  >
                                    {product.sku}
                                  </span>
                                )}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>{product.category || 'Unassigned'}</td>
                        <td>{product.subcategory || '—'}</td>
                        <td>
                          <div>
                            <strong>₹{price > 0 ? price.toLocaleString('en-IN') : '0.00'}</strong>
                            {originalPrice > price && (
                              <div style={{ fontSize: 11, color: 'var(--shop-admin-muted)' }}>
                                <span style={{ textDecoration: 'line-through' }}>₹{originalPrice.toLocaleString('en-IN')}</span>{' '}
                                <span style={{ color: '#16a34a', fontWeight: 700 }}>({discountPercent}% OFF)</span>
                              </div>
                            )}
                          </div>
                        </td>
                        <td>
                          <div>
                            <span className={`shop-stock-pill ${stockStatus}`}>
                              {stockQty} {product.unit || 'pcs'} ({stockStatus.replace('_', ' ')})
                            </span>
                            {!isSeller && (
                              <div style={{ marginTop: 4 }}>
                                <button
                                  type="button"
                                  className="shop-action-btn-sm"
                                  style={{ padding: '2px 6px', fontSize: 10 }}
                                  onClick={() => setQuickStockModal({ open: true, product, newQuantity: stockQty, reason: 'Restock / New Shipment', saving: false })}
                                >
                                  ⚡ Adjust
                                </button>
                              </div>
                            )}
                          </div>
                        </td>
                        {!isSeller && (
                          <td style={{ fontSize: 12 }}>
                            {product.vendor_id ? `Vendor #${product.vendor_id}` : product.supplier_id === 0 ? 'Admin' : `Supplier #${product.supplier_id}`}
                          </td>
                        )}
                        <td>
                          {(() => {
                            const appStatus = getApprovalStatus(product);
                            const approval = product.specifications?.__approval__;
                            return (
                              <div style={{ display: 'flex', flexDirection: 'column', gap: 3, alignItems: 'flex-start' }}>
                                {appStatus === 'pending' && (
                                  <span className="shop-approval-badge badge-pending">⏳ Pending</span>
                                )}
                                {appStatus === 'rejected' && (
                                  <div className="shop-approval-rejected-wrap">
                                    <span className="shop-approval-badge badge-rejected">✕ Rejected</span>
                                    {approval?.reason && (
                                      <span className="shop-approval-reason" title={approval.reason}>
                                        {approval.reason}
                                      </span>
                                    )}
                                  </div>
                                )}
                                {appStatus === 'approved' && (
                                  <span className="shop-approval-badge badge-approved">✓ Approved</span>
                                )}
                                {!isSeller && (
                                  <div style={{ marginTop: 2 }}>
                                    {product.is_available ? (
                                      <span style={{ color: '#16a34a', fontWeight: 700, fontSize: 11 }}>● Live</span>
                                    ) : (
                                      <span style={{ color: 'var(--shop-admin-muted)', fontSize: 11 }}>Hidden</span>
                                    )}
                                  </div>
                                )}
                              </div>
                            );
                          })()}
                        </td>
                        <td>
                          <div className="shop-admin-actions">
                            {!isSeller && (
                              <>
                                {getApprovalStatus(product) !== 'approved' && (
                                  <button
                                    type="button"
                                    onClick={() => approveProduct(product)}
                                    style={{ color: '#16a34a', fontWeight: 700 }}
                                    title="Approve this product and make it live on store"
                                  >
                                    ✓ Approve
                                  </button>
                                )}
                                {getApprovalStatus(product) !== 'rejected' && (
                                  <button
                                    type="button"
                                    onClick={() => rejectProduct(product)}
                                    style={{ color: '#ea580c', fontWeight: 600 }}
                                    title="Reject this product with optional reason"
                                  >
                                    ✕ Reject
                                  </button>
                                )}
                              </>
                            )}
                            <button type="button" onClick={() => edit(product)}>Edit</button>
                            <button type="button" onClick={() => duplicateProduct(product)} title="Duplicate with new Product ID and SKU">
                              <Copy size={12} style={{ display: 'inline', marginRight: 2 }} /> Copy
                            </button>
                            <button type="button" onClick={() => openStockHistory(product)} title="View stock ledger">
                              <History size={12} style={{ display: 'inline', marginRight: 2 }} /> Log
                            </button>
                            {(!isSeller || !product.specifications?.__approval__?.status || product.specifications.__approval__.status === 'approved') && (
                              <button type="button" onClick={() => toggle(product)}>
                                {product.is_available ? 'Hide' : 'Show'}
                              </button>
                            )}
                            <button type="button" onClick={() => remove(product)} style={{ color: '#dc2626' }}>
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}

          {!isSeller && !loading && productPagination.pages > 1 && (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 12, gap: 8, flexWrap: 'wrap' }}>
              <span style={{ fontSize: 12, color: 'var(--shop-admin-muted)' }}>Page {productPagination.page} of {productPagination.pages}</span>
              <div style={{ display: 'flex', gap: 6 }}>
                <button type="button" disabled={productPage <= 1} onClick={() => setProductPage((p) => Math.max(1, p - 1))}>Prev</button>
                <button type="button" disabled={productPage >= productPagination.pages} onClick={() => setProductPage((p) => p + 1)}>Next</button>
              </div>
            </div>
          )}
        </div>
      </>
    )}
  </div>;
}

function AppearanceManager() {
  const [content, setContent] = useState(defaultShopStorefront);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [notice, setNotice] = useState('');

  useEffect(() => {
    fetch('/api/shop-storefront').then(readApiJson)
      .then((data) => { if (data.success) setContent(data.data); else setNotice(data.error || 'Could not load storefront'); })
      .catch((error) => setNotice(error.message)).finally(() => setLoading(false));
  }, []);

  const [uploadingBannerIdx, setUploadingBannerIdx] = useState(null);

  const banners = Array.isArray(content.hero_banners) && content.hero_banners.length > 0
    ? content.hero_banners
    : defaultShopHeroBanners;

  const updateBanner = (index, field, value) => {
    setContent((curr) => {
      const list = Array.isArray(curr.hero_banners) && curr.hero_banners.length > 0
        ? [...curr.hero_banners]
        : defaultShopHeroBanners.map((b) => ({ ...b }));
      if (!list[index]) return curr;
      list[index] = { ...list[index], [field]: value };
      return { ...curr, hero_banners: list };
    });
  };

  const addBanner = () => {
    setContent((curr) => {
      const list = Array.isArray(curr.hero_banners) && curr.hero_banners.length > 0
        ? [...curr.hero_banners]
        : defaultShopHeroBanners.map((b) => ({ ...b }));
      const newBanner = {
        id: `banner-${Date.now()}`,
        kicker: 'MTBOSS MATERIAL MARKETPLACE',
        title: 'Special Promotion',
        highlight: 'Best Deals Today',
        description: 'Explore construction essentials from verified suppliers. Add to cart, buy now, or request a quote in a few taps.',
        button_text: 'Explore materials',
        button_link: '',
        badge_text: 'Verified Suppliers',
        image_url: '/images/banners/materials.jpg',
        is_active: true,
      };
      return { ...curr, hero_banners: [...list, newBanner] };
    });
  };

  const removeBanner = (index) => {
    setContent((curr) => {
      const list = Array.isArray(curr.hero_banners) ? [...curr.hero_banners] : [];
      if (list.length <= 1) {
        alert('You must have at least one hero banner.');
        return curr;
      }
      list.splice(index, 1);
      return { ...curr, hero_banners: list };
    });
  };

  const moveBanner = (index, direction) => {
    setContent((curr) => {
      const list = Array.isArray(curr.hero_banners) ? [...curr.hero_banners] : [];
      const targetIndex = index + direction;
      if (targetIndex < 0 || targetIndex >= list.length) return curr;
      const temp = list[index];
      list[index] = list[targetIndex];
      list[targetIndex] = temp;
      return { ...curr, hero_banners: list };
    });
  };

  const handleBannerUpload = async (index, event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setUploadingBannerIdx(index);
    try {
      const imageUrl = await uploadImage(file);
      updateBanner(index, 'image_url', imageUrl);
    } catch (err) {
      setNotice(err.message);
    } finally {
      setUploadingBannerIdx(null);
      event.target.value = '';
    }
  };

  const save = async (event) => {
    event.preventDefault();
    setSaving(true);
    setNotice('');
    try {
      const currentBanners = Array.isArray(content.hero_banners) && content.hero_banners.length > 0
        ? content.hero_banners
        : defaultShopHeroBanners;
      const firstActive = currentBanners.find((b) => b && b.is_active !== false) || currentBanners[0] || {};
      const payload = {
        ...content,
        hero_banners: currentBanners,
        hero_kicker: firstActive.kicker || content.hero_kicker,
        hero_title: firstActive.title || content.hero_title,
        hero_highlight: firstActive.highlight || content.hero_highlight,
        hero_description: firstActive.description || content.hero_description,
        hero_button: firstActive.button_text || content.hero_button,
        hero_badge: firstActive.badge_text || content.hero_badge,
        hero_image: firstActive.image_url || content.hero_image,
        hero_images: currentBanners.map((b) => b.image_url).filter(Boolean),
      };
      const response = await fetch('/api/shop-storefront', { method: 'PUT', headers: shopHeaders(), body: JSON.stringify(payload) });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not save storefront');
      setContent(data.data);
      notifyShopProductsUpdated();
      if (typeof window !== 'undefined') {
        window.dispatchEvent(new Event('MTBOSSShopProductsUpdated'));
      }
      setNotice('Storefront content and hero banners saved successfully.');
    } catch (error) { setNotice(error.message); }
    finally { setSaving(false); }
  };

  const updatePromo = (index, field, value) => setContent((current) => ({ ...current, promos: current.promos.map((promo, i) => i === index ? { ...promo, [field]: value } : promo) }));

  return <div className="shop-admin-panel">
    <div className="shop-admin-heading">
      <div>
        <h2>Storefront Content Manager</h2>
        <p>Manage Mobile Quick-Commerce Header, Trust Badges, Promo Banners, and Desktop Storefront Text.</p>
      </div>
      <Link href="/ShopNow" target="_blank">Preview Shop Now</Link>
    </div>
    {notice && <p className="shop-admin-notice" role="status">{notice}</p>}
    {loading ? <p>Loading storefront...</p> : (
      <form onSubmit={save}>
        {/* 1. Mobile Quick-Commerce Header & Trust Strip */}
        <div className="shop-admin-card">
          <h3>📱 Mobile Header & Trust Badges</h3>
          <p style={{ marginBottom: 16 }}>Configure the delivery tagline, search bar placeholder, and the 4 quick trust badges displayed at the top of the mobile storefront.</p>
          <div className="shop-admin-fields">
            {mobileHeaderFields.map(([key, label]) => (
              <label key={key}>
                {label}
                <input
                  value={content[key] ?? ''}
                  onChange={(e) => setContent({ ...content, [key]: e.target.value })}
                />
              </label>
            ))}
          </div>
        </div>

        {/* 2. Mobile Promo Banner (Special Bulk Order Offer) */}
        <div className="shop-admin-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 8 }}>
            <h3 style={{ margin: 0 }}>⚡ Mobile Promo Banner (Special Bulk Order Offer)</h3>
            <label className="shop-admin-check" style={{ margin: 0 }}>
              <input
                type="checkbox"
                checked={content.mobile_banner_enabled !== false}
                onChange={(e) => setContent({ ...content, mobile_banner_enabled: e.target.checked })}
              /> Show Promo Banner
            </label>
          </div>
          <p style={{ marginBottom: 16 }}>Customize the dark promotional banner shown on the mobile storefront home/discovery feed.</p>
          <div className="shop-admin-fields">
            {mobileBannerFields.map(([key, label]) => (
              <label key={key}>
                {label}
                <input
                  value={content[key] ?? ''}
                  onChange={(e) => setContent({ ...content, [key]: e.target.value })}
                />
              </label>
            ))}
            <label className="shop-admin-wide">
              Banner Description
              <textarea
                rows={2}
                value={content.mobile_banner_desc ?? ''}
                onChange={(e) => setContent({ ...content, mobile_banner_desc: e.target.value })}
                placeholder="Verified suppliers for Cement, TMT Bars, Brick & Sand with immediate site dispatch."
              />
            </label>
          </div>
        </div>

        {/* 3. Desktop Storefront Hero Banners (Single or Multi-Slide Auto-Scroll) */}
        <div className="shop-admin-card">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 12, flexWrap: 'wrap', gap: 10 }}>
            <div>
              <h3 style={{ margin: 0 }}>🖥️ Desktop Hero Banners ({banners.length})</h3>
              <p style={{ margin: '4px 0 0', fontSize: 13, color: 'var(--shop-admin-muted, #64748b)' }}>
                {banners.filter((b) => b.is_active !== false).length > 1
                  ? 'Multiple active banners: Auto-slides smoothly on Shop Now (pauses on hover, resume on mouse leave).'
                  : 'Single active banner: Displays statically on Shop Now without slider.'}
              </p>
            </div>
            <button
              type="button"
              onClick={addBanner}
              className="shop-admin-button"
              style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '8px 16px', fontWeight: 700 }}
            >
              <Plus size={16} /> Add New Banner
            </button>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 18, marginTop: 16 }}>
            {banners.map((banner, index) => {
              const isActive = banner.is_active !== false;
              return (
                <div
                  key={banner.id || index}
                  style={{
                    border: isActive ? '1px solid var(--shop-admin-border, #cbd5e1)' : '1px dashed #ef4444',
                    borderRadius: 12,
                    padding: 16,
                    background: isActive ? 'var(--shop-admin-card-bg, #ffffff)' : 'var(--shop-admin-subtle, #f8fafc)',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
                    opacity: isActive ? 1 : 0.75,
                    transition: 'all 0.2s ease',
                  }}
                >
                  {/* Banner Card Header */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14, flexWrap: 'wrap', gap: 8 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      <span
                        style={{
                          background: isActive ? 'var(--brand-blue, #2563eb)' : '#64748b',
                          color: '#fff',
                          fontSize: 12,
                          fontWeight: 800,
                          padding: '3px 10px',
                          borderRadius: 6,
                        }}
                      >
                        Slide #{index + 1}
                      </span>
                      <strong style={{ fontSize: 14, color: 'var(--shop-admin-text, #0f172a)' }}>
                        {banner.title || 'Untitled Banner'} {banner.highlight ? `(${banner.highlight})` : ''}
                      </strong>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      {/* Active toggle */}
                      <label
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: 6,
                          fontSize: 12,
                          fontWeight: 600,
                          cursor: 'pointer',
                          marginRight: 8,
                          color: isActive ? '#16a34a' : '#ef4444',
                        }}
                      >
                        <input
                          type="checkbox"
                          checked={isActive}
                          onChange={(e) => updateBanner(index, 'is_active', e.target.checked)}
                        />
                        {isActive ? 'Active' : 'Hidden'}
                      </label>

                      {/* Move Up */}
                      <button
                        type="button"
                        onClick={() => moveBanner(index, -1)}
                        disabled={index === 0}
                        title="Move Up"
                        style={{
                          padding: '5px 8px',
                          borderRadius: 6,
                          border: '1px solid var(--shop-admin-border, #cbd5e1)',
                          background: 'transparent',
                          cursor: index === 0 ? 'not-allowed' : 'pointer',
                          opacity: index === 0 ? 0.4 : 1,
                        }}
                      >
                        <ChevronUp size={15} />
                      </button>

                      {/* Move Down */}
                      <button
                        type="button"
                        onClick={() => moveBanner(index, 1)}
                        disabled={index === banners.length - 1}
                        title="Move Down"
                        style={{
                          padding: '5px 8px',
                          borderRadius: 6,
                          border: '1px solid var(--shop-admin-border, #cbd5e1)',
                          background: 'transparent',
                          cursor: index === banners.length - 1 ? 'not-allowed' : 'pointer',
                          opacity: index === banners.length - 1 ? 0.4 : 1,
                        }}
                      >
                        <ChevronDown size={15} />
                      </button>

                      {/* Delete */}
                      <button
                        type="button"
                        onClick={() => removeBanner(index)}
                        disabled={banners.length <= 1}
                        title="Delete Banner"
                        style={{
                          padding: '5px 8px',
                          borderRadius: 6,
                          border: '1px solid #fca5a5',
                          background: '#fef2f2',
                          color: '#dc2626',
                          cursor: banners.length <= 1 ? 'not-allowed' : 'pointer',
                          opacity: banners.length <= 1 ? 0.4 : 1,
                        }}
                      >
                        <Trash2 size={15} />
                      </button>
                    </div>
                  </div>

                  {/* Banner Fields Grid */}
                  <div className="shop-admin-fields" style={{ marginBottom: 12 }}>
                    <label>
                      Eyebrow / Kicker
                      <input
                        value={banner.kicker ?? ''}
                        onChange={(e) => updateBanner(index, 'kicker', e.target.value)}
                        placeholder="MTBOSS MATERIAL MARKETPLACE"
                      />
                    </label>

                    <label>
                      Title
                      <input
                        value={banner.title ?? ''}
                        onChange={(e) => updateBanner(index, 'title', e.target.value)}
                        placeholder="Everything you need to"
                      />
                    </label>

                    <label>
                      Highlighted Title (Accent text)
                      <input
                        value={banner.highlight ?? ''}
                        onChange={(e) => updateBanner(index, 'highlight', e.target.value)}
                        placeholder="build better."
                      />
                    </label>

                    <label>
                      CTA Button Text
                      <input
                        value={banner.button_text ?? ''}
                        onChange={(e) => updateBanner(index, 'button_text', e.target.value)}
                        placeholder="Explore materials"
                      />
                    </label>

                    <label>
                      CTA Button Link (optional URL)
                      <input
                        value={banner.button_link ?? ''}
                        onChange={(e) => updateBanner(index, 'button_link', e.target.value)}
                        placeholder="e.g. /ShopNow?category=cement (leave empty for all categories)"
                      />
                    </label>

                    <label>
                      Image Badge Text
                      <input
                        value={banner.badge_text ?? ''}
                        onChange={(e) => updateBanner(index, 'badge_text', e.target.value)}
                        placeholder="Built for every project"
                      />
                    </label>

                    <label className="shop-admin-wide">
                      Description
                      <textarea
                        rows={2}
                        value={banner.description ?? ''}
                        onChange={(e) => updateBanner(index, 'description', e.target.value)}
                        placeholder="Explore construction essentials from verified suppliers..."
                      />
                    </label>
                  </div>

                  {/* Banner Image Preview & Upload */}
                  <div
                    style={{
                      marginTop: 10,
                      padding: 12,
                      borderRadius: 8,
                      background: 'var(--shop-admin-subtle, #f8fafc)',
                      border: '1px solid var(--shop-admin-border-subtle, #e2e8f0)',
                      display: 'flex',
                      gap: 16,
                      alignItems: 'center',
                      flexWrap: 'wrap',
                    }}
                  >
                    <div
                      style={{
                        width: 140,
                        height: 80,
                        borderRadius: 8,
                        overflow: 'hidden',
                        position: 'relative',
                        background: '#e2e8f0',
                        flexShrink: 0,
                        border: '1px solid #cbd5e1',
                      }}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={banner.image_url || '/images/banners/materials.jpg'}
                        alt="Banner Preview"
                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      />
                    </div>

                    <div style={{ flex: '1 1 240px', display: 'flex', flexDirection: 'column', gap: 8 }}>
                      <label style={{ fontSize: 12, fontWeight: 700, margin: 0 }}>
                        Banner Image (Cloudinary or Image URL)
                      </label>
                      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                        <input
                          type="url"
                          placeholder="Paste image URL..."
                          value={banner.image_url ?? ''}
                          onChange={(e) => updateBanner(index, 'image_url', e.target.value)}
                          style={{ flex: '1 1 200px' }}
                        />
                        <label className="shop-admin-upload" style={{ margin: 0, padding: '7px 14px', fontSize: 12 }}>
                          {uploadingBannerIdx === index ? 'Uploading...' : 'Upload Image'}
                          <input
                            type="file"
                            accept="image/*"
                            onChange={(e) => handleBannerUpload(index, e)}
                            disabled={uploadingBannerIdx === index}
                            hidden
                          />
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 4. Desktop Storefront Headings & Section Labels */}
        <div className="shop-admin-card">
          <h3>📄 Storefront Headings & Section Labels</h3>
          <p style={{ marginBottom: 16 }}>Configure headings and labels shown for sections across the Shop Now page.</p>
          <div className="shop-admin-fields">
            {storefrontHeadingFields.map(([key, label]) => (
              <label key={key}>
                {label}
                <input
                  value={content[key] ?? ''}
                  onChange={(e) => setContent({ ...content, [key]: e.target.value })}
                />
              </label>
            ))}
          </div>
        </div>

        {/* 4. Desktop Promotion Cards */}
        <div className="shop-admin-card">
          <h3>🎁 Desktop Promotion Cards</h3>
          <div className="shop-admin-fields">
            {content.promos.map((promo, index) => (
              <div className="shop-admin-promo" key={index}>
                <strong>Card {index + 1}</strong>
                <label>
                  Title
                  <input
                    value={promo.title}
                    onChange={(e) => updatePromo(index, 'title', e.target.value)}
                  />
                </label>
                <label>
                  Subtitle
                  <input
                    value={promo.subtitle}
                    onChange={(e) => updatePromo(index, 'subtitle', e.target.value)}
                  />
                </label>
              </div>
            ))}
          </div>
          <div className="shop-admin-form-footer" style={{ marginTop: 20 }}>
            <button type="submit" disabled={saving}>
              {saving ? 'Saving...' : 'Save Storefront Content'}
            </button>
          </div>
        </div>
      </form>
    )}
  </div>;
}

function OfferManager() {
  const empty = { name: '', category: '', subcategory: '', brand: '', discount_type: 'percent', discount_value: '', badge_text: '', sort_order: 0, is_active: true, starts_at: '', ends_at: '' };
  const [offers, setOffers] = useState([]);
  const [categories, setCategories] = useState([]);
  const [form, setForm] = useState(empty);
  const [editingId, setEditingId] = useState(null);
  const [notice, setNotice] = useState('');
  const [loading, setLoading] = useState(true);
  const loadCategories = useCallback(async () => {
    try {
      const categoriesRes = await fetch('/api/shop-categories?admin=true', { headers: shopHeaders() });
      const categoriesData = await readApiJson(categoriesRes);
      if (categoriesRes.ok) setCategories(categoriesData.data || []);
    } catch { /* optional for offer form */ }
  }, []);

  const load = useCallback(async () => {
    setLoading(true);
    try {
      const offersRes = await fetch('/api/shop-offers?admin=true', { headers: shopHeaders() });
      const offersData = await readApiJson(offersRes);
      if (!offersRes.ok) throw new Error(offersData.error || 'Could not load offers');
      setOffers(offersData.data || []);
    } catch (error) { setNotice(error.message); }
    finally { setLoading(false); }
  }, []);
  useEffect(() => { loadCategories(); }, [loadCategories]);
  useEffect(() => { load(); }, [load]);
  const save = async (event) => {
    event.preventDefault(); setNotice('');
    try {
      const response = await fetch('/api/shop-offers', { method: editingId ? 'PUT' : 'POST', headers: shopHeaders(), body: JSON.stringify({ ...form, ...(editingId ? { id: editingId } : {}) }) });
      const data = await readApiJson(response);
      if (!response.ok) throw new Error(data.error || 'Could not save offer');
      setForm(empty); setEditingId(null); setNotice(editingId ? 'Offer updated.' : 'Offer created.'); await load();
    } catch (error) { setNotice(error.message); }
  };
  const edit = (offer) => {
    setEditingId(offer.id);
    setForm({ ...empty, ...offer, starts_at: offer.starts_at ? String(offer.starts_at).slice(0, 16) : '', ends_at: offer.ends_at ? String(offer.ends_at).slice(0, 16) : '' });
  };
  const remove = async (offer) => {
    if (!window.confirm(`Delete ${offer.name}?`)) return;
    const response = await fetch(`/api/shop-offers?id=${offer.id}`, { method: 'DELETE', headers: shopHeaders() });
    const data = await readApiJson(response); if (!response.ok) setNotice(data.error || 'Could not delete offer'); else { setNotice('Offer deleted.'); load(); }
  };
  const selectedCategory = categories.find((category) => category.name === form.category);
  const subcategories = Array.isArray(selectedCategory?.subcategories) ? selectedCategory.subcategories : [];
  return <div className="shop-admin-panel">
    <div className="shop-admin-heading"><div><h2>Offers</h2><p>Show offer badges on Shop Now products by category, subcategory and/or brand. Blank targeting fields apply to everything.</p></div><button type="button" onClick={load}>Refresh</button></div>
    {notice && <p className="shop-admin-notice" role="status">{notice}</p>}
    <form className="shop-admin-card" onSubmit={save}><h3>{editingId ? 'Edit offer' : 'Create offer'}</h3><div className="shop-admin-fields">
      <label>
        <span>Offer name <span style={{ color: '#ef4444' }}>*</span></span>
        <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} placeholder="Cement sale" />
      </label>
      <label>Category<select value={form.category} onChange={(e) => setForm({ ...form, category: e.target.value, subcategory: '' })}><option value="">All categories</option>{categories.map((category) => <option key={category.id} value={category.name}>{category.name}</option>)}</select></label>
      <label>Subcategory<select value={form.subcategory} onChange={(e) => setForm({ ...form, subcategory: e.target.value })} disabled={!form.category}><option value="">All subcategories</option>{subcategories.map((item) => { const name = typeof item === 'object' && item !== null ? item.name : item; return <option key={name} value={name}>{name}</option>; })}</select></label>
      <label>Brand<input value={form.brand} onChange={(e) => setForm({ ...form, brand: e.target.value })} placeholder="e.g. UltraTech" /></label>
      <label>Discount type<select value={form.discount_type} onChange={(e) => setForm({ ...form, discount_type: e.target.value })}><option value="percent">Percentage</option><option value="fixed">Fixed amount</option></select></label>
      <label>
        <span>Discount value <span style={{ color: '#ef4444' }}>*</span></span>
        <input required type="number" min="0.01" step="0.01" max={form.discount_type === 'percent' ? '100' : undefined} value={form.discount_value} onChange={(e) => setForm({ ...form, discount_value: e.target.value })} />
      </label>
      <label>Badge text<input maxLength={80} value={form.badge_text} onChange={(e) => setForm({ ...form, badge_text: e.target.value })} placeholder="6% OFF (blank = automatic)" /></label>
      <label>Priority<input type="number" value={form.sort_order} onChange={(e) => setForm({ ...form, sort_order: e.target.value })} /><small>Lower number wins when multiple offers match.</small></label>
      <label>Start date/time<input type="datetime-local" value={form.starts_at} onChange={(e) => setForm({ ...form, starts_at: e.target.value })} /></label>
      <label>End date/time<input type="datetime-local" value={form.ends_at} onChange={(e) => setForm({ ...form, ends_at: e.target.value })} /></label>
    </div><div className="shop-admin-form-footer"><label className="shop-admin-check"><input type="checkbox" checked={form.is_active} onChange={(e) => setForm({ ...form, is_active: e.target.checked })} /> Active</label><button type="submit">{editingId ? 'Save changes' : 'Create offer'}</button>{editingId && <button type="button" onClick={() => { setEditingId(null); setForm(empty); }}>Cancel</button>}</div></form>
    <div className="shop-admin-card"><h3>Configured offers ({offers.length})</h3>{loading ? <p>Loading offers...</p> : !offers.length ? <p>No offers created yet.</p> : <div className="shop-admin-table-wrap"><table><thead><tr><th>Offer</th><th>Applies to</th><th>Discount</th><th>Status</th><th>Actions</th></tr></thead><tbody>{offers.map((offer) => <tr key={offer.id}><td><strong>{offer.name}</strong><small>{offer.badge_text || 'Automatic badge'}</small></td><td>{[offer.category, offer.subcategory, offer.brand].filter(Boolean).join(' · ') || 'All products'}</td><td>{offer.discount_type === 'percent' ? `${offer.discount_value}%` : `₹${offer.discount_value}`}</td><td>{offer.is_active ? 'Active' : 'Hidden'}</td><td><div className="shop-admin-actions"><button type="button" onClick={() => { setEditingId(offer.id); edit(offer); }}>Edit</button><button type="button" onClick={() => remove(offer)}>Delete</button></div></td></tr>)}</tbody></table></div>}</div>
  </div>;
}

export default function ShopNowManager({ isDarkMode, initialTab = 'categories' }) {
  const [tab, setTab] = useState(initialTab);
  const router = useRouter();

  const openAddProduct = () => {
    if (router) {
      router.push('/dashboard?tab=shop-products&action=add');
    } else if (typeof window !== 'undefined') {
      window.location.href = '/dashboard?tab=shop-products&action=add';
    }
  };

  return <div className={`shop-admin-root ${isDarkMode ? 'dark-mode dark' : ''}`}>
    <div className="shop-admin-toolbar"><div><h2>Shop Now Manager</h2><p>Add products and manage what customers see on Shop Now.</p></div><button type="button" onClick={openAddProduct}>+ Add Product</button></div>
    <div className="shop-admin-tabs" role="tablist" aria-label="Shop Now management">
      <button type="button" role="tab" aria-selected={tab === 'categories'} className={tab === 'categories' ? 'active' : ''} onClick={() => setTab('categories')}>Categories</button>
      <button type="button" role="tab" aria-selected={tab === 'content'} className={tab === 'content' ? 'active' : ''} onClick={() => setTab('content')}>Storefront Content</button>
      <button type="button" role="tab" aria-selected={tab === 'coupons'} className={tab === 'coupons' ? 'active' : ''} onClick={() => setTab('coupons')}>Promotions & Coupons</button>
    </div>
    <Suspense fallback={<p>Loading shop panel…</p>}>
      {tab === 'categories' && <ShopCategoriesManager isDarkMode={isDarkMode} />}
      {tab === 'products' && <ProductManager isDarkMode={isDarkMode} />}
      {tab === 'content' && <AppearanceManager />}
      {tab === 'coupons' && <ShopCouponsManager />}
    </Suspense>

    <style jsx>{`
      .shop-admin-root {
        font-family: Arial, Helvetica, sans-serif !important;
      }
      .shop-admin-toolbar {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 16px;
        margin-bottom: 18px;
      }
      .shop-admin-toolbar h2 {
        font: 800 24px Arial, sans-serif !important;
        color: var(--shop-admin-text, #1d2939);
        margin: 0 0 5px;
      }
      .shop-admin-toolbar p {
        font: 13px Arial, sans-serif !important;
        color: var(--shop-admin-muted, #667085);
        margin: 0;
      }
      .shop-admin-toolbar button {
        flex: none;
        padding: 12px 18px !important;
        border: 1px solid var(--brand-blue, #2196F3) !important;
        border-radius: 8px !important;
        background: var(--brand-blue, #2196F3) !important;
        color: #fff !important;
        font: 800 13px Arial, sans-serif !important;
        cursor: pointer;
      }
      .shop-admin-tabs {
        display: flex;
        gap: 8px;
        flex-wrap: wrap;
        margin-bottom: 24px;
        border-bottom: 1px solid var(--shop-admin-border, #dce3eb);
        padding-bottom: 12px;
      }
      .shop-admin-tabs button {
        padding: 10px 16px !important;
        border: 1px solid var(--shop-admin-border, #dce3eb) !important;
        background: var(--shop-admin-bg, #fff) !important;
        color: var(--shop-admin-text, #1d2939) !important;
        border-radius: 8px !important;
        font: 700 13px Arial, sans-serif !important;
        cursor: pointer;
        transition: all 0.15s ease;
      }
      .shop-admin-tabs button:hover {
        border-color: #94a3b8 !important;
      }
      .shop-admin-tabs button.active {
        background: var(--brand-blue, #2196F3) !important;
        border-color: var(--brand-blue, #2196F3) !important;
        color: #fff !important;
      }
    `}</style>
  </div>;
}

export function VendorShopProductsManager({ isDarkMode = false }) {
  return <div className={`shop-admin-root ${isDarkMode ? 'dark-mode dark' : ''}`}>
    <VendorCommissionSummary isDarkMode={isDarkMode} />
    <ProductManager ownerRole="vendor" formId="vendor-shop-product-form" isDarkMode={isDarkMode} />
  </div>;
}

export function ShopProductsManager({ isDarkMode = false }) {
  const searchParams = useSearchParams();
  const showForm = searchParams ? searchParams.get('action') === 'add' : false;

  return (
    <div className={`shop-admin-root ${isDarkMode ? 'dark-mode dark' : ''}`}>
      <ProductManager ownerRole="admin" formId="shop-product-form" initialShowForm={showForm} isDarkMode={isDarkMode} />
    </div>
  );
}

export function SupplierShopProductsManager({ isDarkMode = false }) {
  const searchParams = useSearchParams();
  const showForm = searchParams ? searchParams.get('action') === 'add' : false;

  return (
    <div className={`shop-admin-root ${isDarkMode ? 'dark-mode dark' : ''}`}>
      <ProductManager ownerRole="supplier" formId="supplier-shop-product-form" initialShowForm={showForm} isDarkMode={isDarkMode} />
    </div>
  );
}
