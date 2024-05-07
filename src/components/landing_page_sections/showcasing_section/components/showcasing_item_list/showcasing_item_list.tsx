import Link from "next/link";

import ShowcasingItem from "../showcasing_item/showcasing_item";
import classes from "./showcasing_item_list.module.scss";

interface ShowcasingItemListProps {
  className?: string;
}

const ShowcasingItemList: React.FC<ShowcasingItemListProps> = (props) => {
  return (
    <ul className={`${props.className} ${classes["showcasing-item-list"]}`}>
      <ShowcasingItem
        imageUrl="/images/local/test_img.png"
        alt="test image"
        title="The Burgery"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit "
      />
      <ShowcasingItem
        imageUrl="/images/local/test_img.png"
        alt="test image"
        title="The Burgery"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit "
      />
      <ShowcasingItem
        imageUrl="/images/local/test_img.png"
        alt="test image"
        title="The Burgery"
        description="lorem ipsum dolor sit amet consectetur adipisicing elit amet consectetur adipisicing elit "
      />

      <Link href={""} className={classes["showcasing-item-list__link"]}>
        <div className={classes["showcasing-item-list__link-graphics"]}>
          <p className={classes["showcasing-item-list__link-graphics-text"]}>
            View All
          </p>
        </div>
      </Link>
    </ul>
  );
};

export default ShowcasingItemList;
