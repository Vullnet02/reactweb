import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Style from "../Style/general.module.css";

export default function App() {
  return (
    <>
      <Swiper className={Style.mySwiper}>
        <SwiperSlide className={Style.ss}>
          <h1>Hello, World!</h1>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
