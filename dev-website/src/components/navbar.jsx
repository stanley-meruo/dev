import React, { useState } from "react";
import logo from "/WESTON.svg"
import menu from "/menu.svg"
import close from "/close.svg";
import { Link } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);

  return (
    <>
      <div className="w-full flex items-center sticky top-0 justify-between p-6 bg-white text-black z-50 md:py-4 lg:px-10 lg:py-4">
        <div className="w-20 md:w-24 lg:w-28">
          <img src={logo} />
        </div>

        {/* Menu */}
        <ul className="hidden text-lg md:flex md:gap-6">
          <li className="p-3">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:border-black hover:pb-2"
            >
              Home
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="/about"
              className="hover:border-b-2 hover:border-black cursor-pointer hover:pb-2"
            >
              About
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="services"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:border-black hover:pb-2"
            >
              Properties
            </Link>
          </li>
          <li className="p-3">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="hover:border-b-2 hover:border-black hover:pb-2"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
          {!nav ? (
            <img src={menu} className="w-5 sm:w-6" />
          ) : (
            <img src={close} className="w-5 sm:w-6" />
          )}
        </div>

        {/* Mobile menu */}
        <ul
          className={
            !nav
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-gray-100 flex flex-col pt-32 items-center px-10"
          }
        >
          <li className="py-5 text-xl font-semibold hover:text-gray-500">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <div className="w-full h-px bg-gray-500 "></div>
          <li className="py-5 text-xl font-semibold hover:text-gray-500">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <div className="w-full h-px bg-gray-500"></div>
          <li className="py-5 text-xl font-semibold hover:text-gray-500">
            <Link
              onClick={handleClick}
              to="services"
              smooth={true}
              duration={500}
            >
              Properties
            </Link>
          </li>
          <div className="w-full h-px bg-gray-500"></div>
          <li className="py-5 text-xl font-semibold hover:text-gray-500">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
          <div className="w-full h-px bg-gray-500"></div>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
