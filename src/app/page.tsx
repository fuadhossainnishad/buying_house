"use client";

import React from "react";
import { usePathname } from "next/navigation";import { CSSTransition, TransitionGroup } from "react-transition-group";
import "./globals.css";

import Middle from "@/ComponentList/Middle/Middle";

export default function Page() {
  const pathname = usePathname();

  return (
    <TransitionGroup component={null}>
      <CSSTransition
        key={pathname}
        classNames="page-transition"
        timeout={100}
      >
        <main className="relative bg-white px-[12%] ">
          <Middle />
        </main>
      </CSSTransition>
    </TransitionGroup>
  );
}
