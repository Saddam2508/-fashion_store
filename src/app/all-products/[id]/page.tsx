import DetailsCard from "@/components/card/ProductDetailsCard";
import { fetchProductData } from "@/helper/fetchData";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Product Details | Oxivos Fashion Store",
};

const ProductDetailsPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  console.log(id);
  const allProducts = await fetchProductData();
  if (!allProducts) return <p> No data found</p>;
  const selectedProduct = allProducts.find(
    (product) => product.id === Number(id),
  );
  if (!selectedProduct) return;
  return (
    <div>
      <DetailsCard selectedProduct={selectedProduct} />
    </div>
  );
};

export default ProductDetailsPage;
