"use client";

import { TypeAnimation } from "react-type-animation";

import CubicImageSlider from "@/components/cubic_image_slider/cubic_image_slider";
import { useState } from "react";
import { IoIosMail } from "react-icons/io";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import classes from "./home_screen.module.scss";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [toggleAnimation, setToggleAnimation] = useState<boolean>(false);

  return (
    <>
      <section className={classes["first-section"]}>
        <CubicImageSlider
          loop={false}
          shadow={false}
          slideShadows={false}
          itemList={[
            "/images/local/header_image.png",
            "/images/local/header_image.png",
            "/images/local/header_image.png",
          ]}
        />
        <div className={classes["title-text-container"]}>
          <h2 className={classes["d-text"]}>
            Build Your{" "}
            <TypeAnimation
              sequence={[
                "Mobile App",
                2000,
                "Web App",
                2000,
                "Desktop App",
                2000,
                "BackEnd App",
                2000,
                "Logo Design",
                2000,
                "UI/UX Design",
                2000,
                "T-Shirt Design",
              ]}
              repeat={Infinity}
              className={classes["changed-text"]}
            />
          </h2>
          <h2 className={classes["d-text"]}>With In Best Budget</h2>
          <p className={classes["subtitle-text"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet
            blanditiis placeat quibusdam
          </p>
          <button className={classes["let-talk-btn"]}>
            <IoIosMail className={classes["let-talk-btn__icon"]} />
            <p className={classes["let-talk-btn__text"]}>Let's Talk</p>
          </button>
        </div>
      </section>
      <section className={classes["second-section"]}>
        <p className={classes["second-section__title"]}>Services</p>
        <div className={classes["second-section__btns"]}>
          <button className={classes["service_selected_btn"]}>
            Development
          </button>
          <button className={classes["service_selected_btn"]}>Design</button>
        </div>
      </section>
    </>
  );
};

export default HomeScreen;
