"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion"; // Import motion from Framer Motion

type Coverimagetype = {
  src: string | StaticImageData;
  desc1: string;
};

export default function Coverimage({
  src,
  desc1,
}: {
  readonly src: string | StaticImageData;
  readonly desc1: string;
}) {
  return (
    <main className="relative w-[1000px] h-[475px]">
      <Image
        src={src}
        alt="laptop"
        layout="fill"
        
        className="rounded-2xl"
      />
      <section className="absolute  inset-0 ml-16 flex-col flex justify-center text-white">
        <motion.h1
          className="text-md"
          initial={{ opacity: 0, y: 100 }} // Initial state: hidden and offset
          animate={{ opacity: 1, y: 0 }} // End state: visible and in place
          transition={{ duration: 0.7, delay: 1.1 }} // Duration and delay for animation
        >
          Hot Deals
        </motion.h1>
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          Top Offer
        </motion.h1>
        <motion.h1
          className="text-4xl"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          {desc1}
        </motion.h1>
        <motion.button
          className="border bg-gray-500/70 rounded-[30px] w-[170px] h-14 mt-4 px-4 py-2 text-white hover:text-pink-500 hover:shadow-md hover:shadow-pink-500/50"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05 }}
        >
          Shop Now
        </motion.button>
      </section>
    </main>
  );
}
