import React from "react";

export default function Moredetails() {
  return (
    <main className="border-2">
      <section className="flex justify-center gap-3">
        <button className="border-2 rounded-3xl py-2 px-6 hover:bg-orange-200">
          Product Details
        </button>
        <button className="border-2 rounded-3xl py-2 px-6 hover:bg-orange-200">
          Reviews
        </button>
        <button className="border-2 rounded-3xl py-2 px-6 hover:bg-orange-200">
          Delivery & Returns
        </button>
      </section>
      <section className=" border-b-0 bg-slate-300/50 p-5">
        <h1>
          IPad Air with a vibrant 10.9-inch Liquid Retina display. Breakthrough
          Apple M1 chip for faster performance, making iPad Air super-powerful
          for creativity and mobile gaming. Get Touch ID, an advanced camera,
          lightning-fast 5G2 and Wi-Fi 6, a USB-C port, and support for the
          Magic Keyboard and Apple Pencil (2nd generation).
        </h1>
      </section>
      <section className="font-semibold text-lg border-2 border-t-0 bg-slate-300/50 p-5">
        <h1>Customer Reviews:</h1>
        <div>
          <h1>Quality:</h1>
        </div>
        <div>
          <h1>Price:</h1>
        </div>
        <div className="flex gap-2 text-base items-center">
          <h1 className="text-lg ">Posted on:</h1>
          <h1 className="">21/08/2024</h1>
          <h1>03:05</h1>
          <h1>AM</h1>
        </div>
      </section>
    </main>
  );
}
