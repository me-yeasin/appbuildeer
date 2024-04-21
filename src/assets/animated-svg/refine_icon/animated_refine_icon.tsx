import RefineIcon from "@/assets/icons/refine_icon";

import classes from "./animated_refine_icon.module.scss";

interface AnimatedRefineIconProps {}

const AnimatedRefineIcon: React.FC<AnimatedRefineIconProps> = (props) => {
  return (
    <RefineIcon
      className={classes["refine-icon"]}
      magnifyGlassClassName={classes["magnify-glass"]}
      topCircleClassName={classes["top-circle"]}
      bottomLeftCircleClassName={classes["bottom-left-circle"]}
      bottomRightCircleClassName={classes["bottom-right-circle"]}
      centerCircleClassName={classes["center-circle"]}
    />
  );
};

export default AnimatedRefineIcon;
