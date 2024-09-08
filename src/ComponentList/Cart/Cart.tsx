import React from "react";
import Image from "next/image";
import Link from "next/link";

type Carttype = {
  Carthandler: () => void;
};
export default function Cart({ Carthandler }: Carttype) {
  return (
    <main className="bg-white fixed top-20 right-0 w-[25%] h-screen p-5 border-2 rounded-2xl">
      <section className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Cart</h1>
        <div className="relative w-3 h-5 cursor-pointer" onClick={Carthandler}>
          <Image
            src="/assets/Icon/cross.png"
            alt="cross"
            layout="responsive"
            height={10}
            width={10}
          />
        </div>
      </section>
      <div className="border-t-2 mt-5 -mx-5"></div>
      <section className="flex flex-col items-center mt-[40%] space-y-4">
        <div className="relative w-20 h-20 ">
          <Image
            src="/assets/Icon/emptycart.png"
            alt="emptycart"
            layout="fill"
            style={{
              opacity: 0.3,
            }}
          />
        </div>
        <h1 className="font-semibold">Your cart is empty</h1>
        <p className="text-center text-sm">
          You may check out all the available products and buy some in the shop.
        </p>

        <button className="text-sm font-semibold py-3 px-6 rounded-3xl bg-blue-400 border-2 ">
          <Link href="viewcart">Cotinue Shopping</Link>
        </button>
      </section>
    </main>
  );
}
