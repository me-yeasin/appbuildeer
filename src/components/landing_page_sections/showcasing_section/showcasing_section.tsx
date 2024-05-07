import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";

import BodyText from "@/common_components/text/body_text/body_text";
import ShowcasingItemList from "@/components/landing_page_sections/showcasing_section/components/showcasing_item_list/showcasing_item_list";
import classes from "./showcasing_section.module.scss";

interface ShowcasingSectionProps {
  className?: string;
}

const ShowcasingSection: React.FC<ShowcasingSectionProps> = (props) => {
  return (
    <section className={`${props.className} ${classes["showcasing-section"]}`}>
      <TitleText>Showcasing Excellence</TitleText>
      <LowerTitle className={classes["showcasing-section__lower-title"]}>
        A Glimpse into Our Creative Journey
      </LowerTitle>
      <BodyText className={classes["showcasing-section__subtitle"]}>
        Discover the breadth of our expertise through our curated portfolio.
        Each project is a story of innovation and precision, designed to inspire
        and engage.
      </BodyText>
      <ShowcasingItemList
        className={classes["showcasing-section__item-list"]}
      />
    </section>
  );
};

export default ShowcasingSection;
