"use client";

import { useState } from "react";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full ">
      <div className=" text-background flex justify-between items-center py-xs">
        <Link className="flex gap-xs" href={"/"} onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
          <div>
            <p className="uppercase">Foo Fest</p>
            <p>June 10 - 16</p>
          </div>
        </Link>

        <button className="relative w-8 h-6 flex items-center justify-center" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`absolute h-1 w-full bg-background transition-all duration-250 ${menuOpen ? "transform rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}></span>
          <span className={`absolute h-1 w-full bg-background transition-opacity duration-250 ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}></span>
          <span className={`absolute h-1 w-full bg-background transition-all duration-250 ${menuOpen ? "transform -rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`}></span>
        </button>
      </div>

      <HeaderMenu menuOpen={menuOpen} toggleMenu={toggleMenu} />
    </header>
  );
};

export default Header;
