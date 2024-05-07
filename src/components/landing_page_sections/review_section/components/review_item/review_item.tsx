import BodyText from "@/common_components/text/body_text/body_text";
import ClientInfoItem from "../client_info_item/client_info_item";
import classes from "./review_item.module.scss";

interface ReviewItemProps {
  reviewText: string;
  clientName: string;
  position: string;
  companyName: string;
  companyLogo?: string;
  clientProfilePhoto: string;
  onClick: () => void;
}

const ReviewItem: React.FC<ReviewItemProps> = (props) => {
  return (
    <li className={classes["review-item"]}>
      <BodyText className={classes["review-item__text"]}>
        {props.reviewText}
      </BodyText>
      <div className={classes["review-item__client-info"]}>
        <ClientInfoItem
          clientProfilePhoto="/images/local/profile-img.jpg"
          companyName="Vabna Soft"
          position="Founder & CEO"
          companyLogo="/images/local/brand.png"
        />
        <button
          onClick={props.onClick}
          className={classes["review-item__client-contact-btn"]}
        >
          Contact
        </button>
      </div>
    </li>
  );
};

export default ReviewItem;
