import BodyText from "@/common_components/text/body_text/body_text";
import LowerTitle from "@/common_components/text/lower_title/lower_title";
import TitleText from "@/common_components/text/title_text/title_text";

import PricingList from "@/components/landing_page_sections/pricing_section/components/pricing_list/pricing_list";
import classes from "./pricing_section.module.scss";

interface PricingSectionProps {
  className?: string;
}

const PricingSection: React.FC<PricingSectionProps> = (props) => {
  return (
    <section className={`${props.className} ${classes["pricing-section"]}`}>
      <TitleText>Transparent Pricing, No Surprises</TitleText>
      <LowerTitle className={classes["pricing-section__lower-title"]}>
        Flexible Plans Tailored to Your Success
      </LowerTitle>
      <BodyText className={classes["pricing-section__subtitle"]}>
        Choose from our thoughtfully crafted pricing plans, each designed to
        meet your unique needs. Whether you’re a startup, a growing business, or
        an established enterprise, we’ve got you covered. Our pricing page
        provides clear details, so you know exactly what you’re getting. No
        hidden fees, just straightforward value.
      </BodyText>
      <PricingList />
    </section>
  );
};

export default PricingSection;
