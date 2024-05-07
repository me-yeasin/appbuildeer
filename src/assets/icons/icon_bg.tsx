interface IconBgProps {
  className?: string;
  blueOpacity?: number;
  redOpacity?: number;
}

const IconBg: React.FC<IconBgProps> = (props) => {
  return (
    <svg
      width="52"
      height="32"
      viewBox="0 0 52 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M52 11.6456C52 24.3481 36.7025 31.6456 24 31.6456C11.2975 31.6456 0 18.3481 0 5.64558C0 -7.05697 11.2975 5.64558 24 5.64558C36.7025 5.64558 52 -1.05697 52 11.6456Z"
        fill="url(#paint0_linear_35_21)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_35_21"
          x1="119"
          y1="46.6456"
          x2="-25.5"
          y2="-0.354423"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor="#FF1313"
            stopOpacity={props.redOpacity ? `${props.redOpacity}` : "0.4"}
          />
          <stop
            offset="1"
            stopColor="#4169E1"
            stopOpacity={props.blueOpacity ? `${props.blueOpacity}` : "0.7"}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default IconBg;
