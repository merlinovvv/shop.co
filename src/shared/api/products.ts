import axios from "axios";
import { Product, ProductsFetchParams } from "../types/api/product";
import { buildURL } from "../config";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API,
});

export const productsApi = {
  search: (title: ProductsFetchParams["title"]) =>
    api.get<Product[]>(buildURL(`products`, { title })).then((r) => r.data),
  products: (params: ProductsFetchParams) => api.get<Product[]>(buildURL(`products`, params)).then((r) => r.data),
};
