import Image from "next/image";

import classes from "./error_screen.module.scss";

interface ErrorScreenProps {
  error: Error & { digest?: string };
  reset: () => void;
}

const ErrorScreen: React.FC<ErrorScreenProps> = (props) => {
  return (
    <div className={classes["error-screen"]}>
      <div className={classes["error-screen__img-container"]}>
        <Image
          src={"/images/local/error_pipe_gif.gif"}
          alt="error icon"
          height={200}
          width={200}
          className={classes["error-screen__img"]}
          priority={true}
        />
      </div>
      <h1 className={classes["error-screen__title"]}>Something went wrong</h1>
      <p className={classes["error-screen__description"]}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam amet
        facilis harum dolores accusamus quis vero ipsam consequuntur illum
        cupiditate? Architecto soluta quaerat assumenda iure ducimus
        reprehenderit praesentium accusamus blanditiis.
      </p>
      <div className={classes["error-screen__actions"]}>
        <button className={classes["error-screen__actions__btn1"]}>
          Go back
        </button>
        <button
          onClick={props.reset}
          className={classes["error-screen__actions__btn2"]}
        >
          Try Again
        </button>
      </div>
    </div>
  );
};

export default ErrorScreen;
