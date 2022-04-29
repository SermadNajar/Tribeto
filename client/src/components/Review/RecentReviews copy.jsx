import React, { useRef } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import ReviewCard from "../Review/ReviewCard";
import ReviewCard2 from "../Review/ReviewCard2";

// Import Swiper styles
import "swiper/css";

// import required modules
import { Autoplay, FreeMode } from "swiper";

export default function App() {
  const swiperRef = useRef(null);
  return (
    <>
      <Swiper
        onMouseEnter={() => swiperRef.current.swiper.autoplay.stop()}
        onMouseLeave={() => swiperRef.current.swiper.autoplay.start()}
        spaceBetween={30}
        slidesPerGroup={1}
        freemode={{
          enabled: true,
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        loop={true}
        loopFillGroupWithBlank={true}
        breakpoints={{
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 150,
          },
          // when window width is >= 480px
          480: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 4,
            spaceBetween: 180,
          },
          768: {
            slidesPerView: 5,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 50,
          },
        }}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard2 />
        </SwiperSlide>
        <SwiperSlide>
          <ReviewCard2 />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
