import CelebrateIcon from "@/assets/icons/celebrate_icon";

import classes from "./animated_celebrate_icon.module.scss";

interface AnimatedCelebrateIconProps {}

const AnimatedCelebrateIcon: React.FC<AnimatedCelebrateIconProps> = (props) => {
  return (
    <CelebrateIcon
      className={classes["celebrate-icon"]}
      centerStarClassName={classes["center-star"]}
      leftStarClassName={classes["center-star"]}
      rightStarClassName={classes["center-star"]}
    />
  );
};

export default AnimatedCelebrateIcon;
