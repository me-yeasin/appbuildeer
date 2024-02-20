import { useState } from "react";

import AppIcon from "@/assets/icons/app_icon";
import { RiCodeView } from "react-icons/ri";

import classes from "./drawer.module.scss";

interface DrawerPorps {}

const Drawer: React.FC<DrawerPorps> = (props) => {
  const [activeNavbutton, setActiveNavButton] = useState<string>("");

  const onNavButtonClickHandler = (name: string) => {
    setActiveNavButton(name);
    console.log(activeNavbutton);
  };

  return (
    <div className={classes["drawer-root"]}>
      <div className={classes["app-logo-name"]}>
        <AppIcon />
        <div className={classes["app-texts"]}>
          <p className={classes["app-name"]}>AppBuildeer</p>
          <p className={classes["app-description"]}>Build With Confidence</p>
        </div>
      </div>
      <div className={classes["drawer-navigation"]}>
        <ul className={classes["drawer-navigation__list"]}>
          <li className={classes["drawer-navigation__item"]}>
            <button
              onClick={() => onNavButtonClickHandler("development")}
              className={`${
                activeNavbutton === "development" &&
                classes["drawer-navigation__item-button-active"]
              } ${classes["drawer-navigation__item-button"]}`}
            >
              <div
                className={
                  classes["drawer-navigation__button-name-logo-holder"]
                }
              >
                <RiCodeView
                  className={`${
                    activeNavbutton === "development" &&
                    classes["drawer-navigation__button-icon-active"]
                  } ${classes["drawer-navigation__button-icon"]}`}
                />
                <p className={classes["drawer-navigation__button-text"]}>
                  Development
                </p>
              </div>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Drawer;
