import React from "react";

import Upperfooter from "./Upperfooter";
import F2 from "./F2";
import Middlefooter from "./Middlefooter";
import Lowerfooter from "./Lowerfooter";

export default function Footer() {
  return (
    <main id="contact" className="bg-white pt-14 px-[12%] space-y-6">
      <Upperfooter />

      <F2 />
      <div className="border border-t-1 border-gray-400"></div>

      <Middlefooter />
      <div className="border border-t-1 border-gray-400"></div>

      <div className="-my-6">
        <Lowerfooter />
      </div>
    </main>
  );
}
