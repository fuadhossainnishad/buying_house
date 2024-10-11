"use client";

import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

type Logintype = {
  Profilehandler: () => void;
};

const loginapiurl = "http://localhost:8000/login";

const logininputs = [
  ["Email", "email"],
  ["Password", "password"],
];

export default function Login({ Profilehandler }: Logintype) {
  const [logindata, setlogindata] = useState({
    email: "",
    password: "",
  });

  const { email, password } = logindata;

  const handlelogindata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlogindata({
      ...logindata,
      [e.target.name]: e.target.value,
    });
  };

  const handleloginsubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post(loginapiurl, logindata);
      alert("Login Successful!")
      // console.log(res);
    } catch (error: any) {
      console.error("Error:", error);

      // Check if there's a response from the server
      if (
        error.response &&
        error.response.data &&
        error.response.data.message
      ) {
        alert(error.response.data.message); // Server-specific message
      } else {
        alert("An error occurred. Please try again."); // Generic message for network or other errors
      }
    }
  };

  return (
    <main className="bg-white/90 space-y-4 fixed top-[25%] right-[30%] w-[40%] h-[50%] p-5 border-2 rounded-2xl">
      <section className="flex justify-end">
        <div
          className="relative w-3 h-5 cursor-pointer"
          onClick={Profilehandler}
        >
          <Image
            src="/assets/Icon/cross.png"
            alt="cross"
            layout="responsive"
            height={10}
            width={10}
          />
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
        {logininputs.map((input, index) => (
          <input
            key={index}
            type={input[1]}
            name={input[1]}
            value={logindata[input[1] as keyof typeof logindata]}
            onChange={handlelogindata}
            placeholder={input[0]}
            className="bg-white/70 w-[80%] border py-3 px-5 rounded-3xl border-cyan-900 hover:text-blue-400 placeholder:text-blue-600"
          />
        ))}

        <div className="w-[80%] hover:underline hover:text-cyan-400 text-right -space-y-3">
          <Link href="/" passHref className="">
            <h1 className=" ">forgot password?</h1>
          </Link>
        </div>
        <button
          className="text-sm border rounded-3xl py-3 text-center w-[80%] bg-black/85 text-white"
          onClick={handleloginsubmit}
        >
          Sign In
        </button>
      </section>
    </main>
  );
}
