import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import Style from "../Style/general.module.css";

export default function App() {
  return (
    <>
      <Swiper className={Style.mySwiper}>
        <div>
          <SwiperSlide className={Style.ss}>
            {" "}
            <h1 className={Style.headinText}>AI Dental</h1>
            <p className={Style.lorem}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quaerat
              nobis tempora quidem odit maiores doloribus vitae laboriosam odio
              vero, officiis dicta? At odio explicabo quibusdam tempora quas
              quis ab optio!
            </p>
            <div>
              <button className={Style.buta}>
                {" "}
                <a className={Style.aw} href="#footi">
                  Click me
                </a>
              </button>
            </div>
          </SwiperSlide>
        </div>
      </Swiper>
    </>
  );
}
