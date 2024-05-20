import { useRouter } from "next/navigation";
import { useState } from "react";

import BodyText from "@/common_components/text/body_text/body_text";
import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";
import { ArrowIconIosStyle } from "@/utils/react_icons/react_icons";

import classes from "./about_us_section.module.scss";
import OwnerCard from "./owner_card/owner_card";

interface AboutUsSectionProps {}

const AboutUsSection: React.FC<AboutUsSectionProps> = (props) => {
  const [isTextExpanded, setIsTextExpaneded] = useState(false);

  const router = useRouter();

  return (
    <section className={classes["about-us-section"]}>
      <TitleText>Meet the Minds Behind the Magic</TitleText>
      <LowerTitle className={classes["about-us-section__lower-title"]}>
        Our Story, Your Success
      </LowerTitle>
      <BodyText
        id="1"
        className={`${
          isTextExpanded
            ? classes["about-us-section__subtitle-text-expanded"]
            : classes["about-us-section__subtitle-text-shrinked"]
        }`}
      >
        In the heart of the digital age, a vision was born—a vision to simplify
        the complex world of app development. This vision took form as
        AppBuilder, a beacon of innovation and creativity in the tech landscape.
        AppBuilder began as a small spark in the minds of a passionate group of
        developers and designers who believed that everyone should have the
        power to bring their ideas to life. They saw a future where businesses,
        big and small, could build their dreams without being hindered by
        technical barriers. With each line of code and every pixel crafted,
        AppBuilder transformed from a mere idea into a reality. Our team, a
        blend of seasoned experts and bright new talents, worked tirelessly to
        create a platform that empowers our clients to construct their digital
        presence with ease and flair. Today, AppBuilder stands as a testament to
        the power of dreams and the magic of perseverance. We’re not just
        building apps; we’re crafting the tools for tomorrow’s leaders to paint
        their stories onto the canvas of the digital world. And as we continue
        to grow and evolve, our commitment remains steadfast—to help you build
        not just an app, but a legacy. 🚀
      </BodyText>
      <div className={classes["about-us-section__expand-txt-btn-container"]}>
        <button
          onClick={() => {
            setIsTextExpaneded((prev) => !prev);
            router.push("#1");
          }}
          className={classes["about-us-section__expand-txt-btn"]}
        >
          <span
            className={`${
              isTextExpanded
                ? classes["about-us-section__expand-txt-btn__icon-expanded"]
                : classes["about-us-section__expand-txt-btn__icon-shrinked"]
            } ${classes["about-us-section__expand-txt-btn__icon"]}`}
          >
            {ArrowIconIosStyle}
          </span>
        </button>
      </div>
      <LowerTitle className={classes["about-us-section__lower-title__2nd"]}>
        Meet the Minds Behind the Magic
      </LowerTitle>
      <OwnerCard
        name="Mohammad Yeasin Arafat"
        title="Founder & CEO"
        linkedInLink="https://www.linkedin.com/in/me-yeasin/"
        mailLink={`mailto:md-yeasinarafat@hotmail.com?subject=Subject&body=HI Yeasin, How are you doing today?`}
        twitterLink="https://x.com/Im_yeasin"
      />
      <OwnerCard
        name="Mohammad Sayem Mohaimin"
        title="Co-Founder & Managing Director"
        linkedInLink=""
        mailLink=""
        twitterLink=""
      />
    </section>
  );
};

export default AboutUsSection;
