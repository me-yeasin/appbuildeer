interface FeaturesPointerIconProps {
  className?: string;
}

const FeaturesPointerIcon: React.FC<FeaturesPointerIconProps> = (props) => {
  return (
    <svg
      width="500"
      zoomAndPan="magnify"
      viewBox="0 0 375 374.999991"
      height="500"
      preserveAspectRatio="xMidYMid meet"
      version="1.0"
      className={props.className}
    >
      <defs>
        <clipPath id="22c39c3f34">
          <path
            d="M 112.5 112.5 L 142.5 112.5 L 142.5 142.5 L 112.5 142.5 Z M 112.5 112.5 "
            clipRule="nonzero"
          />
        </clipPath>
      </defs>
      <path
        fill="#4897f4"
        d="M 177.832031 16.359375 C 183.3125 11.613281 191.445312 11.613281 196.921875 16.359375 L 225.03125 40.707031 C 228.226562 43.476562 232.460938 44.71875 236.644531 44.121094 L 273.445312 38.84375 C 280.621094 37.816406 287.460938 42.214844 289.503906 49.171875 L 299.996094 84.863281 C 301.191406 88.917969 304.082031 92.257812 307.921875 94.019531 L 341.730469 109.488281 C 348.324219 112.503906 351.703125 119.90625 349.664062 126.867188 L 339.207031 162.570312 C 338.019531 166.625 338.648438 171 340.929688 174.558594 L 361.011719 205.867188 C 364.929688 211.96875 363.769531 220.023438 358.296875 224.777344 L 330.210938 249.152344 C 327.019531 251.921875 325.1875 255.941406 325.183594 260.171875 L 325.164062 297.375 C 325.160156 304.625 319.835938 310.777344 312.664062 311.8125 L 275.867188 317.125 C 271.6875 317.726562 267.972656 320.117188 265.6875 323.675781 L 245.570312 354.960938 C 241.648438 361.058594 233.847656 363.351562 227.253906 360.34375 L 193.429688 344.90625 C 189.585938 343.152344 185.167969 343.152344 181.324219 344.90625 L 147.503906 360.34375 C 140.90625 363.351562 133.105469 361.058594 129.183594 354.960938 L 109.070312 323.675781 C 106.785156 320.117188 103.070312 317.726562 98.886719 317.125 L 62.09375 311.8125 C 54.917969 310.777344 49.59375 304.625 49.589844 297.375 L 49.570312 260.171875 C 49.570312 255.941406 47.734375 251.921875 44.542969 249.152344 L 16.460938 224.777344 C 10.984375 220.023438 9.828125 211.96875 13.742188 205.867188 L 33.824219 174.558594 C 36.109375 171 36.738281 166.625 35.546875 162.570312 L 25.09375 126.867188 C 23.054688 119.90625 26.433594 112.503906 33.023438 109.488281 L 66.832031 94.019531 C 70.675781 92.257812 73.566406 88.917969 74.757812 84.863281 L 85.25 49.171875 C 87.296875 42.214844 94.136719 37.816406 101.308594 38.84375 L 138.109375 44.121094 C 142.292969 44.71875 146.53125 43.476562 149.726562 40.707031 Z M 177.832031 16.359375 "
        fillOpacity="1"
        fillRule="nonzero"
      />
      <path
        fill="#ffffff"
        d="M 126.667969 188.035156 C 130.996094 183.816406 137.921875 183.910156 142.136719 188.242188 L 176.316406 223.386719 C 178.046875 225.164062 181.003906 224.734375 182.15625 222.542969 L 230.429688 130.84375 C 233.246094 125.496094 239.859375 123.445312 245.203125 126.261719 C 250.550781 129.082031 252.601562 135.703125 249.785156 141.050781 L 201.511719 232.746094 C 193.429688 248.097656 172.734375 251.089844 160.640625 238.65625 L 126.457031 203.511719 C 122.242188 199.179688 122.335938 192.25 126.667969 188.035156 Z M 126.667969 188.035156 "
        fillOpacity="1"
        fillRule="evenodd"
      />
      <g clipPath="url(#22c39c3f34)">
        <path
          fill="#4897f4"
          d="M 127.527344 112.5 C 135.828125 112.5 142.558594 119.230469 142.558594 127.527344 C 142.558594 135.828125 135.828125 142.558594 127.527344 142.558594 C 119.230469 142.558594 112.5 135.828125 112.5 127.527344 C 112.5 119.230469 119.230469 112.5 127.527344 112.5 Z M 127.527344 112.5 "
          fillOpacity="1"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
};

export default FeaturesPointerIcon;