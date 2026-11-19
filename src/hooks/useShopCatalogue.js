"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { SHOP_LIST_DEFAULT_LIMIT, toStorefrontProduct } from "@/lib/shop-catalogue";

function buildQuery(params = {}) {
  const search = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value == null || value === "" || value === false) return;
    if (Array.isArray(value)) {
      const joined = value.filter(Boolean).join(",");
      if (joined) search.set(key, joined);
      return;
    }
    search.set(key, String(value));
  });
  return search.toString();
}

async function parseJson(response) {
  const contentType = response.headers?.get?.("content-type") || "";
  if (!contentType.toLowerCase().includes("application/json")) return null;
  try {
    return await response.json();
  } catch {
    return null;
  }
}

/**
 * Paginated Shop Now catalogue fetcher with request cancellation,
 * dedupe, and stale-response protection.
 */
export function useShopCatalogue({
  categories = [],
  enabled = true,
  pageSize = SHOP_LIST_DEFAULT_LIMIT,
  filters = {},
}) {
  const [products, setProducts] = useState([]);
  const [pagination, setPagination] = useState({
    page: 1,
    limit: pageSize,
    total: 0,
    totalPages: 1,
    hasNextPage: false,
    hasPreviousPage: false,
  });
  const [facets, setFacets] = useState({ brands: [] });
  const [loading, setLoading] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [error, setError] = useState("");
  const requestIdRef = useRef(0);
  const abortRef = useRef(null);
  const filtersRef = useRef(filters);
  const categoriesRef = useRef(categories);
  const productsRef = useRef(products);
  const filtersKey = JSON.stringify(filters);
  filtersRef.current = filters;
  categoriesRef.current = categories;
  productsRef.current = products;

  useEffect(() => {
    if (!enabled) {
      setLoading(false);
      setLoadingMore(false);
      setIsRefreshing(false);
      setProducts([]);
      setPagination({
        page: 1,
        limit: pageSize,
        total: 0,
        totalPages: 0,
        hasNextPage: false,
        hasPreviousPage: false,
      });
    }
  }, [enabled, pageSize]);

  const fetchPage = useCallback(async ({ page = 1, append = false } = {}) => {
    if (!enabled) return;
    const requestId = ++requestIdRef.current;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    const hasExisting = productsRef.current.length > 0;
    if (append) setLoadingMore(true);
    else if (hasExisting) setIsRefreshing(true);
    else setLoading(true);
    setError("");

    try {
      const query = buildQuery({
        page,
        limit: pageSize,
        facets: page === 1 ? 1 : undefined,
        ...filtersRef.current,
      });
      const response = await fetch(`/api/shop-material-options?${query}`, {
        signal: controller.signal,
        cache: "default",
      });
      const data = await parseJson(response);
      if (requestId !== requestIdRef.current) return;
      if (!response.ok || !data?.success) {
        throw new Error(data?.error || "Could not load products");
      }

      const mapped = (data.data?.products || [])
        .map((product) => toStorefrontProduct(product, categoriesRef.current))
        .filter(Boolean);

      setPagination(data.data?.pagination || {
        page,
        limit: pageSize,
        total: mapped.length,
        totalPages: 1,
        hasNextPage: false,
        hasPreviousPage: page > 1,
      });
      // Facets arrive on page 1; keep them while appending pages.
      if (data.data?.facets) {
        setFacets((previous) => ({ ...previous, ...data.data.facets }));
      }
      setProducts((previous) => {
        if (!append) return mapped;
        const seen = new Set(previous.map((item) => String(item.product_id || item.id)));
        const next = [...previous];
        for (const item of mapped) {
          const key = String(item.product_id || item.id);
          if (seen.has(key)) continue;
          seen.add(key);
          next.push(item);
        }
        return next;
      });
    } catch (err) {
      if (err?.name === "AbortError") return;
      if (requestId !== requestIdRef.current) return;
      setError(err?.message || "Could not load products");
      // Keep previous products visible on refresh failure.
      if (!append && !productsRef.current.length) setProducts([]);
    } finally {
      if (requestId === requestIdRef.current) {
        setLoading(false);
        setLoadingMore(false);
        setIsRefreshing(false);
      }
    }
  }, [enabled, pageSize]);

  useEffect(() => {
    if (!enabled) return undefined;
    // Do not wipe facets/products immediately — keep previous UI while fetching.
    fetchPage({ page: 1, append: false });
    return () => abortRef.current?.abort();
  }, [enabled, filtersKey, pageSize, fetchPage]);

  const loadMoreInFlightRef = useRef(false);
  const loadMore = useCallback(() => {
    if (loading || loadingMore || loadMoreInFlightRef.current || !pagination.hasNextPage) return;
    loadMoreInFlightRef.current = true;
    return Promise.resolve(fetchPage({ page: pagination.page + 1, append: true }))
      .finally(() => {
        loadMoreInFlightRef.current = false;
      });
  }, [fetchPage, loading, loadingMore, pagination.hasNextPage, pagination.page]);

  const reload = useCallback(() => fetchPage({ page: 1, append: false }), [fetchPage]);

  return {
    products,
    pagination,
    facets,
    loading,
    loadingMore,
    isRefreshing,
    error,
    loadMore,
    reload,
  };
}

export function useShopSections(categories = [], enabled = true) {
  const [deals, setDeals] = useState([]);
  const [arrivals, setArrivals] = useState([]);
  const [loading, setLoading] = useState(Boolean(enabled));
  const abortRef = useRef(null);

  useEffect(() => {
    if (!enabled) return undefined;
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;
    let cancelled = false;

    (async () => {
      setLoading(true);
      try {
        const [dealsRes, arrivalsRes] = await Promise.all([
          fetch("/api/shop-material-options?section=deals&limit=6&sort=featured", {
            signal: controller.signal,
            cache: "default",
          }).then(parseJson),
          fetch("/api/shop-material-options?section=arrivals&limit=12&sort=newest", {
            signal: controller.signal,
            cache: "default",
          }).then(parseJson),
        ]);
        if (cancelled) return;
        setDeals(
          (dealsRes?.data?.products || [])
            .map((product) => toStorefrontProduct(product, categories))
            .filter(Boolean),
        );
        setArrivals(
          (arrivalsRes?.data?.products || [])
            .map((product) => toStorefrontProduct(product, categories))
            .filter(Boolean),
        );
      } catch (err) {
        if (err?.name === "AbortError" || cancelled) return;
        setDeals([]);
        setArrivals([]);
      } finally {
        if (!cancelled) setLoading(false);
      }
    })();

    return () => {
      cancelled = true;
      controller.abort();
    };
  }, [categories, enabled]);

  return { deals, arrivals, loading };
}
