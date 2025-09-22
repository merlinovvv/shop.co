export function buildURL(endpoint: string, params?: Record<string, any>): string {
  if (!params || Object.keys(params).length === 0) {
    return endpoint;
  }
  const searchParams = new URLSearchParams();
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined && value !== null) {
      searchParams.append(key, String(value));
    }
  });
  return `${endpoint}?${searchParams.toString()}`;
}

export function priceText(price: number | string): string {
  if (typeof price === "number") {
    return `$${price.toFixed(2)}`;
  }
  return price;
}