"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import laptop from '@/assets/Image/laptop.jpg'

const CoverImageAnimation = () => {
  const gridSize = 4; // Define the grid size
  const squares = [];

  for (let i = 0; i < gridSize * gridSize; i++) {
    squares.push(
      <motion.div
        key={i}
        className="w-full h-full"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.5,
          delay: i * 0.1, // Stagger effect for the squares
          ease: "easeInOut",
        }}
      >
        <Image
          src={laptop}
          alt="Cover"
          layout="fill"
          objectFit="cover"
          className={`object-[${(i % gridSize) * 25}% ${
            Math.floor(i / gridSize) * 25
          }%]`}
        />
      </motion.div>
    );
  }

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div className="grid grid-cols-4 grid-rows-4 w-full h-full">
        {squares}
      </div>
    </div>
  );
};

export default CoverImageAnimation;
