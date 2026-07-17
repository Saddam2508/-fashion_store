"use client";

import { useContext, useEffect } from "react";
import { Search } from "../search";
import { CategoryFilter } from "../filter";
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
  const {
    product,
    setProducts,
    allProduct,
    setAllProduct,
    selectedCategory,
    searchTerm,
  } = context;

  useEffect(() => {
    if (showSearch) {
      setAllProduct(productData);
    }
  }, [productData, setAllProduct, showSearch]);

  useEffect(() => {
    if (!showSearch) return;

    let filtered = allProduct;

    if (selectedCategory !== "All") {
      filtered = filtered.filter((p) => p.category === selectedCategory);
    }

    if (searchTerm.length >= 3) {
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()),
      );
    }

    setProducts(filtered);
  }, [allProduct, selectedCategory, searchTerm, setProducts, showSearch]);

  const displayProducts = showSearch
    ? limit
      ? product.slice(0, limit)
      : product
    : limit
      ? productData.slice(0, limit)
      : productData;

  return (
    <div className="container mx-auto mt-30">
      {showSearch && (
        <>
          <Search />
          <CategoryFilter />
        </>
      )}

      <h2 className="font-bold text-[1.75rem] text-center sm:text-4xl my-3">
        The Gallery
      </h2>

      {displayProducts.length === 0 ? (
        <p className="text-center text-gray-500 my-10">No products found</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {displayProducts.map((product) => (
            <AllProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

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
