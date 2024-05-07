import PricingItem from "../pricing_item/pricing_item";

import classes from "./pricing_list.module.scss";

interface PricingListProps {}

const PricingList: React.FC<PricingListProps> = (props) => {
  return (
    <div className={classes["pricing-slider"]}>
      <PricingItem />
    </div>
  );
};

export default PricingList;
