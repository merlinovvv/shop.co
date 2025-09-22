import { Category } from "./category";

export interface Product {
  id: number;
  title: string;
  slug: string;
  price: number;
  description: string;
  category: Category;
  images: string[];
  creationAt: string;
  updatedAt: string;
}

export interface ProductsFetchParams {
  limit?: number;
  offset?: number;
  price_min?: number;
  price_max?: number;
  price?: number;
  categoryId?: number;
  categorySlug?: string;
  title?: string;
}
