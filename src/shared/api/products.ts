import axios from "axios";
import { Product } from "../types/api/product";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API,
});

export const productsApi = {
  search: (title: string) => api.get<Product[]>(`products?title=${title}`).then((r) => r.data)
};
