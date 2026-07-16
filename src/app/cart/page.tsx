'use client';

import { useCart } from '@/context/CartContext';
import Image from 'next/image';
import { Button, Card } from '@heroui/react';
import Link from 'next/link';

export default function CartPage() {
  const {
    cart,
    increase,
    decrease,
    removeItem,
    clearCart,
    total,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className='container mx-auto py-20 text-center'>
        <h1 className='text-3xl font-bold mb-3'>Your cart is empty</h1>
        <p className='text-default-500 mb-6'>
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
    <div className='container mx-auto py-10'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold'>Shopping Cart</h1>

       <Button
  variant="danger-soft"
  onClick={clearCart}
>
  Clear Cart
</Button>
      </div>

      <div className='grid lg:grid-cols-3 gap-6'>
        <div className='lg:col-span-2 space-y-4'>
          {cart.map(item => (
            <Card key={item.id} className='p-4'>
              <div className='flex gap-4'>
                <div className='relative w-24 h-24 shrink-0'>
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className='object-cover rounded-lg'
                  />
                </div>

                <div className='flex-1'>
                  <h3 className='font-semibold'>{item.name}</h3>
                  <p className='text-default-500 text-sm'>
                    {item.category}
                  </p>

                  <div className='flex items-center gap-3 mt-4'>
                    <Button
                      isIconOnly
                      size='sm'
                      
                      onClick={() => decrease(item.id)}
                    >
                      -
                    </Button>

                    <span className='font-semibold min-w-6 text-center'>
                      {item.quantity}
                    </span>

                    <Button
                      isIconOnly
                      size='sm'
                     
                      onClick={() => increase(item.id)}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className='text-right'>
                  <p className='font-bold'>
                    ৳{item.price * item.quantity}
                  </p>

                  <Button
                    size='sm'
                
                    className='mt-2'
                    onClick={() => removeItem(item.id)}
                  >
                    Remove
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className='p-5 h-fit'>
          <h2 className='text-xl font-semibold mb-4'>
            Order Summary
          </h2>

          <div className='flex justify-between mb-2'>
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

         <div className="border-t my-4" />

          <div className='flex justify-between text-xl font-bold'>
            <span>Total</span>
            <span>৳{total}</span>
          </div>

          <Button  size='lg' className='w-full mt-6'>
            Checkout
          </Button>

         <Link
  href="/all-products"
  className="mt-3 flex w-full items-center justify-center rounded-lg bg-black px-4 py-2 text-white hover:bg-gray-800 transition"
>
  Continue Shopping
</Link>
        </Card>
      </div>
    </div>
  );
}