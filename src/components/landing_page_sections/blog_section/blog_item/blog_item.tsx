import Image from "next/image";
import Link from "next/link";

import classes from "./blog_item.module.scss";

interface BlogItemProps {
  imageLink: string;
  tag: string;
  date: string;
  title: string;
  subtitle: string;
}

const BlogItem: React.FC<BlogItemProps> = (props) => {
  return (
    <li className={classes["blog-section__blog-item"]}>
      <Link href={""} className={classes["blog-section__blog-item-link"]}>
        <div className={classes["blog-section__blog-card"]}>
          <div className={classes["blog-section__blog-card-img-container"]}>
            <Image
              src={props.imageLink}
              alt="blog image"
              height={500}
              width={500}
              className={classes["blog-section__blog-card-img"]}
            />
          </div>
          <div className={classes["blog-section__blog-card-content"]}>
            <p className={classes["blog-section__blog-card-tag"]}>
              {props.tag}
            </p>
            <p className={classes["blog-section__blog-card-date"]}>
              {props.date}
            </p>
            <p className={classes["blog-section__blog-card-title"]}>
              {props.title}
            </p>
            <p className={classes["blog-section__blog-card-subtitle"]}>
              {props.subtitle}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
};

export default BlogItem;
