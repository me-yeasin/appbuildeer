import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import ServiceCard from "../service_card/service_card";

import "swiper/css";
import "swiper/css/pagination";
import classes from "./page_per_view_slider.module.scss";

interface PagePerViewSliderProps {
  slidesPerView: number;
  spaceBetween?: number;
  modules?: any[];
  items: any[];
  loop?: boolean;
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
      {props.items.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            {
              <ServiceCard
                key={index}
                href={item.link}
                title={item.title}
                description={item.subTitle}
                serviceIcon={item.icon}
              />
            }
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PagePerViewSlider;
