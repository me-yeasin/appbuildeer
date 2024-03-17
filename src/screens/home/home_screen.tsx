"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { useScreenSize } from "../../hooks/useScreenSize";

import BodyTitle from "@/components/body_title/body_title";
import CubicImageSlider from "@/components/cubic_image_slider/cubic_image_slider";
import PagePerViewSlider from "@/components/page_per_view_slider/page_per_view_slider";
import {
  designServices,
  devServices,
} from "@/utils/local_data/service_item_data";
import { IoIosMail } from "react-icons/io";

import HowItsWorkItem from "@/components/how_its_work_item/how_its_work_item";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import classes from "./home_screen.module.scss";

interface HomeScreenProps {}

const HomeScreen: React.FC<HomeScreenProps> = (props) => {
  const [serviceBtnToggle, setServiceBtnToggle] = useState<boolean>(false);
  const [_, width] = useScreenSize();

  const serviceToggleBtnHandler = () => {
    setServiceBtnToggle((prev) => !prev);
  };

  return (
    <>
      {/* Header Section  */}
      <section className={classes["first-section"]}>
        <CubicImageSlider
          loop={true}
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
      {/* Services Section  */}
      <section className={classes["second-section"]}>
        <BodyTitle text="Our Services" />
        <div className={classes["service-slider"]}>
          <PagePerViewSlider
            slidesPerView={width < 330 ? 1 : width >= 550 ? 3 : 2}
            spaceBetween={0}
            items={!serviceBtnToggle ? devServices : designServices}
            loop={true}
          />
        </div>
        <div className={classes["service-toggle-btn-container"]}>
          <button
            onClick={serviceToggleBtnHandler}
            className={classes["service-toggle-btn"]}
          >
            <div
              className={`${
                serviceBtnToggle && classes["service-toggle-btn-bg__active"]
              } ${classes["service-toggle-btn__bg-color"]}`}
            ></div>
            <p
              className={`${
                !serviceBtnToggle && classes["service-toggle-btn__dev-active"]
              } ${classes["service-toggle-btn-name"]}`}
            >
              Development
            </p>
            <p
              className={`${
                serviceBtnToggle && classes["service-toggle-btn__design-active"]
              } ${classes["service-toggle-btn-name"]}`}
            >
              Design
            </p>
          </button>
        </div>
      </section>
      {/* How Its Work Section  */}
      <section className={classes["third-section"]}>
        <BodyTitle text="How It Works" className={classes["title-text"]} />
        <p className={classes["second-title"]}>
          Start Your Project in <span>Six Simple</span> Steps
        </p>
        <p className={classes["third-section__subtitle"]}>
          Discover the ease of working with us
        </p>
        <u className={classes["how-its-work__view-list"]}>
          <HowItsWorkItem />
        </u>
      </section>
    </>
  );
};

export default HomeScreen;
