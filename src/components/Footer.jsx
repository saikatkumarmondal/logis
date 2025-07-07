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
      <footer className="footer sm:footer-horizontal bg-blue-900 text-base-content p-10 flex flex-col sm:flex-row sm:flex-wrap gap-8">
        <nav className="flex flex-col sm:flex-row sm:items-center sm:gap-6 flex-1 min-w-[220px]">
          <ul className="flex items-center gap-2">
            <li>
              <img
                src={FooterLogo}
                alt="Footer Logo"
                className="w-[50px] h-[50px]"
              />
            </li>
            <li className="text-xl text-white">Logistick</li>
          </ul>
          <p className="text-white mt-4 sm:mt-0 sm:ml-6 max-w-xs leading-relaxed text-sm sm:text-base">
            Our secure online donation <br /> platform allows you to make <br />{" "}
            contributions easily and <br /> efficiently.
          </p>
          <ul className="flex items-center gap-4 mt-4 sm:mt-0 sm:ml-6 flex-wrap">
            <li className="rounded-full bg-gray-400 p-2">
              <a
                href="https://www.facebook.com/Logistick"
                aria-label="Facebook">
                <FaFacebook />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a href="https://www.youtube.com/Logistick" aria-label="YouTube">
                <IoLogoYoutube />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a href="https://x.com/Logistick" aria-label="X Twitter">
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a
                href="https://www.instagram.com/Logistick"
                aria-label="Instagram">
                <PiInstagramLogoFill />
              </a>
            </li>
          </ul>
        </nav>

        <nav className="space-y-2 flex-1 min-w-[150px]">
          <h6 className="footer-title text-white">Quick Links </h6>
          <a className="link link-hover text-white block">Request A Freight</a>
          <a className="link link-hover text-white block">Our Services</a>
          <a className="link link-hover text-white block">What We Do</a>
          <a className="link link-hover text-white block">Abandonment Cart</a>
        </nav>

        <nav className="space-y-2 flex-1 min-w-[150px]">
          <h6 className="footer-title text-white">My account</h6>
          <a className="link link-hover text-white block">Forum Support</a>
          <a className="link link-hover text-white block">Help & FAQ</a>
          <a className="link link-hover text-white block">Contact Us</a>
          <a className="link link-hover text-white block">Pricing and plans</a>
          <a className="link link-hover text-white block">Cookies Policy</a>
        </nav>

        <div className="flex flex-col gap-8 flex-1 min-w-[280px]">
          <nav className="space-y-4">
            <ul className="flex items-center gap-4">
              <li>
                <img
                  src={TruckImage}
                  alt=""
                  className="w-[80px] h-[60px] object-cover rounded"
                />
              </li>
              <li className="mb-3">
                <p className="flex text-gray-200 gap-1 items-center">
                  <CiCalendar size={24} color="red" /> 24th May 2026
                </p>
                <p className="font-bold text-white leading-snug mt-2">
                  This Place Really <br /> Place Awesome
                </p>
              </li>
            </ul>
          </nav>
          <nav className="space-y-4">
            <ul className="flex items-center gap-4">
              <li>
                <img
                  src={TruckTwoImage}
                  alt=""
                  className="w-[80px] h-[60px] object-cover rounded"
                />
              </li>
              <li className="mb-3">
                <p className="flex text-gray-200 gap-1 items-center">
                  <CiCalendar size={24} color="red" /> 24th May 2026
                </p>
                <p className="font-bold text-white leading-snug mt-2">
                  This Place Really <br /> Place Awesome
                </p>
              </li>
            </ul>
          </nav>
        </div>

        <nav className="flex flex-col flex-1 min-w-[220px]">
          <h6 className="text-white font-bold text-xl">Address:</h6>
          <p className="text-gray-200">123 Main St, Anytown, USA</p>
          <div className="mt-8" />
          <h6 className="text-white font-bold text-xl">Hours:</h6>
          <p className="text-gray-200">Monday - Friday: 9:00 AM - 5:00 PM</p>
        </nav>
      </footer>

      <div className="divider bg-blue-600"></div>

      <footer className="footer bg-base-200 mx-auto text-base-content border-base-300 border-t px-5 py-4 grid grid-cols-1 sm:grid-cols-3 items-center justify-between gap-4">
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <img src={FooterLogo} alt="" className="w-[60px] h-[50px]" />
            </li>
            <li>
              <p className="text-xl text-black font-bold">Logistick</p>
            </li>
          </ul>
        </nav>

        <nav className="text-center sm:text-left">
          <p className="text-gray-800 text-sm sm:text-base">
            © 2023 <span className="text-red-500">SAIKAT</span> Logistick. All
            rights reserved.
          </p>
        </nav>

        <nav>
          <ul className="flex flex-wrap justify-center sm:justify-end gap-4 text-sm sm:text-base">
            <li>
              <a href="">Company</a>
            </li>
            <li>
              <a href="">Support</a>
            </li>
            <li>
              <a href="">Policy</a>
            </li>
          </ul>
        </nav>
      </footer>
    </>
  );
};

export default Footer;
