import SubscriptionIcon from "@/assets/icons/subcription_icon";

import classes from "./animated_plan_icon.module.scss";

interface AnimatedPlanIconProps {}

const AnimatedPlanIcon: React.FC<AnimatedPlanIconProps> = (props) => {
  return (
    <SubscriptionIcon
      className={classes["subscription-plan"]}
      circleClassName={classes["circle"]}
      symbolClassName={classes["symbol"]}
    />
  );
};

export default AnimatedPlanIcon;
