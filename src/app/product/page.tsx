import React from "react";

import Details from "@/ComponentList/Productdetails/Details";
import Description from "@/ComponentList/Productdetails/Description";
import Moredetails from "@/ComponentList/Productdetails/Moredetails";
import Reviews from "@/ComponentList/Reviews";
import M4 from "@/ComponentList/Middle/M4";

export default function page() {
  return (
    <main className="bg-white text-black px-[12%]">
      <section className="flex gap-10 justify-between">
        <Details />
        <Description />
      </section>
      <Moredetails />
      <Reviews />
      <section className="">
        <h1 className="text-center font-bold text-2xl text-red-600">Related Product</h1>
        <M4 />
      </section>
    </main>

  );
}
