"use client";

import React, { useContext, useEffect } from "react";

import { Search } from "../search";
import { ProductContext } from "@/context/ProductContext";
import AllProductCard from "../card/ProductCard";
import { Product } from "@/types/product";

const AllProduct = ({ productData }: { productData: Product[] }) => {
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
  return (
    <div className="container mx-auto mt-30">
      <Search />
      <h2 className="font-bold text-[1.75rem] text-center sm:text-left sm:text-4xl my-3">
        The Gallery
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
        {product.map((product) => (
          <AllProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProduct;