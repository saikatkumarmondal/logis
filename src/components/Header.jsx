import React from 'react';
import { FaLocationDot } from "react-icons/fa6";
import { BsTelephone } from "react-icons/bs";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { BsYoutube } from "react-icons/bs";
const Header = () => {
    return (
      <div className="flex  justify-between p-5">
        <ul className="flex gap-2">
          <li className="text-white flex items-center gap-2 ">
            <FaLocationDot></FaLocationDot> 55 Main Street, 2nd block, Malborne,
            Australia
          </li>
          <li className="text-white flex items-center gap-2">
            <BsTelephone></BsTelephone>
            support@example.com
          </li>
        </ul>
        <ul className="flex gap-5 items-center ">
          <div
            className="flex items-center gap-3 bg-red-600 p-4 text-white"
            style={{
              "clip-path": "polygon(7% 0, 100% 0%, 95% 99%, 0% 100%)",
            }}>
            <li>Help</li>

            <li>Support</li>

            <li>Faqs</li>
          </div>

          <li>
            <FaTwitter></FaTwitter>
          </li>
          <li>
            <FaFacebook></FaFacebook>
          </li>
          <li>
            <FaInstagramSquare></FaInstagramSquare>
          </li>
          <li>
            <BsYoutube></BsYoutube>
          </li>
        </ul>
      </div>
    );
};

export default Header;