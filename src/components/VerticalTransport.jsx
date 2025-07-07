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
    <div className="space-y-2 px-4 md:px-10" ref={scrollRef}>
      <h2 className="text-2xl md:text-3xl text-red-500 underline text-center">
        VERTICAL TRANSPORT
      </h2>
      <div className="space-y-4" data-aos="fade-up-right">
        <h2 className="text-2xl md:text-5xl font-bold text-center leading-snug md:leading-relaxed">
          {/* Use spans + br to control line breaks responsively */}
          We excel in providing <br className="block md:hidden" />
          complete elevator, escalator, <br className="block md:hidden" />
          and spare parts solutions, <br className="hidden md:block" />
          prioritizing reliability, <br className="hidden md:block" />
          efficiency, and safety at every <br className="hidden md:block" />
          step. Our expertise spans across:
        </h2>
      </div>
    </div>
  );
};

export default VerticalTransport;
