"use client";

import Link from "next/link";

import { useAppDispatch } from "../../../../store/hooks";
import { closeDrawer } from "../../../../store/slice/drawer_slice";

import classes from "./navigation_sublist_link.module.scss";

interface NavigationSublistLinkProps {
  linkName: string;
  icon: React.ReactNode;
  href: string;
}

const NavigaitonSublistLink: React.FC<NavigationSublistLinkProps> = (props) => {
  const useDispatch = useAppDispatch();

  return (
    <li className={classes["drawer-navigation__sublist-item"]}>
      <Link
        href={props.href}
        className={classes["drawer-navigation__sublist-item-link"]}
        onClick={() => {
          useDispatch(closeDrawer());
        }}
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
