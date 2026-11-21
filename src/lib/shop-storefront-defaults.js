export const defaultHeroImages = [
  // A local, versioned fallback makes first paint dependable if the saved
  // Cloudinary hero has been deleted or is temporarily unavailable.
  '/images/banners/materials.jpg',
];

export const defaultShopHeroBanners = [
  {
    id: 'default-banner-1',
    kicker: 'MTBOSS MATERIAL MARKETPLACE',
    title: 'Everything you need to',
    highlight: 'build better.',
    description: 'Explore construction essentials from verified suppliers. Add to cart, buy now, or request a quote in a few taps.',
    button_text: 'Explore materials',
    button_link: '',
    badge_text: 'Built for every project',
    image_url: defaultHeroImages[0],
    is_active: true,
  },
];

export const defaultShopStorefront = {
  hero_kicker: 'MTBOSS MATERIAL MARKETPLACE',
  hero_title: 'Everything you need to',
  hero_highlight: 'build better.',
  hero_description: 'Explore construction essentials from verified suppliers. Add to cart, buy now, or request a quote in a few taps.',
  hero_image: defaultHeroImages[0],
  hero_images: defaultHeroImages,
  hero_banners: defaultShopHeroBanners,
  hero_badge: 'Built for every project',
  hero_button: 'Explore materials',
  search_placeholder: 'Search "cement", "steel" and more',
  categories_heading: 'Shop by category',
  featured_heading: 'Materials for your next project',
  deals_heading: 'Deals on materials',
  arrivals_heading: 'New arrivals',
  catalog_heading: 'Browse all materials',
  footer_tagline: 'Construction materials, made easier to source.',
  // Mobile Quick-Commerce Header & Badges
  delivery_tagline: '60 Mins delivery',
  trust_badge_1: 'Free Delivery',
  trust_badge_2: '2% Cashback',
  trust_badge_3: 'Pay on Delivery',
  trust_badge_4: '60 Mins Express',
  // Mobile Promo Banner (Bulk Offer)
  mobile_banner_pill: '⚡ Delivered in 60 mins',
  mobile_banner_subpill: 'Direct Factory Rates',
  mobile_banner_title: 'Save up to 25% on Bulk Construction Materials',
  mobile_banner_desc: 'Verified suppliers for Cement, TMT Bars, Brick & Sand with immediate site dispatch.',
  mobile_banner_btn: 'Request Bulk Quote',
  mobile_banner_enabled: true,
  promos: [
    { title: 'Material for every job', subtitle: 'From structure to finishing' },
    { title: 'Verified suppliers', subtitle: 'Shop with more confidence' },
    { title: 'Site delivery', subtitle: 'Confirm availability by city' },
  ],
};

const textFields = [
  'hero_kicker', 'hero_title', 'hero_highlight', 'hero_description',
  'hero_image', 'hero_badge', 'hero_button', 'search_placeholder', 'categories_heading',
  'featured_heading', 'deals_heading', 'arrivals_heading', 'catalog_heading', 'footer_tagline',
  'delivery_tagline', 'trust_badge_1', 'trust_badge_2', 'trust_badge_3', 'trust_badge_4',
  'mobile_banner_pill', 'mobile_banner_subpill', 'mobile_banner_title', 'mobile_banner_desc',
  'mobile_banner_btn',
];

export function normalizeShopStorefront(value = {}) {
  const result = { ...defaultShopStorefront };
  for (const field of textFields) {
    const text = String(value?.[field] ?? '').trim();
    if (text) result[field] = text.slice(0, field === 'hero_image' ? 1000 : 500);
  }
  if (value?.mobile_banner_enabled !== undefined) {
    result.mobile_banner_enabled = Boolean(value.mobile_banner_enabled);
  }

  const rawHeroImages = Array.isArray(value?.hero_images)
    ? value.hero_images
    : (typeof value?.hero_images === 'string' && value.hero_images.trim()
      ? [value.hero_images.trim()]
      : []);
  const cleaned = rawHeroImages
    .map((img) => (typeof img === 'string' ? img.trim() : ''))
    .filter((img) => img.length > 0 && !img.includes('/images/banners/materials.jpg'));

  result.hero_images = cleaned.length > 0 ? cleaned : defaultHeroImages;
  if (!result.hero_image || result.hero_image === '/images/banners/materials.jpg') {
    result.hero_image = result.hero_images[0] || defaultHeroImages[0];
  }

  // Normalize multi-banner hero slides
  if (Array.isArray(value?.hero_banners) && value.hero_banners.length > 0) {
    result.hero_banners = value.hero_banners.map((b, idx) => ({
      id: String(b?.id || `banner-${idx + 1}`),
      kicker: String(b?.kicker ?? defaultShopHeroBanners[0].kicker).trim().slice(0, 200),
      title: String(b?.title ?? defaultShopHeroBanners[0].title).trim().slice(0, 200),
      highlight: String(b?.highlight ?? defaultShopHeroBanners[0].highlight).trim().slice(0, 200),
      description: String(b?.description ?? defaultShopHeroBanners[0].description).trim().slice(0, 500),
      button_text: String(b?.button_text ?? defaultShopHeroBanners[0].button_text).trim().slice(0, 100),
      button_link: String(b?.button_link ?? '').trim().slice(0, 500),
      badge_text: String(b?.badge_text ?? defaultShopHeroBanners[0].badge_text).trim().slice(0, 100),
      image_url: String(b?.image_url ?? defaultHeroImages[0]).trim().slice(0, 1000),
      is_active: b?.is_active !== false,
    }));
  } else {
    // Backward compatibility: build hero_banners from existing single-hero settings
    result.hero_banners = [
      {
        id: 'banner-1',
        kicker: result.hero_kicker || defaultShopHeroBanners[0].kicker,
        title: result.hero_title || defaultShopHeroBanners[0].title,
        highlight: result.hero_highlight || defaultShopHeroBanners[0].highlight,
        description: result.hero_description || defaultShopHeroBanners[0].description,
        button_text: result.hero_button || defaultShopHeroBanners[0].button_text,
        button_link: '',
        badge_text: result.hero_badge || defaultShopHeroBanners[0].badge_text,
        image_url: result.hero_images?.[0] || result.hero_image || defaultHeroImages[0],
        is_active: true,
      },
    ];
  }

  result.promos = defaultShopStorefront.promos.map((fallback, index) => ({
    title: String(value?.promos?.[index]?.title || fallback.title).trim().slice(0, 100),
    subtitle: String(value?.promos?.[index]?.subtitle || fallback.subtitle).trim().slice(0, 160),
  }));
  return result;
}

