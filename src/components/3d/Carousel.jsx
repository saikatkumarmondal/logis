import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination, Autoplay } from "swiper/modules";
import "./Carousel.css";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import IconOne from "../../assets/images/shapes/service-four-icon1.png";
import IconTwo from "../../assets/images/shapes/service-four-icon2.png";
import IconThree from "../../assets/images/shapes/service-four-icon3.png";
const Carousel = () => {
  return (
    <div className="w-full max-w-5xl mx-auto my-10">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper">
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 0% 50%)",
              }}
              className="p-5 w-full h-auto object-cover"
            />

            <div
              style={{
                clipPath:
                  "polygon(10.75% 0%, 25.51% 10.75%, 75% 11.73%, 87.55% 11.22%, 100% 10.75%, 100% 78.25%, 0% 78.25%, 0% 14.76%)",
              }}
              className="absolute -bottom-[80px] left-10 w-[200px] h-[150px] hover:w-[400px] hover:h-[300px] bg-green-500 p-4 rounded shadow-lg text-black">
              <ul className="p-10">
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <h2 className="text-xl font-bold">VERTICAL TRANSPORT</h2>
                </li>
              </ul>
              <p className="mt-2 text-sm">
                We provide high-performance elevators tailored for residential,
                commercial, and industrial use, ensuring safe and efficient
                vertical mobility.
              </p>
              <div className="mb-30 ">
                <button className=" px-3 py-2 bg-white text-green-600 rounded ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 0% 50%)",
              }}
              className="p-5 w-full h-auto object-cover"
            />

            <div
              style={{
                clipPath:
                  "polygon(10.75% 0%, 25.51% 10.75%, 75% 11.73%, 87.55% 11.22%, 100% 10.75%, 100% 78.25%, 0% 78.25%, 0% 14.76%)",
              }}
              className="absolute -bottom-[80px] left-10 w-[200px] h-[150px] hover:w-[400px] hover:h-[300px] bg-green-500 p-4 rounded shadow-lg text-black">
              <ul className="p-10">
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <h2 className="text-xl font-bold">VERTICAL TRANSPORT</h2>
                </li>
              </ul>
              <p className="mt-2 text-sm">
                We provide high-performance elevators tailored for residential,
                commercial, and industrial use, ensuring safe and efficient
                vertical mobility.
              </p>
              <div className="absolute">
                <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded relative mb-30">
                  View More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 0% 50%)",
              }}
              className="p-5 w-full h-auto object-cover"
            />

            <div
              style={{
                clipPath:
                  "polygon(10.75% 0%, 25.51% 10.75%, 75% 11.73%, 87.55% 11.22%, 100% 10.75%, 100% 78.25%, 0% 78.25%, 0% 14.76%)",
              }}
              className="absolute -bottom-[80px] left-10 w-[200px] h-[150px] hover:w-[400px] hover:h-[300px] bg-green-500 p-4 rounded shadow-lg text-black">
              <ul className="p-10">
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <h2 className="text-xl font-bold">VERTICAL TRANSPORT</h2>
                </li>
              </ul>
              <p className="mt-2 text-sm">
                We provide high-performance elevators tailored for residential,
                commercial, and industrial use, ensuring safe and efficient
                vertical mobility.
              </p>
              <div className="absolute">
                <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded relative mb-30">
                  View More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative w-full h-full bg-gray-300">
            <img
              src="https://images.unsplash.com/photo-1554254648-2d58a1bc3fd5?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3J1aXNlJTIwc2hpcHxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              style={{
                clipPath: "polygon(25% 0%, 100% 0%, 100% 100%, 0 100%, 0% 50%)",
              }}
              className="p-5 w-full h-auto object-cover"
            />

            <div
              style={{
                clipPath:
                  "polygon(10.75% 0%, 25.51% 10.75%, 75% 11.73%, 87.55% 11.22%, 100% 10.75%, 100% 78.25%, 0% 78.25%, 0% 14.76%)",
              }}
              className="absolute -bottom-[80px] left-10 w-[200px] h-[150px] hover:w-[400px] hover:h-[300px] bg-green-500 p-4 rounded shadow-lg text-black">
              <ul className="p-10">
                <li>
                  <img src="" alt="" />
                </li>
                <li>
                  <h2 className="text-xl font-bold">VERTICAL TRANSPORT</h2>
                </li>
              </ul>
              <p className="mt-2 text-sm">
                We provide high-performance elevators tailored for residential,
                commercial, and industrial use, ensuring safe and efficient
                vertical mobility.
              </p>
              <div className="absolute ">
                <button className="mt-4 px-4 py-2 bg-white text-green-600 rounded relative ">
                  View More
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Carousel;