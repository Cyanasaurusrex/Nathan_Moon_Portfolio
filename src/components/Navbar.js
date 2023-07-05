"use client";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { Link as ScrollLink } from 'react-scroll';
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
      <div className=" pb-20"  id="aboutMe"/>
      {/* Navbar */}
      <nav
        ref={navbarRef}
        className="navbar--container flex flex-row justify-between px-10 py-4 mx-auto bg-brand-primary items-center fixed top-0 w-full z-50"
      >
        <div className="z-40 p-4 pl-0">
          <ScrollLink
          className="cursor-pointer text-brand-textHeader text-xl font-primary hover:text-brand-textHightlight"
          onClick={closeMenu}
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Nathan Moon
            </ScrollLink>
        </div>

        {/* Nav Toggles */}
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

        {/* Default view */}
        <div className="navbar--routeLinks hidden gap-4 items-center sm:flex">
        <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover"
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </ScrollLink>
            <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover"
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </ScrollLink>    
          <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover pr-5"
              activeClass="active"
              to="ContactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </ScrollLink>
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
          <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover"
          onClick={handleNav}
              activeClass="active"
              to="aboutMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              About Me
            </ScrollLink>
            <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover"
          onClick={handleNav}
              activeClass="active"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Portfolio
            </ScrollLink>
            <ScrollLink
          className="cursor-pointer text-brand-accent hover:text-brand-textHover"
          onClick={handleNav}
              activeClass="active"
              to="contactMe"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              Contact Me
            </ScrollLink>
          </div>
        </div>
      </nav>
    </div>
  );
}
