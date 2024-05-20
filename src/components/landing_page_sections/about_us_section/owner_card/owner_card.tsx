"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

import SocialMediaItem from "@/components/others/social_media_item/social_media_item";
import {
  LinkedInIcon,
  MailIcon,
  TwitterIcon,
} from "@/utils/react_icons/react_icons";

import classes from "./owner_card.module.scss";

interface OwnerCardProps {
  name: string;
  title: string;
  linkedInLink: string;
  mailLink: string;
  twitterLink: string;
}

const OwnerCard: React.FC<OwnerCardProps> = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);

    return () => {
      setIsMounted(false);
    };
  }, []);

  return (
    <div className={classes["about-us-section__meet-with-founder"]}>
      <div className={classes["about-us-section__meet-with-founder__card"]}>
        <div className={classes["founder-card__photo-container"]}>
          {/* <Lottie
            animationData={ceoPhotoBackgroundAnim}
            loop
            play={isMounted ? true : false}
            className={classes["founder-card__photo-bg"]}
          /> */}

          <Image
            src={"/images/local/profile-img.jpg"}
            alt="founders profile photo"
            height={400}
            width={400}
            className={classes["founder-card__photo"]}
          />
        </div>
        <h1 className={classes["founder-card__name"]}>{props.name}</h1>
        <p className={classes["founder-card__position"]}>{props.title}</p>
        <ul className={classes["founder-card__social-media-items"]}>
          <SocialMediaItem
            icon={LinkedInIcon}
            link={props.linkedInLink}
            className={classes["founder-card__social-item"]}
          />
          <SocialMediaItem
            icon={MailIcon}
            link={props.mailLink}
            className={classes["founder-card__social-item"]}
          />
          <SocialMediaItem
            icon={TwitterIcon}
            link={props.twitterLink}
            className={classes["founder-card__social-item"]}
          />
        </ul>
      </div>
    </div>
  );
};

export default OwnerCard;
