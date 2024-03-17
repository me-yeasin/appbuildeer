import AnimatedVisionIcon from "@/assets/animated-svg/vision_icon/animted_vision_icon";
import IconBg from "@/assets/icons/icon_bg";

import classes from "./how_its_work_item.module.scss";

interface HowItsWorkItemProps {}

const HowItsWorkItem: React.FC<HowItsWorkItemProps> = (props) => {
  return (
    <li className={classes["how-its-work__view-list-item"]}>
      <div className={classes["how-its-work__icon-part"]}>
        <h1 className={classes["process-number"]}>#1</h1>
        <div className={classes["icon-container"]}>
          <IconBg
            className={classes["icon-bg"]}
            blueOpacity={0.45}
            redOpacity={0.45}
          />
          <AnimatedVisionIcon />
        </div>
      </div>
      <p className={classes["process-title"]}>Share Your Vision</p>
      <p className={classes["process-description"]}>
        Submit your project details and let us know what you’re looking for.
      </p>
    </li>
  );
};

export default HowItsWorkItem;
