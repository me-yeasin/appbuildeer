import React from "react";

import { Swiper } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import classes from "./page_per_view_slider.module.scss";

interface PagePerViewSliderProps {
  slidesPerView: number;
  spaceBetween?: number;
  modules?: any[];
  loop?: boolean;
  children: any;
}

const PagePerViewSlider: React.FC<PagePerViewSliderProps> = (props) => {
  return (
    <Swiper
      slidesPerView={props.slidesPerView}
      spaceBetween={props.spaceBetween}
      pagination={{
        clickable: true,
      }}
      loop={props.loop}
      modules={props.modules}
      className={classes["page-per-view-slider"]}
    >
      {props.children}
    </Swiper>
  );
};

export default PagePerViewSlider;
