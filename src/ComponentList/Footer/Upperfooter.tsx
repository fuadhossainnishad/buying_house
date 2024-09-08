import React from "react";
import Image from "next/image";

export default function Upperfooter() {
  return (
    <main className="bg-slate-300 flex justify-evenly items-center p-6">
      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-24   w-24  ">
            <Image
              src="/assets/Icon/delivery.png"
              alt="left"
              layout="responsive"
              priority
              height={10}
              width={10}
              className=""
            />
          </div>
          <h1>Fast Delivery</h1>
          <h1>Deliver in 24 hours max!</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16 "></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20  w-20 ">
            <Image
              src="/assets/Icon/payment.png"
              alt="payment"
              layout="responsive"
              priority
              height={10}
              width={10}
              className=""
            />
          </div>
          <h1>Safe Payment</h1>
          <h1>Bkash, Rocket, Visa...</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16"></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-20  w-20 ">
            <Image
              src="/assets/Icon/return.png"
              alt="ret"
              layout="responsive"
              priority
              height={10}
              width={10}
              className=""
            />
          </div>
          <h1>Free Returns</h1>
          <h1>Free returns within 15 days</h1>
        </div>
      </section>
      <div className="border border-r-1 h-16"></div>

      <section className="flex items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="relative h-16   w-16  ">
            <Image
              src="/assets/Icon/help.png"
              alt="help"
              layout="responsive"
              priority
              height={10}
              width={10}
              className=""
            />
          </div>
          <h1>Help Center</h1>
          <h1>Dedicated 24/7 support</h1>
        </div>
      </section>
    </main>
  );
}
