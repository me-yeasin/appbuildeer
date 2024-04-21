import IconBg from "@/assets/icons/icon_bg";

import classes from "./how_its_work_item.module.scss";

interface HowItsWorkItemProps {
  processNumber: number;
  animatedIcon: React.ReactNode;
  title: string;
  subTitle: string;
}

const HowItsWorkItem: React.FC<HowItsWorkItemProps> = (props) => {
  return (
    <li className={classes["how-its-work__view-list-item"]}>
      <div className={classes["how-its-work__icon-part"]}>
        <h1 className={classes["process-number"]}>#{props.processNumber}</h1>
        <div className={classes["icon-container"]}>
          <IconBg
            className={classes["icon-bg"]}
            blueOpacity={0.45}
            redOpacity={0.45}
          />
          {props.animatedIcon}
        </div>
      </div>

      <p className={classes["process-title"]}>{props.title}</p>
      <p className={classes["process-description"]}>{props.subTitle}</p>
    </li>
  );
};

export default HowItsWorkItem;
