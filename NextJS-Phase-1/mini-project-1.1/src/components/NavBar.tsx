"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavBar = () => {
  const currentPath: string = usePathname();
  return (
    <header>
      <nav className="navbar w-full h-[10vh] sticky top-0 bg-neutral-800 flex items-center justify-around z-50">
        <h1 className="font-semibold text-xl">Mini Project</h1>
        <ul className="flex space-x-10 text-md">
          <li className={`border-b-2 ${currentPath === "/" ? "text-blue-200 border-blue-500" : "text-white border-transparent"} hover:border-b-2 hover:border-blue-500 cursor-pointer`}>
            <Link href="/">Home</Link>
          </li>
          <li className={`border-b-2 ${currentPath === "/about" ? "text-blue-200 border-blue-500" : "text-white border-transparent"} hover:border-b-2 hover:border-blue-500 cursor-pointer`}>
            <Link href="/about">About</Link>
          </li>
          <li className={`border-b-2 ${currentPath === "/contact" ? "text-blue-200 border-blue-500" : "text-white border-transparent"} hover:border-b-2 hover:border-blue-500 cursor-pointer`}>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
