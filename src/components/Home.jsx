import React from 'react';
import Hero from './Hero';
import VerticalTransport from './VerticalTransport';
import Carousel from './3d/Carousel';
import WhyChooseUs from './WhyChooseUs';
import SparePartsSolution from "./SparePartsSolution";
import TechnicalStrength from "./TechnicalStrength";
import Strength from "./Strength";
import OurWorks from "./OurWorks";
import CarouselDemo from "./CarouselDemo";

const Home = () => {
  return (
    <>
      <section>
        <Hero></Hero>
        <VerticalTransport></VerticalTransport>
      </section>

      <section>
        <Carousel></Carousel>
        <WhyChooseUs></WhyChooseUs>
        <SparePartsSolution></SparePartsSolution>
      </section>

      <div className="mt-40 bg-white">
        <TechnicalStrength></TechnicalStrength>
      </div>
      <section className="mt-10 pt-10">
        {/* <OurWorks></OurWorks> */}

        <CarouselDemo></CarouselDemo>
      </section>
    </>
  );
};

export default Home;