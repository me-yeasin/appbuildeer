import { useState } from "react";
import NavigationButton from "../navigation_button/navigation_button";
import NavigationSublist from "../navigation_sublist/navigation_sublist";

import classes from "./navigation_list.module.scss";

interface NavigationListProps {}

const NavigationList: React.FC<NavigationListProps> = (props) => {
  const [selectedButtonName, setSelectedButtonName] = useState<string | null>(
    null
  );

  const onButtonClickHandler = (name: string) => {
    setSelectedButtonName(name);
  };

  return (
    <div className={classes["drawer-navigation"]}>
      <ul className={classes["drawer-navigation__list"]}>
        <li className={classes["drawer-navigation__item"]}>
          <NavigationButton
            isActive={selectedButtonName === "Development"}
            onClick={() => onButtonClickHandler("Development")}
            buttonName="Development"
          />
          <NavigationSublist
            currentNavButton="Development"
            isActive={selectedButtonName === "Development"}
          />
        </li>
        <li className={classes["drawer-navigation__item"]}>
          <NavigationButton
            isActive={selectedButtonName === "Design"}
            onClick={() => onButtonClickHandler("Design")}
            buttonName="Design"
          />
          <NavigationSublist
            currentNavButton="Design"
            isActive={selectedButtonName === "Design"}
          />
        </li>
        <li className={classes["drawer-navigation__item"]}>
          <NavigationButton
            isActive={selectedButtonName === "ShowCase"}
            onClick={() => {
              onButtonClickHandler("ShowCase");
            }}
            buttonName="ShowCase"
          />
        </li>
        <li className={classes["drawer-navigation__item"]}>
          <NavigationButton
            isActive={selectedButtonName === "Privacy Policy"}
            onClick={() => {
              onButtonClickHandler("Privacy Policy");
            }}
            buttonName="Privacy Policy"
          />
        </li>
        <li className={classes["drawer-navigation__item"]}>
          <NavigationButton
            isActive={selectedButtonName === "About Us"}
            onClick={() => {
              onButtonClickHandler("About Us");
            }}
            buttonName="About Us"
          />
        </li>
      </ul>
    </div>
  );
};

export default NavigationList;
