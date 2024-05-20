import Link from "next/link";

import AppIcon from "@/assets/icons/app_icon";
import {
  FaceBookIcon,
  LinkedInIcon,
  TwitterIcon,
} from "@/utils/react_icons/react_icons";
import SocialMediaItem from "../others/social_media_item/social_media_item";
import NavigationSublist from "../overlay_items/drawer/navigation_sublist/navigation_sublist";

import classes from "./main_footer.module.scss";

interface MainFooterProps {
  id?: string;
}

const MainFooter: React.FC<MainFooterProps> = (props) => {
  return (
    <footer id={props.id} className={classes["footer"]}>
      <div className={classes["footer__subscribe-news-letter"]}>
        <p className={classes["footer__subscribe-news-letter-txt"]}>
          Subscribe Our News Letter
        </p>
        <p className={classes["footer__subscribe-news-letter-description"]}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          explicabo voluptates fugit officia exercitationem ipsam nam veritatis.
        </p>
        <div
          className={classes["footer__subscribe-news-letter-input-container"]}
        >
          <input
            type="email"
            name="value"
            id="emailOrName"
            placeholder="Enter Your Email or Phone Number"
            className={classes["footer__subscribe-news-letter-input"]}
          />

          <button className={classes["footer__subscribe-news-letter-btn"]}>
            Submit
          </button>
        </div>
      </div>
      <div className={classes["footer__brand-info"]}>
        <div className={classes["footer__brand-logo-and-name"]}>
          <AppIcon className={classes["footer__brand-logo"]} />
          <h1 className={classes["footer__brand-name"]}>AppBuildeer</h1>
        </div>
        <p className={classes["footer__brand-description"]}>
          Create high quality apps at very low price
        </p>
        <button className={classes["footer__brand-btn"]}>Let's Start</button>
        <ul className={classes["footer__brand-social-link-list"]}>
          <SocialMediaItem
            icon={LinkedInIcon}
            link=""
            className={classes["footer__brand-social-link"]}
          />
          <SocialMediaItem
            icon={TwitterIcon}
            link=""
            className={classes["footer__brand-social-link"]}
          />
          <SocialMediaItem
            icon={FaceBookIcon}
            link=""
            className={classes["footer__brand-social-link"]}
          />
        </ul>
      </div>
      <div className={classes["footer__dev-option"]}>
        <h1 className={classes["footer__option-title"]}>Development</h1>
        <NavigationSublist currentNavButton="Development" isActive />
      </div>
      <div className={classes["footer__dev-option"]}>
        <h1 className={classes["footer__option-title"]}>Design</h1>
        <NavigationSublist currentNavButton="Design" isActive />
      </div>
      <div className={classes["footer__other-btns"]}>
        <Link href={""} className={classes["footer__other-btn"]}>
          # ShowCase
        </Link>
        <Link href={""} className={classes["footer__other-btn"]}>
          # Privacy Policy
        </Link>
        <Link href={""} className={classes["footer__other-btn"]}>
          # About Us
        </Link>
      </div>
    </footer>
  );
};

export default MainFooter;
