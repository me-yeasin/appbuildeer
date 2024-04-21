import classes from "./gradient_text.module.scss";

interface GradientTextProps {
  children: any;
  className?: String;
}

const GradientText: React.FC<GradientTextProps> = (props) => {
  return (
    <span className={`${props.className} ${classes["gradient-text"]}`}>
      {props.children}
    </span>
  );
};

export default GradientText;
