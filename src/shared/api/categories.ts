import axios from "axios";
import { buildURL } from "../config";
import { Category } from "../types/api/category";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STORE_API,
});

export const categoriesApi = {
  categories: () => api.get<Category[]>(buildURL(`categories`)).then((r) => r.data),
};
