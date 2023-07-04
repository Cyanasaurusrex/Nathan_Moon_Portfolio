"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import "tailwindcss/tailwind.css";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef(null);
  const navbarRef = useRef(null);

  // Function for toggling nav
  const handleNav = () => {
    setNav(!nav);
  };

  // Function for closing mobile menu
  const closeMenu = () => {
    setNav(false);
  };

  // useEffect for all contained functions
  useEffect(() => {
    // Function for closing mobile dropdown when window is resized
    const handleResize = () => {
      if (window.innerWidth >= 640) {
        setNav(false);
      }
    };

    // Function for closing mobile dropdown menu when other elements are clicked
    const handleClickOutside = (event) => {
      if (
        !menuRef.current ||
        !navbarRef.current ||
        menuRef.current.contains(event.target) ||
        navbarRef.current.contains(event.target)
      ) {
        return;
      }
      setNav(false);
    };

    // Event listeners for menu functions
    window.addEventListener("resize", handleResize);
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Spacer div */}
      <div className=" pb-20" />
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="navbar--container flex flex-row justify-between px-10 py-5 mx-auto bg-transparent items-center fixed top-0 w-full"
      >
        <div className="z-50 p-4">
          <Link
            href="/"
            className="text-brand-textHeader font-primary"
            onClick={closeMenu}
          >
            Nathan Moon
          </Link>
        </div>

        {/* Default view */}
        <div
          onClick={handleNav}
          className={nav ? "hidden" : "flex sm:hidden p-4 z-50"}
        >
          <FontAwesomeIcon className="w-5" icon={faBars} />
        </div>
        <div
          onClick={handleNav}
          className={nav ? "flex sm:hidden p-4 z-50" : "hidden"}
        >
          <FontAwesomeIcon className="w-5" icon={faXmark} />
        </div>
        <div className="navbar--routeLinks hidden gap-4 items-center sm:flex">
          <Link href="/about-me" className="hover:text-brand-textHover">
            About Me
          </Link>
          <Link href="/portfolio" className="hover:text-brand-textHover">
            Portfolio
          </Link>
          <Link href="/contact-me" className="hover:text-brand-textHover">
            Contact Me
          </Link>
          <Link href="/resume" className="hover:text-brand-textHover">
            Resume
          </Link>
        </div>

        {/* Mobile view */}
        <div
          ref={menuRef}
          className={
            nav
              ? "fixed z-30 top-0 pt-20 right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-500 ease-in"
              : "fixed z-30 top-[-100%] right-0 left-0 bg-brand-primary flex flex-col justify-start items-center p-5 sm:hidden duration-500 ease-in"
          }
        >
          <div className="flex flex-col items-center justify-center gap-5">
            <Link
              onClick={handleNav}
              href="/about-me"
              className="hover:text-brand-textHover"
            >
              About Me
            </Link>
            <Link
              onClick={handleNav}
              href="/portfolio"
              className="hover:text-brand-textHover"
            >
              Portfolio
            </Link>
            <Link
              onClick={handleNav}
              href="/contact-me"
              className="hover:text-brand-textHover"
            >
              Contact Me
            </Link>
            <Link
              onClick={handleNav}
              href="/resume"
              className="hover:text-brand-textHover"
            >
              Resume
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
