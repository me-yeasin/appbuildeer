"use client";

import Link from "next/link";
import { useEffect } from "react";

import AppIcon from "@/assets/icons/app_icon";
import { useAppSelector } from "../../store/hooks";

import classes from "./top_nav_bar.module.scss";

interface TopNavBarProps {}

const TopNavBar: React.FC<TopNavBarProps> = (props) => {
  const isDarkMode = useAppSelector((state) => state.themeSlice.isDarkMode);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.setAttribute("theme-mode", "dark");
    } else {
      rootElement.setAttribute("theme-mode", "light");
    }
  }, [isDarkMode]);

  return (
    <header id="header" className={classes["root-header"]}>
      <Link href={""} className={classes["app-link"]}>
        <AppIcon className={classes["app-link__icon"]} />
      </Link>
      <button className={classes["drawer-btn"]}>
        <div className={classes["drawer-btn__line-one"]}></div>
        <div className={classes["drawer-btn__line-two"]}></div>
      </button>
    </header>
  );
};

export default TopNavBar;
