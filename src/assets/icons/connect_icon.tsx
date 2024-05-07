interface ConnectIconProps {
  className?: string;
  pathOneClassName?: string;
  pathTwoClassName?: string;
  pathThreeClassName?: string;
  circleOneClassName?: string;
  circleTwoClassName?: string;
}

const ConnectIcon: React.FC<ConnectIconProps> = (props) => {
  const defaultColor = "var(--color-text)";

  return (
    <svg
      width="93"
      height="99"
      viewBox="0 0 93 99"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M46.0009 34.3842C46.1793 34.7463 46.3964 35.1663 46.6833 35.5015H71.1286C71.0937 34.7117 71.0278 33.9257 71.0627 33.1358C71.0743 32.8275 71.1092 32.5232 71.1596 32.2188C70.9037 32.2843 70.6091 32.2958 70.2679 32.2958C61.9321 32.2766 53.5962 32.3228 45.2643 32.2303C45.2333 32.2303 45.2023 32.2226 45.1712 32.2226C45.1751 32.581 45.3341 32.9239 45.4969 33.2745C45.6636 33.6405 45.8187 34.0181 46.0009 34.3842Z"
        fill={defaultColor}
        className={props.pathOneClassName}
      />
      <path
        d="M71.8885 35.5979C72.1212 36.4147 72.3383 37.166 72.5476 37.9097C72.6989 38.1986 72.8384 38.4915 73.0052 38.7727C73.23 39.1503 73.4937 39.5087 73.7534 39.8593C74.1024 40.3332 74.463 40.7994 74.8235 41.2618C75.0251 41.412 75.1996 41.5431 75.3663 41.6779C79.3443 44.8875 84.2682 45.215 88.2888 42.5333C92.1737 39.9402 93.8951 35.1278 92.5265 30.6853C91.1928 26.3506 87.0946 23.299 82.508 23.2258C77.7663 23.1488 73.641 26.1734 72.191 31.0128C72.1716 31.0783 72.1522 31.1361 72.1289 31.1977C72.1018 31.3249 72.0708 31.4559 72.032 31.5869C71.9002 32.0646 71.8032 32.5309 71.7761 33.024C71.7335 33.7908 71.7916 34.5575 71.8265 35.3243C71.8575 35.4129 71.8769 35.5054 71.8885 35.5979ZM82.3296 26.3314C86.389 26.2659 89.8668 29.6642 89.9017 33.7291C89.9366 37.821 86.5829 41.2001 82.4576 41.2233C78.3129 41.2502 74.9088 37.9443 74.8739 33.8601C74.839 29.8068 78.2121 26.3969 82.3296 26.3314Z"
        fill={defaultColor}
        className={props.circleOneClassName}
      />
      <path
        d="M92.9607 94.9458C92.0225 85.1245 85.2297 76.8598 75.754 74.0047C75.2422 73.8506 74.7382 73.6733 74.114 73.4691C82.6631 68.2945 82.1203 59.5097 78.088 54.7512C73.5634 49.4109 65.3827 48.9909 60.3385 53.8958C57.8533 56.3117 56.601 59.3054 56.6979 62.7269C56.8375 67.5201 59.2917 71.0186 63.6729 73.5038C58.5318 74.7984 54.3174 77.1295 50.9908 80.8091C50.9869 80.8207 50.983 80.8322 50.9753 80.8476C50.6341 81.4949 50.0874 81.965 49.5291 82.4274C48.9398 82.909 48.4396 83.4137 48.0248 84.0533C47.5479 84.7854 47.1602 85.5714 46.7337 86.3305C46.0048 89.3011 45.1945 92.1485 44.6827 95.0498C44.2407 97.5389 45.3612 98.6293 47.9162 98.6331C61.808 98.6447 75.6997 98.6408 89.5915 98.6331C92.2706 98.6331 93.2127 97.5774 92.9607 94.9458ZM59.788 62.5921C59.6949 57.7411 63.7814 53.603 68.7015 53.5567C73.6526 53.5105 77.743 57.4714 77.8244 62.3879C77.9058 67.2812 73.8736 71.3577 68.9148 71.4C63.921 71.4424 59.881 67.5393 59.788 62.5921ZM47.8387 95.439C48.4978 84.6737 57.578 76.2625 68.5697 76.1393C79.6971 76.0121 88.8626 84.2884 89.7815 95.439H47.8387Z"
        fill={defaultColor}
      />
      <path
        d="M47.3618 83.5293C47.5479 83.2519 47.7456 82.9976 47.9589 82.7549C47.8387 82.7626 47.7185 82.7664 47.5906 82.7664C39.5145 82.7163 31.4384 82.7433 23.3624 82.7356C22.7382 82.7356 22.1333 82.8281 21.6409 82.6008C21.7456 83.7066 21.8619 84.8239 21.8464 85.9298C22.1217 85.8411 22.4551 85.8103 22.8583 85.8142C29.3836 85.8643 35.9088 85.8373 42.434 85.8373H46.0591C46.4856 85.0628 46.8694 84.2653 47.3618 83.5293Z"
        fill={defaultColor}
        className={props.pathThreeClassName}
      />
      <path
        d="M20.9624 86.7196C21.1136 84.9549 20.8073 83.1286 20.691 81.3793C20.094 79.7341 19.0588 78.3085 18.1825 76.802C14.9684 74.2397 12.4095 73.3998 9.33492 73.8313C3.93408 74.5826 0.0298068 78.925 0.00654407 84.2113C-0.0167187 89.3975 3.83327 93.8824 9.02087 94.7108C14.1426 95.5276 19.1712 92.4452 20.722 87.3515C20.7918 87.1011 20.8733 86.8969 20.9624 86.7196ZM10.5562 91.6977C6.44258 91.6823 3.07335 88.2878 3.11212 84.1998C3.14702 80.131 6.60542 76.7442 10.6803 76.7904C14.7707 76.8328 18.1903 80.2889 18.1399 84.3192C18.0856 88.4188 14.697 91.7131 10.5562 91.6977Z"
        fill={defaultColor}
        className={props.circleTwoClassName}
      />
      <path
        d="M73.3037 40.1213C73.0361 39.7553 72.7609 39.3892 72.536 39.0001C72.4817 38.9076 72.4352 38.8113 72.3848 38.7149C54.4763 51.4569 36.6803 64.1179 18.8067 76.8328C19.3108 77.6766 19.8419 78.505 20.3149 79.3604C20.3266 79.3565 20.3343 79.345 20.346 79.3411C20.2839 79.3642 20.3498 79.3372 20.3615 79.3334C20.3731 79.3257 20.3886 79.3218 20.4002 79.3141C20.4312 79.2987 20.4584 79.2872 20.4894 79.2717C20.5476 79.2409 20.6096 79.2062 20.6678 79.1716C20.7879 79.1022 20.9043 79.0252 21.0245 78.9558C21.1679 78.871 21.3114 78.7978 21.4626 78.7439C21.5905 78.6399 21.7301 78.5397 21.8813 78.4318C34.2416 69.6816 46.5747 60.889 58.9156 52.1119C63.9947 48.4977 69.0776 44.8836 74.1683 41.2618C73.8736 40.8842 73.5828 40.5066 73.3037 40.1213Z"
        fill={defaultColor}
        className={props.pathTwoClassName}
      />
      <path
        d="M48.2691 44.0167C47.8775 41.9553 47.3269 39.9248 46.7841 37.8943C46.7415 37.8056 46.6988 37.717 46.66 37.6245C46.6058 37.4935 46.5631 37.3548 46.5437 37.2123C46.5011 37.1198 46.4584 37.0235 46.4197 36.931C45.8963 35.9408 45.369 34.9544 44.8145 33.9834C44.4695 33.3824 44.1399 32.7659 43.7018 32.2265C43.442 31.9105 43.1784 31.5946 42.9574 31.2517C42.8643 31.1707 42.7829 31.0898 42.7054 31.0051C39.5223 27.468 35.7188 24.952 31.167 23.5379C30.6591 23.38 30.1551 23.2066 29.527 22.9985C38.0412 17.8393 37.5449 9.06217 33.4817 4.26902C29.0152 -1.0019 20.9082 -1.47197 15.8679 3.30577C13.2974 5.74087 11.9985 8.7809 12.1032 12.2756C12.2505 17.0572 14.6931 20.5518 18.9851 22.9831C18.4345 23.1873 18.1399 23.3145 17.8336 23.4108C7.54369 26.5934 1.69698 33.5481 0.107355 44.086C-0.346269 47.0952 0.603628 48.1587 3.6084 48.1587C17.3063 48.1625 31.0042 48.1625 44.7021 48.1587C47.8581 48.1587 48.8623 47.1184 48.2691 44.0167ZM15.1933 11.9442C15.232 7.0586 19.3534 3.04761 24.2851 3.08614C29.213 3.12467 33.2801 7.22428 33.2258 12.0983C33.1715 17.0263 29.0967 20.9834 24.1339 20.9333C19.1596 20.8832 15.1506 16.853 15.1933 11.9442ZM3.39128 44.9607C2.81747 35.9022 12.2466 26.4277 22.4784 25.7534C34.3463 24.9674 44.3803 33.4209 45.1712 44.9607H3.39128Z"
        fill={defaultColor}
      />
    </svg>
  );
};

export default ConnectIcon;