import { memo } from "react";

import BodyText from "@/common_components/text/body_text/body_text";
import GradientText from "@/common_components/text/gradient_text/gradient_text";
import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";
import HowItsWorkItemList from "@/components/landing_page_sections/how_its_work_section/components/how_its_work_item_list/how_its_work_item_list";

import classes from "./how_its_work_section.module.scss";

interface HowItsWorkSectionProps {}

const HowItsWorkSection: React.FC<HowItsWorkSectionProps> = (props) => (
  <section className={classes["how-its-work-section"]}>
    <TitleText>How Its Work</TitleText>
    <div className={classes["how-its-work__lower-title-subtitle-container"]}>
      <LowerTitle className={classes["how-its-work__lower-title"]}>
        Start Your Project in <GradientText>Six Simple</GradientText> Steps
      </LowerTitle>
      <BodyText className={classes["how-its-work__subtitle"]}>
        Discover the ease of working with us
      </BodyText>
    </div>
    <HowItsWorkItemList />
  </section>
);

export default memo(HowItsWorkSection);
