import React from "react";
import FooterLogo from "/logois.png";
import { FaFacebook } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaSquareXTwitter } from "react-icons/fa6";
import { PiInstagramLogoFill } from "react-icons/pi";
import TruckImage from "/truck.jpg";
import TruckTwoImage from "/truck1.jfif";
import { CiCalendar } from "react-icons/ci";

const Footer = () => {
  return (
    <>
      <footer className="bg-blue-900 text-white px-5 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Logo + Social */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
                src={FooterLogo}
                alt="Footer Logo"
                className="w-[50px] h-[50px]"
              />
              <span className="text-xl font-semibold">Logistick</span>
            </div>
            <p className="text-sm">
              Our secure online donation platform allows you to make
              contributions easily and efficiently.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                className="p-2 bg-gray-400 rounded-full"
                href="https://www.facebook.com/Logistick">
                <FaFacebook />
              </a>
              <a
                className="p-2 bg-gray-400 rounded-full"
                href="https://www.youtube.com/Logistick">
                <IoLogoYoutube />
              </a>
              <a
                className="p-2 bg-gray-400 rounded-full"
                href="https://x.com/Logistick">
                <FaSquareXTwitter />
              </a>
              <a
                className="p-2 bg-gray-400 rounded-full"
                href="https://www.instagram.com/Logistick">
                <PiInstagramLogoFill />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h6 className="text-lg font-semibold mb-2">Quick Links</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <a className="hover:underline" href="#">
                  Request A Freight
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Our Services
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  What We Do
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Abandonment Cart
                </a>
              </li>
            </ul>
          </div>

          {/* My Account */}
          <div>
            <h6 className="text-lg font-semibold mb-2">My Account</h6>
            <ul className="space-y-1 text-sm">
              <li>
                <a className="hover:underline" href="#">
                  Forum Support
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Help & FAQ
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Contact Us
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Pricing and Plans
                </a>
              </li>
              <li>
                <a className="hover:underline" href="#">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Truck News */}
          <div className="space-y-5">
            {[TruckImage, TruckTwoImage].map((img, idx) => (
              <div key={idx} className="flex items-start gap-2">
                <img
                  src={img}
                  alt=""
                  className="w-[70px] h-[60px] object-cover"
                />
                <div>
                  <p className="flex items-center gap-1 text-sm text-gray-200">
                    <CiCalendar size={20} className="text-red-400" /> 24th May
                    2026
                  </p>
                  <p className="text-white text-sm font-semibold">
                    This Place Really
                    <br />
                    Feels Awesome
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Address Section */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-sm">
          <div>
            <h6 className="font-bold text-lg">Address:</h6>
            <p className="text-gray-300">123 Main St, Anytown, USA</p>
          </div>
          <div>
            <h6 className="font-bold text-lg">Hours:</h6>
            <p className="text-gray-300">Mon - Fri: 9:00 AM - 5:00 PM</p>
          </div>
        </div>
      </footer>

      {/* Bottom Footer */}
      <div className="bg-base-200 border-t border-base-300 px-5 py-4">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <img src={FooterLogo} alt="" className="w-[50px] h-[50px]" />
            <p className="font-bold text-black">Logistick</p>
          </div>
          <p className="text-gray-800 text-center">
            © 2023 <span className="text-red-500">SAIKAT</span> Logistick. All
            rights reserved.
          </p>
          <ul className="flex gap-4">
            <li>
              <a className="hover:underline" href="#">
                Company
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Support
              </a>
            </li>
            <li>
              <a className="hover:underline" href="#">
                Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Footer;
