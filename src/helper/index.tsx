import ProductProvider from "@/context/ProductContext";
import React, { ReactNode } from "react";

const Providers = ({ children }: { children: ReactNode }) => {
  return <ProductProvider>{children}</ProductProvider>;
};

export default Providers;