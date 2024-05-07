import { useState } from "react";

import { FaAndroid } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineWebStories } from "react-icons/md";
import PricingOverlayOptions from "../pricing_overlay_options/pricing_overlay_options";

import { CgWebsite } from "react-icons/cg";
import { CiCircleCheck, CiServer } from "react-icons/ci";
import { SiIos } from "react-icons/si";
import classes from "./pricing_item.module.scss";

interface PricingItemProps {
  isPricingCardDarkMode: boolean;
}

const PricingItem: React.FC<PricingItemProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [toggleOptions, setToggleOptions] = useState<boolean>(false);

  const selectedIndexHandler = (value: number) => {
    setSelectedIndex(value);
    setToggleOptions(false);
  };

  type DeveloperOptionsItem = {
    name: string;
    icon: React.ReactNode;
    features?: string[];
  };

  const devOptionsList: DeveloperOptionsItem[] = [
    {
      name: "Android App Development",
      icon: <FaAndroid />,
      features: [
        "5 Page App",
        "Zip and APK File",
        "Android Studio",
        "Upload to Play Store",
      ],
    },
    {
      name: "IOS App Development",
      icon: <SiIos />,
      features: [
        "5 Page App",
        "Zip and IOS File",
        "Android Studio",
        "Upload to Play Store",
      ],
    },
    {
      name: "Web App Development",
      icon: <CgWebsite />,
      features: [
        "5 Page App",
        "Zip and APK File",
        "Android Studio",
        "Upload to Play Store",
      ],
    },
    {
      name: "Cross Platform App Development",
      icon: <MdOutlineWebStories />,
      features: [
        "5 Page App",
        "Zip and APK File",
        "Android Studio",
        "Upload to Play Store",
      ],
    },
    {
      name: "BackEnd App Development",
      icon: <CiServer />,
      features: [
        "5 Page App",
        "Zip and APK File",
        "Android Studio",
        "Upload to Play Store",
      ],
    },
  ];

  return (
    <div className={classes["pricing-item"]}>
      <div
        className={`${
          props.isPricingCardDarkMode && classes["pricing-item-card__dark-mode"]
        } ${classes["pricing-item-card"]}`}
      >
        {/* BackGround Image  */}
        <div className={classes["pricing-item-card__bg-icon"]}>
          {devOptionsList[selectedIndex].icon}
        </div>

        <p
          className={`${
            props.isPricingCardDarkMode &&
            classes["pricing-item-card__plan-name-dark-mode"]
          } ${classes["pricing-item-card__plan-name"]}`}
        >
          Starter
        </p>
        <button
          onClick={() => setToggleOptions(true)}
          className={classes["pricing-item-card__change-plan-btn"]}
        >
          <p className={classes["change-plan-btn__text"]}>
            {devOptionsList[selectedIndex].name}
          </p>
          <MdKeyboardArrowDown />
        </button>
        <PricingOverlayOptions
          onClick={selectedIndexHandler}
          itemList={devOptionsList}
          toggleOptions={toggleOptions}
        />
        <div className={classes["pricing-item-card__price-container"]}>
          <h1 className={classes["hidden-price"]}>$100</h1>
          <h1
            className={`${
              props.isPricingCardDarkMode && classes["real-price-dark-mode"]
            } ${classes["real-price"]}`}
          >
            $80
          </h1>
        </div>

        <div className={classes["pricing-item-card__features"]}>
          {devOptionsList[selectedIndex].features?.map((item, _) => (
            <div className={classes["feature-container"]}>
              <CiCircleCheck
                className={`${
                  props.isPricingCardDarkMode &&
                  classes["feature-icon-dark-mode"]
                } ${classes["feature-icon"]}`}
              />
              <p
                className={`${
                  props.isPricingCardDarkMode &&
                  classes["feature-txt-dark-mode"]
                } ${classes["feature-txt"]}`}
              >
                {item}
              </p>
            </div>
          ))}
        </div>
        <div className={classes["pricing-item-card__customized-btn-container"]}>
          <button
            className={` ${
              props.isPricingCardDarkMode &&
              classes["pricing-item-card__customized-btn-dark-mode"]
            } ${classes["pricing-item-card__customized-btn"]}`}
          >
            Customize Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
