import Link from "next/link";

import { ReactNode } from "react";

import classes from "./social_media_item.module.scss";

interface SocialMediaItemProps {
  icon: ReactNode;
  link: string;
  className?: string;
}

const SocialMediaItem: React.FC<SocialMediaItemProps> = (props) => {
  return (
    <li
      className={`${props.className} ${classes["review__social-media-item"]}`}
    >
      <Link
        href={props.link}
        className={classes["review__social-media-item__link"]}
      >
        <div className={classes["review__social-media-icon-container"]}>
          {props.icon}
        </div>
      </Link>
    </li>
  );
};

export default SocialMediaItem;
