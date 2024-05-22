"use client";

import Image from "next/image";
import Link from "next/link";

import FeaturesPointerIcon from "@/assets/icons/feature_pointer_icon";
import LinkIcon from "@/assets/icons/link_icon";
import BodyText from "@/common_components/text/body_text/body_text";
import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";
import NotFoundScreen from "../not_found/not_found_screen";
import {
  HowItsWorkItemDataList,
  ServiceData,
  ServiceHeaderSectionDataList,
  ShowCaseItemDataList,
} from "./data/service_data";
import classes from "./service_screen.module.scss";

interface ServiceScreenProps {
  searchParams: string;
}

const ServiceScreen: React.FC<ServiceScreenProps> = (props) => {
  const getHeaderData = ServiceHeaderSectionDataList[props.searchParams];

  const allowedId: string[] = [
    "android",
    "ios",
    "web",
    "cross-platform",
    "backend",
  ];

  if (!allowedId.includes(props.searchParams))
    return <NotFoundScreen queryUrl={props.searchParams} />;

  return (
    <>
      <section className={classes["service-section__header"]}>
        <div className={classes["service-section__header-design"]}>
          {getHeaderData.icon}
          <h1 className={classes["service-section__header-design-txt"]}>
            {getHeaderData.boldName}
          </h1>
        </div>
        <h1 className={classes["service-section__header-title"]}>
          {getHeaderData.title}
        </h1>
        <BodyText className={classes["service-section__header-subtitle"]}>
          {getHeaderData.subTitle}
        </BodyText>
        <button className={classes["service-section__header-btn"]}>
          Get Started
        </button>
      </section>
      <section className={classes["service-section__how-its-work"]}>
        <BodyText>Here’s how we make it happen:</BodyText>
        {HowItsWorkItemDataList.map((item, index) => {
          return (
            <HowItsWorkItem
              key={index}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          );
        })}
      </section>
      <section className={classes["service-section__benefits"]}>
        <TitleText>We Offer :</TitleText>
        <BodyText className={classes["service-section__benefits-subtitle"]}>
          Here are some of the <strong>Android Application Development</strong>{" "}
          services that we offer :
        </BodyText>
        <ul className={classes["service-section__benefits-list"]}>
          {ServiceData.map((item, index) => {
            return (
              <BenefitCardItem
                key={index}
                imageLink={item.imageLink}
                title={item.title}
                alt={item.alt}
                description={item.description}
              />
            );
          })}
        </ul>
      </section>
      <section className={classes["service-section__showcase"]}>
        <TitleText>What We Have Doned So Far</TitleText>
        <BodyText className={classes["service-section__showcase-subtitle"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
          laudantium cupiditate sunt delectus nobis, provident nesciunt, nihil
          dolore omnis quaerat incidunt aspernatur blanditiis obcaecati
          similique itaque necessitatibus harum quis. Eligendi?
        </BodyText>
        {ShowCaseItemDataList.map((item, index) => {
          return (
            <ShowCaseItem
              key={index}
              alt={item.alt}
              featureList={item.featureList}
              imageLink={item.imageLink}
              linkList={item.linkList}
              shortDescription={item.shortDescription}
              title={item.title}
            />
          );
        })}
      </section>
      <section className={classes["service-section__get-started"]}>
        <LowerTitle className={classes["service-section__get-started-title"]}>
          Looking for a Android App Development Service
        </LowerTitle>
        <div className={classes["service-section__get-started-btn-container"]}>
          <button className={classes["service-sesction__get-started-btn"]}>
            Lets Estimate Your Project
          </button>
        </div>
        <p className={classes["service-section__get-started-its-free-txt"]}>
          It's Free!
        </p>
      </section>
    </>
  );
};

export default ServiceScreen;

const HowItsWorkItem = (props: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <>
      <LowerTitle className={classes["service-section__how-its-work-title"]}>
        {props.title}
      </LowerTitle>
      <div className={classes["service-section__how-its-work-img-container"]}>
        <Image
          src={props.image}
          alt="market react image"
          height={500}
          width={500}
          className={classes["service-section__how-its-work-img"]}
        />
      </div>
      <BodyText
        className={classes["service-section__how-its-work-description"]}
      >
        {props.description}
      </BodyText>
    </>
  );
};

const BenefitCardItem = (props: {
  imageLink: string;
  alt: string;
  title: string;
  description: string;
}) => {
  return (
    <li className={classes["service-section__benefits-offer-card"]}>
      <Image
        src={props.imageLink}
        alt={props.alt}
        height={300}
        width={300}
        className={classes["service-section__benefits-offer-card__image"]}
      />
      <div className={classes["service-section__benefits-offer-card__content"]}>
        <LowerTitle
          className={
            classes["service-section__benefits-offer-card__content__title"]
          }
        >
          {props.title}
        </LowerTitle>
        <BodyText
          className={
            classes[
              "service-section__benefits-offer-card__content__description"
            ]
          }
        >
          {props.description}
        </BodyText>
      </div>
    </li>
  );
};

const ShowCaseFeaturesItem = (props: { text: string }) => {
  return (
    <li
      className={
        classes["service-section__showcase-list-item__content__features-item"]
      }
    >
      <FeaturesPointerIcon
        className={
          classes[
            "service-section__showcase-list-item__content__features-item__icon"
          ]
        }
      />
      <p
        className={
          classes[
            "service-section__showcase-list-item__content__features-item__txt"
          ]
        }
      >
        {props.text}
      </p>
    </li>
  );
};

const ShowCaseItem = (props: {
  imageLink: string;
  title: string;
  alt: string;
  shortDescription: string;
  linkList: string[];
  featureList: string[];
}) => {
  return (
    <li className={classes["service-section__showcase-list-item"]}>
      <div
        className={
          classes["service-section__showcase-list-item__img-container"]
        }
      >
        <Image
          src={props.imageLink}
          alt={props.alt}
          height={300}
          width={300}
          className={classes["service-section__showcase-list-item__img"]}
        />
      </div>
      <div className={classes["service-section__showcase-list-item__content"]}>
        <LowerTitle
          className={
            classes["service-section__showcase-list-item__content__title"]
          }
        >
          {props.title}
        </LowerTitle>
        <BodyText
          className={
            classes["service-section__showcase-list-item__content__subtitle"]
          }
        >
          {props.shortDescription}
        </BodyText>
        <ul
          className={
            classes["service-section__showcase-list-item__content__features"]
          }
        >
          {props.featureList.map((item, index) => {
            return <ShowCaseFeaturesItem key={index} text={item} />;
          })}
        </ul>
        <div
          className={classes["service-section__content__live-link-container"]}
        >
          <LinkIcon
            className={classes["service-section__content__live-link-icon"]}
          />
          <p className={classes["service-section__content__live-link-txt"]}>
            Live Links
          </p>
        </div>
        <ul
          className={
            classes["service-section__showcase-list-item__content__link-list"]
          }
        >
          {props.linkList.map((item, index) => {
            return (
              <li
                key={index}
                className={
                  classes[
                    "service-section__showcase-list-item__content__link-item"
                  ]
                }
              >
                <Link href={item}>{item}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </li>
  );
};
