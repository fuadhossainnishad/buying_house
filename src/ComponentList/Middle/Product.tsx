import React from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type Productype = {
  src: string | StaticImageData;
  alt: string;
  brand: string;
  desc1: string;
  desc2: string;
  price: string;
};

export default function Product({
  src,
  alt,
  brand,
  desc1,
  desc2,
  price,
}: Productype) {
  return (
    <main className="relative group">
      <section className="shadow-lg shadow-teal-200 rounded-xl text-black px-8 py-10 gap-7 flex flex-col justify-evenly">
        <div className="flex justify-center">
          <Link href="/product">
            <div className="relative w-36 h-44">
              <Image
                src={src}
                alt={alt}
                layout="responsive"
                priority
                width={10}
                height={10}
                className=""
              />
            </div>
          </Link>
        </div>
        <div className="space-y-2 font-medium text-sm">
          <h1 className="">{brand}</h1>
          <Link href="/product">
            <div className="hover:text-violet-400">
              <h1 className="">{desc1}</h1>
              <h1 className="">{desc2}</h1>
            </div>
          </Link>
          <h1 className="text-lg font-bold">{price}</h1>
        </div>
      </section>

      <section className="absolute inset-0 top-12 left-56 right-0  space-y-2  bg-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <div className="p-2 w-8 hover:bg-slate-300/30  rounded-3xl items-center border">
          <div className="relative w-4 h-4">
            <Image
              src="/assets/Icon/cart.png"
              alt="cart"
              layout="responsive"
              priority
              width={10}
              height={10}
              className=""
            />
          </div>
        </div>

        <div className="p-2 w-8 hover:bg-slate-300/30  rounded-3xl items-center border">
          <div className="relative w-4 h-4">
            <Image
              src="/assets/Icon/wish.png"
              alt="wish"
              layout="responsive"
              priority
              width={10}
              height={10}
              className=""
            />
          </div>
        </div>

        <div className="p-2 w-8 hover:bg-slate-300/30  rounded-3xl items-center border">
          <div className="relative w-4 h-4">
            <Image
              src="/assets/Icon/compare.png"
              alt="compare"
              layout="responsive"
              priority
              width={10}
              height={10}
              className=""
            />
          </div>
        </div>

        <div className="p-2 w-8 hover:bg-slate-300/30  rounded-3xl items-center border">
          <div className="relative w-4 h-4">
            <Image
              src="/assets/Icon/view.png"
              alt="view"
              layout="responsive"
              priority
              width={10}
              height={10}
              className=""
            />
          </div>
        </div>
      </section>
    </main>
  );
}
