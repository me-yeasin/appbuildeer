import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import PricingItem from "../pricing_item/pricing_item";

import {
  EnterPricePricingPlan,
  GrowthPricingPlan,
  StarterPricingPlan,
} from "@/data/pricing_data/pricing_data";
import classes from "./pricing_list.module.scss";

interface PricingListProps {}

const PricingList: React.FC<PricingListProps> = (props) => {
  const [isLeftOpen, setIsLeftOpen] = useState<boolean>(false);
  const [isRightOpen, setIsRightOpen] = useState<boolean>(false);

  const rightBtnHandler = () => {
    if (isRightOpen) {
      setIsRightOpen(false);
      return;
    }
    setIsRightOpen(true);
  };
  const leftBtnHandler = () => {
    if (isLeftOpen) {
      setIsLeftOpen(false);
      return;
    }

    setIsLeftOpen(true);
  };

  return (
    <div className={classes["pricing-slider"]}>
      <div className={classes["slide-items"]}>
        <PricingItem
          planName="Starter"
          isPricingCardDarkMode={false}
          className={`${
            isLeftOpen
              ? classes["pricing-item-left-active"]
              : classes["pricing-item-left-deactive"]
          }`}
          pricingItemList={StarterPricingPlan}
          planSlogan="Kickstart Your Journey"
        />
        <PricingItem
          planName="Growth"
          isPricingCardDarkMode={true}
          className={classes["pricing-item-center"]}
          pricingItemList={GrowthPricingPlan}
          planSlogan="Elevate Your Business"
        />
        <PricingItem
          planName="Enterprise"
          isPricingCardDarkMode={false}
          className={`${
            isRightOpen
              ? classes["pricing-item-right-active"]
              : classes["pricing-item-right-deactive"]
          }`}
          pricingItemList={EnterPricePricingPlan}
          planSlogan="Unleash Full Potential"
        />
      </div>
      <div className={classes["pricing-slider__side-btn-container"]}>
        <button
          onClick={leftBtnHandler}
          className={`${isRightOpen && classes["side-btn__right-deactive"]} ${
            classes["side-btn__left"]
          }`}
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={rightBtnHandler}
          className={`${isLeftOpen && classes["side-btn__right-deactive"]} ${
            classes["side-btn__right"]
          }`}
        >
          <IoIosArrowBack />
        </button>
      </div>
    </div>
  );
};

export default PricingList;
