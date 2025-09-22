export const routes = {
  home: "/",
  cart: "/cart",
  products: {
    root: "/products",
    byId: (id: string | number) => `/products/${id}`
  },
  onSale: "/on-sale",
  newArrivals: "/new-arrivals",
  brands: "/brands",
};
