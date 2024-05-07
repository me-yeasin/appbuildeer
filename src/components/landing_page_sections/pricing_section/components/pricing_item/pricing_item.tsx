import { MdKeyboardArrowDown } from "react-icons/md";
import classes from "./pricing_item.module.scss";

interface PricingItemProps {}

const PricingItem: React.FC<PricingItemProps> = (props) => {
  return (
    <div className={classes["pricing-item"]}>
      <div className={classes["pricing-item-card"]}>
        <p className={classes["pricing-item-card__plan-name"]}>Starter</p>
        <button className={classes["pricing-item-card__change-plan-btn"]}>
          <p className={classes["change-plan-btn__text"]}>
            Android App Development
          </p>
          <MdKeyboardArrowDown />
        </button>
        <div className="pricing-item-card__dev-options">
          <h1>Hello Wolrd</h1>
        </div>
      </div>
    </div>
  );
};

export default PricingItem;
