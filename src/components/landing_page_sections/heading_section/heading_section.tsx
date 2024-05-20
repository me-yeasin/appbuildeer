import { memo } from "react";

import BodyText from "@/common_components/text/body_text/body_text";
import CubicImageSlider from "@/components/sliders/cubic_image_slider/cubic_image_slider";
import { IoIosMail } from "react-icons/io";
import { TypeAnimation } from "react-type-animation";

import classes from "./heading_section.module.scss";

interface HeadingSectionProps {}

const HeadingSection: React.FC<HeadingSectionProps> = (props) => {
  return (
    <>
      <section className={classes["heading-section"]}>
        <CubicImageSlider
          loop={true}
          shadow={false}
          slideShadows={false}
          itemList={[
            "/images/local/header_image.png",
            "/images/local/header_image.png",
            "/images/local/header_image.png",
          ]}
          className={classes["heading-image-slider"]}
        />
        <div className={classes["title-text-container"]}>
          <h2 className={classes["heading-text"]}>
            Create Your{" "}
            <TypeAnimation
              sequence={["Mobile App", 3000, "Web App", 3000]}
              repeat={Infinity}
            />
            <br /> at a Very Low Price
          </h2>
          <BodyText className={classes["sub-title__text"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elitamet
            consectetur, adipisicing elit.
          </BodyText>
          <button className={classes["let-talk-btn"]}>
            <IoIosMail className={classes["let-talk-btn__icon"]} />
            <p className={classes["let-talk-btn__text"]}>Let's Talk</p>
          </button>
          <p className={classes["change-communication-option-txt"]}>
            Want to change communication method? {"  "}
            <button className={classes["show-option-btn"]}>Show Options</button>
          </p>
        </div>
      </section>
    </>
  );
};

export default memo(HeadingSection);
