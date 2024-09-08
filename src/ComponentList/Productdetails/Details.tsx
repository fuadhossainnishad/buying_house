"use client";

import React, { useState } from "react";
import Image, { StaticImageData } from "next/image";

export default function Details() {
  const images: string[] = [
    "/assets/Image/iphone2.png",
    "/assets/Image/iphone3.png",
    "/assets/Image/iphone4.png",
    "/assets/Image/iphone5.png",
  ];
  const [selectimage, setSelectimage] = useState<string>(images[0]);

  const handleselectimage = (image: string) => {
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
            <Image
              src={image}
              alt="alt"
              layout="responsive"
              priority
              width={10}
              height={10}
            />
          </div>
        ))}
      </section>
      <section className="flex items-center gap-2">
        <div
          className="relative w-12 h-12 rotate-180 cursor-pointer"
          onClick={handleprevimage}
        >
          <Image
            src="/assets/Icon/rightarrow.png"
            className="hover:bg-slate-400 rounded-full"
            alt="alt"
            layout="responsive"
            priority
            height={10}
            width={10}
          />
        </div>
        <div className="relative w-[400px] h-[600px] rounded-3xl hover:border-2 hover:border-rose-300">
          <Image
            src={selectimage}
            alt="alt"
            layout="responsive"
            priority
            width={10}
            height={10}
          />
        </div>
        <div
          className="relative w-12 h-12 cursor-pointer"
          onClick={handlenextimage}
        >
          <Image
            src="/assets/Icon/rightarrow.png"
            className="hover:bg-slate-400 rounded-full"
            alt="alt"
            layout="responsive"
            priority
            height={10}
            width={10}
          />
        </div>
      </section>
    </main>
  );
}
