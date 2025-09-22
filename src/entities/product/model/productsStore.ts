import { productsApi } from "@/shared/api/products";
import { ErrorResponse } from "@/shared/types/api/errors";
import { ProductsFetchParams } from "@/shared/types/api/product";
import { create } from "zustand";
import { useEffect } from "react";

interface ProductsState {
  cache: Record<string, any[]>;
  loading: Record<string, boolean>;
  error: Record<string, ErrorResponse | null>;
  fetchProducts: (params?: ProductsFetchParams) => Promise<void>;
}

const useProductsStore = create<ProductsState>((set, get) => ({
  cache: {},
  loading: {},
  error: {},
  fetchProducts: async (params = {}) => {
    const key = JSON.stringify(params);
    const { cache, loading } = get();

    // если уже грузим или данные есть — не повторяем запрос
    if (cache[key] || loading[key]) return;

    set((state) => ({
      loading: { ...state.loading, [key]: true },
      error: { ...state.error, [key]: null },
    }));

    try {
      const data = await productsApi.products(params);
      set((state) => ({
        cache: { ...state.cache, [key]: data },
      }));
    } catch (err) {
      set((state) => ({
        error: { ...state.error, [key]: err as ErrorResponse },
      }));
    } finally {
      set((state) => ({
        loading: { ...state.loading, [key]: false },
      }));
    }
  },
}));

export function useProducts(params?: ProductsFetchParams) {
  const key = JSON.stringify(params || {});
  const { cache, loading, error, fetchProducts } = useProductsStore();

  useEffect(() => {
    fetchProducts(params);
  }, [key]);

  return {
    products: cache[key] || [],
    loading: loading[key] || false,
    error: error[key] || null,
  };
}
