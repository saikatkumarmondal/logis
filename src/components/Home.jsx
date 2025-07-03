import React from 'react';
import Hero from './Hero';
import VerticalTransport from './VerticalTransport';
import Carousel from './3d/Carousel';
import WhyChooseUs from './WhyChooseUs';

const Home = () => {
    return (
      <>
        {/* <h1>Om Namah Shivaya -- Home</h1> */}
            <Hero></Hero>
            <VerticalTransport></VerticalTransport>
            <div>
          <Carousel></Carousel>
          <WhyChooseUs></WhyChooseUs>
            </div>
      </>
    );
};

export default Home;