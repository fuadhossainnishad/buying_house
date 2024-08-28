import React from "react";
import Image from "next/legacy/image";

import delivery from "@/assets/Icon/delivery.png";
import payment from "@/assets/Icon/payment.png";
import ret from "@/assets/Icon/return.png";
import help from "@/assets/Icon/help.png";

export default function Upperfooter() {
  return (
    <main className="bg-slate-300 flex justify-evenly items-center p-6">
      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-24   w-24  ">
            <Image src={delivery} alt="left" layout="fill" className="" />
          </div>
          <h1>Fast Delivery</h1>
          <h1>Deliver in 24 hours max!</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16 "></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20  w-20 ">
            <Image src={payment} alt="payment" layout="fill" className="" />
          </div>
          <h1>Safe Payment</h1>
          <h1>Bkash, Rocket, Visa...</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16"></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20  w-20 ">
            <Image src={ret} alt="ret" layout="fill" className="" />
          </div>
          <h1>Free Returns</h1>
          <h1>Free returns within 15 days</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16"></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-16   w-16  ">
            <Image src={help} alt="help" layout="fill" className="" />
          </div>
          <h1>Help Center</h1>
          <h1>Dedicated 24/7 support</h1>
        </div>
      </section>
    </main>
  );
}
