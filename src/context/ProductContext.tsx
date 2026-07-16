"use client";

import { Product } from "@/types/product";
import React, {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react";

export interface Timeline {
  id: number;
  name: string;
  label: string;
  icon: string;
}

interface ProductContextType {
  product: Product[];
  setProducts: Dispatch<SetStateAction<Product[]>>;
  allProduct: Product[];
  setAllProduct: Dispatch<SetStateAction<Product[]>>;
}

export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProducts] = useState<Product[]>([]);
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const data: ProductContextType = {
    product,
    setProducts,
    allProduct,
    setAllProduct,
  };
  return <ProductContext.Provider value={data}>{children}</ProductContext.Provider>;
};

export default ProductProvider;