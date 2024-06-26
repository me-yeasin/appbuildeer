import Image from "next/image";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import classes from "./default_slider.module.scss";

interface Item {
  image: string;
  description: string;
}

interface DefaultSliderProps {
  items: Item[];
  autoPlay?: boolean;
  loop?: boolean;
}

const DefaultSlider: React.FC<DefaultSliderProps> = ({
  autoPlay = false,
  loop = false,
  ...props
}) => {
  return (
    <Swiper
      className={classes["default-slider"]}
      pagination={true}
      modules={[Pagination, Autoplay]}
      autoplay={autoPlay}
      loop={loop}
    >
      {props.items.map((item, index) => {
        return (
          <SwiperSlide className={classes["slider-item"]} key={index}>
            <Image
              src={item.image}
              alt={item.description}
              height={300}
              width={300}
              className={classes["image"]}
            />
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default DefaultSlider;
