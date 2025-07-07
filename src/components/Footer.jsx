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
      <footer className="footer sm:footer-horizontal bg-blue-900 text-base-content p-10">
        <nav>
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
          <p className="text-white">
            Our secure online donation <br /> platform allows you to make <br />{" "}
            contributions easily and <br /> efficiently.
          </p>
          <ul className="flex items-center gap-4 mt-4">
            <li className="rounded-full bg-gray-400 p-2">
              <a href="https://www.facebook.com/Logistick">
                <FaFacebook />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a href="https://www.youtube.com/Logistick">
                <IoLogoYoutube />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a href="https://x.com/Logistick">
                <FaSquareXTwitter />
              </a>
            </li>
            <li className="rounded-full bg-gray-400  p-2">
              <a href="https://www.instagram.com/Logistick">
                <PiInstagramLogoFill />
              </a>
            </li>
          </ul>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title text-white">Quick Links </h6>
          <a className="link link-hover text-white">Request A Freight</a>
          <a className="link link-hover text-white">Our Services</a>
          <a className="link link-hover text-white">What We Do</a>
          <a className="link link-hover text-white">Abandonment Cart</a>
        </nav>
        <nav className="space-y-2">
          <h6 className="footer-title text-white">My account</h6>
          <a className="link link-hover text-white">Forum Support</a>
          <a className="link link-hover text-white">Help & FAQ</a>
          <a className="link link-hover text-white">Contact Us</a>
          <a className="link link-hover text-white">Pricing and plans</a>
          <a className="link link-hover text-white">Cookies Policy</a>
        </nav>
        <div>
          <nav className="space-y-2">
            <ul className="flex ">
              <li>
                <img src={TruckImage} alt="" className="w-[80px] h-[60px]" />
              </li>
              <li className="mb-3">
                <p className="flex text-gray-200 gap-1 ">
                  <CiCalendar size={24} color="red" /> 24th May 2026
                </p>
              </li>
              <li>
                <p className="relative -left-25 font-bold text-white">
                  <br /> This Place Really <br /> Place Awesome
                </p>
              </li>
            </ul>
            <ul></ul>
          </nav>
          <nav className="space-y-2">
            <ul className="flex ">
              <li>
                <img src={TruckTwoImage} alt="" className="w-[80px] h-[60px]" />
              </li>
              <li className="mb-3">
                <p className="flex text-gray-200 gap-1 ">
                  <CiCalendar size={24} color="red" /> 24th May 2026
                </p>
              </li>
              <li>
                <p className="relative -left-25 font-bold text-white">
                  <br /> This Place Really <br /> Place Awesome
                </p>
              </li>
            </ul>
          </nav>
        </div>
        <nav>
          <h6 className="text-white font-bold text-xl">Address:</h6>
          <p className="text-gray-200">123 Main St, Anytown, USA</p>
          <br />
          <br />
          <br />
          <h6 className="text-white font-bold text-xl">Hours:</h6>
          <p className="text-gray-200">Monday - Friday: 9:00 AM - 5:00 PM</p>
        </nav>
      </footer>
      <div className="divider bg-blue-600 "></div>
      <footer className="footer bg-base-200 mx-auto text-base-content border-base-300 border-t px-10 py-4 grid grid-cols-3 items-center justify-space-between">
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
        <nav className="">
          <p className="text-gray-800">
            © 2023 <span className="text-red-500">SAIKAT</span> Logistick. All
            rights reserved.
          </p>
        </nav>

        <nav>
          <ul className="flex items-center gap-4">
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
