import { RiCodeView } from "react-icons/ri";

import { MouseEventHandler } from "react";
import {
  MdOutlineContactEmergency,
  MdOutlineDesignServices,
  MdOutlinePrivacyTip,
} from "react-icons/md";
import { PiSlideshowDuotone } from "react-icons/pi";
import classes from "./navigation_button.module.scss";

interface NavigationButtonProps {
  buttonName: string;
  isActive: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const NavigationButton: React.FC<NavigationButtonProps> = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${
        props.isActive && classes["drawer-navigation__item-button-active"]
      } ${classes["drawer-navigation__item-button"]}`}
    >
      <div className={classes["drawer-navigation__button-name-logo-holder"]}>
        {props.buttonName === "Development" && (
          <RiCodeView
            className={`${
              props.isActive && classes["drawer-navigation__button-icon-active"]
            } ${classes["drawer-navigation__button-icon"]}`}
          />
        )}
        {props.buttonName === "Design" && (
          <MdOutlineDesignServices
            className={`${
              props.isActive && classes["drawer-navigation__button-icon-active"]
            } ${classes["drawer-navigation__button-icon"]}`}
          />
        )}
        {props.buttonName === "ShowCase" && (
          <PiSlideshowDuotone
            className={`${
              props.isActive && classes["drawer-navigation__button-icon-active"]
            } ${classes["drawer-navigation__button-icon"]}`}
          />
        )}
        {props.buttonName === "Pricing & Plans" && }
        {props.buttonName === "Privacy Policy" && (
          <MdOutlinePrivacyTip
            className={`${
              props.isActive && classes["drawer-navigation__button-icon-active"]
            } ${classes["drawer-navigation__button-icon"]}`}
          />
        )}
        {props.buttonName === "About Us" && (
          <MdOutlineContactEmergency
            className={`${
              props.isActive && classes["drawer-navigation__button-icon-active"]
            } ${classes["drawer-navigation__button-icon"]}`}
          />
        )}
        <p className={classes["drawer-navigation__button-text"]}>
          {props.buttonName}
        </p>
      </div>
    </button>
  );
};

export default NavigationButton;
