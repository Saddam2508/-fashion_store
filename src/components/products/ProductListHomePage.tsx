
import AllProduct from "@/components/products/AllProduct";
import { fetchProductData } from "@/helper/fetchData";
import { Product } from "@/types/product";




const ProductListHomePage = async () => {
  const result = await fetchProductData();

  if (!result) return <p> No data found</p>;
  const productData: Product[] = result;
  return (
    <div>
      <AllProduct productData={productData} showSearch={false} limit={8} />
    </div>
  );
};

export default ProductListHomePage;