import React from "react";
import QuoteThree from "../assets/images/shapes/quote-three-bg.png";
import MoonShape from "../assets/images/shapes/moon-shape.png";
import PlaneLogo from "../assets/images/shapes/contact-us-three-plane.png";
const TechnicalStrength = () => {
    console.log(PlaneLogo)
  return (
    <div className="flex mt-5 p-10 relative bg-gray-200">
      <div
        style={{
          backgroundImage: `url(${QuoteThree})`,
          clipPath:
            "polygon(0% 0%, 100% 0%, 100% 100%, 94% 97%, 52% 71%, 35% 78%, 0 97%)",
        }}
        className="w-1/2 h-96 bg-cover bg-center bg-gray-200 rounded-lg shadow-lg p-10 relative overflow-hidden">
        <img
          src={MoonShape}
          alt="Moon"
          className="w-[170px] object-cover absolute -top-10 -left-7"
        />

        <h1
          className="absolute 
         right-90 text-white text-4xl font-bold ">
          Technical Strength
        </h1>
      </div>

      <div className=" bg-gray-300">
              <div className="w-[200px] absolute">
                  <img src={PlaneLogo} alt="" className="w-16 relative -left-5" />
        </div>
        <video controls className="w-[700px] h-[370px]">
          <source src="/video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
};

export default TechnicalStrength;
