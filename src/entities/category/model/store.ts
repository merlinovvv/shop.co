import { ErrorResponse } from "@/shared/types/api/errors";
import { create } from "zustand";
import { useEffect } from "react";
import { categoriesApi } from "@/shared/api/categories";

interface CategoriesState {
  cache: Record<string, any[]>;
  loading: Record<string, boolean>;
  error: Record<string, ErrorResponse | null>;
  fetchCategories: () => Promise<void>;
}

const useCategoriesStore = create<CategoriesState>((set, get) => ({
  cache: {},
  loading: {},
  error: {},
  fetchCategories: async () => {
    const key = "categories";
    const { cache, loading } = get();

    // если уже грузим или данные есть — не повторяем запрос
    if (cache[key] || loading[key]) return;

    set((state) => ({
      loading: { ...state.loading, [key]: true },
      error: { ...state.error, [key]: null },
    }));

    try {
      const data = await categoriesApi.categories();
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

export function useCategories() {
  const key = "categories";
  const { cache, loading, error, fetchCategories } = useCategoriesStore();

  useEffect(() => {
    fetchCategories();
  }, [key]);

  return {
    categories: cache[key] || [],
    loading: loading[key] || false,
    error: error[key] || null,
  };
}
