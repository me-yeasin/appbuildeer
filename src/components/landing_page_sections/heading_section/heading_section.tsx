import { useRouter } from "next/navigation";
import { memo, useEffect, useState } from "react";

import BodyText from "@/common_components/text/body_text/body_text";
import CubicImageSlider from "@/components/sliders/cubic_image_slider/cubic_image_slider";
import { TypeAnimation } from "react-type-animation";

import {
  MailIcon,
  SkypeIcon,
  WhatsAppIcon,
} from "@/utils/react_icons/react_icons";
import CommunicationOptionModalSheet from "./communication_option_modal_sheet/communication_option_modal_sheet";
import classes from "./heading_section.module.scss";

interface HeadingSectionProps {}

export var selectedCommunicationItem: any = {};

const HeadingSection: React.FC<HeadingSectionProps> = (props) => {
  const [holdId, setHoldId] = useState<string>("");
  const [toggleModalBottomSheet, setToggleModalBottomSheet] =
    useState<boolean>(false);

  const router = useRouter();

  const communicationItemList = [
    {
      id: "#mail",
      name: "Mail",
      description: "Use what's app for instant messenging",
      icon: MailIcon,
      link: "mailto:RjwN3@example.com",
    },
    {
      id: "#whatsapp",
      name: "What's App",
      description: "Use what's app for instant messenging",
      icon: WhatsAppIcon,
      link: "https://wa.me/+8801660154035",
    },
    {
      id: "#skype",
      name: "Skype",
      description: "Use what's app for instant messenging",
      icon: SkypeIcon,
      link: "skype:live:appbuildeer",
    },
  ];

  useEffect(() => {
    const getCommunicationData = localStorage.getItem(
      "communication-method-id"
    );
    setHoldId(
      getCommunicationData !== null
        ? getCommunicationData
        : communicationItemList[0].id
    );
  }, []);

  return (
    <>
      <CommunicationOptionModalSheet
        toggleModalBottomSheet={toggleModalBottomSheet}
        onBackdropClick={() => setToggleModalBottomSheet(false)}
        onItemClick={(id: string) => {
          localStorage.setItem("communication-method-id", id);
          setHoldId(id);
          setToggleModalBottomSheet(false);
        }}
        communicationList={communicationItemList}
        holdId={holdId}
      />
      <section className={classes["heading-section"]}>
        <CubicImageSlider
          loop={true}
          shadow={false}
          slideShadows={false}
          itemList={[
            "/images/local/header_image.png",
            "/images/local/header_image.png",
            "/images/local/header_image.png",
          ]}
          className={classes["heading-image-slider"]}
        />
        <div className={classes["title-text-container"]}>
          <h2 className={classes["heading-text"]}>
            Create Your{" "}
            <TypeAnimation
              sequence={["Mobile App", 3000, "Web App", 3000]}
              repeat={Infinity}
            />
            <br /> at a Very Low Price
          </h2>
          <BodyText className={classes["sub-title__text"]}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elitamet
            consectetur, adipisicing elit.
          </BodyText>
          {communicationItemList.map((item, _) => {
            if (item.id === holdId) {
              selectedCommunicationItem = item;
              return (
                <button
                  key={item.id}
                  onClick={() => router.push(item.link)}
                  className={classes["let-talk-btn"]}
                >
                  {item.icon}
                  <p className={classes["let-talk-btn__text"]}>Lets Talk</p>
                </button>
              );
            }
            return null;
          })}

          <p className={classes["change-communication-option-txt"]}>
            Want to change communication method? {"  "}
            <button
              onClick={() => setToggleModalBottomSheet(true)}
              className={classes["show-option-btn"]}
            >
              Show Options
            </button>
          </p>
        </div>
      </section>
    </>
  );
};

export default memo(HeadingSection);
