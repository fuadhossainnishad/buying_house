import React from "react";
import Image from 'next/image';

import iphone from "@/assets/Image/iphone.png";

import Product from "./Product";

export default function M4() {
  return (
    <main className="flex gap-12 justify-between">
      <Product
        src={iphone}
        alt="iphone"
        brand="Apple"
        desc1="Smartphone 14 Pro Max"
        desc2="128GB/13MP Camera-Umlocked"
        price="$380.00"
      />
      <Product
        src={iphone}
        alt="iphone"
        brand="Apple"
        desc1="Smartphone 14 Pro Max"
        desc2="128GB/13MP Camera-Umlocked"
        price="$380.00"
      />
      <Product
        src={iphone}
        alt="iphone"
        brand="Apple"
        desc1="Smartphone 14 Pro Max"
        desc2="128GB/13MP Camera-Umlocked"
        price="$380.00"
      />
      <Product
        src={iphone}
        alt="iphone"
        brand="Apple"
        desc1="Smartphone 14 Pro Max"
        desc2="128GB/13MP Camera-Umlocked"
        price="$380.00"
      />

      
    </main>
  );
}
