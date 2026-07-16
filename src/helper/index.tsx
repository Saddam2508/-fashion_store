
import { CartProvider } from "@/context/CartContext";
import ProductProvider from "@/context/ProductContext";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ProductProvider>
      <CartProvider>
        {children}
      </CartProvider>
    </ProductProvider>
  );
};

export default Providers;