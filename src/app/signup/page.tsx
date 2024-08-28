import React from "react";
import Image from "next/legacy/image";

import bd from "@/assets/Icon/bd.png"

export default function page() {
  return (
    <main className="bg-white space-y-6 flex justify-center  p-5 ">
      <section className="flex flex-col w-[40%] items-center space-y-6 ">
        <h1 className="text-3xl text-black font-semibold">Create Account</h1>
        <input
          type="text"
          placeholder="First Name"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />
        <input
          type="text"
          placeholder="Last Name"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 text-blue-400 placeholder:text-blue-600"
        />
        <div className="w-[80%] flex items-center border rounded-3xl border-cyan-900 bg-white/70 text-blue-400">
          <div className="flex items-center px-5">
            <div className="relative h-[20px] w-[20px] mr-2 ">
              <Image
                src={bd}
                alt="BD Flag"
                layout="fill"
                
                className=""
              />
            </div>
            <span>+88</span>
          </div>
          <div className="border border-r-[.1px] h-4 border-black/50 "></div>
          <input
            type="phone"
            placeholder="Mobile Number"
            className="bg-transparent w-full py-3 px-2 rounded-r-3xl placeholder:text-blue-600"
          />
        </div>
        <input
          type="passwords"
          placeholder="Password"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />
        <input
          type="text"
          placeholder="Confirm Password"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />

        <button className="text-sm border rounded-3xl py-3 text-center w-[80%] bg-black/85 text-white">
          Sign In
        </button>
      </section>
    </main>
  );
}

