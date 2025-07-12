import React from "react";
import QuoteThree from "../assets/images/shapes/quote-three-bg.png";
import MoonShape from "../assets/images/shapes/moon-shape.png";
import PlaneLogo from "../assets/images/shapes/contact-us-three-plane.png";

const TechnicalStrength = () => {
  return (
    <div className="flex flex-col md:flex-row mt-5 p-4 md:p-10 relative bg-gray-200 gap-6 md:gap-10 overflow-hidden">
      {/* <div className="absolute -right-170 w-full z-10 pointer-events-none">
        <img src={PlaneLogo} alt="Plane" className="w-24 md:w-40 animate-fly" />
      </div> */}

      <div
        className="absolute -right-170 w-full z-10 pointer-events-none"
        data-aos="zoom-in-left">
        <img
          src={PlaneLogo}
          alt="Plane"
          className="w-24 md:w-40 animate-flyWithWave"
        />
      </div>
      <div
        style={{
          backgroundImage: `url(${QuoteThree})`,
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 94% 97%, 52% 71%, 35% 78%, 0 97%)",
        }}
        className="w-full md:w-1/2 h-64 md:h-96 bg-cover bg-center bg-gray-200 rounded-lg shadow-lg p-6 md:p-10 relative overflow-hidden">
        <img
          src={MoonShape}
          alt="Moon"
          className="w-32 md:w-[170px] object-cover absolute -top-8 -left-6 md:-top-10 md:-left-7"
        />

        <h1 className="absolute right-6 md:right-24 top-6 text-white text-2xl md:text-4xl font-bold">
          Technical Strength
        </h1>
      </div>

      <div className="w-full md:w-1/2 bg-gray-300 relative flex flex-col items-center md:items-start p-4 rounded-lg">
        <video
          controls
          className="w-full max-w-full md:max-w-[700px] h-auto md:h-[370px] rounded-md mt-16 md:mt-0">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TechnicalStrength;
