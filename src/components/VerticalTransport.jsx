import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const VerticalTransport = () => {
  const scrollRef = useRef();

  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      easing: "ease-in-out",
      mirror: true,
    });
  }, []);

  return (
    <div className="space-y-2 " ref={scrollRef}>
      <h2 className="text-3xl text-red-500 underline text-center">
        VERTICAL TRANSPORT
      </h2>
      <div className="space-y-4" data-aos="fade-up-right">
        <h2 className="text-5xl font-bold text-center">
          We excel in providing <br /> complete elevator, escalator, <br />
          and spare parts solutions, <br /> prioritizing reliability, <br />
          efficiency, and safety at every <br />
          step. Our expertise spans across:
        </h2>
      </div>
    </div>
  );
};

export default VerticalTransport;
