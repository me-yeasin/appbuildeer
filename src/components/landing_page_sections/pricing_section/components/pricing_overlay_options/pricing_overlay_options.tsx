import classes from "./pricing_overlay_options.module.scss";

interface PricingOverlayOptionsProps {
  onClick: (value: number) => void;
  itemList: any[];
  toggleOptions: boolean;
}

const PricingOverlayOptions: React.FC<PricingOverlayOptionsProps> = (props) => {
  return (
    <div
      className={`${
        props.toggleOptions ? classes["active"] : classes["deactive"]
      } ${classes["pricing-item-card__dev-options"]}`}
    >
      <ul className={classes["pricing-item-card__dev-list"]}>
        {props.itemList.map((item, index) => {
          return (
            <li className={classes["pricing-item-card__dev-item"]}>
              <button
                onClick={() => props.onClick(index)}
                className={classes["pricing-item-card__dev-item-btn"]}
              >
                {item.icon}
                <p className={classes["pricing-item-card__dev-item-btn-txt"]}>
                  {item.name}
                </p>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default PricingOverlayOptions;
