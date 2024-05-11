import { useState } from "react";

import { IoIosArrowBack } from "react-icons/io";
import PricingItem from "../pricing_item/pricing_item";

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
          isPricingCardDarkMode={false}
          className={`${
            isLeftOpen
              ? classes["pricing-item-left-active"]
              : classes["pricing-item-left-deactive"]
          }`}
        />
        <PricingItem
          isPricingCardDarkMode={false}
          className={classes["pricing-item-center"]}
        />
        <PricingItem
          isPricingCardDarkMode={false}
          className={`${
            isRightOpen
              ? classes["pricing-item-right-active"]
              : classes["pricing-item-right-deactive"]
          }`}
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
