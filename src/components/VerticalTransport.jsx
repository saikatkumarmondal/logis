import React, { useEffect, useRef } from "react";

const VerticalTransport = () => {
  const scrollRef = useRef();

  useEffect(() => {
    // Automatically scroll this section into view after load
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div className="space-y-5" ref={scrollRef}>
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
