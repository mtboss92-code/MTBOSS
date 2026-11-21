"use client";

import { memo, useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft, ArrowRight, CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, ClipboardList, Clock, CreditCard, Grid3X3,
  Hammer, MapPin, Minus, Mountain, Package, PaintBucket, Percent, Plus,
  Search, ShieldCheck, ShoppingCart, Truck, Wallet, Wrench, X, Sparkles,
} from "lucide-react";
import "./shop.css";
import ShopCategoryNav from "./ShopCategoryNav";
import {
  CATEGORY_NAV_TREE,
  getMainCategories,
  getSubcategoriesForParent,
  productMatchesCategoryAndSub,
  resolveParentAndSubFromParam,
  namesMatch,
  findCategoryByLabel,
} from "./categoryNavTree";
import MobileStorefront from "./MobileStorefront";
import AutoSwipeGallery from "./AutoSwipeGallery";
import HeroBannerGallery from "./HeroBannerGallery";
import { defaultHeroImages } from "@/lib/shop-storefront-defaults";
import {
  matchesAttribute,
  collectUniqueAttributes,
} from "@/lib/product-attributes";
import { useShopCatalogue, useShopSections } from "@/hooks/useShopCatalogue";
import { mergeSelectedFacetOptions, SHOP_LIST_DEFAULT_LIMIT } from "@/lib/shop-catalogue";

const SEARCH_PLACEHOLDERS = [
  'Search "Cement"',
  'Search "Plywood & MDF"',
  'Search "Steel & TMT Bars"',
  'Search "Plumbing pipes & fittings"',
  'Search "Electrical wires & switches"',
  'Search "Paints & Waterproofing"',
  'Search "Hardware & Hinges"',
  'Search "Tiles & Adhesives"',
];

const PRODUCTS_PER_BATCH = SHOP_LIST_DEFAULT_LIMIT;

