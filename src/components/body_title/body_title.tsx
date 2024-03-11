import { memo } from "react";

import classes from "./body_title.module.scss";

interface BodyTitleProps {
  text: string;
}

const BodyTitle: React.FC<BodyTitleProps> = (props) => {
  return <p className={classes["body-title"]}>{props.text}</p>;
};

export default memo(BodyTitle);
