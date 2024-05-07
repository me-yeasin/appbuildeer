interface CelebrateIconProps {
  className?: string;
  centerStarClassName?: string;
  leftStarClassName?: string;
  rightStarClassName?: string;
}

const CelebrateIcon: React.FC<CelebrateIconProps> = (props) => {
  return (
    <svg
      width="82"
      height="96"
      viewBox="0 0 82 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className}
    >
      <path
        d="M33.4505 51.9448C33.6083 50.9493 33.7297 49.6504 34.0575 48.4001C34.4095 47.0283 34.0818 46.0086 33.0499 45.086C32.1759 44.3091 31.399 43.423 30.5492 42.6096C29.918 42.0148 29.5174 41.335 29.8573 40.4731C30.1608 39.6962 30.8527 39.4413 31.6418 39.3684C32.188 39.3199 32.7465 39.0771 33.2806 39.1256C36.279 39.3442 37.675 37.6204 38.634 35.0833C39.0589 33.9664 39.2653 32.3034 40.989 32.3762C42.5429 32.4369 42.8706 34.0029 43.1377 35.0833C44.0239 38.6886 46.7552 39.1985 49.7536 39.3684C50.749 39.417 51.6231 39.6234 51.9751 40.6673C52.315 41.687 51.6595 42.379 50.9554 42.8646C47.6778 45.1103 46.9737 48.0602 48.2484 51.6898C48.5397 52.5153 48.5276 53.4622 47.6292 54.0206C46.8523 54.5061 46.0269 54.2755 45.3835 53.7535C42.3851 51.3499 39.508 51.4106 36.3882 53.6928C34.6402 54.9432 33.402 54.1784 33.4505 51.9448Z"
        fill="#FECF2F"
        //middle star
        className={props.centerStarClassName}
      />
      <path
        d="M16.2006 62.8216C18.677 64.5332 20.8257 63.4285 22.8529 61.3406C23.6177 60.5515 24.3097 60.9521 24.6253 61.9475C24.7224 62.2389 24.7952 62.5667 24.7467 62.858C24.3703 65.5408 25.5721 67.2039 27.915 68.4178C29.3232 69.1462 29.0925 70.2508 27.5751 70.9064C27.126 71.1006 26.6647 71.2827 26.1791 71.4041C24.686 71.7561 23.8362 72.618 23.6784 74.1961C23.6177 74.8638 23.3992 75.5314 23.1443 76.1505C22.6587 77.3038 21.9303 77.4616 21.0563 76.5026C20.8864 76.3205 20.7164 76.1384 20.6072 75.9199C19.5632 73.8319 17.888 73.1157 15.6179 73.492C14.9381 73.6013 14.0762 73.8198 13.5906 73.0186C13.0687 72.1446 13.6271 71.4162 14.1491 70.8578C15.9335 68.9883 15.6786 67.0825 14.6346 64.9581C13.9184 63.4771 14.5132 62.6273 16.2006 62.8216Z"
        fill="#FECF2F"
        //left star
        className={props.leftStarClassName}
      />
      <path
        d="M70.1355 65.5893C70.6211 63.9141 69.7592 62.7123 68.2296 61.8019C67.7562 61.5227 67.2949 61.1828 66.9186 60.7822C66.1902 59.981 66.2267 59.2283 67.2828 58.7185C67.562 58.585 67.8533 58.4514 68.1568 58.4271C70.5604 58.2208 71.6651 56.7762 72.1021 54.5547C72.2478 53.8142 72.357 52.8795 73.4131 52.7702C74.36 52.6731 74.712 53.4864 75.0034 54.1056C76.0352 56.3028 77.6983 57.1404 80.0776 56.8126C80.6967 56.7276 81.4736 56.5941 81.8621 57.3953C82.2506 58.1844 81.7407 58.7549 81.2915 59.2041C79.4949 60.9885 79.1186 62.9308 80.284 65.213C80.5753 65.7836 80.8545 66.4512 80.2597 67.1068C79.5556 67.8715 78.8515 67.3738 78.2324 67.1068C76.4844 66.3663 74.8577 65.7472 73.2189 67.4345C72.5998 68.0779 71.835 69.134 70.7182 68.5149C69.6014 67.8958 70.2084 66.7183 70.1355 65.5893Z"
        fill="#FECF2F"
        // right start
        className={props.rightStarClassName}
      />
      <path
        d="M47.2044 91.3611C48.0056 80.982 52.4121 72.0839 61.6866 65.8807C61.9901 65.6743 62.33 65.5165 62.6456 65.3101C63.3982 64.8124 64.1023 64.9217 64.5757 65.65C65.0492 66.3784 64.8185 67.0825 64.1144 67.5802C63.3132 68.1507 62.4513 68.6484 61.6744 69.2554C54.0752 75.1066 50.4092 82.9607 49.9357 92.4293C49.9236 92.6721 49.9114 92.9271 49.9114 93.1698C49.9114 94.1167 49.6687 95.0272 48.564 95.015C47.3379 95.0029 47.168 94.0317 47.2165 93.012C47.2287 92.6479 47.2044 92.2715 47.2044 91.3611Z"
        fill="#FE4E61"
        // bottom right line
      />
      <path
        d="M39.4595 83.0335C39.4595 79.6952 39.4595 76.3569 39.4595 73.0307C39.4595 72.0475 39.5445 71.0399 40.7706 70.9671C42.1544 70.8821 42.288 71.9989 42.288 73.0307C42.3001 79.7074 42.3001 86.3718 42.288 93.0485C42.288 94.0196 42.1059 95.0393 40.8677 95.0393C39.6537 95.0272 39.4595 94.0682 39.4595 93.0606C39.4595 89.7102 39.4595 86.3718 39.4595 83.0335Z"
        fill="#5F75BC"
        // bottom center line
      />
      <path
        d="M15.4358 0.425529C16.1156 0.522644 16.4919 0.996077 16.8076 1.55449C20.1459 7.39349 23.4842 13.2325 26.8225 19.0715C27.2838 19.8727 27.5994 20.7831 26.6404 21.3537C25.6328 21.9485 24.953 21.3658 24.4189 20.419C21.1292 14.6164 17.8151 8.83807 14.5011 3.05976C14.1126 2.37996 13.8698 1.70016 14.3311 0.971798C14.5618 0.607619 14.9624 0.437669 15.4358 0.425529Z"
        fill="#5C73BC"
        // top left 2 line
      />
      <path
        d="M66.2024 0.449796C67.3435 0.37696 68.0233 1.48164 67.5134 2.57417C66.9672 3.75169 66.2631 4.84423 65.6197 5.97318C62.9612 10.6468 60.2905 15.3204 57.6199 19.9941C57.4985 20.2126 57.3771 20.419 57.2436 20.6375C56.7701 21.3901 56.1025 21.8878 55.2406 21.4265C54.3301 20.9409 54.4515 20.0791 54.8643 19.3143C55.8354 17.5177 56.8794 15.7575 57.887 13.9851C60.1934 9.95488 62.4878 5.93676 64.7942 1.90651C65.1341 1.26313 65.4619 0.571189 66.2024 0.449796Z"
        fill="#62D28F"
        // top right 2 line
      />
      <path
        d="M17.4631 41.5049C17.4145 41.9541 17.2567 42.379 16.844 42.5854C16.2613 42.8646 15.6422 42.8767 15.1202 42.3911C14.5861 41.8813 14.0641 41.3471 13.5421 40.8252C9.43899 36.6007 5.34804 32.3883 1.24496 28.1639C1.07501 27.9818 0.905056 27.8118 0.722966 27.6297C0.0431649 26.9499 -0.357432 26.2094 0.443762 25.3839C1.29351 24.4978 2.00973 25.0683 2.65312 25.7238C6.1978 29.3535 9.74247 32.9832 13.2872 36.6249C14.4161 37.7782 15.5208 38.9436 16.6376 40.0968C17.0261 40.4974 17.4509 40.8858 17.4631 41.5049Z"
        fill="#FE4E61"
        // top left line
      />
      <path
        d="M81.7407 25.8695C81.6557 26.4765 81.243 26.8528 80.8545 27.2534C76.2537 31.9877 71.6529 36.7342 67.04 41.4564C66.3723 42.1362 65.644 42.8524 64.7093 41.8691C63.8231 40.9344 64.4422 40.1939 65.1341 39.4898C69.7349 34.7555 74.3479 30.0212 78.9487 25.2868C79.4949 24.7163 80.0655 24.2793 80.891 24.5827C81.4494 24.7891 81.7164 25.2625 81.7407 25.8695Z"
        fill="#FEAA01"
        // top right line
      />
      <path
        d="M34.5795 92.3565C34.5795 92.6721 34.5795 92.9756 34.5795 93.2912C34.6038 94.2017 34.2882 94.9543 33.317 95.0393C32.1759 95.1364 31.8846 94.2745 31.7996 93.3398C31.6539 91.7374 31.5932 90.135 31.399 88.5448C30.9863 85.2672 29.9666 82.1595 28.4613 79.2218C27.9757 78.2871 27.5508 77.2795 28.8012 76.6968C30.088 76.102 30.5007 77.2188 30.962 78.0928C33.3049 82.5601 34.3003 87.3551 34.5795 92.3565Z"
        fill="#FEAA02"
        // bottom left line
      />
      <path
        d="M69.2372 82.9485C69.2494 85.0851 67.6106 86.821 65.5954 86.7967C63.641 86.7846 62.0508 85.1336 62.0022 83.0821C61.9537 80.9091 63.4954 79.1975 65.5469 79.1489C67.562 79.1125 69.2251 80.8242 69.2372 82.9485Z"
        fill="#5C73BC"
        // bottom right circle
      />
      <path
        d="M49.8629 10.3798C49.8629 12.5527 48.2483 14.1794 46.1482 14.1308C44.1817 14.0823 42.555 12.3949 42.5429 10.3798C42.5429 8.2918 44.2545 6.5923 46.3303 6.64085C48.3697 6.67727 49.875 8.26752 49.8629 10.3798Z"
        fill="#FECF2F"
        // top center circle 2
      />
      <path
        d="M8.1158 83.7376C8.1158 85.3036 6.73192 86.7603 5.19023 86.8089C3.55142 86.8574 2.20396 85.4128 2.24038 83.6526C2.27679 81.9774 3.61212 80.6299 5.17809 80.6785C6.73192 80.7149 8.1158 82.1595 8.1158 83.7376Z"
        fill="#63D28F"
        // bottom left circle
      />
      <path
        d="M36.1576 6.00961C34.5066 6.00961 33.2199 4.73498 33.1835 3.09618C33.147 1.45737 34.628 -0.0357653 36.2426 0.000652674C37.845 0.0370706 39.0953 1.39667 39.071 3.05976C39.0589 4.74712 37.8085 6.00961 36.1576 6.00961Z"
        fill="#FE4F62"
        // top center cirlce
      />
      <path
        d="M16.3099 53.4864C16.3463 55.1253 15.0716 56.4484 13.4328 56.497C11.7333 56.5456 10.4708 55.3802 10.4223 53.6928C10.3616 51.9205 11.6484 50.5245 13.3114 50.5245C14.841 50.5123 16.2734 51.9326 16.3099 53.4864Z"
        fill="#5C73BC"
        // center left circle
      />
      <path
        d="M64.9763 31.4293C63.3982 31.49 62.0507 30.1668 62.0022 28.5038C61.9415 26.7557 63.2525 25.299 64.8913 25.2868C66.433 25.2747 67.7562 26.6707 67.7805 28.3217C67.8048 30.009 66.5787 31.3686 64.9763 31.4293Z"
        fill="#FE4F62"
        // center right circle
      />
      <path
        d="M76.8243 86.1169C76.0352 85.9834 75.2947 85.4492 75.6104 84.5388C76.0595 83.2399 77.0428 82.1716 78.366 81.7346C79.2643 81.4433 79.9077 82.0502 79.9198 83.0578C79.9198 83.9318 77.7954 86.0805 76.8243 86.1169Z"
        fill="#FEAC08"
      />
      <path
        d="M20.6679 87.695C21.3477 87.8043 21.8454 88.2291 21.9061 88.9939C21.991 89.9165 19.7695 92.1623 18.8348 92.1137C18.0458 92.0773 17.5845 91.616 17.5116 90.8391C17.4509 89.9165 19.6603 87.6829 20.6679 87.695Z"
        fill="#FE5265"
      />
      <path
        d="M25.997 5.98533C24.9288 6.03388 24.2004 5.03846 24.7588 4.12801C25.3294 3.19329 26.0699 2.30712 27.0531 1.77299C27.9636 1.28741 29.0076 1.97936 28.9833 2.98692C28.9712 3.83667 26.8711 5.94891 25.997 5.98533Z"
        fill="#FE5264"
      />
      <path
        d="M14.6224 17.7726C14.586 18.8287 12.5952 20.8438 11.6726 20.856C10.75 20.8681 10.3251 20.3583 10.313 19.4964C10.313 18.683 12.4859 16.4373 13.275 16.4737C14.1126 16.5222 14.6103 17.0078 14.6224 17.7726Z"
        fill="#FEAB05"
      />
      <path
        d="M76.7029 18.5738C76.0838 18.5374 75.6347 18.0518 75.5375 17.3234C75.4283 16.4737 77.7105 14.1187 78.5845 14.1672C79.3493 14.2158 79.8349 14.6649 79.9077 15.4419C80.0048 16.3523 77.8197 18.5859 76.7029 18.5738Z"
        fill="#5E75BC"
      />
      <path
        d="M1.98545 51.6534C1.83978 51.6049 1.49988 51.5684 1.29351 51.3863C0.917194 51.0464 0.625851 50.5245 0.892915 50.0632C1.58486 48.8857 2.44675 47.8174 3.74565 47.2954C4.20695 47.1133 4.69252 47.4775 4.98386 47.9145C5.1174 48.1087 5.20237 48.3637 5.22665 48.5943C5.28735 49.5169 3.10227 51.6777 1.98545 51.6534Z"
        fill="#2FC472"
      />
      <path
        d="M40.4549 21.4023C40.5035 22.422 38.282 24.7284 37.3958 24.6677C37.0559 24.6435 36.6068 24.4978 36.4368 24.2429C35.3443 22.604 37.0074 22.0214 37.7357 21.1109C38.367 20.3097 39.1924 19.9455 40.0908 20.7589C40.3093 20.941 40.3942 21.2687 40.4549 21.4023Z"
        fill="#FE5063"
      />
      <path
        d="M40.8191 63.6349C41.596 63.7199 42.1787 64.1083 42.2151 64.9702C42.2515 65.7472 41.7295 66.2691 41.0254 66.3541C40.2121 66.4512 39.6051 65.9657 39.4959 65.128C39.3866 64.2419 40.0057 63.8413 40.8191 63.6349Z"
        fill="#677DC0"
        // small cicle
      />
      <path
        d="M62.0143 46.0208C62.0022 46.8462 61.4923 47.3682 60.7883 47.4532C59.9506 47.5503 59.368 47.0041 59.283 46.1543C59.2101 45.3531 59.7443 44.8311 60.4726 44.7461C61.3345 44.6612 61.8565 45.1953 62.0143 46.0208Z"
        fill="#FE5769"
        // small circle
      />
      <path
        d="M52.1451 27.8725C51.356 27.7268 50.8583 27.2655 50.9433 26.3794C51.0161 25.5782 51.526 25.2019 52.315 25.2383C53.2255 25.2868 53.6261 25.821 53.5532 26.695C53.4925 27.5083 52.9705 27.8482 52.1451 27.8725Z"
        fill="#FEAC0A"
        // small circle
      />
      <path
        d="M33.1592 30.5067C33.0863 31.4293 32.6493 31.9513 31.7753 31.927C30.9984 31.9149 30.525 31.4415 30.5007 30.6524C30.4885 29.7662 30.9862 29.3171 31.8724 29.3171C32.6979 29.3171 33.0621 29.8027 33.1592 30.5067Z"
        fill="#FEAC08"
        // small circle
      />
      <path
        d="M41.0255 59.022C41.7417 58.9977 42.1666 59.5075 42.1787 60.2602C42.203 61.0978 41.7174 61.6441 40.8191 61.6319C40.0179 61.6198 39.5445 61.0857 39.5081 60.3694C39.4959 59.5318 39.9936 59.0098 41.0255 59.022Z"
        fill="#FEAC07"
        // small circle
      />
      <path
        d="M22.4159 46.5913C22.3431 47.3318 22.0396 47.8538 21.2141 47.9024C20.328 47.9509 19.7817 47.5018 19.7696 46.652C19.7574 45.8144 20.2794 45.3167 21.1534 45.3167C21.9789 45.3167 22.3188 45.8387 22.4159 46.5913Z"
        fill="#FEAB07"
        // small circle
      />
      <path
        d="M58.7367 49.4926C58.7003 50.2331 58.1905 50.8037 57.3893 50.8037C56.6973 50.8037 56.1389 50.3181 56.0904 49.5048C56.0297 48.57 56.6245 48.0845 57.4257 48.0845C58.1055 48.0845 58.6882 48.5336 58.7367 49.4926Z"
        fill="#FEAB06"
        // small circle
      />
      <path
        d="M25.6693 50.136C25.4265 50.9858 24.8681 51.3864 24.0062 51.2285C23.1807 51.0707 22.9379 50.4395 23.0593 49.699C23.205 48.8978 23.7755 48.5579 24.5524 48.6914C25.3294 48.825 25.6935 49.3591 25.6693 50.136Z"
        fill="#5F75BD"
        // small circle
      />
      <path
        d="M49.8143 31.9513C48.9646 31.8178 48.5761 31.2836 48.6489 30.4339C48.7218 29.6206 49.2438 29.2685 50.0207 29.3414C50.7976 29.4021 51.2832 29.8755 51.2589 30.6403C51.2346 31.4657 50.7126 31.927 49.8143 31.9513Z"
        fill="#31C474"
        // small circle
      />
      <path
        d="M29.2868 25.2383C30.2579 25.2504 30.7799 25.6632 30.8163 26.4401C30.8527 27.302 30.3429 27.8361 29.4567 27.8361C28.6191 27.8482 28.2185 27.3262 28.2064 26.5372C28.1942 25.7481 28.6312 25.2868 29.2868 25.2383Z"
        fill="#FE5164"
        // small circle
      />
    </svg>
  );
};

export default CelebrateIcon;