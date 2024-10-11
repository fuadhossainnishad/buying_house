"use client";

import axios from "axios";
import React, { useState } from "react";
import Image from "next/image";

const backendurl ="http://localhost:8000/signup"

const formArray = [
  ["First Name", "text", "firstname"],
  ["Last Name", "text", "lastname"],
  ["Email", "email", "email"],
  ["Mobile Number", "number", "phone"],
  ["Password", "password", "password"],
  ["Confirm Password", "password", "confirmPassword"],
];

const inputStyleClass ="bg-white/70 w-[80%] text-black border py-3 px-5 rounded-3xl border-cyan-900 placeholder:text-blue-600";

export default function Page() {
  const [formdata, setformdata] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const { firstname, lastname, email, phone,password,confirmPassword} = formdata;

  const handleformdata = (e: React.ChangeEvent<HTMLInputElement>) => {
    setformdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    // Check if passwords match
    if (password !== confirmPassword) {
      alert("Passwords not match");
      return; // Prevent form submission if passwords don't match
    }

    console.log("Form data being sent:", formdata);
    try {
      const res = await axios.post(backendurl, formdata);
      console.log("Response:", res.data);
      alert("Form data has been sent successfully");
    } catch (error: any) {
      console.error("Error response:", error.response);
      alert(error.response?.data?.message || "An error occurred");
    }
  };

  return (
    <main className="bg-white space-y-6 flex justify-center p-5">
      <section className="flex flex-col w-[40%] items-center space-y-6">
        <h1 className="text-3xl text-black font-semibold">Create Account</h1>

        {formArray.map((forminput, index) =>
          forminput[0] === "Mobile Number" ? (
            <div
              key={index}
              className="w-[80%] flex items-center border rounded-3xl border-cyan-900 bg-white/70 text-blue-400"
            >
              <div className="flex items-center px-5">
                <div className="relative h-[20px] w-[20px] mr-2">
                  <Image
                    src="/assets/Icon/bd.png"
                    alt="BD Flag"
                    layout="fill"
                    className=""
                  />
                </div>
                <span>+88</span>
              </div>

              <div className="border border-r-[.1px] h-4 border-black/50"></div>
              <input
                type={forminput[1]}
                name={forminput[2]}
                value={String(formdata[forminput[2] as keyof typeof formdata])}
                onChange={handleformdata}
                placeholder={forminput[0]}
                className="bg-white/70 w-full py-3 px-5 rounded-3xl rounded-l-none hover:text-blue-400 placeholder:text-blue-600"
              />
            </div>
          ) : (
            <input
              key={index}
              type={forminput[1]}
              name={forminput[2]}
              value={String(formdata[forminput[2] as keyof typeof formdata])}
              onChange={handleformdata}
              placeholder={forminput[0]}
              className={inputStyleClass}
            />
          )
        )}

        <button
          className="text-sm border rounded-3xl py-3 text-center w-[80%] bg-black/85 text-white"
          type="submit"
          value="submit"
          onClick={handleSubmit}
        >
          Sign Up
        </button>
      </section>
    </main>
  );
}
