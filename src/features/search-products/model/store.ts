import { ErrorResponse } from "@/shared/types/api/errors";
import { Product } from "@/shared/types/api/product";
import axios from "axios";
import { create } from "zustand";

interface SearchProductsState {
  products: Product[];
  loading: boolean;
  error: ErrorResponse;
  getSearch: (title: string) => Promise<void>;
}
export const useSearchProductsStore = create<SearchProductsState>((set) => ({
  products: [],
  loading: false,
  error: {} as ErrorResponse,
  getSearch: async (title: string) => {
    set({ loading: true, error: {} as ErrorResponse });
    try {
      const data = await axios
        .get<Product[]>(`${process.env.NEXT_PUBLIC_STORE_API}products?title=${title}`)
        .then((res) => res.data);
      set({ products: data, loading: false });
    } catch (err: any) {
      set({ error: err?.response?.data, loading: false });
    }
  },
}));
