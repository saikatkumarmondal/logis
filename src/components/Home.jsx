import React from "react";
import Hero from "./Hero";
import VerticalTransport from "./VerticalTransport";
import Carousel from "./3d/Carousel";
import WhyChooseUs from "./WhyChooseUs";
import SparePartsSolution from "./SparePartsSolution";
import TechnicalStrength from "./TechnicalStrength";
import Strength from "./Strength";
import OurWorks from "./OurWorks";
import CarouselDemo from "./CarouselDemo";
import VCarousel from "./VCarousel";

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="my-[60px]">
        <Hero />
        <VerticalTransport />
      </section>

      {/* Carousel + SpareParts */}
      <section className="my-[80px] space-y-10">
        {/* <Carousel /> */}

        <VCarousel></VCarousel>

        <SparePartsSolution />
      </section>

      {/* Why Choose Us Section */}
      <div className="my-[100px]">
        <WhyChooseUs />
      </div>

      {/* Technical Strength Section */}
      <div className="mt-[160px] bg-white">
        <TechnicalStrength />
      </div>

      {/* CarouselDemo */}
      <section className="mt-[100px] pt-[40px]">
        {/* <OurWorks /> */}
        <CarouselDemo />
      </section>
    </>
  );
};

export default Home;
