import { CSSProperties } from "react";
import { UserTextProps } from "../user_text_props/user_text_props";

export const getDefaultStyles = (props: UserTextProps): CSSProperties => {
  return {
    height: props.heigth,
    width: props.width,
    fontSize: props.fontSize,
    fontFamily: props.fontFamlity,
    fontWeight: props.fontWeight,
    textAlign: props.useCenterAlign ? "center" : "left",
    borderBottomWidth: props.titleBottomBorderWidth,
    padding: props.padding,
    margin: props.margin,
    backgroundImage: props.useDefaultTextGradient
      ? `linear-gradient(to ${props.gradientPosition},${props.gradientColors})`
      : "unset",
  };
};

export const getSpanTextStyles = (props: UserTextProps): CSSProperties => {
  return {
    height: props.heigth,
    width: props.width,
    fontSize: props.fontSize,
    fontFamily: props.fontFamlity,
    fontWeight: props.fontWeight,
    textAlign: props.useCenterAlign ? "center" : "left",
    borderBottomWidth: props.titleBottomBorderWidth,
    padding: props.padding,
    margin: props.margin,
    backgroundImage: props.useSpanGradient
      ? `linear-gradient(to ${props.gradientPosition},${props.gradientColors})`
      : "unset",
  };
};
