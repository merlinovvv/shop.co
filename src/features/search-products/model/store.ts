import { productsApi } from "@/shared/api/products";
import { ErrorResponse } from "@/shared/types/api/errors";
import { Product } from "@/shared/types/api/product";
import { create } from "zustand";

interface SearchProductsState {
  products: Product[];
  loading: boolean;
  error: ErrorResponse | null;
  getSearch: (title: string) => Promise<void>;
}
export const useSearchProductsStore = create<SearchProductsState>((set) => ({
  products: [],
  loading: false,
  error: null,
  getSearch: async (title: string) => {
    set({ loading: true, error: null });
    try {
      const data = await productsApi.search(title);
      set({ products: data, loading: false });
    } catch (err: any) {
      set({ error: err?.response?.data || null, loading: false });
    }
  },
}));
