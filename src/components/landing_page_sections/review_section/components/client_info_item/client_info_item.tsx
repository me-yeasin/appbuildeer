import GradientText from "@/common_components/text/gradient_text/gradient_text";
import Image from "next/image";

import classes from "./client_info_item.module.scss";

interface ClientInfoItemProps {
  clientProfilePhoto: string;
  companyName: string;
  position: string;
  companyLogo?: string;
}

const ClientInfoItem: React.FC<ClientInfoItemProps> = (props) => {
  return (
    <div className={classes["client-info-item"]}>
      <div className={classes["review-item__client-avatar-container"]}>
        <div className={classes["review-item__avatar"]}>
          <Image
            src={props.clientProfilePhoto}
            alt="client profile picture"
            height={200}
            width={200}
            className={classes["review-item__avatar-img"]}
          />
        </div>
        {props.companyLogo && (
          <div className={classes["review-item__client-brand"]}>
            <Image
              src={props.companyLogo}
              alt="brand logo"
              height={30}
              width={30}
              className={classes["review-item__client-brand__logo"]}
            />
          </div>
        )}
      </div>
      <h5 className={classes["review-item__client-name"]}>Emma jackson</h5>
      <p className={classes["review-item__client-title"]}>
        {props.position}{" "}
        <GradientText className={classes["review-item__client-company-name"]}>
          {props.companyName}
        </GradientText>
      </p>
    </div>
  );
};

export default ClientInfoItem;
