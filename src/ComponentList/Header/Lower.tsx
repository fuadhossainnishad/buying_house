import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Lower() {
  const navlist = ["Home", "Shop", "Products", "Contact", "Other"];

  return (
    <main className="flex justify-between px-[12%] bg-slate-200 text-black font-semibold p-4">
      <section className="flex items-center">
        <div className="flex items-center text-lg font-semibold">
          <div className="relative h-8 w-8">
            <Image
              src="/assets/Icon/menu4.png"
              alt="menu"
              layout="responsive"
              priority
              width={10}
              height={10}
              className=""
            />
          </div>
          <h1>Store Type</h1>
        </div>
        {/* <div className='h-5 border-r-2 border-slate-500 ml-10'></div> */}
      </section>
      <section className="flex gap-4 items-center">
        {navlist.map((nav, index) => (
          <Link
            key={index + 1}
            href={
              nav === "Home"
                ? "/"
                : nav === "Contact"
                ? "#contact"
                : `/${nav.toLowerCase()}`
            }
          >
            <div className="flex items-center gap-2">
              <h1>{nav}</h1>
              <div className="relative h-5 w-5 -rotate-90">
                <Image
                  src="/assets/Icon/left.png"
                  alt="left"
                  layout="responsive"
                  priority
                  width={10}
                  height={10}
                  className=""
                />
              </div>
            </div>
          </Link>
        ))}
      </section>
      <section className="flex items-center">
        <div className=" relative h-8 w-8">
          <Image
            src="/assets/Icon/offer.png"
            alt="offer"
            layout="responsive"
            priority
            width={10}
            height={10}
            className=""
          />
        </div>
        <h1>All Offers</h1>
      </section>
    </main>
  );
}
