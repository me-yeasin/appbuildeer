"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import AppIcon from "@/assets/icons/app_icon";
import { useAppSelector } from "../../store/hooks";
import Overlay from "../overlay/overlay";

import classes from "./top_nav_bar.module.scss";

interface TopNavBarProps {}

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  const isDarkMode = useAppSelector((state) => state.themeSlice.isDarkMode);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const onDrawerButtonClickHandler = () => {
    setOpenDrawer((prev) => !prev);
  };

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.setAttribute("theme-mode", "dark");
    } else {
      rootElement.setAttribute("theme-mode", "light");
    }
  }, [isDarkMode]);

  return (
    <>
      <header
        id="header"
        className={`${openDrawer && classes["root-header__active"]} ${
          classes["root-header"]
        }`}
      >
        <Link href={""} className={classes["app-link"]}>
          <AppIcon className={classes["app-link__icon"]} />
        </Link>
        <button
          onClick={onDrawerButtonClickHandler}
          className={classes["drawer-btn"]}
        >
          <div
            className={`${
              openDrawer && classes["drawer-btn__line-one-active"]
            } ${classes["drawer-btn__line-one"]}`}
          ></div>
          <div
            className={`${
              openDrawer && classes["drawer-btn__line-two-active"]
            } ${classes["drawer-btn__line-two"]}`}
          ></div>
        </button>
      </header>

      <Overlay
        useBackdrop={false}
        className={`${openDrawer && classes["override-overlay__active"]} ${
          classes["override-overlay"]
        }`}
      >
        <h1>Hello World</h1>
      </Overlay>
    </>
  );
};

export default TopNavBar;
