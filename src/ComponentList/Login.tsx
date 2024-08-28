import React from "react";
import Image from 'next/image';
import Link from "next/link";

import cross from "@/assets/Icon/cross.png";
import Input from "postcss/lib/input";

type Logintype = {
  Profilehandler: () => void;
};

export default function Login({ Profilehandler }: Logintype) {
  return (
    <main className="bg-white/90 space-y-4 fixed top-[25%] right-[30%] w-[40%] h-[50%] p-5 border-2 rounded-2xl">
      <section className="flex justify-end">
        <div
          className="relative w-3 h-5 cursor-pointer"
          onClick={Profilehandler}
        >
          <Image src={cross} alt="cross" layout="fill" />
        </div>
      </section>
      <section className="flex flex-col items-center">
        <h1 className="text-2xl font-bold">Sign In</h1>
        <p className="text-sm text-center">
          Don&apos;t have an account yet?{" "}
          <Link
            href="signup"
            passHref
            onClick={Profilehandler}
            className="text-blue-400"
          >
            Sign up
          </Link>{" "}
          for free
        </p>
      </section>
      <section className="flex flex-col items-center space-y-4">
        <input
          type="text"
          placeholder="Email"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />
        <input
          type="passwords"
          placeholder="Password"
          className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
        />
        <div className="w-[80%] hover:underline hover:text-cyan-400 text-right -space-y-3">
          <Link href="/" passHref className="">
            <h1 className=" ">forgot password?</h1>
          </Link>
        </div>
        <button className="text-sm border rounded-3xl py-3 text-center w-[80%] bg-black/85 text-white">
          Sign In
        </button>
      </section>
    </main>
  );
}
