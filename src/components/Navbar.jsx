import React, { useState } from "react";
import { FaLock } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import barsLogo from "../assets/images/icons/bars.svg";
import barsTwo from "../assets/images/icons/bars-two.svg";
import cartLogo from "../assets/images/icons/cart.svg";
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

const Navbar = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);

  const menuItems = [
    "Home",
    "About Us",
    "Elevator",
    "Escalator",
    "Spare Parts",
    "Contact Us",
    "Newsroom",
  ];

  return (
    <div className="h-auto bg-blue-500 px-4 py-2 grid grid-cols-2 md:grid-cols-3 items-center">
      {/* Left Logo */}
      <div
        className="h-[110px] w-[139px] bg-red-900"
        style={{
          clipPath: "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
        }}></div>

      {/* Center Navigation Menu (hidden on mobile) */}
      <ul className="hidden md:flex gap-3 text-white">
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="whitespace-nowrap flex items-center gap-1 cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}>
            {item}
            {hoveredIndex === index ? (
              <IoIosArrowRoundUp />
            ) : (
              <IoIosArrowRoundDown />
            )}
          </li>
        ))}
      </ul>

      {/* Right Side Icons and Language */}
      <div className="flex justify-end items-center space-x-4">
        <ul className="flex items-center gap-4">
          {/* Language Dropdown */}
          <li>
            <details className="dropdown">
              <summary className="btn text-xs md:text-base">Language</summary>
              <ul className="menu dropdown-content bg-base-100 rounded-box z-10 w-40 md:w-52 p-2 shadow-md">
                <li>
                  <a>English</a>
                </li>
                <li>
                  <a>Japan</a>
                </li>
                <li>
                  <a>Germany</a>
                </li>
                <li>
                  <a>Bangladesh</a>
                </li>
              </ul>
            </details>
          </li>

          {/* Cart Icon */}
          <li className="w-5 h-5 md:w-auto md:h-auto">
            <img src={cartLogo} alt="Cart" className="w-full h-full" />
          </li>

          {/* Vertical Divider (hidden on mobile) */}
          <div className="hidden md:block border-l-2 h-6 mx-2 bg-amber-800"></div>

          {/* Menu Icon */}
          <li
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="cursor-pointer">
            <img
              src={isHovered ? barsTwo : barsLogo}
              alt="Menu Icon"
              className="w-6 h-6"
            />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
