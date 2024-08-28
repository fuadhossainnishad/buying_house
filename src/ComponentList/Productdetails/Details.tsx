"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/legacy/image";

import iphone2 from "@/assets/Image/iphone2.png";
import iphone3 from "@/assets/Image/iphone3.png";
import iphone4 from "@/assets/Image/iphone4.png";
import iphone5 from "@/assets/Image/iphone5.png";

import rightarrow from "@/assets/Icon/rightarrow.png";

export default function Details() {
  const images: StaticImageData[] = [iphone2, iphone3, iphone4, iphone5];
  const [selectimage, setSelectimage] = useState<StaticImageData>(images[0]);

  const handleselectimage = (image: StaticImageData) => {
    setSelectimage(image);
  };
  const handleprevimage = () => {
    const currentimageindex = images.indexOf(selectimage);
    const previmageindex =
      (currentimageindex - 1 + images.length) % images.length;
    setSelectimage(images[previmageindex]);
  };
  const handlenextimage = () => {
    const currentimageindex = images.indexOf(selectimage);
    const nextimageindex = (currentimageindex + 1) % images.length;
    setSelectimage(images[nextimageindex]);
  };

  return (
    <main className="w-1/2 bg-white flex justify-end gap-5 mt-">
      <section className="flex flex-col space-y-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`w-[40px] h-[55px] rounded-lg border hover:border-green-600 cursor-pointer ${
              selectimage === image ? "border-blue-500" : ""
            }`}
            onClick={() => handleselectimage(image)}
          >
            <Image src={image} alt="alt" layout="responsive" />
          </div>
        ))}
      </section>
      <section className="flex items-center gap-2">
        <div
          className="relative w-12 h-12 rotate-180 cursor-pointer"
          onClick={handleprevimage}
        >
          <Image
            src={rightarrow}
            className="hover:bg-slate-400 rounded-full"
            alt="alt"
            layout="fill"
          />
        </div>
        <div className="relative w-[400px] h-[600px] rounded-3xl hover:border-2 hover:border-rose-300">
          <Image src={selectimage} alt="alt" layout="fill" />
        </div>
        <div
          className="relative w-12 h-12 cursor-pointer"
          onClick={handlenextimage}
        >
          <Image
            src={rightarrow}
            className="hover:bg-slate-400 rounded-full"
            alt="alt"
            layout="fill"
          />
        </div>
      </section>
    </main>
  );
}
