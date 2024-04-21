import classes from "./lower_title.module.scss";

interface LowerTitleProps {
  children: any;
  className?: String;
}

const LowerTitle: React.FC<LowerTitleProps> = (props) => {
  return (
    <h5 className={`${props.className} ${classes["lower-title"]}`}>
      {props.children}
    </h5>
  );
};

export default LowerTitle;
