import Banner from "@/components/banner";
import ProductListHomePage from "@/components/products/ProductListHomePage";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home | Oxivos Fashion Store",
};

export default function Home() {
  return (
    <div>
      <Banner />
      <ProductListHomePage />
    </div>
  );
}
