"use client";

import { useState } from "react";
import { useScreenSize } from "../../hooks/useScreenSize";

import HeadingSection from "@/components/landing_page_sections/heading_section/heading_section";
import ServiceSection from "@/components/landing_page_sections/service_section/service_section";
import HowItsWorkSection from "../../components/landing_page_sections/how_its_work_section/how_its_work_section";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

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
    </>
  );
};

export default HomeScreen;
