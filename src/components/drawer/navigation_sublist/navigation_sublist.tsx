import { AiOutlineAntDesign } from "react-icons/ai";
import { CgIfDesign, CgWebsite } from "react-icons/cg";
import { DiIllustrator } from "react-icons/di";
import { FaAndroid, FaApple } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { IoShirtOutline } from "react-icons/io5";
import { MdDeveloperMode } from "react-icons/md";
import NavigaitonSublistLink from "../navigation_sublist_link/navigation_sublist_link";

import classes from "./navigation_sublist.module.scss";

interface NavigationSublistProps {
  currentNavButton: string;
  isActive: boolean;
}

const NavigationSublist: React.FC<NavigationSublistProps> = (props) => {
  console.log("Navigation Sublist Calling");

  return (
    <ul
      className={`${
        props.isActive && classes["drawer-navigation__sublist-active"]
      } ${classes["drawer-navigation__sublist"]}`}
    >
      {props.currentNavButton === "Development" && (
        <>
          <NavigaitonSublistLink
            linkName="Android App Development"
            icon={<FaAndroid />}
          />
          <NavigaitonSublistLink
            linkName="Ios App Development"
            icon={<FaApple />}
          />
          <NavigaitonSublistLink
            linkName="Web App Development"
            icon={<CgWebsite />}
          />
          <NavigaitonSublistLink
            linkName="Cross Platform App Development"
            icon={<MdDeveloperMode />}
          />
          <NavigaitonSublistLink
            linkName="Backend App Development"
            icon={<FiServer />}
          />
        </>
      )}
      {props.currentNavButton === "Design" && (
        <>
          <NavigaitonSublistLink
            linkName="Logo Design"
            icon={<AiOutlineAntDesign />}
          />
          <NavigaitonSublistLink
            icon={<IoShirtOutline />}
            linkName="T-Shirt Design"
          />
          <NavigaitonSublistLink
            linkName="Illustration"
            icon={<DiIllustrator />}
          />
          <NavigaitonSublistLink
            linkName="UI/UX Design"
            icon={<CgIfDesign />}
          />
        </>
      )}
    </ul>
  );
};

export default NavigationSublist;
