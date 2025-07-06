import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaRegUserCircle } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";

import "swiper/css";
import "swiper/css/navigation";

const CarouselDemo = () => {
  return (
    <>
      <div className="max-w-[1200px] mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Works</h1>
        <p className="text-center text-gray-600 mb-10">
          Reliable elevators and escalators for safe, efficient, and
          long-lasting performance.
        </p>

        <div className="relative">
          {/* Navigation buttons outside the carousel */}
          <button className="swiper-button-prev bg-red-600 p-3 rounded-full text-white absolute -left-6 top-1/2 z-10">
            Prev
          </button>
          <button className="swiper-button-next bg-red-600 p-3 rounded-full text-white absolute -right-6 top-1/2 z-10">
            Next
          </button>

          {/* Swiper Carousel */}
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            }}
            autoplay={{ delay: 2000 }}
            slidesPerView={2}
            spaceBetween={30}
            className="mySwiper px-6">
            {[1, 2, 3].map((slide, index) => (
              <SwiperSlide key={index}>
                <div className="w-full h-[550px] p-6 rounded-4xl bg-white shadow-lg">
                  {/* Image */}
                  <div className="w-full h-[300px] mb-6">
                    <img
                      src="https://i.pinimg.com/736x/86/26/51/862651cfd5c51a498d29f76de2ed6f0f.jpg"
                      alt={`Slide ${slide}`}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>

                  <ul className="flex items-center gap-4 text-gray-600 mb-4">
                    <li>
                      <FaRegUserCircle size={24} color="red" />
                    </li>
                    <li>Saikat</li>
                    <li>
                      <FaRocketchat size={24} color="green" />
                    </li>
                    <li>
                      <p>Comments (30)</p>
                    </li>
                  </ul>

                  {/* Text */}
                  <p className="text-xl font-bold mb-4">
                    IT Service Case Studies Accelerating Business Fly...
                  </p>

                  {/* Read More Button */}
                  <div className="mb-3-4 pb-10">
                    <button className="bg-white text-black px-6 py-2 underline flex items-center gap-2 rounded-full hover:bg-red-700 transition">
                      Read More <FaCircleArrowRight size={20} color="red" />
                    </button>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex items-center justify-center mt-8">
          <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg xl:btn-xl bg-gray-700 text-white">
            View Blogs
          </button>
        </div>
      </div>
    </>
  );
};

export default CarouselDemo;
