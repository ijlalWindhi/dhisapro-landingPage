"use client";
import Image from "next/image";
import React, { useState } from "react";
import { AlignJustify, X } from "lucide-react";
import { motion } from "framer-motion";

import { NavMenu } from "@/constants/layout";
import usePositionScreen from "@/hook/usePositionScreen";

function Navbar() {
  // state
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const { isScrolled } = usePositionScreen({ threshold: 84 });

  // handler
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed w-full z-50 ${
        isScrolled
          ? "bg-n-7"
          : "bg-gray-500 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
      }`}
    >
      <div className="flex justify-between items-center gap-4 py-2 px-4 md:px-8 lg:px-20 xl:px-32 shadow-sm sm:py-4">
      <Image
        src="/images/logo.svg"
        alt="Dhisa Production"
        width={50}
        height={50}
      />
      <div className="hidden sm:flex gap-4 md:gap-10 justify-center items-center">
        {NavMenu.map((menu) => (
          <p
            key={menu.id}
            onClick={() => {
              scrollTo(menu.id);
              setShowMenu(false);
            }}
            className="text-primary cursor-pointer hover:text-secondary py-2 px-2 text-sm md:text-base font-medium"
          >
            {menu.title}
          </p>
        ))}
      </div>
      <button
        className="hidden text-sm md:text-base font-medium sm:block bg-secondary text-primary px-5 py-2 rounded-full"
        aria-label="Daftar Sekarang"
      >
        Daftar
      </button>
      </div>
      <div className="sm:hidden" onClick={() => setShowMenu(!showMenu)}>
        {showMenu ? <X size={24} /> : <AlignJustify size={24} />}
      </div>
      <div
        className={`z-1 absolute sm:hidden transition duration-200 top-16 w-full left-0 py-4 bg-n-7 shadow-sm transform ${
          showMenu ? "translate-y-0" : "-translate-y-[15rem]"
        }`}
      >
        <div
          className={
            "flex sm:hidden flex-col gap-3 justify-center items-center"
          }
        >
          {NavMenu.map((menu) => (
            <p
              key={menu.id}
              onClick={() => {
                scrollTo(menu.id);
                setShowMenu(false);
              }}
              className="text-primary cursor-pointer hover:text-secondary hover:font-semibold w-full text-center text-sm font-medium"
            >
              {menu.title}
            </p>
          ))}
          <button
            className="text-sm font-medium bg-secondary text-primary px-10 py-2 rounded-full"
            aria-label="Daftar Sekarang"
          >
            Daftar
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
