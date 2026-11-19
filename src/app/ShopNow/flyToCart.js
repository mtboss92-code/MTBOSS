'use client';

/**
 * Locate the visible, active cart icon/button on screen.
 * Checks desktop, mobile, and detail page layouts and ensures
 * that only an element with real visibility (not hidden by display: none) is chosen.
 */
function getVisibleCartTarget() {
  if (typeof document === 'undefined' || typeof window === 'undefined') return null;

  const isDesktop = window.innerWidth >= 768;

  // Prioritize desktop vs mobile based on current viewport
  const prioritizedSelectors = isDesktop
    ? [
        '#desktop-store-cart-btn',
        '.storefront-desktop .store-cart-button',
        '.store-cart-button',
        '[data-cart-target="desktop-cart"]',
        '#mobile-store-cart-btn',
        '.mobile-cart-btn',
        '[data-cart-target]',
      ]
    : [
        '#mobile-store-cart-btn',
        '.storefront-mobile .mobile-cart-btn',
        '.mobile-cart-btn',
        '[data-cart-target="mobile-cart"]',
        '[data-cart-target]',
        '#desktop-store-cart-btn',
        '.store-cart-button',
      ];

  // Also include general fallbacks
  const generalFallbacks = [
    'a[href$="/ShopNow/cart"]',
    'a[href$="/cart"]',
    'button[aria-label*="shopping cart" i]',
    'a[aria-label*="shopping cart" i]',
  ];

  const allSelectors = [...prioritizedSelectors, ...generalFallbacks];

  for (const sel of allSelectors) {
    const elements = Array.from(document.querySelectorAll(sel));
    for (const el of elements) {
      if (!(el instanceof HTMLElement)) continue;

      // Ignore close buttons, steppers, or quantity wrappers that might mention cart
      if (
        el.classList.contains('mobile-sheet-close') ||
        el.classList.contains('store-quantity-control') ||
        el.classList.contains('mobile-stepper')
      ) {
        continue;
      }

      // Check geometric visibility
      const rect = el.getBoundingClientRect();
      if (rect.width < 14 || rect.height < 14) continue;

      // Verify computed styles
      const style = window.getComputedStyle(el);
      if (
        style.display === 'none' ||
        style.visibility === 'hidden' ||
        parseFloat(style.opacity || '1') === 0
      ) {
        continue;
      }

      // Verify ancestor isn't display:none
      if (!el.offsetParent && style.position !== 'fixed') {
        continue;
      }

      // Must be roughly within horizontal bounds
      if (rect.right <= 0 || rect.left >= window.innerWidth) continue;

      // The cart button in an e-commerce header is located in the right-hand portion of the navbar
      // (or at least not collapsed to the far-left origin 0,0 where the logo sits)
      if (isDesktop && rect.left < window.innerWidth * 0.35) {
        // Skip elements that are on the left side (like a logo or left menu)
        continue;
      }

      return { el, rect };
    }
  }

  return null;
}

/**
 * Trigger a delightful "fly-to-cart" floating popup animation from the clicked
 * "+ Add" button toward the cart icon/button in the navbar.
 *
 * @param {Event} e - Click event or mouse event
 * @param {Object} product - The product object being added
 */
export function triggerFlyToCart(e, product) {
  if (typeof window === 'undefined' || typeof document === 'undefined') return;

  // 1. Determine starting coordinates (from button/click)
  let startX = window.innerWidth / 2;
  let startY = window.innerHeight / 2;

  if (e?.currentTarget && typeof e.currentTarget.getBoundingClientRect === 'function') {
    const rect = e.currentTarget.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    }
  } else if (e?.target && typeof e.target.getBoundingClientRect === 'function') {
    const rect = e.target.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      startX = rect.left + rect.width / 2;
      startY = rect.top + rect.height / 2;
    }
  } else if (typeof e?.clientX === 'number' && typeof e?.clientY === 'number') {
    startX = e.clientX;
    startY = e.clientY;
  }

  // 2. Locate visible Cart button target
  const isDesktop = window.innerWidth >= 768;
  const target = getVisibleCartTarget();
  let targetEl = null;
  let endX = isDesktop ? window.innerWidth - 120 : window.innerWidth - 32;
  let endY = isDesktop ? 85 : 32;

  if (target) {
    targetEl = target.el;
    endX = target.rect.left + target.rect.width / 2;
    endY = target.rect.top + target.rect.height / 2;
  }

  // Safety constraint: Cart is ALWAYS on the top-right side in our design.
  // Never let endX stray to the top-left (the logo is around x: 20px-80px).
  if (isDesktop && endX < window.innerWidth * 0.45) {
    endX = window.innerWidth - 120;
    endY = 85;
  } else if (!isDesktop && endX < window.innerWidth * 0.45) {
    endX = window.innerWidth - 32;
    endY = 32;
  }

  // 3. Resolve product image & title
  const rawImg =
    product?.image_url ||
    product?.image ||
    product?.category_image ||
    (Array.isArray(product?.images) && product.images[0]) ||
    '';

  let imgUrl = '';
  if (rawImg && typeof rawImg === 'string') {
    const trimmed = rawImg.trim();
    if (/^(?:https?:|data:image\/|blob:|\/)/i.test(trimmed)) {
      imgUrl = trimmed;
    } else {
      imgUrl = `/${trimmed}`;
    }
  }

  const prodName = String(product?.name || 'Material').trim();

  // 4. Create floating popup DOM element
  const flyer = document.createElement('div');
  flyer.className = 'fly-to-cart-bubble';
  flyer.innerHTML = `
    <div class="fly-to-cart-inner">
      ${imgUrl ? `<img src="${imgUrl}" class="fly-img" alt="" />` : `<span class="fly-icon">📦</span>`}
      <div class="fly-text">
        <span class="fly-title">${prodName}</span>
        <span class="fly-badge">+1 Added</span>
      </div>
    </div>
  `;

  document.body.appendChild(flyer);

  // 5. Quadratic Bezier Curve fling animation via requestAnimationFrame
  const duration = 650; // ms
  const startTime = performance.now();

  // Arc peak: curve upward gracefully above the path, but stay safely inside the visible screen
  const peakY = Math.max(20, Math.min(startY, endY) - 50);
  const midX = (startX + endX) / 2;

  function animate(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const t = progress;
    const invT = 1 - t;

    // Quadratic Bezier Formula: P(t) = (1-t)^2 * P0 + 2(1-t)t * P1 + t^2 * P2
    const currentX = invT * invT * startX + 2 * invT * t * midX + t * t * endX;
    const currentY = invT * invT * startY + 2 * invT * t * peakY + t * t * endY;

    // Slight scale expansion on start, then fling shrink into cart
    const scale = t < 0.2 ? 1 + t * 0.4 : Math.max(0.18, 1.08 - (t - 0.2) * 1.12);
    const opacity = t > 0.85 ? 1 - (t - 0.85) / 0.15 : 1;
    const rotation = (startX > endX ? -1 : 1) * t * 20;

    flyer.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`;
    flyer.style.opacity = `${opacity}`;

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      flyer.remove();
      // Target Cart Bounce Feedback
      if (targetEl) {
        targetEl.classList.remove('cart-bounce-pop');
        void targetEl.offsetWidth;
        targetEl.classList.add('cart-bounce-pop');
        setTimeout(() => {
          targetEl.classList.remove('cart-bounce-pop');
        }, 600);
      }
    }
  }

  requestAnimationFrame(animate);
}
