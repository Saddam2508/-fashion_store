import CartPageContent from "@/components/cart/CartPageContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cart page | Oxivos Fashion Store",
};

export default function CartPage() {
  return (
    <div className="container mx-auto py-10">
      <CartPageContent />
    </div>
  );
}
