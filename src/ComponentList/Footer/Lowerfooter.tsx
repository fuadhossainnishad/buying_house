import React from "react";
import Image from "next/image";

export default function Lowerfooter() {
  const payment = [
    "/assets/Icon/cod.png",
    "/assets/Icon/bankpay.png",
    "/assets/Icon/visa2.png",
    "/assets/Icon/mastercard.png",
    "/assets/Icon/bkash.png",
    "/assets/Icon/nagad.png",
    "/assets/Icon/rocket.png",
  ];
  return (
    <main className="bg-white text-black py-3 ">
      <section className="flex justify-between">
        <section className="flex items-center">
          <div className="relative w-4 h-4 ">
            <Image
              src="/assets/Icon/copyright.png"
              alt="copyright"
              layout="responsive"
              height={10}
              width={10}
              className=""
            />
          </div>
          <h1 className="text-sm">All Rights Reserved-&gt;</h1>
          <h1 className="font-semibold">Fuad Hossain </h1>
        </section>
        <section className="flex items-center gap-1">
          <h1 className="font-semibold">Payment Options:</h1>
          <div className="grid grid-cols-4 grid-row-2 gap-1 items-center">
            {payment.map((pay, index) => (
              <div key={index} className="relative w-8 h-6 ">
                <Image
                  src={pay}
                  alt={`${pay}`}
                  layout="responsive"
                  height={10}
                  width={10}
                  className="items-center"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="flex items-center gap-1 justify-center">
        <div className="relative h-8 w-8">
          <Image
            src="/assets/Icon/developer.png"
            alt="developer"
            layout="responsive"
            height={10}
            width={10}
            className=""
          />
        </div>
        <div className="font-semibold text-sm">
          <h1>Fuad Hossain</h1>
          <h1>fuadhossainbk01@gmail.com</h1>
        </div>
      </section>
    </main>
  );
}
