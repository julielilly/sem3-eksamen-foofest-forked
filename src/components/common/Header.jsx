"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import HeaderMenu from "./HeaderMenu";
import Image from "next/image";
import logo from "@/app/assets/logo.png";
import Link from "next/link";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHomePage, setIsHomePage] = useState(true);

  // Gets the current pathname
  const pathname = usePathname();

  // Ref for the hamburger button
  const buttonRef = useRef(null);

  // Toggle the menu state
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Detect the scroll event to toggle the background
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    // Close the menu if click anywhere
    const handleClickAnywhere = (event) => {
      // Check if the menu is open and it is not the close icon being clicked
      console.log("close menu");
      if (menuOpen && !buttonRef.current?.contains(event.target)) {
        setMenuOpen(false); // Close the menu if the click is not on the button (the button closes the menu elsewhere)
      }
    };

    // Initialize scroll state and check pathname on mount
    handleScroll();
    setIsHomePage(pathname === "/");

    // Listen to scroll and click events
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mouseup", handleClickAnywhere);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mouseup", handleClickAnywhere);
    };
  }, [pathname, menuOpen]); // React to pathname changes and menu state

  return (
    // if we have scrolled or we are not on the homePage set the background
    <header className={`flex w-full fixed z-50 transition-all duration-300 ${isScrolled || !isHomePage ? "bg-foreground" : "bg-transparent"}`}>
      <div className=" text-background w-[--content] m-auto flex justify-between items-center py-xs ">
        <Link className="flex items-center gap-xs" href={"/"}>
          <Image src={logo} alt="logo" width={50} height={50}></Image>
          <div>
            <p className="uppercase font-caesar-dressing text-[1.5rem] leading-tight">Foo Fest</p>
            <p>June 10 - 16</p>
          </div>
        </Link>

        <button ref={buttonRef} className="relative w-8 h-6 flex items-center justify-center" onClick={toggleMenu} aria-label="Toggle Menu">
          <span className={`absolute h-1 w-full bg-background transition-all duration-250 ${menuOpen ? "transform rotate-45 top-1/2 -translate-y-1/2" : "top-0"}`}></span>
          <span className={`absolute h-1 w-full bg-background transition-opacity duration-250 ${menuOpen ? "opacity-0" : "top-1/2 -translate-y-1/2"}`}></span>
          <span className={`absolute h-1 w-full bg-background transition-all duration-250 ${menuOpen ? "transform -rotate-45 top-1/2 -translate-y-1/2" : "bottom-0"}`}></span>
        </button>
      </div>

      <div>
        <HeaderMenu menuOpen={menuOpen} />
      </div>
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
