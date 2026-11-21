'use client';

import React, { useState, useEffect, useCallback, useMemo } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { defaultHeroImages, defaultShopHeroBanners } from '@/lib/shop-storefront-defaults';

function cloudinaryHeroUrl(value) {
  const src = String(value || '').trim();
  if (!src) return '';
  if (!/^https:\/\/res\.cloudinary\.com\//i.test(src)) return src;
  if (/\/image\/upload\/[^/]+,[^/]+\//.test(src)) return src;
  return src.replace('/image/upload/', '/image/upload/f_auto,q_auto,c_fill,w_900/');
}

function HeroBannerCard({ banner, goToAllCategories, priority = false }) {
  const imageUrl = cloudinaryHeroUrl(banner.image_url || defaultHeroImages[0]);
  const isCustomLink = Boolean(banner.button_link && banner.button_link.trim());

  return (
    <div className="store-hero">
      <div className="store-hero-copy">
        {banner.kicker && <span className="store-eyebrow">{banner.kicker}</span>}
        <h1>
          {banner.title} {banner.highlight && <em>{banner.highlight}</em>}
        </h1>
        {banner.description && <p>{banner.description}</p>}
        {isCustomLink ? (
          <Link href={banner.button_link} className="store-hero-button">
            {banner.button_text || 'Explore materials'} <ArrowRight size={18} />
          </Link>
        ) : (
          <button type="button" className="store-hero-button" onClick={goToAllCategories}>
            {banner.button_text || 'Explore materials'} <ArrowRight size={18} />
          </button>
        )}
      </div>
      <div className="store-hero-photo" role="img" aria-label={banner.title || 'Construction materials'}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt={banner.title || 'Construction materials'}
          className="store-hero-photo-img"
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          onError={(e) => {
            if (!e.currentTarget.dataset.fallback) {
              e.currentTarget.dataset.fallback = 'true';
              e.currentTarget.src = '/images/banners/materials.jpg';
            }
          }}
        />
        {banner.badge_text && (
          <span className="store-hero-photo-label">
            <CheckCircle2 size={17} /> {banner.badge_text}
          </span>
        )}
      </div>
    </div>
  );
}

export default function ShopHeroSlider({ banners = [], content = {}, goToAllCategories }) {
  const activeBanners = useMemo(() => {
    const list = Array.isArray(banners) && banners.length > 0 ? banners : defaultShopHeroBanners;
    const filtered = list.filter((b) => b && b.is_active !== false);
    return filtered.length > 0 ? filtered : defaultShopHeroBanners;
  }, [banners]);

  const hasMultiple = activeBanners.length > 1;

  const autoplay = useMemo(() => {
    if (!hasMultiple) return null;
    return Autoplay({
      delay: 4500,
      stopOnInteraction: false,
      stopOnMouseEnter: true,
    });
  }, [hasMultiple]);

  const plugins = useMemo(() => (autoplay ? [autoplay] : []), [autoplay]);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: hasMultiple,
      duration: 25,
      watchDrag: hasMultiple,
    },
    plugins
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on('select', onSelect);
    emblaApi.on('reInit', onSelect);
    return () => {
      emblaApi.off('select', onSelect);
      emblaApi.off('reInit', onSelect);
    };
  }, [emblaApi, onSelect]);

  const scrollPrev = useCallback((e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback((e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const scrollTo = useCallback((index, e) => {
    e?.preventDefault?.();
    e?.stopPropagation?.();
    if (emblaApi) emblaApi.scrollTo(index);
  }, [emblaApi]);

  // Single banner: render statically without carousel markup
  if (!hasMultiple) {
    return (
      <section className="shop-hero-single-wrap">
        <HeroBannerCard banner={activeBanners[0]} goToAllCategories={goToAllCategories} priority />
      </section>
    );
  }

  // Multiple banners: render interactive, auto-sliding carousel
  return (
    <section className="shop-hero-slider-wrap" aria-label="Store highlights and promotions">
      <div className="shop-hero-slider-viewport" ref={emblaRef}>
        <div className="shop-hero-slider-track">
          {activeBanners.map((banner, index) => (
            <div className="shop-hero-slide" key={banner.id || index}>
              <HeroBannerCard
                banner={banner}
                goToAllCategories={goToAllCategories}
                priority={index === 0}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        type="button"
        className="shop-hero-arrow shop-hero-arrow-prev"
        aria-label="Previous banner"
        onClick={scrollPrev}
      >
        <ChevronLeft size={22} />
      </button>
      <button
        type="button"
        className="shop-hero-arrow shop-hero-arrow-next"
        aria-label="Next banner"
        onClick={scrollNext}
      >
        <ChevronRight size={22} />
      </button>

      {/* Pagination Dots */}
      <div className="shop-hero-dots" role="tablist" aria-label="Banner slides">
        {activeBanners.map((banner, index) => (
          <button
            key={banner.id || index}
            type="button"
            role="tab"
            aria-selected={index === selectedIndex}
            aria-label={`Go to banner ${index + 1}: ${banner.title || ''}`}
            className={`shop-hero-dot ${index === selectedIndex ? 'is-active' : ''}`}
            onClick={(e) => scrollTo(index, e)}
          />
        ))}
      </div>
    </section>
  );
}

