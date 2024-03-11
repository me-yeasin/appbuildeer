import Link from "next/link";

import classes from "./service_card.module.scss";

interface ServiceCardProps {
  title: string;
  description: string;
  serviceIcon: React.ReactNode;
  href: string;
}

const ServiceCard: React.FC<ServiceCardProps> = (props) => {
  return (
    <Link href={props.href} className={classes["service-card__link"]}>
      <div className={classes["service-card-root"]}>
        <div className={classes["bg-design"]}></div>
        <div className={classes["card"]}>
          <div className={classes["card__icon-container"]}>
            {props.serviceIcon}
          </div>
          <p className={classes["card__title"]}>{props.title}</p>
          <p className={classes["card__description"]}>{props.description}</p>
          <p className={classes["learn-more-text"]}>Learn More</p>
        </div>
      </div>
    </Link>
  );
};

export default ServiceCard;
