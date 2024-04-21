import { memo } from "react";

import AnimatedCelebrateIcon from "@/assets/animated-svg/celebrate_icon/animated_celebrate_icon";
import AnimatedConnectIcon from "@/assets/animated-svg/connect_icon/animated_connect_icon";
import AnimatedVisionIcon from "@/assets/animated-svg/vision_icon/animted_vision_icon";
import HowItsWorkItem from "../how_its_work_item/how_its_work_item";

import AnimatedCreationStartIcon from "@/assets/animated-svg/creation_start_icon/animated_creation_start_icon";
import AnimatedPlanIcon from "@/assets/animated-svg/plan_icon/animated_plan_icon";
import AnimatedRefineIcon from "@/assets/animated-svg/refine_icon/animated_refine_icon";

import classes from "./how_its_work_item_list.module.scss";

interface HowItsWorkItemListProps {}

const HowItsWorkItemList: React.FC<HowItsWorkItemListProps> = (props) => {
  return (
    <u className={classes["how-its-work__view-list"]}>
      <HowItsWorkItem
        processNumber={1}
        animatedIcon={<AnimatedVisionIcon />}
        title="Share Your Vision"
        subTitle="Submit your project details and let us know what you’re looking for."
      />
      <HowItsWorkItem
        processNumber={2}
        animatedIcon={<AnimatedConnectIcon />}
        title="Connect with Our Team"
        subTitle="We’ll contact you to discuss your project and explore possibilities."
      />
      <HowItsWorkItem
        processNumber={3}
        animatedIcon={<AnimatedPlanIcon />}
        title="Receive Your Custom Plan"
        subTitle="Get a tailored plan designed to meet your specific needs."
      />
      <HowItsWorkItem
        processNumber={4}
        animatedIcon={<AnimatedCreationStartIcon />}
        title="Creation Begins"
        subTitle="Approve the plan and watch as we bring your ideas to life."
      />
      <HowItsWorkItem
        processNumber={5}
        animatedIcon={<AnimatedRefineIcon />}
        title="Review and Refine"
        subTitle="Provide feedback and we’ll tweak until it’s just right."
      />
      <HowItsWorkItem
        processNumber={6}
        animatedIcon={<AnimatedCelebrateIcon />}
        title="Celebrate Your Launch"
        subTitle="Enjoy the success of your project going live."
      />
    </u>
  );
};

export default memo(HowItsWorkItemList);
