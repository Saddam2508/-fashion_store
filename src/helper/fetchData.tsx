import { Product } from "@/types/product";

export const fetchProductData = async () => {
  const baseUrl = process.env.BETTER_AUTH_URL;
  if (!baseUrl) throw new Error("Missing APP_URL");

  const res = await fetch(`${baseUrl}/product_data.json`);

  if (!res.ok) return null;

  const products: Product[] = await res.json();
  return products;
};
