const Image = dynamic(() => import("next/image"), { ssr: false });

import Link from "next/link";

import dynamic from "next/dynamic";
import classes from "./not_found_screen.module.scss";

interface NotFoundScreenProps {
  queryUrl?: string;
}

const NotFoundScreen: React.FC<NotFoundScreenProps> = (props) => {
  const listOfNotFoundGif = [
    "/images/local/404_error_gif.gif",
    "/images/local/404_error_gif_1.gif",
    "/images/local/404_error_gif_2.gif",
  ];

  const randomGifNumber = Math.floor(Math.random() * listOfNotFoundGif.length);

  return (
    <div className={classes["not-found-screen"]}>
      <div className={classes["not-found-screen__img-container"]}>
        <Image
          unoptimized
          src={listOfNotFoundGif[randomGifNumber]}
          alt="Not Found 404 Error Image/Gif"
          height={200}
          width={200}
          className={classes["not-found-screen__img"]}
        />
      </div>
      <h1 className={classes["not-found-screen__title"]}>Page Not Found</h1>
      <p className={classes["not-found-screen__subtitle"]}>
        The url you entered <strong>{props.queryUrl}</strong> maybe not support
        on our website
      </p>
      <div className={classes["not-found-screen__actions"]}>
        <Link href={""} className={classes["not-found-screen__actions__btn"]}>
          Go Back
        </Link>
      </div>
    </div>
  );
};

export default NotFoundScreen;
