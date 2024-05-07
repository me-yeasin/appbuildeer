import { SwiperSlide } from "swiper/react";

import TitleText from "@/common_components/text/title_text/title_text";
import PagePerViewSlider from "@/components/sliders/page_per_view_slider/page_per_view_slider";
import {
  designServices,
  devServices,
} from "@/utils/local_data/service_item_data";

import ServiceCard from "@/components/landing_page_sections/service_section/components/service_card/service_card";
import classes from "./service_section.module.scss";

interface ServiceSectionProps {
  width: number;
  serviceBtnToggle: boolean;
  serviceToggleBtnHandler: () => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = (props) => {
  console.log("Serivce Section Calling");

  return (
    <section className={classes["service-section"]}>
      <TitleText>Our Services</TitleText>
      <div className={classes["service-slider"]}>
        <PagePerViewSlider
          slidesPerView={props.width < 330 ? 1 : props.width >= 550 ? 3 : 2}
          spaceBetween={0}
          loop={true}
        >
          {!props.serviceBtnToggle
            ? devServices.map((item, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ServiceCard
                      title={item.title}
                      description={item.subTitle}
                      serviceIcon={item.icon}
                      href={item.link}
                    />
                  </SwiperSlide>
                );
              })
            : designServices.map((item, index) => {
                return (
                  <SwiperSlide>
                    <ServiceCard
                      title={item.title}
                      description={item.subTitle}
                      serviceIcon={item.icon}
                      href={item.link}
                    />
                  </SwiperSlide>
                );
              })}
        </PagePerViewSlider>
      </div>
      <div className={classes["service-toggle-btn-container"]}>
        <button
          onClick={props.serviceToggleBtnHandler}
          className={classes["service-toggle-btn"]}
        >
          <div
            className={`${
              props.serviceBtnToggle && classes["service-toggle-btn-bg__active"]
            } ${classes["service-toggle-btn__bg-color"]}`}
          ></div>
          <p
            className={`${
              !props.serviceBtnToggle &&
              classes["service-toggle-btn__dev-active"]
            } ${classes["service-toggle-btn-name"]}`}
          >
            Development
          </p>
          <p
            className={`${
              props.serviceBtnToggle &&
              classes["service-toggle-btn__design-active"]
            } ${classes["service-toggle-btn-name"]}`}
          >
            Design
          </p>
        </button>
      </div>
    </section>
  );
};

export default ServiceSection;