export function cloudinaryCardImageUrl(value, width = 480) {
  const src = normalizeShopImageUrl(value);
  if (!/^https:\/\/res\.cloudinary\.com\//i.test(src)) return src;
  // Do not download the original product upload for a small catalogue card.
  // `f_auto` selects the best browser format and `q_auto` keeps the payload
  // small while retaining useful product detail.
  // Skip if a transform is already present (avoid double-transform URLs).
  if (/\/image\/upload\/[^/]+,[^/]+\//.test(src)) return src;
  return src.replace('/image/upload/', `/image/upload/f_auto,q_auto,c_limit,w_${width}/`);
}

export function normalizeShopImageUrl(value) {
  const imageUrl = String(value || '').trim();
  if (!imageUrl) return '';
  if (/^(?:https?:|data:image\/|blob:|\/)/i.test(imageUrl)) return imageUrl;
  if (/^(?:www\.)/i.test(imageUrl)) return `https://${imageUrl}`;
  // Older product records sometimes contain `uploads/file.jpg` without the
  // leading slash, which would otherwise resolve relative to /ShopNow.
  return `/${imageUrl}`;
}

function imageValue(value) {
  if (typeof value === 'string') return value;
  if (value && typeof value === 'object') return value.secure_url || value.url || value.image_url || '';
  return '';
}

export function getProductImage(product, category = null) {
  if (!product || typeof product !== 'object') return '';
  const direct = [product.image, product.image_url, product.imageUrl, product.product_image]
    .map(imageValue).find(Boolean);
  if (direct) return normalizeShopImageUrl(direct);
  const gallery = Array.isArray(product.images) ? product.images : [];
  const galleryImage = gallery.map(imageValue).find(Boolean);
  if (galleryImage) return normalizeShopImageUrl(galleryImage);

  if (Array.isArray(category)) {
    const catName = typeof product.category === 'object' ? product.category?.name : product.category;
    const found = category.find((c) => c.name?.toLowerCase() === String(catName || '').trim().toLowerCase());
    if (found?.image) return normalizeShopImageUrl(imageValue(found.image));
  }
  const cat = (category && !Array.isArray(category)) ? category : (typeof product.category === 'object' ? product.category : null);
  if (cat?.image) return normalizeShopImageUrl(imageValue(cat.image));
  return '';
}

export function ShopImage({ src, alt = '', className = '', ...props }) {
  const normalizedSrc = normalizeShopImageUrl(src);
  if (!normalizedSrc) return null;

  const isPng = typeof normalizedSrc === 'string' && (/\.png(\?|$)/i.test(normalizedSrc) || normalizedSrc.toLowerCase().includes('.png') || normalizedSrc.includes('image/png'));
  const combinedClassName = [className, isPng ? 'is-png-image' : ''].filter(Boolean).join(' ');

  const isExternal = /^https?:\/\//i.test(normalizedSrc);
  let isNextImageSafe = !isExternal;
  try {
    const hostname = new URL(normalizedSrc).hostname;
    isNextImageSafe = hostname === 'res.cloudinary.com'
      || hostname === 'images.unsplash.com'
      || hostname.endsWith('pinimg.com');
  } catch {
    isNextImageSafe = !isExternal;
  }

  // Product URLs can point to any supplier's CDN. Use a regular image for
  // those URLs so Next.js remote-host allowlisting cannot hide valid images.
  if (isExternal && !isNextImageSafe) {
    const { fill, sizes, quality, priority, unoptimized, style, fetchPriority, ...imgProps } = props;
    // eslint-disable-next-line @next/next/no-img-element
    return <img
      {...imgProps}
      className={combinedClassName}
      src={normalizedSrc}
      alt={alt}
      loading={priority ? 'eager' : 'lazy'}
      fetchPriority={fetchPriority || (priority ? 'high' : 'auto')}
      decoding={priority ? 'sync' : 'async'}
      style={{
        ...(fill ? { position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'contain' } : {}),
        ...style,
      }}
    />;
  }

  return <Image src={normalizedSrc} alt={alt} className={combinedClassName} {...props} unoptimized={!isNextImageSafe} />;
}

function OptimizedImage({ src, alt = '', ...props }) {
  let unoptimized = false;
  try {
    if (!String(src).startsWith('/')) {
      const hostname = new URL(src).hostname;
      unoptimized = hostname !== 'res.cloudinary.com' && hostname !== 'images.unsplash.com' && !hostname.endsWith('pinimg.com');
    }
  } catch {
    unoptimized = true;
  }
  return <ShopImage src={src} alt={alt} unoptimized={unoptimized} {...props} />;
}

function categoryStyle(name = "") {
  const value = name.toLowerCase();
  if (/cement|concrete/.test(value)) return { tone: "sand", Icon: Package };
  if (/steel|iron|tmt/.test(value)) return { tone: "blue", Icon: Wrench };
  if (/sand|gravel|aggregate/.test(value)) return { tone: "cream", Icon: Mountain };
  if (/brick|block/.test(value)) return { tone: "coral", Icon: Hammer };
  if (/paint|colour/.test(value)) return { tone: "mint", Icon: PaintBucket };
  if (/tile|floor|marble|glass/.test(value)) return { tone: "lavender", Icon: Grid3X3 };
  if (/plumb|pipe|sanitary|faucet|sink|tank/.test(value)) return { tone: "blue", Icon: Wrench };
  if (/electr|switch|socket|mcb|wire|cable|light/.test(value)) return { tone: "sand", Icon: Sparkles };
  if (/carpentry|timber|plywood|hpl|wood/.test(value)) return { tone: "coral", Icon: Hammer };
  if (/hardware|furniture|hinges|lock|handle|fittings/.test(value)) return { tone: "green", Icon: ShieldCheck };
  if (/chemical|waterproof|sealant|admixture/.test(value)) return { tone: "mint", Icon: Package };
  if (/launch|arrival|new/.test(value)) return { tone: "blue", Icon: Sparkles };
  if (/building/.test(value)) return { tone: "sand", Icon: Mountain };
  return { tone: "green", Icon: Package };
}

function ProductVisual({ image, category, name, compact = false, priority = false }) {
  const { tone, Icon } = categoryStyle(category?.name || name);
  return (
    <div className={`store-visual store-visual-${tone}${compact ? " store-visual-compact" : ""}`}>
      {image || category?.image ? (
        <OptimizedImage
          src={cloudinaryCardImageUrl(image || category.image, compact ? 160 : 480)}
          alt={name}
          fill
          sizes={compact ? '68px' : '(max-width: 560px) 50vw, (max-width: 900px) 33vw, 25vw'}
          quality={70}
          priority={priority}
          style={{ objectFit: 'contain' }}
        />
      ) : (
        <><span className="store-visual-ring" /><Icon size={compact ? 27 : 54} strokeWidth={1.4} aria-hidden="true" /></>
      )}
    </div>
  );
}

function unitPrice(product, quantity = 1) {
  const base = Number(product.price) || 0;
  const tier = (product.bulk_pricing || []).filter((entry) => quantity >= Number(entry.min_quantity)).sort((a, b) => Number(b.min_quantity) - Number(a.min_quantity))[0];
  return tier ? Number(tier.price) : base;
}

export function displayUnit(value, fallback = 'unit') {
  return String(value || '').trim().replace(/^per\s+/i, '') || fallback;
}

export function getLowestBulkPrice(product) {
  if (!product) return null;
  const tiers = Array.isArray(product.bulk_pricing) ? product.bulk_pricing : [];
  const valid = tiers
    .map((t) => Number(t.price))
    .filter((p) => Number.isFinite(p) && p > 0);
  if (valid.length > 0) {
    return Math.min(...valid);
  }
  return null;
}

export function formatPromoSpend(value) {
  const num = Number(value) || 0;
  if (num >= 1000 && num % 1000 === 0) {
    return `${num / 1000}k`;
  }
  return `₹${num.toLocaleString('en-IN')}`;
}

export function productMatchesPromoCategories(product, applicableCategories) {
  if (!Array.isArray(applicableCategories) || applicableCategories.length === 0) {
    return true; // Empty array means applies to ALL materials & categories!
  }
  const rawCat = typeof product?.category === 'object' ? product?.category?.name : product?.category;
  const catNames = [
    rawCat,
    product?.category_name,
    product?.categoryName,
    product?.category?.title,
    product?.subcategory,
    product?.name,
  ].filter(Boolean).map((v) => String(v).trim().toLowerCase());

  return applicableCategories.some((c) => {
    const target = String(c).trim().toLowerCase();
    if (!target) return false;
    return catNames.some((cat) => cat === target || cat.includes(target) || target.includes(cat));
  });
}

export function getProductPromotions(product, promotions = []) {
  if (!promotions || !Array.isArray(promotions) || promotions.length === 0) return [];
  return promotions.filter((p) => {
    if (!p.is_active) return false;
    return productMatchesPromoCategories(product, p.applicable_categories);
  });
}

export function getProductPromotion(product, promotions = []) {
  const matches = getProductPromotions(product, promotions);
  if (matches.length === 0) return null;
  const discountPromo = matches.find((p) => p.promo_type === 'percentage' || p.promo_type === 'flat');
  return discountPromo || matches[0];
}

export function getProductFreeShippingPromo(product, promotions = []) {
  if (!promotions || !Array.isArray(promotions) || promotions.length === 0) return null;
  return promotions.find((p) => {
    if (!p.is_active || p.promo_type !== 'free_shipping') return false;
    return productMatchesPromoCategories(product, p.applicable_categories);
  }) || null;
}

function productCanOrder(product, selectedCity) {
  const normalizedCity = (selectedCity || "").trim().toLowerCase();
  const cityUnavailable = Boolean(
    normalizedCity &&
    Array.isArray(product.available_cities) &&
    product.available_cities.length > 0 &&
    !product.available_cities.some((city) => city && city.trim().toLowerCase() === normalizedCity)
  );
  const outOfStock = Boolean(product.fromSupplier && Number(product.quantity) <= 0);
  return !cityUnavailable && !outOfStock;
}

function discountPercent(product) {
  const price = Number(product?.price);
  const originalPrice = Number(product?.compare_at_price);
  return originalPrice > price && price > 0
    ? Math.round(((originalPrice - price) / originalPrice) * 100)
    : 0;
}

function offerMatches(offer, product, category) {
  const same = (left, right) => !left || String(left).trim().toLowerCase() === String(right || '').trim().toLowerCase();
  return same(offer.category, category?.name) && same(offer.subcategory, product.subcategory) && same(offer.brand, product.brand);
}

function applyOffer(product, offer) {
  if (!offer || !(Number(product.price) > 0)) return product;
  const basePrice = Number(product.price);
  const discount = offer.discount_type === 'fixed'
    ? Number(offer.discount_value)
    : basePrice * Number(offer.discount_value) / 100;
  const salePrice = Math.max(0.01, Number((basePrice - discount).toFixed(2)));
  if (salePrice >= basePrice) return product;
  const percent = Math.round(((basePrice - salePrice) / basePrice) * 100);
  return {
    ...product,
    price: salePrice,
    compare_at_price: Math.max(Number(product.compare_at_price) || 0, basePrice),
    offer: { ...offer, display_badge: offer.badge_text || `${percent}% OFF` },
  };
}

const ProductCard = memo(function ProductCard({ product, quantity, canAdd, onAdd, onChangeQty, onQuote, onBuy, selectedCity, promotions = [], shippingSettings, priority = false }) {
  const productImage = getProductImage(product, product.category);
  const price = Number(product.price);
  const hasFixedPrice = Number.isFinite(price) && price > 0;
  const discount = discountPercent(product);
  const normalizedCity = (selectedCity || "").trim().toLowerCase();
  const cityUnavailable = Boolean(
    normalizedCity &&
    Array.isArray(product.available_cities) &&
    product.available_cities.length > 0 &&
    !product.available_cities.some((city) => city && city.trim().toLowerCase() === normalizedCity)
  );
  const outOfStock = Boolean(product.fromSupplier && Number(product.quantity) <= 0);
  const canOrder = !cityUnavailable && !outOfStock;
  const detailId = product.product_id || (String(product.id).startsWith('supplier-') ? product.id.replace('supplier-', '') : product.id);
  const detailHref = `/ShopNow/${detailId}`;

  // Bulk pricing & promotion logic
  const lowestBulkPrice = getLowestBulkPrice(product);
  const activePromos = getProductPromotions(product, promotions);

  return (
    <article className="store-product-card" data-product-id={detailId}>
      {(product.offer?.display_badge || discount > 0) && (
        <span className="store-discount-badge">{product.offer?.display_badge || `${discount}% OFF`}</span>
      )}
      <Link
        href={detailHref}
        className="store-product-image-button"
        aria-label={`View ${product.name} details`}
        onClick={() => {
          try {
            sessionStorage.setItem('MTBOSS-shop-scroll', JSON.stringify({
              path: window.location.pathname + window.location.search,
              y: window.scrollY || 0,
            }));
          } catch { /* ignore */ }
        }}
      >
        <ProductVisual image={productImage} category={product.category} name={product.name} priority={priority} />
      </Link>
      <div className="store-product-details">
        {/* Delivery / Trust & Promotion Line */}
        <div className="store-card-promo-section">
          <div className="store-delivery-trust-row">
            <span className="store-trust-item">
              <CreditCard size={11} /> Pay on Delivery
            </span>
          </div>

          {activePromos.length > 0 ? (
            activePromos.slice(0, 1).map((promo) => {
              const isFreeShipping = promo.promo_type === 'free_shipping';
              const promoSpendText = promo.min_cart_value > 0 ? `on orders above ${formatPromoSpend(promo.min_cart_value)}` : 'on all orders';
              return (
                <div key={promo.id || promo.name} className="store-card-blue-promo">
                  <Truck size={12} />
                  <span>{isFreeShipping ? 'Free Delivery' : `${promo.discount_value}% Discount`} {promoSpendText}</span>
                </div>
              );
            })
          ) : (
            <div className="store-card-blue-promo">
              <Truck size={12} />
              <span>Free Delivery on orders above ₹500</span>
            </div>
          )}
        </div>

        {/* Product Title */}
        <Link
          href={detailHref}
          className="store-product-title"
          title={product.name}
        >
          <h3>{product.name}</h3>
        </Link>

        {/* Price row (MRP strikethrough + Current Price) */}
        <div className="store-product-price-slot">
          {hasFixedPrice ? (
            <div className="store-product-price">
              {Number(product.compare_at_price) > price && (
                <del>₹{Number(product.compare_at_price).toLocaleString('en-IN')}</del>
              )}
              <strong>₹{price.toLocaleString('en-IN')}</strong>
            </div>
          ) : null}
        </div>

        {/* Bulk Prices link (Image 2 style: Unlock Bulk Prices of ₹...) */}
        {lowestBulkPrice ? (
          <button
            type="button"
            className="store-bulk-price-link"
            onClick={(e) => {
              e.stopPropagation();
              onQuote(product);
            }}
            title="Unlock bulk pricing — click to view tiers & request bulk quote"
          >
            Unlock Bulk Prices of ₹{lowestBulkPrice.toLocaleString('en-IN')}
          </button>
        ) : null}

        <div className="store-product-footer">
          {cityUnavailable && <span className="store-stock-note store-stock-note-red">Out of stock in {selectedCity}</span>}
          {outOfStock && !cityUnavailable && <span className="store-stock-note store-stock-note-red">Currently out of stock</span>}

          <div className="store-product-actions">
            <button
              type="button"
              className={`store-buy-btn ${!canOrder ? 'opacity-50 cursor-not-allowed' : ''}`}
              disabled={!canOrder}
              onClick={() => onBuy(product)}
            >
              Buy Now
            </button>

            {quantity ? (
              <div className="store-quantity-control" aria-label={`${product.name} quantity in cart`}>
                <button
                  type="button"
                  onClick={() => onChangeQty(product.id, -1)}
                  aria-label={`Remove one ${product.name}`}
                >
                  <Minus size={14} />
                </button>
                <span style={{ fontWeight: 800 }}>{quantity}</span>
                <button
                  type="button"
                  disabled={!canOrder}
                  onClick={() => onChangeQty(product.id, 1)}
                  aria-label={`Add one ${product.name}`}
                >
                  <Plus size={14} />
                </button>
              </div>
            ) : (
              <button
                type="button"
                className={`store-add-btn ${!canOrder ? 'opacity-50 cursor-not-allowed' : ''}`}
                disabled={!canAdd || !canOrder}
                onClick={(e) => onAdd(product, e)}
              >
                {!canOrder ? 'Out of Stock' : 'Add'}
              </button>
            )}
          </div>
        </div>
      </div>
    </article>
  );
});

/**
 * A single-row product rail for the Shop Now home page. It deliberately wraps
 * the existing ProductCard so pricing, cart, Buy Now and product links stay
 * exactly the same as the catalogue cards.
 */
const ProductCarousel = memo(function ProductCarousel({
  products,
  sectionId,
  cart,
  canAdd,
  onAdd,
  onChangeQty,
  onQuote,
  onBuy,
  selectedCity,
  promotions,
  shippingSettings,
}) {
  const sectionRef = useRef(null);
  const railRef = useRef(null);
  const frameRef = useRef(0);
  const lastTimeRef = useRef(0);
  const visibleRef = useRef(false);
  const hoverRef = useRef(false);
  const interactingRef = useRef(false);
  const documentVisibleRef = useRef(typeof document === 'undefined' ? true : !document.hidden);
  const animationScrollRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });

  // Always duplicate products to enable seamless infinite looping.
  // Duplicate enough copies so the rail is always wider than the viewport —
  // at least 2 copies for large sets, more copies for very small sets.
  const duplicatedProducts = useMemo(() => {
    if (products.length === 0) return [];
    // For seamless looping the rail must contain at least 2 copies so
    // scrollLeft can jump back by exactly one copy width without a gap.
    // For very small product counts, repeat more times so the rail is
    // always wider than the visible viewport (prevents empty space).
    const repeatCount = products.length <= 3 ? 6 : products.length <= 5 ? 4 : 2;
    return Array.from({ length: repeatCount }, () => products).flat();
  }, [products]);

  const clearResumeTimer = useCallback(() => {
    if (resumeTimerRef.current) {
      window.clearTimeout(resumeTimerRef.current);
      resumeTimerRef.current = null;
    }
  }, []);

  const pauseAfterInteraction = useCallback((delay = 1800) => {
    interactingRef.current = true;
    clearResumeTimer();
    resumeTimerRef.current = window.setTimeout(() => {
      interactingRef.current = false;
      resumeTimerRef.current = null;
    }, delay);
  }, [clearResumeTimer]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting && entry.intersectionRatio >= 0.15; },
      { threshold: [0, 0.15, 0.5] },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => { documentVisibleRef.current = !document.hidden; };
    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => document.removeEventListener('visibilitychange', onVisibilityChange);
  }, []);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail || products.length < 1) return undefined;
    let reducedMotion = false;
    try { reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch { /* ignore */ }
    if (reducedMotion) return undefined;

    const tick = (time) => {
      const elapsed = Math.min(48, time - (lastTimeRef.current || time));
      lastTimeRef.current = time;
      if (visibleRef.current && documentVisibleRef.current && !hoverRef.current && !interactingRef.current && !dragRef.current.active) {
        // Pixels per second. A slow rail leaves cards readable and avoids jank.
        animationScrollRef.current = true;
        rail.scrollLeft += elapsed * 0.028;
        // Seamless loop: once we've scrolled past the first copy, jump back
        // by exactly one copy so the user never sees a gap or repeated jump.
        const loopPoint = rail.scrollWidth / duplicatedProducts.length * products.length;
        if (loopPoint > 0 && rail.scrollLeft >= loopPoint) rail.scrollLeft -= loopPoint;
        animationScrollRef.current = false;
      }
      frameRef.current = window.requestAnimationFrame(tick);
    };
    frameRef.current = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frameRef.current);
  }, [products.length, duplicatedProducts.length]);

  useEffect(() => () => clearResumeTimer(), [clearResumeTimer]);

  const scrollByCard = useCallback((direction) => {
    const rail = railRef.current;
    if (!rail) return;
    pauseAfterInteraction();
    rail.scrollBy({ left: direction * Math.max(rail.clientWidth * 0.82, 260), behavior: 'smooth' });
  }, [pauseAfterInteraction]);

  const handlePointerDown = useCallback((event) => {
    const rail = railRef.current;
    if (!rail || event.pointerType === 'touch') return;
    dragRef.current = { active: true, startX: event.clientX, startScroll: rail.scrollLeft };
    rail.setPointerCapture?.(event.pointerId);
    pauseAfterInteraction(2200);
  }, [pauseAfterInteraction]);

  const handlePointerMove = useCallback((event) => {
    const rail = railRef.current;
    if (!rail || !dragRef.current.active) return;
    rail.scrollLeft = dragRef.current.startScroll - (event.clientX - dragRef.current.startX);
  }, []);

  const endDrag = useCallback((event) => {
    dragRef.current.active = false;
    railRef.current?.releasePointerCapture?.(event.pointerId);
  }, []);

  if (!products.length) return null;
  return (
    <div
      ref={sectionRef}
      className="store-product-carousel"
      onMouseEnter={() => { hoverRef.current = true; }}
      onMouseLeave={() => { hoverRef.current = false; }}
    >
      <button type="button" className="store-carousel-arrow store-carousel-arrow-left" aria-label="Scroll products left" onClick={() => scrollByCard(-1)}>
        <ChevronLeft size={20} />
      </button>
      <div
        ref={railRef}
        className="store-product-carousel-viewport"
        onWheel={() => pauseAfterInteraction()}
        onScroll={() => { if (!animationScrollRef.current) pauseAfterInteraction(); }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
      >
        <div className="store-product-carousel-track">
          {duplicatedProducts.map((product, index) => {
            const duplicate = index >= products.length;
            return (
              <div className="store-product-carousel-item" key={`${sectionId}-${product.id}-${index}`} aria-hidden={duplicate || undefined}>
                <ProductCard
                  product={product}
                  quantity={cart.find((item) => item.product.id === product.id)?.quantity || 0}
                  canAdd={canAdd}
                  onAdd={onAdd}
                  onChangeQty={onChangeQty}
                  onQuote={onQuote}
                  onBuy={onBuy}
                  selectedCity={selectedCity}
                  promotions={promotions}
                  shippingSettings={shippingSettings}
                  priority={index < 2}
                />
              </div>
            );
          })}
        </div>
      </div>
      <button type="button" className="store-carousel-arrow store-carousel-arrow-right" aria-label="Scroll products right" onClick={() => scrollByCard(1)}>
        <ChevronRight size={20} />
      </button>
    </div>
  );
});


