import {
  AndroidIcon,
  BackEndIcon,
  CrossPlatformIcon,
  IosIcon,
  WebIcon,
} from "@/utils/react_icons/react_icons";
import React from "react";

interface ServiceWeOfferDataListProps {
  imageLink: string;
  alt: string;
  title: string;
  description: string;
}

export const ServiceWeOfferDataList: ServiceWeOfferDataListProps[] = [
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Product Discovery & Product Research",
    alt: "product research image",
    imageLink: "/images/local/product_research_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "UX Design, UI Design & Branding",
    alt: "UI UX Design Image",
    imageLink: "/images/local/ui_ux_design_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Moderan Android App Development",
    alt: "Android App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Preparing a Go-To-Market Strategy",
    alt: "Preparing a Go-To-Market Strategy Image",
    imageLink: "/images/local/market_stategy_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "QA Advisory & Consulting",
    alt: "QA Advisory & Consulting Image",
    imageLink: "/images/local/consulting_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Providing Customer Insights & Behavior Analytics",
    alt: "Providing Customer Insights & Behavior Analytics Image",
    imageLink: "/images/local/behaviour_analatics_icon_img.png",
  },
  {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Maintenance & Support",
    alt: "Maintenance & Support Image",
    imageLink: "/images/local/support_icon_img.png",
  },
];

export const ServiceWeOfferDataByUrl: {
  [key: string]: ServiceWeOfferDataListProps;
} = {
  android: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Moderan Android App Development",
    alt: "Android App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },

  ios: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "IOS App Development",
    alt: "Ios App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },

  web: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Web App Development",
    alt: "web App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },

  "cross-platform": {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "Cross-Platform App Development",
    alt: "Cross Platform App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },

  backend: {
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis teneturmagnam id iusto, architecto, harum eum maxime consequuntur aliquamlabore a atque tempora porro ratione distinctio officia qui? Nostrum,aliquid!",
    title: "BackEnd App Development",
    alt: "Backend App Development Image",
    imageLink: "/images/local/modrn_android_development_icon_img.png",
  },
};

interface HowItsWorkItemProps {
  title: string;
  description: string;
  image: string;
}
export const HowItsWorkItemDataList: HowItsWorkItemProps[] = [
  {
    title: "Expanding Market Reach",
    description:
      "We design Android apps that help businesses tap into a vast audience of users, opening doors to global markets and opportunities.",
    image: "/images/local/market_react.jpg",
  },
  {
    title: "Enhancing Customer Engagement",
    description:
      "Our apps provide a direct channel for customer interaction, offering personalized experiences that foster loyalty and brand connection.",
    image: "/images/local/customer_engagement.jpg",
  },
  {
    title: "Increasing Operational Efficiency",
    description:
      "By automating and simplifying business processes, we enable companies to save time, reduce errors, and focus on core activities.",
    image: "/images/local/incresing_efficiency.jpeg",
  },
  {
    title: "Strategic Growth",
    description:
      "We assist businesses in developing strategically designed apps that cater to the needs and preferences of their target audience, boosting visibility and customer base3.",
    image: "/images/local/stetagic_growth.jpg",
  },
];

interface ShowCaseItemDataListProps {
  imageLink: string;
  title: string;
  alt: string;
  shortDescription: string;
  linkList: string[];
  featureList: string[];
}

export const ShowCaseItemDataList: ShowCaseItemDataListProps[] = [
  {
    title: "The Barger Lovwer",
    alt: "The Barger Lovwer App  Image",
    imageLink: "/images/local/test_img.png",
    featureList: ["feature 1", "feature 2", "feature 3"],
    linkList: ["link1", "link2", "link3"],
    shortDescription:
      "a new descritio for your this applicatoin is growing now what can u dow",
  },
  {
    title: "The Barger Lovwer",
    alt: "The Barger Lovwer App  Image",
    imageLink: "/images/local/test_img.png",
    featureList: ["feature 1", "feature 2", "feature 3"],
    linkList: ["link1", "link2", "link3"],
    shortDescription:
      "a new descritio for your this applicatoin is growing now what can u dow",
  },
  {
    title: "The Barger Lovwer",
    alt: "The Barger Lovwer App  Image",
    imageLink: "/images/local/test_img.png",
    featureList: ["feature 1", "feature 2", "feature 3"],
    linkList: ["link1", "link2", "link3"],
    shortDescription:
      "a new descritio for your this applicatoin is growing now what can u dow",
  },
];

interface HeaderSectionDataProps {
  id: string;
  boldName: string;
  icon: React.ReactNode;
  title: string;
  subTitle: string;
  mailLink: string;
}

export const ServiceHeaderSectionDataList: {
  [key: string]: HeaderSectionDataProps;
} = {
  android: {
    id: "#development/android-app-dev",
    title: "Android App Development",
    boldName: "Android App",
    icon: AndroidIcon,
    mailLink: "",
    subTitle: `At AppBuilder,we empower companies and individuals to
          achieve their goals by harnessing the transformative power of Android
          applications. Our approach is centered on creating custom solutions
          that drive growth, enhance engagement, and streamline operations`,
  },
  ios: {
    id: "#development/ios-app-dev",
    title: "IOS App Development",
    boldName: "IOS App",
    icon: IosIcon,
    mailLink: "",
    subTitle: `At AppBuilder,we empower companies and individuals to
          achieve their goals by harnessing the transformative power of Android
          applications. Our approach is centered on creating custom solutions
          that drive growth, enhance engagement, and streamline operations`,
  },
  web: {
    id: "#development/web-app-dev",
    title: "Web App Development",
    boldName: "Website",
    icon: WebIcon,
    mailLink: "",
    subTitle: `At AppBuilder,we empower companies and individuals to
          achieve their goals by harnessing the transformative power of Android
          applications. Our approach is centered on creating custom solutions
          that drive growth, enhance engagement, and streamline operations`,
  },
  "cross-platform": {
    id: "#development/cross-platform-app-dev",
    title: "Cross Platform App Development",
    boldName: "Cross Platform App",
    icon: CrossPlatformIcon,
    mailLink: "",
    subTitle: `At AppBuilder,we empower companies and individuals to
          achieve their goals by harnessing the transformative power of Android
          applications. Our approach is centered on creating custom solutions
          that drive growth, enhance engagement, and streamline operations`,
  },
  backend: {
    id: "#development/backend-app-dev",
    title: "BackEnd App Development",
    boldName: "Custom Server",
    icon: BackEndIcon,
    mailLink: "",
    subTitle: `At AppBuilder,we empower companies and individuals to
          achieve their goals by harnessing the transformative power of Android
          applications. Our approach is centered on creating custom solutions
          that drive growth, enhance engagement, and streamline operations`,
  },
};
