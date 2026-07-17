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
  selectedCategory: string;
  setSelectedCategory: Dispatch<SetStateAction<string>>;
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
}

export const ProductContext = createContext<ProductContextType | null>(null);

const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [product, setProducts] = useState<Product[]>([]);
  const [allProduct, setAllProduct] = useState<Product[]>([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  const data: ProductContextType = {
    product,
    setProducts,
    allProduct,
    setAllProduct,
    selectedCategory,
    setSelectedCategory,
    searchTerm,
    setSearchTerm,
  };

  return (
    <ProductContext.Provider value={data}>{children}</ProductContext.Provider>
  );
};

export default ProductProvider;
