"use client";

import { ProductContext } from "@/context/ProductContext";
import { useContext, useMemo } from "react";
import { Button } from "@heroui/react";

export const CategoryFilter = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error("CategoryFilter must be used within ProductProvider");
  }
  const { allProduct, selectedCategory, setSelectedCategory } = context;

  const categories = useMemo(() => {
    const unique = Array.from(new Set(allProduct.map((p) => p.category)));
    return ["All", ...unique];
  }, [allProduct]);

  return (
    <div className="flex flex-wrap gap-2 justify-center my-4">
      {categories.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "primary" : "outline"}
          className="cursor-pointer"
          onClick={() => setSelectedCategory(category)}
        >
          {category}
        </Button>
      ))}
    </div>
  );
};
