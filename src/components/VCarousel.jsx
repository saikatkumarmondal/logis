import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { IoArrowForwardOutline } from "react-icons/io5";

const VCarousel = () => {
  return (
    <div className="mb-10 px-4 md:px-10">
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
        }}>
        {[1, 2, 3, 4].map((_, i) => (
          <SwiperSlide key={i}>
            <div className="bg-gray-100 p-4 relative overflow-hidden rounded-xl max-w-[800px] w-full h-auto md:h-[500px] mx-auto">
              {/* Main top image */}
              <img
                src="https://live.staticflickr.com/470/18378863700_0a55388d21_b.jpg"
                alt=""
                className="w-[90%] max-w-[400px] h-auto md:h-[300px] object-cover"
                style={{
                  clipPath:
                    "polygon(13.3% 0%, 85% 0%, 100.1% 0%, 100.1% 100.3%, 85% 100%, 15% 100%, 0% 100.3%, 0% 28.3%)",
                }}
              />

              {/* Hover card with growable image */}
              <div
                style={{
                  clipPath:
                    "polygon(0% 100%, 100% 100%, 100% 25%, 30% 25%, 10% 0%, 10% 25%, 0% 25%)",
                }}
                className="group absolute left-1/2 bottom-0 translate-x-[-50%] w-[90%] max-w-[700px] h-[200px] md:h-[200px] bg-gray-300 rounded-xl shadow-md hover:h-[400px] transition-all duration-500 ease-in-out overflow-hidden">
                {/* 🚄 Train image that scales on hover */}
                <div className="absolute bottom-4 left-1/2 translate-x-[-50%] transition-all duration-500 ease-in-out group-hover:scale-125 w-[80px] h-[80px]">
                  <img
                    src="https://static.vecteezy.com/system/resources/thumbnails/046/710/065/small_2x/bullet-train-front-view-isolated-on-transparent-background-png.png"
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Text content */}
                <div className="mt-16 p-4 space-y-4 text-center">
                  <p className="text-xl font-bold">VERTICAL TRANSPORT</p>
                  <p className="text-sm px-6">
                    We provide high-performance elevators tailored for
                    residential, commercial, and industrial use. <br /> Ensuring
                    safe and efficient vertical mobility.
                  </p>
                  <button className="btn bg-white text-black p-3 mt-2 flex items-center gap-2 mx-auto">
                    View More <IoArrowForwardOutline />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default VCarousel;
