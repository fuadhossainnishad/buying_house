import React from "react";
import Image from 'next/image';
import Link from "next/link";

import surface from "@/assets/Image/surface2.png";
import surface2 from "@/assets/Image/surface3.png";

export default function M3() {
  return (
    <main className="flex w-full justify-between">
      <section className="w-[30%] rounded-2xl flex bg-orange-400 justify-evenly">
        <div className="flex flex-col justify-evenly">
          <div className="text-lg">
            <h1>Surface</h1>
            <h1>Save Up To $100</h1>
          </div>
          <Link className="border-b text-sm inline-block " href="/">
            Shop Surface
          </Link>
        </div>
        <div className=" relative w-60  h-[200px] ">
          <Image src={surface} alt="surface" layout="fill" className="" />
        </div>
      </section>
      <section className="w-[30%] rounded-2xl flex bg-gray-700 justify-evenly">
        <div className="flex flex-col justify-evenly">
          <div className="text-lg">
            <h1>Surface</h1>
            <h1>Save Up To $100</h1>
          </div>
          <Link className="border-b text-sm inline-block " href="/">
            Shop Surface
          </Link>
        </div>
        <div className=" relative w-60  h-[200px] ">
          <Image src={surface} alt="surface" layout="fill" className="" />
        </div>
      </section>
      <section className="w-[30%] rounded-2xl flex bg-teal-700 justify-evenly">
        <div className="flex flex-col justify-evenly">
          <div className="text-lg">
            <h1>Surface</h1>
            <h1>Save Up To $100</h1>
          </div>
          <Link className="border-b text-sm inline-block " href="/">
            Shop Surface
          </Link>
        </div>
        <div className=" relative w-60  h-[200px] ">
          <Image src={surface} alt="surface" layout="fill" className="" />
        </div>
      </section>
    </main>
  );
}
