import classes from "./title_text.module.scss";

interface TitleTextProps {
  children: any;
  className?: String;
}

const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <h3 className={`${props.className} ${classes["title-text"]}`}>
      {props.children}
    </h3>
  );
};

export default TitleText;
