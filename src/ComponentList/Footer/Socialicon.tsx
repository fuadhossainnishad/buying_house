import React from "react";
import Image, { StaticImageData } from "next/image";

type Socialicontype = {
  src: string | StaticImageData;
  alt: string;
};

export default function Socialicon({ src, alt }: Socialicontype) {
  return (
    <main className="relative w-7 h-7">
      <Image
        src={src}
        alt={alt}
        layout="fill"
        
      />
    </main>
  );
}
