import React from "react";
import Image from "next/image";

import copyright from "@/assets/Icon/copyright.png";
import developer from "@/assets/Icon/developer.png";
import cod from "@/assets/Icon/cod.png";
import bkash from "@/assets/Icon/bkash.png";
import nagad from "@/assets/Icon/nagad.png";
import rocket from "@/assets/Icon/rocket.png";
import bankpay from "@/assets/Icon/bankpay.png";
import visa from "@/assets/Icon/visa2.png";
import mastercard from "@/assets/Icon/mastercard.png";

export default function Lowerfooter() {
  const payment = [cod, bankpay, visa, mastercard, bkash, nagad, rocket];
  return (
    <main className="bg-white text-black py-3 ">
      <section className="flex justify-between">
        <section className="flex items-center">
          <div className="relative w-4 h-4 ">
            <Image
              src={copyright}
              alt="copyright"
              fill
              style={{
                objectFit: "cover",
                objectPosition: "center",
              }}
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
              <div key={index} className="relative w-12 h-8 ">
                <Image
                  src={pay}
                  alt="cod"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                  className="items-center"
                />
              </div>
            ))}
          </div>
        </section>
      </section>
      <section className="flex items-center gap-1 justify-center">
        <Image
          src={developer}
          alt="developer"
          width={20}
          style={{
            width: "auto",
          }}
          className=""
        />
        <div className="font-semibold text-sm">
          <h1>Fuad Hossain</h1>
          <h1>fuadhossainbk01@gmail.com</h1>
        </div>
      </section>
    </main>
  );
}
