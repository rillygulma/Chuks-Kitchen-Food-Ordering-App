"use client";

import React, { useState } from "react";
import Image from "next/image";

type CartItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  qty: number;
};

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

export default function CartPage() {
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
        item.id === id && item.qty > 1
          ? { ...item, qty: item.qty - 1 }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <div className="mt-20">

      {/* ---------------- DESKTOP (UNCHANGED) ---------------- */}
      <div className="hidden md:block">
        <div className="max-w-4xl mx-auto p-4 border border-gray-400">
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
                  <p className="text-gray-500 underline">
                    {item.description}
                  </p>
                </div>

                <div className="flex items-center space-x-15">
                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-2 py-1 border bg-gray-300 rounded"
                  >
                    +
                  </button>

                  <span className="text-2xl font-bold">{item.qty}</span>

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
      </div>

{/* ---------------- MOBILE ---------------- */}
<div className="md:hidden bg-[#f5f6f8] px-3 pt-3">
  <div className="mx-auto max-w-[390px] space-y-3">
    {items.map((item) => (
      <div
        key={item.id}
        className="bg-white rounded-xl border border-gray-300 p-3"
      >
        <div className="flex gap-3">
          {/* image */}
          <div className="relative w-[78px] h-[78px] rounded-md overflow-hidden shrink-0">
            <Image
              src={item.image}
              alt={item.name}
              fill
              className="object-cover"
            />
          </div>

          {/* right content */}
          <div className="flex-1">
            <p className="text-[14px] font-semibold leading-tight">
              {item.name}
            </p>

            <p className="text-[12px] text-gray-400 mt-0.5">
              {item.description}
            </p>

            {/* qty row ( + 1 - ) */}
            <div className="flex items-center gap-23 mt-2">
              <button
                onClick={() => increaseQty(item.id)}
                className="w-5 h-5 rounded bg-gray-400 flex items-center justify-center text-xs"
              >
                +
              </button>

              <span className="text-2xl font-bold w-4 text-center">
                {item.qty}
              </span>

              <button
                onClick={() => decreaseQty(item.id)}
                className="w-5 h-5 rounded bg-gray-400 flex items-center justify-center text-xs"
              >
                –
              </button>
            </div>
          </div>
        </div>

        {/* bottom row */}
        <div className="flex items-center justify-between mt-2">
          <span className="text-orange-500 px-23 font-semibold text-sm">
            ₦{(item.price * item.qty).toLocaleString()}
          </span>

          <button
            onClick={() => removeItem(item.id)}
            className="w-6 h-6 rounded bg-slate-800 text-white text-sm flex items-center justify-center"
          >
            ×
          </button>
        </div>
      </div>
    ))}

    <button className="flex items-center gap-2 text-sm text-blue-600 mt-2">
      <span className="text-lg">＋</span>
      Add more items from Chuks Kitchen
    </button>
  </div>
</div>
    </div>
  );
}
