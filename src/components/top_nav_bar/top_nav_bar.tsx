"use client";

import { useEffect } from "react";

import { useAppSelector } from "../../store/hooks";

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

  return <header id="header"></header>;
};

export default TopNavBar;
