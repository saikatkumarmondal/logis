import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
  const settings = {
    dots: true, 
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const images = [
    "/i1.jpg",
    "/i2.jpg",
      "/i3.jpg",
    "/i4.jpg"
   
  ];

  return (
    <div className="max-w-6xl mx-auto my-10" data-aos="fade-up">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="px-2">
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="rounded-xl w-full h-64 object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
