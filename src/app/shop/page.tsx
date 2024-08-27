import React from "react";
import M4 from "@/ComponentList/Middle/M4";
import M5 from "@/ComponentList/Middle/M5";
export default function page() {
  return (
    <main className="px-[12%] bg-white py-10 ">
      <h1 className="text-black font-semibold text-2xl"></h1>
      <M4 />
      <M5 />
      <M4 />
      <M5 />
      <M4 />
      <M5 />
    </main>
  );
}
