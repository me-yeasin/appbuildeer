import CreationStartIcon from "@/assets/icons/creation_start_icon";

import classes from "./animated_creation_start_icon.module.scss";

interface AnimatedCreationStartIconProps {}

const AnimatedCreationStartIcon: React.FC<AnimatedCreationStartIconProps> = (
  props
) => {
  return (
    <CreationStartIcon
      className={classes["creation-icon"]}
      starClassName={classes["star"]}
      fireClassName={classes["fire"]}
    />
  );
};

export default AnimatedCreationStartIcon;
