"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";
import { Button, Card } from "@heroui/react";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "cart page | Oxivos Fashion Store",
};

export default function CartPage() {
  const { cart, increase, decrease, removeItem, clearCart, total } = useCart();

  if (cart.length === 0) {
    return (
      <div className="container mx-auto py-20 text-center">
        <h1 className="text-3xl font-bold mb-3">Your cart is empty</h1>
        <p className="text-default-500 mb-6">
          Looks like you haven't added anything yet.
        </p>

        <Link
          href="/cart"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2 text-white hover:opacity-90"
        >
          View Details
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm: text-center">
        <h1 className="text-2xl sm:text-3xl font-bold">Shopping Cart</h1>

        <Button
          variant="danger-soft"
          onClick={clearCart}
          className="w-full sm:w-auto"
        >
          Clear Cart
        </Button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <Card key={item.id} className="p-4">
              <div className="flex flex-col gap-4 md:flex-row md:items-center">
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden rounded-lg md:h-24 md:w-24 md:flex-shrink-0">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Product Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold">{item.name}</h3>
                  <p className="text-sm text-gray-500">{item.category}</p>

                  <div className="mt-4 flex items-center gap-3">
                    <Button
                      isIconOnly
                      size="sm"
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </Button>

                    <span className="min-w-6 text-center font-semibold">
                      {item.quantity}
                    </span>

                    <Button
                      isIconOnly
                      size="sm"
                      onClick={() => increase(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                {/* Price & Remove */}
                <div className="flex items-center justify-between md:flex-col md:items-end md:justify-center">
                  <p className="text-lg font-bold">
                    ৳{item.price * item.quantity}
                  </p>

                  <Button
                    size="sm"
                    className="mt-0 md:mt-3"
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-5 h-fit lg:sticky lg:top-24">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between mb-2">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="border-t my-4" />

          <div className="flex justify-between text-xl font-bold">
            <span>Total</span>
            <span>৳{total}</span>
          </div>

          <Button size="lg" className="w-full mt-6">
            Checkout
          </Button>

          <Link
            href="/all-products"
            className="mt-3 flex h-11 w-full items-center justify-center rounded-lg bg-black text-white transition hover:bg-gray-800"
          >
            Continue Shopping
          </Link>
        </Card>
      </div>
    </div>
  );
}
