// src/components/Banner.jsx
import React, { useEffect, useRef } from "react";
import ReactPlayer from "react-player";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import planeImage from "/contact-us-three-plane.png";
const Banner = () => {
  const planeRef = useRef();
  const textRef = useRef();
  const buttonRef = useRef();
  useEffect(() => {
    if (planeRef.current) {
      gsap.to(planeRef.current, {
        rotation: 360,
        y: 120,
        duration: 1,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    }
  }, []);

  useEffect(() => {
    gsap.from(textRef.current, {
      opacity: 1,
      y: 45,

      duration: 2,
      repeat: -1,
      ease: "power4.out",
    });
  }, []);

  useEffect(() => {
    gsap.to(buttonRef.current, {
      scale: 1.1,
      backgroundColor: "#f59e0b",
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      ease: "power1.inOut",
    });
  }, []);

  const SquareCheckIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="w-4 h-4"
      fill="currentColor">
      <path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
    </svg>
  );

  const ArrowCircleRightIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4 h-4"
      fill="currentColor">
      <path d="M504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-144 0c0-13.3-10.7-24-24-24H200v-72c0-9.3-11.2-14-17.9-7.4L105 248.6c-4.7 4.7-4.7 12.3 0 17l77.1 77.1c6.7 6.7 17.9 2 17.9-7.4V280h136c13.3 0 24-10.7 24-24z" />
    </svg>
  );

  return (
    <div
      className="relative w-full min-h-[500px] md:h-[500px] flex gap-14 flex-col md:flex-row items-center justify-center md:justify-end overflow-hidden py-8 md:py-0"
      style={{
        backgroundImage: `url('/image.jpg')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
      {/* Video Player */}
      <div className="relative md:absolute md:left-0 md:top-1/2 md:-translate-y-1/2 md:ml-16 z-20 mb-8 md:mb-0">
        <div className="w-[250px] h-[250px] md:w-[300px] md:h-[300px] rounded-full overflow-hidden border-8 border-white shadow-xl flex items-center justify-center mx-auto">
          <video
            src="/video.mp4"
            autoPlay
            muted
            playsInline
            controls
            style={{ width: "100%", height: "100%" }}></video>
        </div>
      </div>

      {/* Text and Buttons */}
      <div className="relative z-10 text-white w-full md:w-1/2 lg:w-2/5 ml-auto md:ml-[400px] pr-4 md:pr-16 flex flex-col items-center md:items-start justify-end text-center md:text-left px-4">
        <div className="absolute" data-aos="fade-left">
          <img
            src={planeImage}
            alt=""
            className="relative -top-55 left-100"
            ref={planeRef}
          />
        </div>
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight mb-6"
          ref={textRef}>
          Welcome to SIFA Elevator
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 items-center">
          <button className="flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md transition duration-300 ease-in-out w-full sm:w-auto justify-center">
            View services <SquareCheckIcon />
          </button>
          <button className="flex items-center gap-2 bg-transparent border-2 border-white hover:bg-white hover:text-red-600 text-white font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-md transition duration-300 ease-in-out w-full sm:w-auto justify-center">
            Who we are <ArrowCircleRightIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
