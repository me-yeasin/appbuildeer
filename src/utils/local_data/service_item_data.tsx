import { BiCustomize, BiSolidPackage } from "react-icons/bi";
import { CgWebsite } from "react-icons/cg";
import { FaAndroid, FaApple, FaIdCard, FaTshirt } from "react-icons/fa";
import { FaBookJournalWhills } from "react-icons/fa6";
import { FiServer } from "react-icons/fi";
import { GiVerticalBanner } from "react-icons/gi";
import { GoProjectRoadmap } from "react-icons/go";
import { ImPencil2 } from "react-icons/im";
import { MdDeveloperMode, MdFaceRetouchingNatural } from "react-icons/md";
import { TbIcons } from "react-icons/tb";

class ServiceItemData {
  title: string;
  subTitle: string;
  icon: React.ReactNode;
  link: string;

  constructor(
    title: string,
    subTitle: string,
    icon: React.ReactNode,
    link: string
  ) {
    {
      this.title = title;
      this.subTitle = subTitle;
      this.icon = icon;
      this.link = link;
    }
  }
}

export const devServices: ServiceItemData[] = [
  new ServiceItemData(
    "Android App Development",
    "lorem new word",
    <FaAndroid />,
    "android"
  ),
  new ServiceItemData(
    "Ios App Development",
    "lorem new word",
    <FaApple />,
    "ios"
  ),
  new ServiceItemData(
    "Web App Development",
    "lorem new word",
    <CgWebsite />,
    "web"
  ),
  new ServiceItemData(
    "Cross Platform App Development",
    "lorem new word",
    <MdDeveloperMode />,
    "cross-platform"
  ),
  new ServiceItemData(
    "BackEnd App Development",
    "lorem new word",
    <FiServer />,
    "backend"
  ),
];

export const designServices: ServiceItemData[] = [
  new ServiceItemData("Logo Design", "lorem new word", <ImPencil2 />, "logos"),
  new ServiceItemData(
    "Icon Design",
    "lorem new word",
    <TbIcons />,
    "icon-designs"
  ),
  new ServiceItemData(
    "Brand Guideline",
    "lorem new word",
    <GoProjectRoadmap />,
    "brand-guideline"
  ),
  new ServiceItemData(
    "T-Shirt Design",
    "lorem new word",
    <FaTshirt />,
    "t-shirts"
  ),
  new ServiceItemData(
    "Banner/Cover Design",
    "lorem new word",
    <GiVerticalBanner />,
    "banner-cover-designs"
  ),
  new ServiceItemData(
    "Business Card Design",
    "lorem new word",
    <FaIdCard />,
    "business-card-designs"
  ),
  new ServiceItemData(
    "Image Retouching",
    "lorem new word",
    <MdFaceRetouchingNatural />,
    "image-retouching"
  ),
  new ServiceItemData(
    "Package Design",
    "lorem new word",
    <BiSolidPackage />,
    "package-designs"
  ),
  new ServiceItemData(
    "Book Cover Design",
    "lorem new word",
    <FaBookJournalWhills />,
    "book-cover-designs"
  ),
  new ServiceItemData(
    "Custom Design",
    "lorem new word",
    <BiCustomize />,
    "custom-designs"
  ),
];