function FilterPopover({ label, options = [], selected = [], onToggle, onReset, isOpen, onOpen, onClose }) {
  if (!options || options.length === 0) return null;
  const selectedCount = selected.length;
  const hasSelected = selectedCount > 0;

  return (
    <div className="homerun-filter-popover-wrap">
      <button
        type="button"
        className={`homerun-filter-trigger ${isOpen ? 'is-open' : ''} ${hasSelected ? 'has-selected' : ''}`}
        onClick={isOpen ? onClose : onOpen}
        aria-expanded={isOpen}
      >
        <span>{label}{hasSelected ? ` (${selectedCount})` : ''}</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s ease'
          }}
        />
      </button>

      {isOpen && (
        <div className="homerun-filter-popover">
          <div className="homerun-filter-popover-header">
            <span>{selectedCount} selected</span>
            {hasSelected && (
              <button
                type="button"
                className="homerun-filter-popover-reset"
                onClick={onReset}
              >
                Reset
              </button>
            )}
          </div>
          <div className="homerun-filter-popover-list">
            {options.map((opt) => {
              const val = typeof opt === 'object' ? opt.value : opt;
              const lbl = typeof opt === 'object' ? opt.label : opt;
              const count = typeof opt === 'object' ? opt.count : undefined;
              const isChecked = selected.includes(val);
              return (
                <label key={val} className="homerun-filter-option">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={() => onToggle(val)}
                  />
                  <span>{lbl}</span>
                  {count !== undefined && count !== null && (
                    <span style={{ color: '#9ca3af', fontSize: '12px' }}>({count})</span>
                  )}
                </label>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

function PriceSortPopover({ selectedPriceRanges = [], priceOptions = [], onTogglePriceRange, onResetPrice, isOpen, onOpen, onClose }) {
  const hasSelected = selectedPriceRanges.length > 0;
  const options = priceOptions.length
    ? priceOptions
    : [
      { label: 'Under ₹500', value: 'under-500' },
      { label: '₹500 - ₹1,000', value: '500-1000' },
      { label: '₹1,000 - ₹5,000', value: '1000-5000' },
      { label: 'Above ₹5,000', value: 'above-5000' },
    ];
  return (
    <div className="homerun-filter-popover-wrap">
      <button
        type="button"
        className={`homerun-filter-trigger ${isOpen ? 'is-open' : ''} ${hasSelected ? 'has-selected' : ''}`}
        onClick={isOpen ? onClose : onOpen}
        aria-expanded={isOpen}
      >
        <span>Price{hasSelected ? ` (${selectedPriceRanges.length})` : ''}</span>
        <ChevronDown
          size={14}
          style={{
            transform: isOpen ? 'rotate(180deg)' : 'none',
            transition: 'transform 0.15s ease'
          }}
        />
      </button>

      {isOpen && (
        <div className="homerun-filter-popover" style={{ minWidth: 200 }}>
          <div className="homerun-filter-popover-header">
            <span>{selectedPriceRanges.length} selected</span>
            {hasSelected && (
              <button
                type="button"
                className="homerun-filter-popover-reset"
                onClick={onResetPrice}
              >
                Reset
              </button>
            )}
          </div>
          <div className="homerun-filter-popover-list">
            {options.map((opt) => (
              <label key={opt.value} className="homerun-filter-option">
                <input
                  type="checkbox"
                  checked={selectedPriceRanges.includes(opt.value)}
                  onChange={() => onTogglePriceRange(opt.value)}
                />
                <span>{opt.label}</span>
                {opt.count != null && (
                  <span style={{ color: '#9ca3af', fontSize: '12px' }}>({opt.count})</span>
                )}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Storefront({ categories, products, offers = [], content, loading, cities, selectedCity, setSelectedCity, cart, onAdd, onChangeQty, onQuote, onBuy, onCheckout, activeCoupon, couponCalculation, couponOffers, onApplyCoupon, onSelectCoupon, onClearCoupon, shippingSettings, shippingQuote, promotions = [], onOpenLocationModal }) {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedParentNav, setSelectedParentNav] = useState(null);
  const [selectedSubNav, setSelectedSubNav] = useState(null);
  const [selectedSubNavMembers, setSelectedSubNavMembers] = useState(null);
  const [cartOpen, setCartOpen] = useState(false);
  const [cityOpen, setCityOpen] = useState(false);
  const [productManagerHref, setProductManagerHref] = useState('');
  const [sortBy, setSortBy] = useState('featured');
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedThicknesses, setSelectedThicknesses] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedMaterials, setSelectedMaterials] = useState([]);
  const [selectedGrades, setSelectedGrades] = useState([]);
  const [selectedPackSizes, setSelectedPackSizes] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);
  const [openFilterMenu, setOpenFilterMenu] = useState(null);
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const loadMoreRef = useRef(null);
  // CSS `display:none` still mounts the entire hidden storefront. On desktop
  // that meant the mobile shop (including its quick-services tree and product
  // calculations) ran alongside the desktop shop, occupying the main thread.
  // Mount exactly one storefront for the current viewport instead.
  // null = viewport not measured yet (prevents a desktop fetch flash on phones).
  const [isMobileViewport, setIsMobileViewport] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setDebouncedSearch(search.trim()), 300);
    return () => clearTimeout(timer);
  }, [search]);

  // Warm the hero LCP candidate as soon as storefront content is known.
  useEffect(() => {
    if (typeof document === 'undefined') return undefined;
    const raw = (content?.hero_images || defaultHeroImages || [])[0];
    if (!raw) return undefined;
    const href = /^https:\/\/res\.cloudinary\.com\//i.test(String(raw))
      && !/\/image\/upload\/[^/]+,[^/]+\//.test(String(raw))
      ? String(raw).replace('/image/upload/', '/image/upload/f_auto,q_auto,c_fill,w_900/')
      : String(raw);
    let link = document.querySelector('link[data-shop-hero-preload]');
    if (!link) {
      link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'image';
      link.setAttribute('data-shop-hero-preload', '1');
      document.head.appendChild(link);
    }
    link.href = href;
    return undefined;
  }, [content?.hero_images]);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const url = new URL(window.location.href);
    if (debouncedSearch) url.searchParams.set('q', debouncedSearch);
    else url.searchParams.delete('q');
    if (sortBy && sortBy !== 'featured') url.searchParams.set('sort', sortBy);
    else url.searchParams.delete('sort');
    window.history.replaceState(window.history.state, '', url);
  }, [debouncedSearch, sortBy]);

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)');
    const syncViewport = () => setIsMobileViewport(media.matches);
    syncViewport();
    media.addEventListener('change', syncViewport);
    return () => media.removeEventListener('change', syncViewport);
  }, []);

  const toggleFilter = (setList, val) => {
    setList((prev) => (prev.includes(val) ? prev.filter((item) => item !== val) : [...prev, val]));
  };

  const resetAttributeFilters = () => {
    setSelectedSubcategories([]);
    setSelectedBrands([]);
    setSelectedThicknesses([]);
    setSelectedSizes([]);
    setSelectedTypes([]);
    setSelectedColors([]);
    setSelectedMaterials([]);
    setSelectedGrades([]);
    setSelectedPackSizes([]);
    setSelectedPriceRanges([]);
    setOpenFilterMenu(null);
  };

  useEffect(() => {
    const handleGlobalClick = (e) => {
      if (!e.target.closest('.homerun-filter-popover-wrap')) {
        setOpenFilterMenu(null);
      }
    };
    document.addEventListener('pointerdown', handleGlobalClick);
    return () => document.removeEventListener('pointerdown', handleGlobalClick);
  }, []);
  const [cartOverlayTop, setCartOverlayTop] = useState(0);
  const [couponCode, setCouponCode] = useState('');
  const [couponNotice, setCouponNotice] = useState('');
  const [offersOpen, setOffersOpen] = useState(false);
  const [walletBalance, setWalletBalance] = useState(0);
  const [cashbackPreview, setCashbackPreview] = useState(null);
  const searchScrolled = useRef(false);
  const catalogScrollFrame = useRef(null);
  const storeHeaderRef = useRef(null);
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const mainCategories = useMemo(() => {
    return getMainCategories(categories, products);
  }, [categories, products]);

  const currentParentCategory = useMemo(() => {
    if (!selectedParentNav || selectedParentNav === 'all') return null;
    return mainCategories.find((m) => namesMatch(m.label, selectedParentNav) || m.id === selectedParentNav) || null;
  }, [mainCategories, selectedParentNav]);

  const parentSubcategories = useMemo(() => {
    if (!currentParentCategory) return [];
    return getSubcategoriesForParent(currentParentCategory, categories, products);
  }, [currentParentCategory, categories, products]);

  useEffect(() => {
    const timer = setInterval(() => {
      setPlaceholderIndex((prev) => (prev + 1) % SEARCH_PLACEHOLDERS.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const updateHeaderHeight = () => {
      if (storeHeaderRef.current) {
        const height = storeHeaderRef.current.offsetHeight;
        if (height > 0) {
          document.documentElement.style.setProperty('--shop-header-height', `${height}px`);
        }
      }
    };
    updateHeaderHeight();
    window.addEventListener('resize', updateHeaderHeight);
    let observer = null;
    if (typeof ResizeObserver !== 'undefined' && storeHeaderRef.current) {
      observer = new ResizeObserver(updateHeaderHeight);
      observer.observe(storeHeaderRef.current);
    }
    return () => {
      window.removeEventListener('resize', updateHeaderHeight);
      if (observer) observer.disconnect();
    };
  }, []);

  const activeCatObj = useMemo(() => {
    return categories.find((c) => String(c.id) === String(activeCategory)) || null;
  }, [categories, activeCategory]);

  const activeSubcats = useMemo(() => {
    if (!activeCatObj) return [];
    const list = [];
    if (Array.isArray(activeCatObj.subcategories) && activeCatObj.subcategories.length > 0) {
      activeCatObj.subcategories.forEach((s) => {
        const name = typeof s === 'object' && s !== null ? s.name : s;
        if (name && !list.some((item) => (typeof item === 'object' ? item.name : item) === name)) list.push(s);
      });
    }
    if (Array.isArray(activeCatObj.types) && activeCatObj.types.length > 0) {
      activeCatObj.types.forEach((t) => {
        if (t && !list.some((item) => (typeof item === 'object' ? item.name : item) === t)) list.push(t);
      });
    }
    if (list.length === 0) {
      const treeMatch = CATEGORY_NAV_TREE.find(
        (p) =>
          p.label.toLowerCase().includes(activeCatObj.name.toLowerCase()) ||
          activeCatObj.name.toLowerCase().includes(p.label.toLowerCase())
      );
      if (treeMatch && Array.isArray(treeMatch.children)) {
        list.push(...treeMatch.children);
      }
    }
    return list;
  }, [activeCatObj]);


  const effectiveCashbackPreview = (Array.isArray(cart) && cart.length > 0) ? cashbackPreview : null;

  useEffect(() => {
    if (!Array.isArray(cart) || cart.length === 0) {
      return;
    }
    const token = localStorage.getItem('token');
    const items = cart.map((item) => ({
      product_id: item.product?.product_id || item.product?.id,
      category_id: item.product?.category?.id,
      category_name: item.product?.category?.name || item.product?.category,
      price: Number(item.product?.price) || 0,
      quantity: Number(item.quantity) || 1,
      total: (Number(item.product?.price) || 0) * (Number(item.quantity) || 1),
    }));

    const subtotal = cart.reduce((sum, it) => sum + (Number(it.product?.price) || 0) * (Number(it.quantity) || 1), 0);
    const discount = (activeCoupon && couponCalculation?.eligible) ? (Number(couponCalculation.discount) || 0) : 0;

    fetch('/api/cashback/preview', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
      },
      body: JSON.stringify({
        items,
        subtotal,
        coupon_discount: discount,
        coupon_code: activeCoupon?.code || '',
      }),
    })
      .then((r) => r.json())
      .then((d) => {
        if (d.success && d.data) setCashbackPreview(d.data);
      })
      .catch(() => {});
  }, [cart, activeCoupon, couponCalculation]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      fetch('/api/wallet', {
        headers: { Authorization: `Bearer ${token}` },
      })
        .then((r) => {
          if (r.status === 401) {
            // Stale or invalid token
            return null;
          }
          return r.ok ? r.json() : null;
        })
        .then((d) => {
          if (d?.success && d?.data) {
            setWalletBalance(Number(d.data.balance) || 0);
          }
        })
        .catch(() => {});
    }
  }, []);

  // When user types a search term, scroll the catalog into view automatically
  useEffect(() => {
    const term = search.trim();
    if (term && !searchScrolled.current) {
      searchScrolled.current = true;
      // Small delay lets React render the filtered results before scrolling
      const id = setTimeout(() => {
        document.getElementById('store-products')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
      return () => clearTimeout(id);
    }
    if (!term) searchScrolled.current = false;
  }, [search]);

  // Scroll-lock: add .shop-is-scrolling to .shop-page while scrolling so CSS
  // :hover never sticks on product/category cards during wheel or trackpad scroll.
  // 500ms delay ensures the hover state fully clears before pointer-events are restored.
  useEffect(() => {
    const page = document.querySelector('.shop-page');
    if (!page) return;
    let timer = null;
    const onScroll = () => {
      page.classList.add('shop-is-scrolling');
      clearTimeout(timer);
      timer = setTimeout(() => page.classList.remove('shop-is-scrolling'), 500);
    };
    // Listen on both window and document to catch all scroll events
    window.addEventListener('scroll', onScroll, { passive: true });
    document.addEventListener('scroll', onScroll, { passive: true, capture: true });
    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('scroll', onScroll, { capture: true });
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => () => {
    if (catalogScrollFrame.current) cancelAnimationFrame(catalogScrollFrame.current);
  }, []);

  useEffect(() => {
    const syncFromUrl = () => {
      if (typeof window === 'undefined') return;
      const params = new URLSearchParams(window.location.search);
      const catParam = params.get('category');
      const subParam = params.get('subcategory');
      const query = params.get('q') || '';
      const sortParam = params.get('sort') || 'featured';

      if (query) {
        setSearch(query);
      } else {
        setSearch('');
      }
      if (['featured', 'newest', 'price-asc', 'price-desc', 'name'].includes(sortParam)) {
        setSortBy(sortParam);
      }

      if (catParam || subParam) {
        const resolved = resolveParentAndSubFromParam(catParam, subParam, categories);
        setSelectedParentNav(resolved.parentLabel);
        setSelectedSubNav(resolved.subLabel);
        if (resolved.subLabel) {
          const found = findCategoryByLabel(resolved.subLabel, categories);
          if (found) setActiveCategory(found.id);
        } else if (resolved.parentLabel) {
          const found = findCategoryByLabel(resolved.parentLabel, categories);
          if (found) setActiveCategory(found.id);
        }
      } else {
        setSelectedParentNav(null);
        setSelectedSubNav(null);
        setActiveCategory('all');
      }
    };

    syncFromUrl();
    window.addEventListener('popstate', syncFromUrl);
    return () => window.removeEventListener('popstate', syncFromUrl);
  }, [categories]);

  useEffect(() => {
    const checkProductManagerAccess = () => {
      const activeRole = localStorage.getItem('mtboss.activeRole');
      let hasAdminRole = false;
      try { hasAdminRole = JSON.parse(localStorage.getItem('user') || '{}').role === 'admin'; }
      catch { /* Ignore stale user data. */ }
      const hasAdminAccess =
        activeRole !== 'agent'
        && (Boolean(localStorage.getItem('admin-token')) || (Boolean(localStorage.getItem('token')) && hasAdminRole));
      if (hasAdminAccess) setProductManagerHref('/dashboard?tab=shop-products');
      else if (localStorage.getItem('vendor-token')) setProductManagerHref('/vendor/dashboard?tab=products');
      else setProductManagerHref('');
    };
    const frame = requestAnimationFrame(checkProductManagerAccess);
    window.addEventListener('storage', checkProductManagerAccess);
    window.addEventListener('userLoggedIn', checkProductManagerAccess);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('storage', checkProductManagerAccess);
      window.removeEventListener('userLoggedIn', checkProductManagerAccess);
    };
  }, []);

  const searchTerm = debouncedSearch.toLowerCase();
  const hasAttributeFilters = selectedSubcategories.length > 0
    || selectedBrands.length > 0
    || selectedThicknesses.length > 0
    || selectedSizes.length > 0
    || selectedTypes.length > 0
    || selectedColors.length > 0
    || selectedMaterials.length > 0
    || selectedGrades.length > 0
    || selectedPackSizes.length > 0
    || selectedPriceRanges.length > 0;

  const listingEnabled = Boolean(
    searchTerm
    || selectedSubNav
    || (selectedParentNav && selectedParentNav !== "all")
    || activeCategory !== "all"
    || hasAttributeFilters,
  );

  const catalogueFilters = useMemo(() => {
    const params = {
      sort: sortBy,
      q: searchTerm || undefined,
      brand: selectedBrands,
      type: selectedTypes,
      thickness: selectedThicknesses,
      size: selectedSizes,
      color: selectedColors,
      material: selectedMaterials,
      grade: selectedGrades,
      pack_size: selectedPackSizes,
      priceRange: selectedPriceRanges,
    };

    if (selectedSubcategories.length > 0) {
      params.parent = selectedParentNav || undefined;
      params.children = selectedSubcategories;
    } else if (selectedSubNav) {
      const found = findCategoryByLabel(selectedSubNav, categories);
      if (found) {
        params.category = found.name;
      } else {
        params.parent = selectedParentNav || undefined;
        params.subcategory = selectedSubNav;
      }
    } else if (selectedParentNav && selectedParentNav !== "all") {
      const children = getSubcategoriesForParent(selectedParentNav, categories, [])
        .map((entry) => entry.name)
        .filter(Boolean);
      params.parent = selectedParentNav;
      if (children.length) params.children = children;
    } else if (activeCategory !== "all") {
      const cat = categories.find((entry) => String(entry.id) === String(activeCategory));
      if (cat?.name) params.category = cat.name;
    }

    return params;
  }, [
    activeCategory,
    categories,
    searchTerm,
    selectedBrands,
    selectedColors,
    selectedGrades,
    selectedMaterials,
    selectedPackSizes,
    selectedParentNav,
    selectedPriceRanges,
    selectedSizes,
    selectedSubNav,
    selectedSubcategories,
    selectedThicknesses,
    selectedTypes,
    sortBy,
  ]);

  const {
    products: pagedProducts,
    pagination,
    facets,
    loading: productsLoading,
    loadingMore,
    isRefreshing: productsRefreshing,
    error: productsError,
    loadMore,
    reload: reloadProducts,
  } = useShopCatalogue({
    categories,
    // Mobile owns its own catalogue fetches — avoid duplicate desktop+mobile requests.
    enabled: listingEnabled && isMobileViewport === false,
    pageSize: PRODUCTS_PER_BATCH,
    filters: catalogueFilters,
  });

  const homepageMode = !listingEnabled;
  const { deals, arrivals } = useShopSections(
    categories,
    homepageMode && !loading && isMobileViewport === false,
  );

  // Server-paginated catalogue — no full client-side rebuild of every product.
  const catalog = pagedProducts;
  const visible = catalog;
  const renderedProducts = catalog;
  const remainingProducts = Math.max(0, (pagination.total || 0) - renderedProducts.length);
  const loadMoreProducts = useCallback(() => {
    loadMore();
  }, [loadMore]);

  useEffect(() => {
    const node = loadMoreRef.current;
    if (!node || remainingProducts <= 0) return undefined;
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) loadMoreProducts();
      },
      { rootMargin: "240px 0px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [loadMoreProducts, remainingProducts, renderedProducts.length]);

  // Preserve scroll + filter URL when leaving for product detail, restore on return.
  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    try {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      const raw = sessionStorage.getItem('MTBOSS-shop-scroll');
      if (raw) {
        const saved = JSON.parse(raw);
        if (saved?.path === window.location.pathname + window.location.search && Number.isFinite(saved.y)) {
          requestAnimationFrame(() => window.scrollTo(0, saved.y));
        }
        sessionStorage.removeItem('MTBOSS-shop-scroll');
      }
    } catch { /* ignore */ }

    const persistScroll = () => {
      try {
        sessionStorage.setItem('MTBOSS-shop-scroll', JSON.stringify({
          path: window.location.pathname + window.location.search,
          y: window.scrollY || 0,
        }));
      } catch { /* ignore */ }
    };
    window.addEventListener('pagehide', persistScroll);
    return () => window.removeEventListener('pagehide', persistScroll);
  }, []);

  const dedupeProducts = (list) => {
    const seen = new Set();
    return list.filter((p) => {
      const k = p?.product_id ? `supplier-${p.product_id}` : p?.id;
      if (!k || seen.has(k)) return false;
      seen.add(k);
      return true;
    });
  };

  const goToAllCategories = ({ noScroll = false } = {}) => {
    setSelectedParentNav(null);
    setSelectedSubNav(null);
    setSelectedSubNavMembers(null);
    setActiveCategory('all');
    setSearch('');
    resetAttributeFilters();
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      url.searchParams.delete('category');
      url.searchParams.delete('subcategory');
      url.searchParams.delete('q');
      window.history.pushState({}, '', url);
      if (!noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleExploreParentCategory = (parent, { noScroll = false } = {}) => {
    const pLabel = typeof parent === 'object' ? parent.label || parent.name : parent;
    const parentDef = mainCategories.find((m) => namesMatch(m.label, pLabel) || m.id === parent?.id);

    if (parentDef?.isDirect) {
      setSelectedParentNav(parentDef.label);
      setSelectedSubNav(parentDef.label);
      setSelectedSubNavMembers(null);
      setSearch('');
      resetAttributeFilters();
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('category', parentDef.label);
        url.searchParams.delete('subcategory');
        url.searchParams.delete('q');
        window.history.pushState({}, '', url);
      }
    } else {
      setSelectedParentNav(parentDef?.label || pLabel);
      setSelectedSubNav(null);
      setSelectedSubNavMembers(null);
      setSearch('');
      resetAttributeFilters();
      if (typeof window !== 'undefined') {
        const url = new URL(window.location.href);
        url.searchParams.set('category', parentDef?.label || pLabel);
        url.searchParams.delete('subcategory');
        url.searchParams.delete('q');
        window.history.pushState({}, '', url);
      }
    }
    if (typeof window !== 'undefined') {
      if (!noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectSubcategory = (subLabel, parentLabel = null, { noScroll = false, subcategoryMembers = null } = {}) => {
    const parent = parentLabel || selectedParentNav;
    setSelectedParentNav(parent);
    setSelectedSubNav(subLabel);
    setSelectedSubNavMembers(Array.isArray(subcategoryMembers) && subcategoryMembers.length ? subcategoryMembers : null);
    setSearch('');
    resetAttributeFilters();
    if (typeof window !== 'undefined') {
      const url = new URL(window.location.href);
      if (parent) url.searchParams.set('category', parent);
      if (subLabel) url.searchParams.set('subcategory', subLabel);
      url.searchParams.delete('q');
      window.history.pushState({}, '', url);
      if (!noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const availableAttributes = useMemo(
    () => collectUniqueAttributes(catalog),
    [catalog],
  );

  const hasActiveAttributeFilters = hasAttributeFilters;
  const baseHierarchyProducts = catalog;

  const facetOptions = (serverList, selected, fallbackValues, countFromLoaded) => {
    if (Array.isArray(serverList) && serverList.length) {
      return mergeSelectedFacetOptions(serverList, selected);
    }
    const fallback = (fallbackValues || []).map((value) => ({
      label: value,
      value,
      count: countFromLoaded ? countFromLoaded(value) : undefined,
    }));
    return mergeSelectedFacetOptions(fallback, selected);
  };

  const popoverCategoryOptions = useMemo(() => {
    if (parentSubcategories.length > 0) {
      return mergeSelectedFacetOptions(
        parentSubcategories.map((sub) => ({
          label: sub.name,
          value: sub.name,
          count: sub.count || undefined,
        })),
        selectedSubcategories,
      );
    }
    if (facets?.categories?.length) {
      return mergeSelectedFacetOptions(facets.categories, selectedSubcategories);
    }
    return mergeSelectedFacetOptions(
      mainCategories.map((cat) => ({ label: cat.label, value: cat.label })),
      selectedSubcategories,
    );
  }, [parentSubcategories, mainCategories, facets, selectedSubcategories]);

  const popoverBrandOptions = useMemo(
    () => facetOptions(
      facets?.brands,
      selectedBrands,
      [...new Set(baseHierarchyProducts.map((p) => p.brand).filter(Boolean))].sort(),
      (b) => baseHierarchyProducts.filter((p) => p.brand === b).length,
    ),
    [baseHierarchyProducts, facets, selectedBrands],
  );

  const popoverTypeOptions = useMemo(
    () => facetOptions(facets?.types, selectedTypes, availableAttributes.types, (t) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'type', t)).length),
    [availableAttributes.types, baseHierarchyProducts, facets, selectedTypes],
  );

  const popoverGradeOptions = useMemo(
    () => facetOptions(facets?.grades, selectedGrades, availableAttributes.grades, (g) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'grade', g)).length),
    [availableAttributes.grades, baseHierarchyProducts, facets, selectedGrades],
  );

  const popoverPackSizeOptions = useMemo(
    () => facetOptions(facets?.packSizes, selectedPackSizes, availableAttributes.packSizes, (ps) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'pack_size', ps)).length),
    [availableAttributes.packSizes, baseHierarchyProducts, facets, selectedPackSizes],
  );

  const popoverThicknessOptions = useMemo(
    () => facetOptions(facets?.thicknesses, selectedThicknesses, availableAttributes.thicknesses, (th) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'thickness', th)).length),
    [availableAttributes.thicknesses, baseHierarchyProducts, facets, selectedThicknesses],
  );

  const popoverSizeOptions = useMemo(
    () => facetOptions(facets?.sizes, selectedSizes, availableAttributes.sizes, (sz) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'size', sz)).length),
    [availableAttributes.sizes, baseHierarchyProducts, facets, selectedSizes],
  );

  const popoverColorOptions = useMemo(
    () => facetOptions(facets?.colors, selectedColors, availableAttributes.colors, (c) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'color', c)).length),
    [availableAttributes.colors, baseHierarchyProducts, facets, selectedColors],
  );

  const popoverMaterialOptions = useMemo(
    () => facetOptions(facets?.materials, selectedMaterials, availableAttributes.materials, (m) => baseHierarchyProducts.filter((p) => matchesAttribute(p, 'material', m)).length),
    [availableAttributes.materials, baseHierarchyProducts, facets, selectedMaterials],
  );

  const popoverPriceOptions = useMemo(
    () => mergeSelectedFacetOptions(
      facets?.priceRanges?.length
        ? facets.priceRanges
        : [
          { label: 'Under ₹500', value: 'under-500' },
          { label: '₹500 - ₹1,000', value: '500-1000' },
          { label: '₹1,000 - ₹5,000', value: '1000-5000' },
          { label: 'Above ₹5,000', value: 'above-5000' },
        ],
      selectedPriceRanges,
    ),
    [facets, selectedPriceRanges],
  );

  const cartCount = useMemo(() => {
    if (!Array.isArray(cart) || cart.length === 0) return 0;
    const uniqueCategories = new Set();
    cart.forEach((item) => {
      const p = item?.product || {};
      const cat = p.category;
      let name = '';
      if (typeof cat === 'object' && cat !== null) {
        name = cat.name || cat.title || String(cat.id || '');
      } else if (typeof cat === 'string') {
        name = cat;
      }
      if (!name) name = p.category_name || p.categoryName || '';
      const key = (name || p.name || String(p.id || '')).trim().toLowerCase();
      if (key) uniqueCategories.add(key);
    });
    return uniqueCategories.size;
  }, [cart]);
  const pricedTotal = cart.reduce((sum, item) => sum + unitPrice(item.product, item.quantity) * item.quantity, 0);
  const hasUnpricedItems = cart.some((item) => !(Number(item.product.price) > 0));

  const toggleCart = () => {
    if (cartOpen) {
      setCartOpen(false);
      return;
    }
    const headerBottom = storeHeaderRef.current?.getBoundingClientRect().bottom || 0;
    setCartOverlayTop(Math.max(0, Math.ceil(headerBottom)));
    setCartOpen(true);
  };

  const chooseCategory = (id, options = {}) => {
    const nextSearch = typeof options.search === "string" ? options.search : "";
    const parentCategory = options.parentCategory || null;
    const subcategory = options.subcategory || null;
    const exploreParent = Boolean(options.exploreParent);

    if (id === 'all' && !parentCategory && !nextSearch) {
      goToAllCategories();
      return;
    }

    if (exploreParent && parentCategory) {
      handleExploreParentCategory(parentCategory);
      return;
    }

    if (parentCategory && subcategory) {
      handleSelectSubcategory(subcategory, parentCategory, { subcategoryMembers: options.subcategoryMembers });
      return;
    }

    if (nextSearch && parentCategory) {
      handleSelectSubcategory(nextSearch, parentCategory);
      return;
    }

    setActiveCategory(id);
    resetAttributeFilters();
    setSearch(nextSearch);
    const selected = categories.find((category) => String(category.id) === String(id));
    if (selected) {
      const resolved = resolveParentAndSubFromParam(selected.name, null, categories);
      setSelectedParentNav(resolved.parentLabel);
      setSelectedSubNav(resolved.subLabel);
    }
    const url = new URL(window.location.href);
    if (selected) url.searchParams.set('category', selected.name);
    else url.searchParams.delete('category');
    if (nextSearch) url.searchParams.set('q', nextSearch);
    else url.searchParams.delete('q');
    window.history.replaceState(window.history.state, '', url);
    if (typeof window !== 'undefined') {
      if (!options.noScroll) window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur();
  };

  return (
    <div className={`shop-page${cartOpen ? ' store-cart-is-open' : ''}`}>
      {/* Mobile Quick-Commerce View (viewport <= 768px) */}
      {isMobileViewport === true && <div className="storefront-mobile">
        <MobileStorefront
          categories={categories}
          mainCategories={mainCategories}
          products={homepageMode ? [...deals, ...arrivals] : catalog}
          catalog={homepageMode ? [...deals, ...arrivals] : catalog}
          content={content}
          loading={loading || (listingEnabled && productsLoading)}
          productsLoading={productsLoading}
          loadingMore={loadingMore}
          productsError={productsError}
          onRetryProducts={reloadProducts}
          productTotal={pagination.total}
          onLoadMoreProducts={loadMoreProducts}
          hasMoreProducts={remainingProducts > 0}
          cities={cities}
          selectedCity={selectedCity}
          setSelectedCity={setSelectedCity}
          cart={cart}
          onAdd={onAdd}
          onChangeQty={onChangeQty}
          onQuote={onQuote}
          onBuy={onBuy}
          onCheckout={onCheckout}
          shippingSettings={shippingSettings}
          shippingQuote={shippingQuote}
          activeCoupon={activeCoupon}
          couponCalculation={couponCalculation}
          couponOffers={couponOffers}
          onApplyCoupon={onApplyCoupon}
          onSelectCoupon={onSelectCoupon}
          onClearCoupon={onClearCoupon}
          promotions={promotions}
          onOpenLocationModal={onOpenLocationModal}
        />
      </div>}

      {/* Desktop Storefront View (viewport > 768px) */}
      {isMobileViewport === false && <div className="storefront-desktop">
        <header className="store-header" ref={storeHeaderRef}>
          <div className="store-header-inner">
            <Link href="/" className="store-brand" aria-label="MTBOSS home"><picture className="store-brand-picture"><Image src="/logo.png" alt="MTBOSS" width={46} height={46} sizes="(max-width: 560px) 34px, (max-width: 800px) 39px, 46px" /></picture><small>SHOP</small></Link>
            <div className="store-location-wrap">
              <button type="button" className="store-location" onClick={() => (onOpenLocationModal ? onOpenLocationModal() : setCityOpen(!cityOpen))} aria-expanded={cityOpen}>
                <MapPin size={20} /><span><strong>Deliver to {selectedCity || "your city"}</strong><small>{selectedCity ? "Change location" : "Select delivery location"}</small></span><ChevronDown size={16} />
              </button>
              {cityOpen && <div className="store-city-popover"><label htmlFor="store-city">Choose your city</label><select id="store-city" value={selectedCity} onChange={(e) => { setSelectedCity(e.target.value); setCityOpen(false); }}><option value="">Select city</option>{[...new Set(cities)].map((city) => <option key={city} value={city}>{city}</option>)}</select><p>Availability is checked at checkout.</p></div>}
            </div>
            <label className="store-search"><Search size={20} /><input type="search" value={search} onChange={(e) => setSearch(e.target.value)} placeholder={SEARCH_PLACEHOLDERS[placeholderIndex] || content.search_placeholder} aria-label="Search materials" /></label>

            {productManagerHref && <Link href={productManagerHref} className="store-admin-add"><Plus size={18} /> Add Product</Link>}
            <Link href="/material-orders?role=user" className="store-orders" title="Track orders"><ClipboardList size={18} /><span>Orders</span></Link>
            <Link
              href="/wallet"
              className="store-wallet-btn"
              aria-label="MTBOSS Cashback Wallet"
              title="My Cashback Wallet"
            >
              <Wallet size={18} />
              <span className="store-wallet-text">Wallet</span>
              <span className="store-wallet-pill">₹{walletBalance.toLocaleString('en-IN')}</span>
            </Link>
            <Link
              href="/ShopNow/cart"
              id="desktop-store-cart-btn"
              data-cart-target="desktop-cart"
              className="store-cart-button"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={18} />
              <span>My Cart</span>
              {cartCount > 0 && <b>{cartCount}</b>}
            </Link>
          </div>
        </header>

        <ShopCategoryNav
          categories={categories}
          products={homepageMode ? arrivals : catalog}
          activeCategory={activeCategory}
          activeSearch={search}
          activeParentCategory={selectedParentNav}
          activeSubcategory={selectedSubNav}
          onSelectCategory={chooseCategory}
        />

        <main className="store-main">
          {/* Breadcrumb Navigation (3-Level Flow) */}
          <div className="store-breadcrumb">
            <Link href="/">Home</Link>
            <span>/</span>
            {!selectedParentNav && !selectedSubNav && !searchTerm && activeCategory === "all" ? (
              <strong>Shop materials</strong>
            ) : (
              <>
                <button type="button" className="store-breadcrumb-btn" onClick={goToAllCategories}>
                  Shop materials
                </button>
                {selectedParentNav && (
                  <>
                    <span>/</span>
                    {selectedSubNav ? (
                      <button
                        type="button"
                        className="store-breadcrumb-btn"
                        onClick={() => handleExploreParentCategory(currentParentCategory || selectedParentNav)}
                      >
                        {currentParentCategory?.label || selectedParentNav}
                      </button>
                    ) : (
                      <strong className="store-breadcrumb-btn is-current">
                        {currentParentCategory?.label || selectedParentNav}
                      </strong>
                    )}
                  </>
                )}
                {selectedSubNav && (
                  <>
                    <span>/</span>
                    <strong className="store-breadcrumb-btn is-current">
                      {selectedSubNav}
                    </strong>
                  </>
                )}
                {searchTerm && !selectedSubNav && (
                  <>
                    <span>/</span>
                    <strong className="store-breadcrumb-btn is-current">
                      Search: “{search}”
                    </strong>
                  </>
                )}
              </>
            )}
          </div>

          {/* Hero Banner (Always shown on all pages/categories) */}
          <section className="store-hero">
            <div className="store-hero-copy">
              <span className="store-eyebrow">{content.hero_kicker}</span>
              <h1>{content.hero_title} <em>{content.hero_highlight}</em></h1>
              <p>{content.hero_description}</p>
              <button type="button" className="store-hero-button" onClick={goToAllCategories}>
                {content.hero_button} <ArrowRight size={18} />
              </button>
            </div>
            <div className="store-hero-photo" role="img" aria-label="Construction materials" style={{ position: 'relative' }}>
              <HeroBannerGallery
                images={content?.hero_images || defaultHeroImages}
                alt="Construction materials"
                delay={3500}
              />
              <span className="store-hero-photo-label"><CheckCircle2 size={17} /> {content.hero_badge}</span>
            </div>
          </section>

          {/* 4 Value Proposition Badges */}
          <div className="store-hero-value-props" aria-label="Store highlights">
            <div className="store-value-badge">
              <Truck size={22} style={{ color: "var(--brand-blue, #0077c8)", flexShrink: 0 }} />
              <span>Site Delivery Guaranteed</span>
            </div>
            <div className="store-value-badge">
              <ShieldCheck size={22} style={{ color: "#16a34a", flexShrink: 0 }} />
              <span>100% Verified Suppliers</span>
            </div>
            <div className="store-value-badge">
              <CheckCircle2 size={22} style={{ color: "#d97706", flexShrink: 0 }} />
              <span>Pay on Delivery Available</span>
            </div>
            <div className="store-value-badge">
              <Percent size={22} style={{ color: "var(--brand-blue, #0077c8)", flexShrink: 0 }} />
              <span>Upto 2% Cashback on Orders</span>
            </div>
          </div>

          {!selectedParentNav && !selectedSubNav && !searchTerm && activeCategory === "all" ? (
            /* ── LEVEL 1: HOMEPAGE OVERVIEW (Navbar Main Categories Grid) ── */
            <>
              <section className="store-section" aria-labelledby="store-categories-heading">
                <div className="store-section-heading">
                  <div>
                    <span className="store-section-kicker">START SHOPPING</span>
                    <h2 id="store-categories-heading">{content.categories_heading || "Shop by category"}</h2>
                  </div>
                  <span className="store-section-note">Pick a category to explore subcategories</span>
                </div>

                {loading ? (
                  <div className="store-loading">Loading categories...</div>
                ) : mainCategories.length ? (
                  <div className="store-category-grid">
                    {mainCategories.map((mainCat) => {
                      const { tone, Icon } = categoryStyle(mainCat.label || mainCat.name);
                      const catImgs = mainCat.images && mainCat.images.length > 0 ? mainCat.images : (mainCat.image ? [mainCat.image] : []);
                      return (
                        <button
                          type="button"
                          key={mainCat.id}
                          className={`store-category store-category-${tone}`}
                          onClick={() => handleExploreParentCategory(mainCat)}
                        >
                          <span className="store-category-art" style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                            {catImgs.length > 0 ? (
                              <AutoSwipeGallery images={catImgs} alt={mainCat.label} delay={3000} />
                            ) : (
                              <Icon size={37} strokeWidth={1.5} />
                            )}
                          </span>
                          <strong>{mainCat.label.toUpperCase()}</strong>
                          <span>Explore <ArrowRight size={13} /></span>
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="store-empty">Categories are being added. Please check back soon.</div>
                )}
              </section>

              {deals.length > 0 && (
                <section className="store-section" aria-labelledby="store-deals-heading">
                  <div className="store-section-heading">
                    <div>
                      <span className="store-section-kicker">CURRENT OFFERS</span>
                      <h2 id="store-deals-heading">{content.deals_heading}</h2>
                    </div>
                    <span className="store-section-note">Request today&apos;s best supplier quote</span>
                  </div>
                  <ProductCarousel
                    products={deals}
                    sectionId="deals"
                    cart={cart}
                    canAdd={cart.length < 20}
                    onAdd={onAdd}
                    onChangeQty={onChangeQty}
                    onQuote={onQuote}
                    onBuy={onBuy}
                    selectedCity={selectedCity}
                    promotions={promotions}
                    shippingSettings={shippingSettings}
                  />
                </section>
              )}

              {arrivals.length > 0 && (
                <section className="store-section" aria-labelledby="store-arrivals-heading">
                  <div className="store-section-heading">
                    <div>
                      <span className="store-section-kicker">JUST ADDED</span>
                      <h2 id="store-arrivals-heading">{content.arrivals_heading}</h2>
                    </div>
                    <span className="store-section-note">Recently added products</span>
                  </div>
                  <ProductCarousel
                    products={arrivals}
                    sectionId="arrivals"
                    cart={cart}
                    canAdd={cart.length < 20}
                    onAdd={onAdd}
                    onChangeQty={onChangeQty}
                    onQuote={onQuote}
                    onBuy={onBuy}
                    selectedCity={selectedCity}
                    promotions={promotions}
                    shippingSettings={shippingSettings}
                  />
                </section>
              )}

              
            </>
          ) : selectedParentNav && !selectedSubNav && !searchTerm ? (
            /* ── LEVEL 2: SUBCATEGORIES FLOW (When Main Category Explored) ── */
            <section className="store-section store-subcategories-section" aria-labelledby="store-subcategories-heading" style={{ marginTop: 0, paddingTop: 10 }}>
              <div style={{ marginBottom: 16 }}>
                <button
                  type="button"
                  onClick={goToAllCategories}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: 6,
                    fontSize: '13px',
                    fontWeight: '700',
                    color: 'var(--brand-blue, #0077c8)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    padding: 0
                  }}
                >
                  <ArrowLeft size={16} /> Back to all categories
                </button>
              </div>

              <div className="store-section-heading">
                <div>
                  <span className="store-section-kicker">EXPLORE {currentParentCategory?.label?.toUpperCase()}</span>
                  <h2 id="store-subcategories-heading">{currentParentCategory?.label} Subcategories</h2>
                </div>
                <span className="store-section-note">Pick a subcategory to see materials</span>
              </div>

              {parentSubcategories.length > 0 ? (
                <div className="store-category-grid">
                  {parentSubcategories.map((sub) => {
                    const { tone, Icon } = categoryStyle(sub.name);
                    const subImgs = sub.images && sub.images.length > 0 ? sub.images : (sub.image ? [sub.image] : []);
                    return (
                      <button
                        type="button"
                        key={sub.name}
                        className={`store-category store-category-${tone}`}
                        onClick={() => handleSelectSubcategory(sub.name, currentParentCategory?.label, { subcategoryMembers: sub.memberSubcategories })}
                      >
                        <span className="store-category-art" style={{ position: 'relative', display: 'block', overflow: 'hidden' }}>
                          {subImgs.length > 0 ? (
                            <AutoSwipeGallery images={subImgs} alt={sub.name} delay={3000} />
                          ) : (
                            <Icon size={37} strokeWidth={1.5} />
                          )}
                        </span>
                        <strong>{sub.name.toUpperCase()}</strong>
                        <span>Explore Products <ArrowRight size={13} /></span>
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="store-empty">Subcategories are being added. You can browse all materials below.</div>
              )}

              {/* All products under this parent category */}
              <div className="store-homerun-header" style={{ marginTop: 36, paddingTop: 24, borderTop: '1px solid #e2e8f0' }}>
                <h3 className="store-homerun-title" style={{ fontSize: '22px', fontWeight: 800 }}>
                  All {currentParentCategory?.label} Materials
                </h3>
                {/* HomeRun Popover Filter Bar (Image 1 Exact Match) */}
                <div className="homerun-filter-bar-container">
                  <div className="homerun-filter-bar-left">
                    <span className="homerun-filter-bar-label">Filter:</span>

                    {/* Category Popover */}
                    <FilterPopover
                      label="Category"
                      options={popoverCategoryOptions}
                      selected={selectedSubcategories}
                      onToggle={(val) => toggleFilter(setSelectedSubcategories, val)}
                      onReset={() => setSelectedSubcategories([])}
                      isOpen={openFilterMenu === 'lvl2_category'}
                      onOpen={() => setOpenFilterMenu('lvl2_category')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Brand Popover */}
                    <FilterPopover
                      label="Brand"
                      options={popoverBrandOptions}
                      selected={selectedBrands}
                      onToggle={(val) => toggleFilter(setSelectedBrands, val)}
                      onReset={() => setSelectedBrands([])}
                      isOpen={openFilterMenu === 'lvl2_brand'}
                      onOpen={() => setOpenFilterMenu('lvl2_brand')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Type Popover */}
                    <FilterPopover
                      label="Type"
                      options={popoverTypeOptions}
                      selected={selectedTypes}
                      onToggle={(val) => toggleFilter(setSelectedTypes, val)}
                      onReset={() => setSelectedTypes([])}
                      isOpen={openFilterMenu === 'lvl2_type'}
                      onOpen={() => setOpenFilterMenu('lvl2_type')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Grade Popover */}
                    <FilterPopover
                      label="Grade"
                      options={popoverGradeOptions}
                      selected={selectedGrades}
                      onToggle={(val) => toggleFilter(setSelectedGrades, val)}
                      onReset={() => setSelectedGrades([])}
                      isOpen={openFilterMenu === 'lvl2_grade'}
                      onOpen={() => setOpenFilterMenu('lvl2_grade')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Price Popover */}
                    <PriceSortPopover
                      selectedPriceRanges={selectedPriceRanges}
                      priceOptions={popoverPriceOptions}
                      onTogglePriceRange={(val) => toggleFilter(setSelectedPriceRanges, val)}
                      onResetPrice={() => setSelectedPriceRanges([])}
                      isOpen={openFilterMenu === 'lvl2_price'}
                      onOpen={() => setOpenFilterMenu('lvl2_price')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Pack Size Popover */}
                    <FilterPopover
                      label="Pack Size"
                      options={popoverPackSizeOptions}
                      selected={selectedPackSizes}
                      onToggle={(val) => toggleFilter(setSelectedPackSizes, val)}
                      onReset={() => setSelectedPackSizes([])}
                      isOpen={openFilterMenu === 'lvl2_pack_size'}
                      onOpen={() => setOpenFilterMenu('lvl2_pack_size')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Thickness Popover */}
                    <FilterPopover
                      label="Thickness"
                      options={popoverThicknessOptions}
                      selected={selectedThicknesses}
                      onToggle={(val) => toggleFilter(setSelectedThicknesses, val)}
                      onReset={() => setSelectedThicknesses([])}
                      isOpen={openFilterMenu === 'lvl2_thickness'}
                      onOpen={() => setOpenFilterMenu('lvl2_thickness')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Size Popover */}
                    <FilterPopover
                      label="Size"
                      options={popoverSizeOptions}
                      selected={selectedSizes}
                      onToggle={(val) => toggleFilter(setSelectedSizes, val)}
                      onReset={() => setSelectedSizes([])}
                      isOpen={openFilterMenu === 'lvl2_size'}
                      onOpen={() => setOpenFilterMenu('lvl2_size')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Color Popover */}
                    <FilterPopover
                      label="Colors"
                      options={popoverColorOptions}
                      selected={selectedColors}
                      onToggle={(val) => toggleFilter(setSelectedColors, val)}
                      onReset={() => setSelectedColors([])}
                      isOpen={openFilterMenu === 'lvl2_color'}
                      onOpen={() => setOpenFilterMenu('lvl2_color')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Material Popover */}
                    <FilterPopover
                      label="Material"
                      options={popoverMaterialOptions}
                      selected={selectedMaterials}
                      onToggle={(val) => toggleFilter(setSelectedMaterials, val)}
                      onReset={() => setSelectedMaterials([])}
                      isOpen={openFilterMenu === 'lvl2_material'}
                      onOpen={() => setOpenFilterMenu('lvl2_material')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Reset Button */}
                    {hasActiveAttributeFilters && (
                      <button
                        type="button"
                        className="homerun-filter-popover-reset"
                        onClick={resetAttributeFilters}
                        style={{ fontSize: '13.5px', marginLeft: 4 }}
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="homerun-filter-bar-right">
                    <span className="homerun-filter-product-count">
                      {pagination.total || visible.length} {(pagination.total || visible.length) === 1 ? 'product' : 'products'}
                    </span>
                    <div className="homerun-filter-sort-wrap">
                      <span>Sort by:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="store-homerun-sort-select"
                        aria-label="Sort by"
                        style={{
                          border: 'none',
                          background: 'transparent',
                          padding: '0 20px 0 4px',
                          fontWeight: '600',
                          color: '#1f2937',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="featured">Relevance</option>
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name">Name: A to Z</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              {hasActiveAttributeFilters && (
                <div className="store-active-filters" aria-label="Active filters">
                  {[
                    ...selectedSubcategories.map((value) => ({ key: `sub-${value}`, label: value, clear: () => toggleFilter(setSelectedSubcategories, value) })),
                    ...selectedBrands.map((value) => ({ key: `brand-${value}`, label: value, clear: () => toggleFilter(setSelectedBrands, value) })),
                    ...selectedPriceRanges.map((value) => ({ key: `price-${value}`, label: value, clear: () => toggleFilter(setSelectedPriceRanges, value) })),
                  ].map((chip) => (
                    <button key={chip.key} type="button" className="store-filter-chip" onClick={chip.clear}>
                      {chip.label} <X size={12} />
                    </button>
                  ))}
                  <button type="button" className="store-filter-chip-clear" onClick={resetAttributeFilters}>Clear all</button>
                </div>
              )}

              <div className="store-listing-status" aria-live="polite">
                {productsRefreshing ? 'Updating results…' : loadingMore ? 'Loading more products…' : ''}
              </div>
              {productsLoading && !renderedProducts.length ? (
                <div className="store-product-grid" aria-busy="true" aria-label="Loading products">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={`skel-${index}`} className="store-product-skeleton" aria-hidden="true" />
                  ))}
                </div>
              ) : productsError && !renderedProducts.length ? (
                <div className="store-empty" role="alert">
                  <p>{productsError}</p>
                  <button type="button" className="store-load-more-btn" onClick={reloadProducts}>Retry</button>
                </div>
              ) : renderedProducts.length ? (
                <>
                <div className={`store-product-grid${productsRefreshing ? ' is-refreshing' : ''}`} aria-busy={productsRefreshing || loadingMore}>
                  {renderedProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={cart.find((item) => item.product.id === product.id)?.quantity || 0}
                      canAdd={cart.length < 20}
                      onAdd={onAdd}
                      onChangeQty={onChangeQty}
                      onQuote={onQuote}
                      onBuy={onBuy}
                      selectedCity={selectedCity}
                      promotions={promotions}
                      shippingSettings={shippingSettings}
                      priority={index < 4}
                    />
                  ))}
                </div>
                {remainingProducts > 0 && (
                  <div className="store-load-more-wrap" ref={loadMoreRef}>
                    <button
                      type="button"
                      className="store-load-more-btn"
                      onClick={loadMoreProducts}
                      disabled={loadingMore}
                      aria-busy={loadingMore}
                    >
                      {loadingMore ? 'Loading…' : `Load ${Math.min(PRODUCTS_PER_BATCH, remainingProducts)} more products`}
                    </button>
                    <span>{renderedProducts.length} of {pagination.total || renderedProducts.length} products shown</span>
                  </div>
                )}
                </>
              ) : (
                <div className="store-empty">
                  <p>No materials found in this category.</p>
                  <p style={{ marginTop: 6, fontSize: 13 }}>Try clearing filters or searching a different material name.</p>
                  {hasActiveAttributeFilters && (
                    <button type="button" className="store-load-more-btn" onClick={resetAttributeFilters} style={{ marginTop: 12 }}>
                      Clear filters
                    </button>
                  )}
                </div>
              )}
            </section>
          ) : (
            /* ── LEVEL 3: SUBCATEGORY PRODUCTS / SEARCH FLOW ── */
            <section className="store-section store-catalog" id="store-products" style={{ marginTop: 0, paddingTop: 10 }}>
              {currentParentCategory && (
                <div style={{ marginBottom: 14 }}>
                  <button
                    type="button"
                    onClick={() => handleExploreParentCategory(currentParentCategory)}
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: 6,
                      fontSize: '13px',
                      fontWeight: '700',
                      color: 'var(--brand-blue, #0077c8)',
                      background: 'none',
                      border: 'none',
                      cursor: 'pointer',
                      padding: 0
                    }}
                  >
                    <ArrowLeft size={16} /> Back to {currentParentCategory.label} Subcategories
                  </button>
                </div>
              )}

              <div className="store-homerun-header">
                {/* Heading */}
                <h1 className="store-homerun-title">
                  {searchTerm ? `Search: “${search}”` : (selectedSubNav || currentParentCategory?.label || activeCatObj?.name || 'Materials')}
                </h1>

                

                {/* HomeRun Popover Filter Bar (Image 1 Exact Match) */}
                <div className="homerun-filter-bar-container">
                  <div className="homerun-filter-bar-left">
                    <span className="homerun-filter-bar-label">Filter:</span>

                    {/* Category Popover */}
                    <FilterPopover
                      label="Category"
                      options={popoverCategoryOptions}
                      selected={selectedSubcategories}
                      onToggle={(val) => toggleFilter(setSelectedSubcategories, val)}
                      onReset={() => setSelectedSubcategories([])}
                      isOpen={openFilterMenu === 'category'}
                      onOpen={() => setOpenFilterMenu('category')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Brand Popover */}
                    <FilterPopover
                      label="Brand"
                      options={popoverBrandOptions}
                      selected={selectedBrands}
                      onToggle={(val) => toggleFilter(setSelectedBrands, val)}
                      onReset={() => setSelectedBrands([])}
                      isOpen={openFilterMenu === 'brand'}
                      onOpen={() => setOpenFilterMenu('brand')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Type Popover */}
                    <FilterPopover
                      label="Type"
                      options={popoverTypeOptions}
                      selected={selectedTypes}
                      onToggle={(val) => toggleFilter(setSelectedTypes, val)}
                      onReset={() => setSelectedTypes([])}
                      isOpen={openFilterMenu === 'type'}
                      onOpen={() => setOpenFilterMenu('type')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Grade Popover */}
                    <FilterPopover
                      label="Grade"
                      options={popoverGradeOptions}
                      selected={selectedGrades}
                      onToggle={(val) => toggleFilter(setSelectedGrades, val)}
                      onReset={() => setSelectedGrades([])}
                      isOpen={openFilterMenu === 'grade'}
                      onOpen={() => setOpenFilterMenu('grade')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Price Popover */}
                    <PriceSortPopover
                      selectedPriceRanges={selectedPriceRanges}
                      priceOptions={popoverPriceOptions}
                      onTogglePriceRange={(val) => toggleFilter(setSelectedPriceRanges, val)}
                      onResetPrice={() => setSelectedPriceRanges([])}
                      isOpen={openFilterMenu === 'price'}
                      onOpen={() => setOpenFilterMenu('price')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Pack Size Popover */}
                    <FilterPopover
                      label="Pack Size"
                      options={popoverPackSizeOptions}
                      selected={selectedPackSizes}
                      onToggle={(val) => toggleFilter(setSelectedPackSizes, val)}
                      onReset={() => setSelectedPackSizes([])}
                      isOpen={openFilterMenu === 'pack_size'}
                      onOpen={() => setOpenFilterMenu('pack_size')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Thickness Popover */}
                    <FilterPopover
                      label="Thickness"
                      options={popoverThicknessOptions}
                      selected={selectedThicknesses}
                      onToggle={(val) => toggleFilter(setSelectedThicknesses, val)}
                      onReset={() => setSelectedThicknesses([])}
                      isOpen={openFilterMenu === 'thickness'}
                      onOpen={() => setOpenFilterMenu('thickness')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Size Popover */}
                    <FilterPopover
                      label="Size"
                      options={popoverSizeOptions}
                      selected={selectedSizes}
                      onToggle={(val) => toggleFilter(setSelectedSizes, val)}
                      onReset={() => setSelectedSizes([])}
                      isOpen={openFilterMenu === 'size'}
                      onOpen={() => setOpenFilterMenu('size')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Color Popover */}
                    <FilterPopover
                      label="Colors"
                      options={popoverColorOptions}
                      selected={selectedColors}
                      onToggle={(val) => toggleFilter(setSelectedColors, val)}
                      onReset={() => setSelectedColors([])}
                      isOpen={openFilterMenu === 'color'}
                      onOpen={() => setOpenFilterMenu('color')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Material Popover */}
                    <FilterPopover
                      label="Material"
                      options={popoverMaterialOptions}
                      selected={selectedMaterials}
                      onToggle={(val) => toggleFilter(setSelectedMaterials, val)}
                      onReset={() => setSelectedMaterials([])}
                      isOpen={openFilterMenu === 'material'}
                      onOpen={() => setOpenFilterMenu('material')}
                      onClose={() => setOpenFilterMenu(null)}
                    />

                    {/* Reset Button */}
                    {hasActiveAttributeFilters && (
                      <button
                        type="button"
                        className="homerun-filter-popover-reset"
                        onClick={resetAttributeFilters}
                        style={{ fontSize: '13.5px', marginLeft: 4 }}
                      >
                        Reset
                      </button>
                    )}
                  </div>

                  <div className="homerun-filter-bar-right">
                    <span className="homerun-filter-product-count">
                      {pagination.total || visible.length} {(pagination.total || visible.length) === 1 ? 'product' : 'products'}
                    </span>
                    <div className="homerun-filter-sort-wrap">
                      <span>Sort by:</span>
                      <select
                        value={sortBy}
                        onChange={(e) => setSortBy(e.target.value)}
                        className="store-homerun-sort-select"
                        aria-label="Sort by"
                        style={{
                          border: 'none',
                          background: 'transparent',
                          padding: '0 20px 0 4px',
                          fontWeight: '600',
                          color: '#1f2937',
                          cursor: 'pointer'
                        }}
                      >
                        <option value="featured">Relevance</option>
                        <option value="newest">Newest</option>
                        <option value="price-asc">Price: Low to High</option>
                        <option value="price-desc">Price: High to Low</option>
                        <option value="name">Name: A to Z</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <div className="store-listing-status" aria-live="polite">
                {productsRefreshing ? 'Updating results…' : loadingMore ? 'Loading more products…' : ''}
              </div>
              {productsLoading && !renderedProducts.length ? (
                <div className="store-product-grid" aria-busy="true" aria-label="Loading products">
                  {Array.from({ length: 8 }).map((_, index) => (
                    <div key={`skel-sub-${index}`} className="store-product-skeleton" aria-hidden="true" />
                  ))}
                </div>
              ) : productsError && !renderedProducts.length ? (
                <div className="store-empty" role="alert">
                  <p>{productsError}</p>
                  <button type="button" className="store-load-more-btn" onClick={reloadProducts}>Retry</button>
                </div>
              ) : renderedProducts.length ? (
                <>
                <div className={`store-product-grid${productsRefreshing ? ' is-refreshing' : ''}`} aria-busy={productsRefreshing || loadingMore}>
                  {renderedProducts.map((product, index) => (
                    <ProductCard
                      key={product.id}
                      product={product}
                      quantity={cart.find((item) => item.product.id === product.id)?.quantity || 0}
                      canAdd={cart.length < 20}
                      onAdd={onAdd}
                      onChangeQty={onChangeQty}
                      onQuote={onQuote}
                      onBuy={onBuy}
                      selectedCity={selectedCity}
                      promotions={promotions}
                      shippingSettings={shippingSettings}
                      priority={index < 4}
                    />
                  ))}
                </div>
                {remainingProducts > 0 && (
                  <div className="store-load-more-wrap" ref={loadMoreRef}>
                    <button
                      type="button"
                      className="store-load-more-btn"
                      onClick={loadMoreProducts}
                      disabled={loadingMore}
                      aria-busy={loadingMore}
                    >
                      {loadingMore ? 'Loading…' : `Load ${Math.min(PRODUCTS_PER_BATCH, remainingProducts)} more products`}
                    </button>
                    <span>{renderedProducts.length} of {pagination.total || renderedProducts.length} products shown</span>
                  </div>
                )}
                </>
              ) : (
                <div className="store-empty">
                  <p>No materials found for this search or filter.</p>
                  <p style={{ marginTop: 6, fontSize: 13 }}>Try a broader keyword, another subcategory, or clear filters.</p>
                  {(hasActiveAttributeFilters || searchTerm) && (
                    <button
                      type="button"
                      className="store-load-more-btn"
                      style={{ marginTop: 12 }}
                      onClick={() => {
                        resetAttributeFilters();
                        setSearch('');
                      }}
                    >
                      Clear search & filters
                    </button>
                  )}
                </div>
              )}
            </section>
          )}

        </main>

      </div>}
    </div>
  );
}
