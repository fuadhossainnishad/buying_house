"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import Link from "next/link";

import fav from "@/assets/Icon/fav2.png";
import cart from "@/assets/Icon/cart2.png";
import profile from "@/assets/Icon/profile3.png";
import left from "@/assets/Icon/left.png";
import Cart from "../Cart/Cart";
import Login from "../Login";

export default function Upper() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const categories: string[] = [
    "All Categories",
    "Houses",
    "Apartments",
    "Commercial",
  ];

  const filteredCategories = categories.filter((category) =>
    category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleCategoryClick = () => {
    setIsOpen(!isOpen);
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
    setIsOpen(false);
    setSearchTerm("");
  };

  //For cart open

  const [cartopen, setCartopen] = useState(false);

  const Carthandler = () => {
    setCartopen(!cartopen);
  };

  //For Profile open
  const [profileopen, setProfileopen] = useState(false);
  const Profilehandler = () => {
    setProfileopen(!profileopen);
  };

  return (
    <main className="flex justify-between items-center px-[12%] py-6 bg-white text-black">
      <section>
        <Link href="/">
          <div className="text-xl font-bold">
            <h1 className="">Buying</h1>
            <h1 className="ml-[34px] -mt-3">House</h1>
          </div>
        </Link>
      </section>
      <section className="flex items-center text-sm ">
        <div className="relative flex items-center">
          <button
            className="border border-r-0 rounded-l-3xl pl-5 p-3"
            onClick={handleCategoryClick}
          >
            {selectedCategory}
          </button>

          <div className="border-t border-b pl-1 pr-4 py-3.5">
            <div className="relative w-4 h-4 -rotate-90 ">
              <Image src={left} alt="left" layout="fill" />
            </div>
          </div>
          {/* Divider */}
          <div className="h-5 border-l  border-gray-300"></div>

          {/* Search Input */}
          <input
            type="search"
            className="border-t border-b border-l-0 pl-4 pr-52 py-3 outline-none"
            placeholder="Search..."
          />
        </div>
        <button className="border border-l-0 rounded-r-3xl px-5 py-3 bg-gray-500">
          Search
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute z-10 border bg-white w-[10%] top-16">
            <input
              type="text"
              className="border-b px-3 py-2 w-full"
              placeholder="Search categories..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <ul className="max-h-60 overflow-y-auto">
              {filteredCategories.map((category, index) => (
                <li
                  key={index + 1}
                  className="px-3 py-2 hover:bg-gray-100 cursor-pointer"
                  onClick={() => handleCategorySelect(category)}
                >
                  {category}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
      <section className="flex gap-4">
        <div className="flex items-center">
          <div className="relative w-8 h-8">
            <Image src={fav} alt="fav" layout="fill" />
          </div>
        </div>
        <div className="flex items-center cursor-pointer" onClick={Carthandler}>
          <div className="relative w-8 h-8">
            <Image src={cart} alt="cart" layout="fill" />
          </div>
          <div className="text-xs">
            <h1>Cart</h1>
            <h1>$0.00</h1>
          </div>
        </div>
        <div
          className="flex items-center cursor-pointer"
          onClick={Profilehandler}
        >
          <div className="relative w-8 h-8">
            <Image src={profile} alt="profile" layout="fill" />
          </div>
          <div className="text-xs">
            <h1>Sign In</h1>
            <h1>Account</h1>
          </div>
        </div>
      </section>
      {cartopen && <Cart Carthandler={Carthandler} />}
      {profileopen && <Login Profilehandler={Profilehandler} />}
    </main>
  );
}
