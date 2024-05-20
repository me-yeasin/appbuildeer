import Link from "next/link";

import classes from "./navigation_sublist_link.module.scss";

interface NavigationSublistLinkProps {
  linkName: string;
  icon: React.ReactNode;
}

const NavigaitonSublistLink: React.FC<NavigationSublistLinkProps> = (props) => {
  return (
    <li className={classes["drawer-navigation__sublist-item"]}>
      <Link
        href={""}
        className={classes["drawer-navigation__sublist-item-link"]}
      >
        <div className={classes["drawer-navigation__item-icon-name-container"]}>
          {props.icon}
          <p>{props.linkName}</p>
        </div>
      </Link>
    </li>
  );
};

export default NavigaitonSublistLink;
