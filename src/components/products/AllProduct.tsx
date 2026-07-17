"use client";

import React, { useContext, useEffect } from "react";

import { Search } from "../search";
import { ProductContext } from "@/context/ProductContext";
import AllProductCard from "../card/ProductCard";
import { Product } from "@/types/product";
import Link from "next/link";

interface AllProductProps {
  productData: Product[];
  showSearch?: boolean;
  limit?: number;
}

const AllProduct = ({
  productData,
  showSearch = true,
  limit,
}: AllProductProps) => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("useTiles must be used within TilesProvider");
  }
  const { product, setProducts, setAllProduct } = context;

  useEffect(() => {
    setProducts(productData);
    setAllProduct(productData);
  }, [productData, setProducts, setAllProduct]);

  if (!product) return <p> No data found</p>;
  const displayProducts = limit ? product.slice(0, limit) : product;

  return (
    <div className="container mx-auto mt-30">
      {showSearch && <Search />}

      <h2 className="font-bold text-[1.75rem] text-center sm:text-4xl my-3">
        The Gallery
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {displayProducts.map((product) => (
          <AllProductCard key={product.id} product={product} />
        ))}
      </div>
      {!showSearch && (
        <div className="flex justify-end mt-8">
          <Link
            href="/all-products"
            className="inline-flex items-center gap-2 rounded-lg bg-black px-6 py-3 text-white transition-all duration-300 hover:bg-gray-800"
          >
            View All Products
            <span>→</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default AllProduct;
