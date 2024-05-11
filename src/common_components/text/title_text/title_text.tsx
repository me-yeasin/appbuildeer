import classes from "./title_text.module.scss";

interface TitleTextProps {
  children: any;
  className?: String;
}

const TitleText: React.FC<TitleTextProps> = (props) => {
  return (
    <h1 className={`${props.className} ${classes["title-text"]}`}>
      {props.children}
    </h1>
  );
};

export default TitleText;
