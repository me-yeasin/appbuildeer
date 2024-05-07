"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

import AppIcon from "@/assets/icons/app_icon";
import { useAppSelector } from "../../store/hooks";
import Drawer from "../overlay_items/drawer/drawer";
import Overlay from "../overlay_items/overlay/overlay";

import classes from "./top_nav_bar.module.scss";

interface TopNavBarProps {}

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  const [scrollY, setScrollY] = useState<number>(0);
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  const isDarkMode = useAppSelector((state) => state.themeSlice.isDarkMode);

  const onDrawerButtonClickHandler = useCallback(() => {
    setOpenDrawer((prev) => !prev);
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.setAttribute("theme-mode", "dark");
    } else {
      rootElement.setAttribute("theme-mode", "light");
    }
  }, [isDarkMode]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className={`${openDrawer && classes["root-header__active"]} ${
          scrollY > 30 && classes["add-root-header-bg"]
        } ${classes["root-header"]}`}
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
      <Overlay useBackdrop={false}>
        <Drawer open={openDrawer} />
      </Overlay>
    </>
  );
};

export default TopNavBar;
