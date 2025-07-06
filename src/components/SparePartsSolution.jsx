import React from "react";
import "./SparePartsSolution.css";
import SecondIcon from "../assets/images/icons/tranport-way-icon3.svg";

const SparePartsSolution = () => {
  return (
    <div className="pl-10  ">
      <h2 className="text-4xl font-bold text-center">Spare Parts Solution</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-6">
        {[1, 2, 3, 4].map((_, index) => (
          <div key={index} className="relative p-2 card">
            <div>
              <div
                className="w-[190px] h-[150px] bg-red-500 flex items-center justify-center mx-auto"
                style={{
                  clipPath:
                    "polygon(50% 0%, 83% 12%, 100% 43%, 80% 78%, 44% 79%, 2% 100%, 20% 75%, 0% 43%, 17% 12%)",
                }}>
                <img
                  src={SecondIcon}
                  alt=""
                  className="opacity-100 w-12 h-12"
                />
              </div>
            </div>

            <div className="relative w-[300px] h-[300px] bg-gray-400 space-y-5  rounded-lg p-4">
              <h2 className="text-3xl font-bold text-center pt-6">
                Select services
              </h2>
              <p className="text-center text-gray-200">
                Temperate ocean-bass sea chub chub <br /> treefish eulachon
                tidewater
              </p>

              <div className="absolute bottom-[-70px] left-1/2 -translate-x-1/2 w-[2px] h-[50px] bg-gray-500"></div>

              <div className="absolute w-[40px] h-[40px] flex items-center  justify-center rounded-full bg-amber-500 bottom-[-90px]  left-1/2 -translate-x-1/2 text-xl font-bold text-black">
                {index + 1}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="border-2 border-dashed border-gray-300 relative -bottom-11 mb-9"></div>
    </div>
  );
};

export default SparePartsSolution;
