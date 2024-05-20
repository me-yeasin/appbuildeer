import { ReactNode } from "react";
import classes from "./body_text.module.scss";

interface BodyTextProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const BodyText: React.FC<BodyTextProps> = (props) => {
  return (
    <p id={props.id} className={`${props.className} ${classes["body-text"]}`}>
      {props.children}
    </p>
  );
};

export default BodyText;
