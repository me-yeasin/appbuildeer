"use client";

import Image from "next/image";
import Link from "next/link";

import BodyText from "@/common_components/text/body_text/body_text";
import TitleText from "@/common_components/text/title_text/title_text";
import classes from "./service_design_screen.module.scss";

interface ServiceDesignScreenProps {}

const ServiceDesignScreen: React.FC<ServiceDesignScreenProps> = (props) => {
  return (
    <>
      <section className={classes["service-design__header-section"]}>
        <div className={classes["service-design__header-section-container"]}>
          <Image
            src={"/images/local/test_img.png"}
            alt="service design screen header"
            height={400}
            width={400}
            priority
            className={classes["img"]}
          />
          <h1 className={classes["service-design__header-section-title"]}>
            Icons
          </h1>
        </div>
      </section>
      <section className={classes["service-design__why-section"]}>
        <TitleText>Why Custom Icons?</TitleText>
        <div className={classes["why-section__img-container"]}>
          <Image
            src={"/images/local/custom_icon_img.png"}
            alt="custom icon photo"
            height={300}
            width={300}
            className={classes["img-container__img"]}
          />
        </div>
        <BodyText className={classes["why-section__description"]}>
          Lorem ipsum dolor sit amet consectetur. Cursus amet viverra id
          placerat. Elit luctus dictum massa bibendum neque porta sit id. A eu
          sit turpis nunc. Feugiat ut at neque phasellus tristique. Orci netus
          sagittis rhoncus elit. Felis elementum adipiscing gravida potenti.
          Sapien ultrices fermentum interdum aliquet gravida nulla enim. Nullam
          morbi amet habitasse.
        </BodyText>
      </section>
      <section className={classes["service-design__offer-section"]}>
        <TitleText>Our offer with icons</TitleText>
        <ul className={classes["offer-section__offer-list"]}>
          <li className={classes["offer-list__item"]}>
            <Image
              src={"/images/local/offer_custom_icon_img.png"}
              alt="custom icon image"
              height={100}
              width={100}
              className={classes["item__img"]}
            />
            <p className={classes["item__name"]}>Icon/Icon Set</p>
          </li>
          <li className={classes["offer-list__item"]}>
            <Image
              src={"/images/local/offer_custom_icon_img.png"}
              alt="custom icon image"
              height={100}
              width={100}
              className={classes["item__img"]}
            />
            <p className={classes["item__name"]}>Icon/Icon Set</p>
          </li>
          <li className={classes["offer-list__item"]}>
            <Image
              src={"/images/local/offer_custom_icon_img.png"}
              alt="custom icon image"
              height={100}
              width={100}
              className={classes["item__img"]}
            />
            <p className={classes["item__name"]}>Icon/Icon Set</p>
          </li>
          <li className={classes["offer-list__item"]}>
            <Image
              src={"/images/local/offer_custom_icon_img.png"}
              alt="custom icon image"
              height={100}
              width={100}
              className={classes["item__img"]}
            />
            <p className={classes["item__name"]}>Icon/Icon Set</p>
          </li>
        </ul>
      </section>
      <section className={classes["service-design__showcase-section"]}>
        <div className={classes["showcase-section__title-container"]}>
          <TitleText>Icons we made before</TitleText>
          <Link href={""} className={classes["title-container__link"]}>
            See All
          </Link>
        </div>
        <ul className={classes["showcase-section__showcase-list"]}>
          <li className={classes["showcase-list__item"]}>
            <button className={classes["list-item__button"]}>
              <Image
                src={"/images/local/test_img.png"}
                alt="test image"
                height={200}
                width={200}
                className={classes["button__img"]}
              />
            </button>
            <button className={classes["list-item__button"]}>
              <Image
                src={"/images/local/test_img.png"}
                alt="test image"
                height={200}
                width={200}
                className={classes["button__img"]}
              />
            </button>
          </li>
        </ul>
      </section>
    </>
  );
};

export default ServiceDesignScreen;
