import React, { useEffect, useRef } from "react";
import "./SparePartsSolution.css";
import SecondIcon from "../assets/images/icons/tranport-way-icon3.svg";
import gsap from "gsap";
import StarImage from "../assets/star.png";
const SparePartsSolution = () => {
  const svgRef = useRef();
  const startRef = useRef();
  useEffect(() => {
    gsap.to(svgRef.current, {
      x: -100,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

useEffect(() => {
  const star = startRef.current;

  const animate = () => {
    const screenWidth = window.innerWidth;
    const endX = screenWidth - 70;

    gsap.fromTo(
      star,
      { x: -50, rotate: 360 },
      {
        x: endX,
        rotate: -360,
        duration: 5,
        delay: 1,
        repeat: -1,
        ease: "linear",
      }
    );
  };

  animate(); // Run on mount
  window.addEventListener("resize", animate); // Re-run on resize

  return () => window.removeEventListener("resize", animate); // Cleanup
}, []);
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
              <img src={SecondIcon} alt="" className="opacity-100 w-12 h-12" />
            </div>
          </div>

          <div
            className="relative w-[300px] h-[300px] bg-gray-400 space-y-5  rounded-lg p-4"
            data-aos="fade-up">
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
    <div className="w-full overflow-x-hidden">
      <div className="w-9 h-4 absolute left-1/2 -translate-x-1/2">
        <img
          src={StarImage}
          alt=""
          className="relative -bottom-9 w-full h-auto"
          ref={startRef}
        />
      </div>

      <svg
        viewBox="0 0 1500 160"
        xmlns="http://www.w3.org/2000/svg"
        ref={svgRef}
        className="w-full h-[100px] md:h-[140px] lg:h-[160px] relative -top-7">
        <path
          d="M 10 80 Q 750 95 1480 80"
          stroke="black"
          fill="transparent"
          strokeWidth="2"
        />
      </svg>
    </div>
  </div>
);
};

export default SparePartsSolution;
