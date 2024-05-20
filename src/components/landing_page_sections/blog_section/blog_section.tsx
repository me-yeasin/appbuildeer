import Link from "next/link";

import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";
import BlogItem from "./blog_item/blog_item";

import classes from "./blog_section.module.scss";

interface BlogSectionProps {}

const BlogSection: React.FC<BlogSectionProps> = (props) => {
  return (
    <section className={classes["blog-section"]}>
      <TitleText>Insights Hub</TitleText>
      <LowerTitle className={classes["blog-section__lower-title"]}>
        Unlocking Knowledge, One Post at a Time
      </LowerTitle>
      <div className={classes["blog-section__show-all-link-container"]}>
        <Link className={classes["blog-section__show-all-link"]} href={""}>
          {"See All >>>"}
        </Link>
      </div>
      <ul className={classes["blog-section__blog-list"]}>
        <BlogItem
          imageLink="/images/local/test_img.png"
          tag="Jetpack Compose"
          date="1 June 2024"
          title="A New Title"
          subtitle="this is lookgin very good at design you know"
        />
        <BlogItem
          imageLink="/images/local/test_img.png"
          tag="Jetpack Compose"
          date="1 June 2024"
          title="A New Title"
          subtitle="this is lookgin very good at design you know"
        />
        <BlogItem
          imageLink="/images/local/test_img.png"
          tag="Jetpack Compose"
          date="1 June 2024"
          title="A New Title"
          subtitle="this is lookgin very good at design you know"
        />
      </ul>
    </section>
  );
};

export default BlogSection;
