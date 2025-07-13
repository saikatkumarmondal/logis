import React, { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { FaRegCommentDots, FaArrowAltCircleRight } from "react-icons/fa";
import { MdVolunteerActivism } from "react-icons/md";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const OurWorks = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const toggleReadMore = () => setIsExpanded(!isExpanded);
  const fullText = "IT Service Case Studies Accelerating Business Fly";
  const displayedText = isExpanded ? fullText : fullText.slice(0, 30) + "...";

  // Refs for Swiper buttons
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div
      className="mx-auto px-4 sm:px-6 md:px-10 py-8 relative"
      data-aos="zoom-out-up">
      {/* Custom Navigation Buttons */}
      <div
        ref={prevRef}
        className="absolute top-1/2 -left-4 sm:-left-6 transform -translate-y-1/2 z-50 cursor-pointer">
        <button className="bg-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-lg">
          <FaChevronLeft />
        </button>
      </div>
      <div
        ref={nextRef}
        className="absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 z-50 cursor-pointer">
        <button className="bg-red-600 text-white w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full shadow-lg">
          <FaChevronRight />
        </button>
      </div>

      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={3}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          640: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
        onBeforeInit={(swiper) => {
          if (typeof swiper.params.navigation !== "boolean") {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        className="mySwiper">
        {[1, 2, 3].map((_, i) => (
          <SwiperSlide key={i}>
            <div
              className="
    bg-white 
    w-[85%]              /* Mobile: 85% of screen (smaller) */
    sm:w-[250px]         /* Small screens: reduced to 250px */
    md:w-[330px]         /* Desktop: reduced to 330px */
    h-auto               /* Let height grow naturally */
    md:h-[230px]         /* Desktop: reduced from 260px to 230px */
    p-4 
    rounded-lg 
    flex flex-col 
    mx-auto">
              {/* Image */}
              <div className="relative w-full h-[120px] md:h-[160px] mb-3 md:mb-4 overflow-hidden rounded-xl">
                <img
                  src="https://images.unsplash.com/photo-1614095557130-2f4a9e1da57d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcCUyMG9uJTIwc2VhfGVufDB8fDB8fHww"
                  alt="Slide"
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 left-2 z-10 bg-gray-800 px-3 py-1 rounded-2xl text-white text-sm font-semibold flex items-center gap-1">
                  <MdVolunteerActivism /> Volunteer
                </div>
              </div>

              {/* Info */}
              <div className="flex items-center justify-between mb-2 text-red-600 text-sm">
                <div className="flex items-center gap-1">
                  <CgProfile /> <span>Saikat</span>
                </div>
                <div className="flex items-center gap-1">
                  <FaRegCommentDots /> <span>Comments (03)</span>
                </div>
              </div>

              {/* Title */}
              <h3 className="font-bold text-black text-lg mb-1">
                {displayedText}
              </h3>

              <p
                onClick={toggleReadMore}
                className="text-black font-semibold underline cursor-pointer flex items-center gap-1">
                Read More{" "}
                <FaArrowAltCircleRight size={20} style={{ color: "red" }} />
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default OurWorks;
