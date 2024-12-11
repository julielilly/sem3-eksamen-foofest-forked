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
    <header className=" flex w-full bg-foreground fixed z-50">
      <div className=" text-background w-[--content] m-auto flex justify-between items-center py-xs ">
        <Link className="flex items-center gap-xs" href={"/"} onClick={() => setMenuOpen(false)}>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
          <div>
            <p className="uppercase font-caesar-dressing text-[1.5rem] leading-tight">Foo Fest</p>
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

// normal: "var(--text)",
// "step-1": "var(--step-1)",
// "step-2": "var(--step-2)",
// "step-3": "var(--step-3)",
// title: "var(--title)",
// "big-title": "var(--big-title)",
