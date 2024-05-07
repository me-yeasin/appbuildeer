import BodyText from "@/common_components/text/body_text/body_text";
import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";
import ReviewItemList from "@/components/landing_page_sections/review_section/components/review_item_list/review_item_list";
import classes from "./review_section.module.scss";

interface ReviewSectionProps {
  className?: string;
}

const ReviewSection: React.FC<ReviewSectionProps> = (props) => {
  return (
    <section className={`${props.className} ${classes["review-section"]}`}>
      <TitleText>Hear It from Our Clients</TitleText>
      <LowerTitle className={classes["review-section__lower-title"]}>
        Real Stories, Real Success
      </LowerTitle>
      <BodyText className={classes["review-section__subtitle"]}>
        Inspiring Confidence Through Client Experiences
      </BodyText>
      <ReviewItemList className={classes["review-section__item-list"]} />
    </section>
  );
};

export default ReviewSection;
