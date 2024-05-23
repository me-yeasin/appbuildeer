import Image from "next/image";

import classes from "./loading.module.scss";

interface LoadingProps {}

const Loading: React.FC<LoadingProps> = (props) => {
  return (
    <div className={classes["loading"]}>
      <div className={classes["loading-img-container"]}>
        <Image
          src={"/images/local/loading_anim_gif.gif"}
          alt="loading gif"
          height={200}
          width={200}
          className={classes["loading-img"]}
        />
      </div>
      <h1 className={classes["loading-txt"]}>Loading...</h1>
    </div>
  );
};

export default Loading;
