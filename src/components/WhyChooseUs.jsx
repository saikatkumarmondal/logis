import React from 'react';
import Marquee from "react-fast-marquee";

const WhyChooseUs = () => {
  return (
    <div className="flex gap-10 px-5 ">
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

        <div className="bg-red-500 w-[70px] h-[600px] relative left-150 -top-220 rounded-2xl">
          <div className="absolute -left-[270px] top-[280px] origin-center rotate-90">
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

      <div className="">
        <h2 className="text-5xl font-bold">Why Choose Us</h2>
        <p className="border-l-4 border-red-500 p-2 ">
          Ningbo SIFA Elevator Co., Ltd. is a trusted leader in vertical
          transportation, offering high - quality elevators and escalators for
          residential, commercial, and industrial use. We specialize in
          passenger, villa, freight, and panoramic elevators, as well as key
          components like control systems, door operators, and safety gear. Our
          products are built to meet international safety and performance
          standards, ensuring reliability and durability in every installation.
          Learn More -
        </p>
      </div>
    </div>
  );
};

export default WhyChooseUs;