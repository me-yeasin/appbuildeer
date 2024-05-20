import NavigaitonSublistLink from "../navigation_sublist_link/navigation_sublist_link";

import {
  designServices,
  devServices,
} from "@/utils/local_data/service_item_data";
import classes from "./navigation_sublist.module.scss";

interface NavigationSublistProps {
  currentNavButton: string;
  isActive: boolean;
}

const NavigationSublist: React.FC<NavigationSublistProps> = (props) => {
  return (
    <ul
      className={`${
        props.isActive && classes["drawer-navigation__sublist-active"]
      } ${classes["drawer-navigation__sublist"]}`}
    >
      {props.currentNavButton === "Development" && (
        <>
          {devServices.map((item, index) => {
            return (
              <NavigaitonSublistLink
                key={index}
                linkName={item.title}
                icon={item.icon}
              />
            );
          })}
        </>
      )}
      {props.currentNavButton === "Design" && (
        <>
          {designServices.map((item, index) => {
            return (
              <NavigaitonSublistLink
                key={index}
                linkName={item.title}
                icon={item.icon}
              />
            );
          })}
        </>
      )}
    </ul>
  );
};

export default NavigationSublist;
