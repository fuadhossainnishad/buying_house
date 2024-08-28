import React from "react";
import Image, { StaticImageData } from "next/legacy/image";
import Link from "next/link";

type Productype = {
  src: string | StaticImageData;
  alt: string;
  brand: string;
  desc1: string;
  desc2: string;
  price: string;
};

export default function Productpromo({
  src,
  alt,
  brand,
  desc1,
  desc2,
  price,
}: Productype) {
  return (
    <main className="font-semibold">
      <div className="relative w-[610px] h-[388px] ">
        <Image src={src} alt={alt} layout="fill" className="rounded-xl" />
        <section className="absolute bg-slate-900/40 p-8 pt-[px] left-14  z-10">
          <div className="space-y-4">
            <h1 className="text-sm ">{brand} </h1>
            <div>
              <h1 className="text-2xl">{desc1}</h1>
              <h1 className="text-2xl">{desc2} </h1>
            </div>
            <h1
              className="text-xl text-red-400
                    "
            >
              {price}{" "}
            </h1>
            <button className="border-2 border-cyan-400 hover:border-cyan-700 hover:text-orange-500 px-5 py-2 rounded-3xl">
              Shop Now
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
