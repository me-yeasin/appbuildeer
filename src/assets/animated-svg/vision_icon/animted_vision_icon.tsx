import VisionIcon from "@/assets/icons/vision_icon";

import classes from "./animated_vision_icon.module.scss";

interface AnimatedVisionIconProps {
  className?: string;
}

const AnimatedVisionIcon: React.FC<AnimatedVisionIconProps> = (props) => {
  return (
    <VisionIcon
      className={`${props.className} ${classes["icon"]}`}
      tirClassName={classes["tir"]}
      lastCircleClassName={classes["last-circle"]}
    />
  );
};

export default AnimatedVisionIcon;
