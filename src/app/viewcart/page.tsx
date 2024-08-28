import React from "react";
import Image from "next/legacy/image";

import return2 from "@/assets/Icon/return2.png";

const cartarray = [
  {
    id: 1,
    item: "Sample Item 1",
    price: 10.0,
    qty: 1,
  },
  {
    id: 2,
    item: "Sample Item 2",
    price: 15.0,
    qty: 2,
  },
];

const headingsarray = ["ID", "Items", "Price", "Quantity", "Subtotal"];

export default function Page() {
  return (
    <main className="bg-white text-black px-[12%] space-y-6">
      <section className="">
        <h1 className="text-2xl font-semibold text-center">Shopping Cart</h1>
      </section>
      <table className="border border-gray-300 border-collapse text-center w-full">
        <thead>
          <tr>
            {headingsarray.map((heading, index) => (
              <td
                key={index}
                className="border border-gray-300 font-semibold py-4"
              >
                {heading}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {cartarray.map((cart, index) => (
            <tr key={index} className="">
              {Object.entries(cart).map(([key, value]) => (
                <td key={key} className="border border-gray-300 py-4">
                  {key === "price" && typeof value === "number"
                    ? `${value.toFixed(2)}`
                    : value}
                </td>
              ))}
              <td className="border border-gray-300 py-4">
                {/* Subtotal is calculated by multiplying price and quantity */}
                {`${(cart.price * cart.qty).toFixed(2)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <section className="flex justify-between ">
        <div className="flex items-center gap-1 border-2 rounded-3xl py-2 px-8 text-sm font-semibold bg-slate-300 cursor-pointer">
          <div className="relative w-4 h-4">
            <Image
              src={return2}
              alt="return"
              layout="fill"
              
            />
          </div>
          <span>Update Cart</span>
        </div>

        <div className="flex gap-10 text-sm font-semibold">
          <button className="border-2 rounded-3xl py-2 px-8 text-sm font-semibold bg-slate-300 cursor-pointer">
            Clear Cart
          </button>
          <button className="border-2 rounded-3xl py-2 px-8 text-sm font-semibold bg-slate-300 cursor-pointer">
            Update Cart
          </button>
        </div>
      </section>
    </main>
  );
}
