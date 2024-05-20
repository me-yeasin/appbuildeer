import { useState } from "react";

import { MdKeyboardArrowDown } from "react-icons/md";
import PricingOverlayOptions from "../pricing_overlay_options/pricing_overlay_options";

import { DeveloperOptionsItem } from "@/data/pricing_data/pricing_data";
import { CiCircleCheck } from "react-icons/ci";
import classes from "./pricing_item.module.scss";

interface PricingItemProps {
  isPricingCardDarkMode: boolean;
  className?: string;
  planName: string;
  planSlogan: string;
  pricingItemList: DeveloperOptionsItem[];
}

const PricingItem: React.FC<PricingItemProps> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [toggleOptions, setToggleOptions] = useState<boolean>(false);

  const selectedIndexHandler = (value: number) => {
    setSelectedIndex(value);
    setToggleOptions(false);
  };

  return (
    <div
      className={`${props.className} ${
        props.isPricingCardDarkMode && classes["pricing-item-card__dark-mode"]
      } ${classes["pricing-item-card"]}`}
    >
      {/* BackGround Image  */}
      <div className={classes["pricing-item-card__bg-icon"]}>
        {props.pricingItemList[selectedIndex].icon}
      </div>

      <p
        className={`${
          props.isPricingCardDarkMode &&
          classes["pricing-item-card__plan-name-dark-mode"]
        } ${classes["pricing-item-card__plan-name"]}`}
      >
        {props.planName}
      </p>
      <p className={classes["pricing-item-card__plan-slogan"]}>
        {props.planSlogan}
      </p>
      <button
        onClick={() => setToggleOptions(true)}
        className={classes["pricing-item-card__change-plan-btn"]}
      >
        <p className={classes["change-plan-btn__text"]}>
          {props.pricingItemList[selectedIndex].name}
        </p>
        <MdKeyboardArrowDown />
      </button>
      <PricingOverlayOptions
        onClick={selectedIndexHandler}
        itemList={props.pricingItemList}
        toggleOptions={toggleOptions}
      />
      <div className={classes["pricing-item-card__price-container"]}>
        <h1 className={classes["hidden-price"]}>
          ${props.pricingItemList[selectedIndex].previosPrice}
        </h1>
        <h1
          className={`${
            props.isPricingCardDarkMode && classes["real-price-dark-mode"]
          } ${classes["real-price"]}`}
        >
          ${props.pricingItemList[selectedIndex].currentPrice}
        </h1>
      </div>

      <div className={classes["pricing-item-card__features"]}>
        {props.pricingItemList[selectedIndex].features?.map((item, index) => (
          <div key={index} className={classes["feature-container"]}>
            <CiCircleCheck
              className={`${
                props.isPricingCardDarkMode && classes["feature-icon-dark-mode"]
              } ${classes["feature-icon"]}`}
            />
            <p
              className={`${
                props.isPricingCardDarkMode && classes["feature-txt-dark-mode"]
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
  );
};

export default PricingItem;
