import { useState } from "react";

import { FaFacebook } from "react-icons/fa";
import SocialMediaItem from "../../../../others/social_media_item/social_media_item";
import ModalBottomSheet from "../../../../overlay_items/modal_bottom_sheet/modal_bottom_sheet";
import ClientInfoItem from "../client_info_item/client_info_item";
import ReviewItem from "../review_item/review_item";

import classes from "./review_item_list.module.scss";

interface ReviewItemListProps {
  className?: string;
}

const ReviewItemList: React.FC<ReviewItemListProps> = (props) => {
  const [toggleModalBottomSheet, setToggleModalBottomSheet] =
    useState<boolean>(false);

  return (
    <>
      <ModalBottomSheet
        className={classes["review__modal-sheet"]}
        toggleModalBottomSheet={toggleModalBottomSheet}
        onBackdropClick={() => setToggleModalBottomSheet(false)}
      >
        <div className={classes["modal-sheet__bg"]}>
          <ClientInfoItem
            clientProfilePhoto="/images/local/profile-img.jpg"
            companyName="Vabna Soft"
            position="Founder & CEO"
            companyLogo="/images/local/brand.png"
          />

          <ul className={classes["review__social-media-list"]}>
            <SocialMediaItem icon={<FaFacebook />} link="" />
          </ul>
        </div>
      </ModalBottomSheet>

      <ul className={`${props.className} ${classes["review-item-list"]}`}>
        <ReviewItem
          reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi,
        facilis eveniet consequuntur omnis est atque, error necessitatibus
        assumenda voluptates officiis ducimus! Enim, recusandae ut! Praesentium
        culpa voluptatem dolorem excepturi."
          clientName="Emma Jackson"
          clientProfilePhoto="/images/local/profile-img.jpg"
          position="Founder & CEO"
          companyName="Vabna Soft"
          companyLogo="/images/local/brand.png"
          onClick={() => setToggleModalBottomSheet(true)}
        />
        <ReviewItem
          reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi,
        facilis eveniet consequuntur omnis est atque, error necessitatibus
        assumenda voluptates officiis ducimus! Enim, recusandae ut! Praesentium
        culpa voluptatem dolorem excepturi."
          clientName="Emma Jackson"
          clientProfilePhoto="/images/local/profile-img.jpg"
          position="Founder & CEO"
          companyName="Vabna Soft"
          companyLogo="/images/local/brand.png"
          onClick={() => setToggleModalBottomSheet(true)}
        />
        <ReviewItem
          reviewText="   Lorem ipsum dolor sit, amet consectetur adipisicing elit. Modi eligendi,
        facilis eveniet consequuntur omnis est atque, error necessitatibus
        assumenda voluptates officiis ducimus! Enim, recusandae ut! Praesentium
        culpa voluptatem dolorem excepturi."
          clientName="Emma Jackson"
          clientProfilePhoto="/images/local/profile-img.jpg"
          position="Founder & CEO"
          companyName="Vabna Soft"
          companyLogo="/images/local/brand.png"
          onClick={() => setToggleModalBottomSheet(true)}
        />
      </ul>
    </>
  );
};

export default ReviewItemList;
