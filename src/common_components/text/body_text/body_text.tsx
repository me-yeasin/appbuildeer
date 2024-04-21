import classes from "./body_text.module.scss";

interface BodyTextProps {
  children: String;
  className?: String;
}

const BodyText: React.FC<BodyTextProps> = (props) => {
  return (
    <p className={`${props.className} ${classes["body-text"]}`}>
      {props.children}
    </p>
  );
};

export default BodyText;
