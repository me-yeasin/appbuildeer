import { useState } from "react";

import { FaAndroid } from "react-icons/fa";
import { MdKeyboardArrowDown, MdOutlineWebStories } from "react-icons/md";
import PricingOverlayOptions from "../pricing_overlay_options/pricing_overlay_options";

import { CgWebsite } from "react-icons/cg";
import { CiServer } from "react-icons/ci";
import { SiIos } from "react-icons/si";
import classes from "./pricing_item.module.scss";

interface PricingItemProps {}

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
  };

  const devOptionsList: DeveloperOptionsItem[] = [
    {
      name: "Android App Development",
      icon: <FaAndroid />,
    },
    {
      name: "IOS App Development",
      icon: <SiIos />,
    },
    {
      name: "Web App Development",
      icon: <CgWebsite />,
    },
    {
      name: "Cross Platform App Development",
      icon: <MdOutlineWebStories />,
    },
    {
      name: "BackEnd App Development",
      icon: <CiServer />,
    },
  ];

  return (
    <div className={classes["pricing-item"]}>
      <div className={classes["pricing-item-card"]}>
        <p className={classes["pricing-item-card__plan-name"]}>Starter</p>
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
      </div>
    </div>
  );
};

export default PricingItem;
