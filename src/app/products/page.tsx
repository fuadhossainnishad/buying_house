import React from "react";
import M4 from "@/ComponentList/Middle/M4";
import M5 from "@/ComponentList/Middle/M5";
export default function page() {
  return (
    <main className="px-[12%] bg-white space-y-8">
        <h1 className="text-black text-3xl font-semibold text-center">Products</h1>
      <M4 />
      <M5 />
      <M4 />
      <M5 />
      <M4 />
      <M5 />
    </main>
  );
}
