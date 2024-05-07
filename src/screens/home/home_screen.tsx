"use client";

import { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";

import HeadingSection from "@/components/landing_page_sections/heading_section/heading_section";
import ServiceSection from "@/components/landing_page_sections/service_section/service_section";
import ShowcasingSection from "@/components/landing_page_sections/showcasing_section/showcasing_section";
import HowItsWorkSection from "../../components/landing_page_sections/how_its_work_section/how_its_work_section";

import PricingSection from "@/components/landing_page_sections/pricing_section/pricing_section";
import ReviewSection from "@/components/landing_page_sections/review_section/review_sectino";
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
      <HeadingSection />
      <ServiceSection
        width={width}
        serviceBtnToggle={serviceBtnToggle}
        serviceToggleBtnHandler={serviceToggleBtnHandler}
      />
      <HowItsWorkSection />
      <ShowcasingSection className={classes["showcasing-section-override"]} />
      <ReviewSection className={classes["review-section-override"]} />
      <PricingSection className={classes["pricing-section-override"]} />
    </>
  );
};

export default HomeScreen;
