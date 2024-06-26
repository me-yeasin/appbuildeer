import { useRouter } from "next/navigation";
import { memo } from "react";

import AppIcon from "@/assets/icons/app_icon";
import { selectedCommunicationItem } from "@/components/landing_page_sections/heading_section/heading_section";
import DefaultSlider from "@/components/sliders/default_slider/default_slider";
import { useAppSelector } from "../../../store/hooks";
import NavigationList from "./navigation_list/navigation_list";

import classes from "./drawer.module.scss";

interface DrawerPorps {}

const Drawer: React.FC<DrawerPorps> = (props) => {
  const router = useRouter();
  const isDrawerOpen = useAppSelector(
    (state) => state.drawerSlice.isOpenDrawer
  );

  return (
    <div
      className={`${
        isDrawerOpen ? classes["drawer-open"] : classes["drawer-close"]
      } ${classes["drawer-root"]}`}
    >
      <div className={classes["app-logo-name"]}>
        <AppIcon />
        <div className={classes["app-texts"]}>
          <p className={classes["app-name"]}>AppBuildeer</p>
          <p className={classes["app-description"]}>Build With Confidence</p>
        </div>
      </div>

      <div className={classes["drawer__offer-slider-container"]}>
        <DefaultSlider
          items={[
            { image: "/images/local/test_img.png", description: "a test one" },
            { image: "/images/local/test_img.png", description: "a test one" },
            { image: "/images/local/test_img.png", description: "a test one" },
          ]}
          autoPlay={true}
          loop={true}
        />
      </div>

      <NavigationList />
      <div className={classes["talk-btn-container"]}>
        <button
          className={classes["talk-btn"]}
          onClick={() => router.push(selectedCommunicationItem.link)}
        >
          {selectedCommunicationItem.icon}
          <p>Let's Talk</p>
        </button>
        <p className={classes["info"]}>
          feel free to discuss any thing about your project
        </p>
      </div>
    </div>
  );
};

export default memo(Drawer);
