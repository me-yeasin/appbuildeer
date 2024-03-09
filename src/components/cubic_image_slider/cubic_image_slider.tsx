"use client";

import Image from "next/image";
import React from "react";
import { EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

import classes from "./cubic_image_slider.module.scss";

interface CubicImageSliderProps {
  loop: boolean;
  shadow: boolean;
  slideShadows: boolean;
  itemList: string[];
}

const CubicImageSlider: React.FC<CubicImageSliderProps> = (props) => {
  return (
    <div className={classes["img-slider"]}>
      <Swiper
        effect={"cube"}
        grabCursor={true}
        loop={props.loop}
        cubeEffect={{
          shadow: props.shadow,
          slideShadows: props.slideShadows,
        }}
        modules={[EffectCube]}
        className={classes["slider"]}
      >
        {props.itemList.map((item, index) => (
          <SwiperSlide className={classes["slider-item"]}>
            <Image
              src={item}
              alt="slider image"
              height={500}
              width={500}
              className={classes["slider-item__img"]}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CubicImageSlider;
