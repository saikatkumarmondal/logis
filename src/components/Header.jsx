import React from "react";
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FaTwitter, FaFacebook, FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";

const Header = () => {
  return (
    <div className="hidden md:flex md:sticky md:top-0 md:z-50  md:flex-row justify-between items-center gap-4 md:gap-0 p-5 bg-blue-700">
      {/* Left: Address + Email */}
      <ul className="flex flex-col md:flex-row gap-2 text-sm md:text-base">
        <li className="text-white flex items-center gap-6 mr-5">
          <FaLocationDot /> 55 Main Street, 2nd block, Malborne, Australia
        </li>
        <li className="text-white flex items-center gap-2">
          <BsTelephone />
          support@example.com
        </li>
      </ul>

      {/* Right: Help/Support/Faqs + Social Icons */}
      <ul className="flex flex-col md:flex-row gap-3 md:gap-5 items-center">
        {/* Red Clipped Box */}
        <div
          className="flex items-center gap-3 bg-red-600 p-3 text-white"
          style={{
            clipPath: "polygon(7% 0, 100% 0%, 95% 99%, 0% 100%)",
          }}>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-4">
            {["Help", "Support", "Faqs"].map((item, index) => (
              <li
                key={index}
                className="cursor-pointer hover:underline hover:text-black hover:bg-white px-2 py-1 rounded-md transition duration-300 text-center">
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 text-white text-lg">
          <FaTwitter className="cursor-pointer hover:scale-150 transition duration-300" />
          <FaFacebook className="cursor-pointer hover:scale-150 transition duration-300" />
          <FaInstagramSquare className="cursor-pointer hover:scale-150 transition duration-300" />
          <BsYoutube className="cursor-pointer hover:scale-150 transition duration-300" />
        </div>
      </ul>
    </div>
  );
};

export default Header;
