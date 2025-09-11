import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types/product";

export const searchProductApi = createApi({
  reducerPath: "searchProductApi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_STORE_API }),
  endpoints: (builder) => ({
    searchProducts: builder.query<Product[], string>({
      query: (title) => ({
        url: `products`,
        params: { title },
      }),
    }),
  }),
});

export const { useSearchProductsQuery } = searchProductApi;
