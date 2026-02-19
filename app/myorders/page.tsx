"use client";
// CartPage.tsx
import React, { useState } from "react";
import Image from "next/image";

// Type for a cart item
type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  qty: number;
};

// Mock cart data
const cartItems: CartItem[] = [
  {
    id: "item-1",
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    image: "/jollof.png",
    qty: 1,
  },
  {
    id: "item-2",
    name: "Eba & Egusi Soup",
    description: "Delicious and spicy",
    price: 3200,
    image: "/eba-egusi.png",
    qty: 1,
  },
  {
    id: "item-3",
    name: "Suya",
    description: "Spicy grilled meat",
    price: 3200,
    image: "/suya.png",
    qty: 1,
  },
  {
    id: "item-4",
    name: "Jollof Rice & Fried Chicken",
    description: "With plantain, extra pepper sauce",
    price: 3200,
    image: "/jollof.png",
    qty: 1,
  },
];

const CartPage: React.FC = () => {
  const [items, setItems] = useState<CartItem[]>(cartItems);

  const increaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: item.qty + 1 } : item
      )
    );
  };

  const decreaseQty = (id: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-4 border border-gray-400">
      <h1 className="text-2xl font-bold mb-6">Your Cart</h1>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between border border-gray-300 p-4 rounded-lg"
          >
            <div className="w-24 h-24 relative">
              <Image
                src={item.image}
                alt={item.name}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex-1 mx-4">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-gray-500 underline">{item.description}</p>
            </div>
            <div className="flex items-center space-x-13">
              <button
                onClick={() => increaseQty(item.id)}
                className="px-2 py-1 border bg-gray-300 rounded"
              >
                +
              </button>
              <span>{item.qty}</span>
              <button
                onClick={() => decreaseQty(item.id)}
                className="px-2 py-1 border bg-gray-300 rounded"
              >
                -
              </button>
            </div>
            <div className="text-orange-500 font-bold text-lg mx-10">
              ₦{item.price * item.qty}
            </div>
            <button
              onClick={() => removeItem(item.id)}
              className="bg-orange-500 text-white px-1 rounded"
            >
              x
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <button className="text-blue-500 underline">
          + Add more items from Chuks Kitchen
        </button>
      </div>
    </div>
  );
};

export default CartPage;
