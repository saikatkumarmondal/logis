import React from "react";
import Marquee from "react-fast-marquee";

const WhyChooseUs = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-5 space-y-5">
      <div className="">
        <img
          src="https://images.unsplash.com/photo-1614095557130-2f4a9e1da57d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcCUyMG9uJTIwc2VhfGVufDB8fDB8fHww"
          alt=""
          className="rounded-4xl"
        />
        <div className="w-[230px] h-[230px] overflow-hidden rounded-lg bg-gray-300 p-10 relative -top-40">
          <video
            src="/video.mp4"
            autoPlay
            muted
            playsInline
            controls
            className="w-full h-full object-cover"
          />
        </div>

        <div className="bg-red-500 -top-[850px] w-[36px] md:w-[70px] md:h-auto relative md:-right-[520px] md:-top-[850px] rounded-2xl">
          <div
            className="
      absolute 
      left-30          /* mobile: near left */
      bottom-[-500px] /* mobile: bottom offset */
      h-[40px] 
      w-[400px] 
      md:left-[-60px]  /* md: move far left */
      md:right-[119px]  /* md: override right */
      md:top-[260px]     /* md: top position */
      bg-red-500 
      rotate-90 
      rounded-4xl
    ">
            <Marquee
              gradient={false}
              speed={12}
              direction="right"
              className="w-[600px] p-2">
              <p className="text-white text-lg font-bold whitespace-nowrap">
                We Give Donations Poor People &nbsp;&nbsp;&nbsp;&nbsp;
              </p>
            </Marquee>
          </div>
        </div>
      </div>

      <div
        className=" md:px-6 py-6 bg-white shadow-xl rounded-2xl max-w-3xl mx-auto"
        data-aos="zoom-in-up">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-800 mb-4">
          Why Choose Us
        </h2>

        <p className="relative border-l-4 border-red-500 pl-5  pr-3 text-base text-gray-600 leading-normal">
          Ningbo SIFA Elevator Co., Ltd. is a trusted leader in vertical
          transportation, offering high-quality elevators and escalators for
          residential, commercial, and industrial use. We specialize in
          passenger, villa, freight, and panoramic elevators, as well as key
          components like control systems, door operators, and safety gear. Our
          products are built to meet international safety and performance
          standards, ensuring reliability and durability in every installation.
          <br />
        </p>
        <span className="mt-3 px-10 inline-block text-red-600 font-medium cursor-pointer hover:underline transition duration-300">
          Learn More →
        </span>
      </div>
    </div>
  );
};

export default WhyChooseUs;
