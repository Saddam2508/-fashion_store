
import AllProduct from "@/components/products/AllProduct";
import { fetchProductData } from "@/helper/fetchData";
import { Product } from "@/types/product";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Product | Fashion Store",
};

const AllProductPage = async () => {
  const result = await fetchProductData();

  if (!result) return <p> No data found</p>;
  const productData: Product[] = result;
  console.log(productData)
  return (
    <div>
      <AllProduct productData={productData} />
    </div>
  );
};

export default AllProductPage;