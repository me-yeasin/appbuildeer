import { memo } from "react";

import classes from "./body_title.module.scss";

interface BodyTitleProps {
  text: string;
  className?: string;
}

const BodyTitle: React.FC<BodyTitleProps> = (props) => {
  return (
    <p className={`${props.className} ${classes["body-title"]}`}>
      {props.text}
    </p>
  );
};

export default memo(BodyTitle);
