import React from 'react';

import { FaLock } from "react-icons/fa";
import { CiMenuBurger } from "react-icons/ci";
import barsLogo from "../assets/images/icons/bars.svg"
import cartLogo from "../assets/images/icons/cart.svg"
const Navbar = () => {
    return (
      <div className="h-25 bg-blue-500  mx-4 grid grid-cols-3 items-center ">
        <div
          className="h-25 w-[139px] bg-red-200 ml-2"
          style={{
            "clip-path": "polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%)",
          }}></div>
        <ul className="flex gap-3 ml-9 text-white">
          <li>Home</li>
          <li>About Us</li>
          <li>Elevator</li>
          <li>Escalator</li>
          <li>Spare Parts</li>
          <li>Contact Us</li>
          <li>Newsroom</li>
        </ul>

        <div className=" flex justify-end items-end">
          <ul className="flex gap-5 justify-end p-6 items-center">
            <li>
              <details className="dropdown">
                <summary className="btn m-1">Language</summary>
                <ul className="menu dropdown-content bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
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
            <li>
              <img src={cartLogo} alt="" />
            </li>
            <div className="border-4 bg-amber-800 h-15"></div>
            <li>
              <img src={barsLogo} alt="" className="w-5" />
            </li>
          </ul>
        </div>
      </div>
    );
};

export default Navbar;