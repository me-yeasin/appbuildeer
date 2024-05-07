import Image from "next/image";
import Link from "next/link";

import GradientText from "@/common_components/text/gradient_text/gradient_text";
import classes from "./showcasing_item.module.scss";

interface ShowcasingItemProps {
  className?: string;
  imageUrl: string;
  alt: string;
  title: string;
  description: string;
}

const ShowcasingItem: React.FC<ShowcasingItemProps> = (props) => {
  return (
    <li className={`${props.className} ${classes["showcasing-item"]}`}>
      <Link href={""} className={classes["showcasing-item__link"]}>
        <div className={classes["showcasing-item__image-part"]}>
          <Image
            src={props.imageUrl}
            alt={props.alt}
            height={300}
            width={300}
            className={classes["showcasing-item__image-part__img"]}
          />
        </div>
        <div className={classes["showcasing-item__content-part"]}>
          <h4 className={classes["showcasing-item__content-part__title"]}>
            {props.title}
          </h4>
          <p className={classes["showcasing-item__content-part__description"]}>
            {props.description}
            <br />
            <GradientText>Click to Read More</GradientText>
          </p>
        </div>
      </Link>
    </li>
  );
};

export default ShowcasingItem;
