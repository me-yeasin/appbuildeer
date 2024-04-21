export interface UserTextProps {
  children?: React.ReactNode;
  subtitle?: boolean;
  fontWeight?: number;
  useCenterAlign?: boolean;
  fontSize?: any;
  className?: string;
  useSubtitleDefaultResizing?: boolean;
  fontFamlity?: string;
  color?: string;
  heigth?: number;
  width?: number;
  useDefaultTextGradient?: boolean;
  gradientColors?: string;
  gradientPosition?: string;

  // Title props
  title?: boolean;
  useTitleBottomBorder?: boolean;
  titleBottomBorderWidth?: number;
  padding?: string;
  margin?: string;
  useTitleDefaultPadding?: boolean;

  // Span Text Props
  useSpanText?: boolean;
  spanBeforeText?: string;
  spanAfterText?: string;
  spanText?: string;
  useSpanTextAsSubtitle?: boolean;
  useSpanGradient?: boolean;
}
