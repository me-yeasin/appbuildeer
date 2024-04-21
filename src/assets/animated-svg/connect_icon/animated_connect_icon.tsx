import ConnectIcon from "@/assets/icons/connect_icon";

import classes from "./animated_connect_icon.module.scss";

interface AnimatedConnectIconProps {}

const AnimatedConnectIcon: React.FC<AnimatedConnectIconProps> = (props) => {
  return (
    <ConnectIcon
      className={classes["connect-icon"]}
      pathOneClassName={classes["path-one"]}
      pathTwoClassName={classes["path-one"]}
      pathThreeClassName={classes["path-one"]}
    />
  );
};

export default AnimatedConnectIcon;
