import { LogoProps } from './Logo.types';

const Logo: React.FC<LogoProps> = ({ woodmark }) => {
  if (!woodmark) {
    return (
      <svg
        width="512"
        height="512"
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full bg-yellow-400"
      >
        <g clip-path="url(#clip0_6_245)">
          <circle
            cx="256"
            cy="256"
            r="230.4"
            className="stroke-slate-900"
            stroke="stroke-current"
            stroke-width="51.2"
          />
          <path
            d="M512 256C512 397.385 397.385 512 256 512V256H0C0 114.615 114.615 0 256 0C397.385 0 512 114.615 512 256Z"
            fill="fill-current"
            className="fill-slate-900"
          />
        </g>
        <defs>
          <clipPath id="clip0_6_245">
            <rect width="512" height="512" fill="white" />
          </clipPath>
        </defs>
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 1221 256"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="h-full"
    >
      <g clipPath="url(#clip0_6_216)">
        <path
          d="M482.879 125.848C482.879 136.297 480.922 145.246 477.007 152.695C473.125 160.113 467.822 165.795 461.098 169.741C454.406 173.686 446.815 175.659 438.324 175.659C429.833 175.659 422.225 173.686 415.502 169.741C408.81 165.763 403.507 160.066 399.593 152.648C395.71 145.198 393.769 136.265 393.769 125.848C393.769 115.4 395.71 106.467 399.593 99.0492C403.507 91.5997 408.81 85.9021 415.502 81.9564C422.225 78.0107 429.833 76.0378 438.324 76.0378C446.815 76.0378 454.406 78.0107 461.098 81.9564C467.822 85.9021 473.125 91.5997 477.007 99.0492C480.922 106.467 482.879 115.4 482.879 125.848ZM465.218 125.848C465.218 118.494 464.066 112.291 461.761 107.24C459.488 102.158 456.332 98.3232 452.292 95.7348C448.251 93.1149 443.595 91.8049 438.324 91.8049C433.052 91.8049 428.396 93.1149 424.356 95.7348C420.315 98.3232 417.143 102.158 414.839 107.24C412.566 112.291 411.43 118.494 411.43 125.848C411.43 133.203 412.566 139.422 414.839 144.504C417.143 149.554 420.315 153.389 424.356 156.009C428.396 158.598 433.052 159.892 438.324 159.892C443.595 159.892 448.251 158.598 452.292 156.009C456.332 153.389 459.488 149.554 461.761 144.504C464.066 139.422 465.218 133.203 465.218 125.848ZM498.729 174.333V101.606H515.348V113.727H516.105C517.431 109.529 519.704 106.294 522.924 104.021C526.175 101.717 529.884 100.564 534.051 100.564C534.997 100.564 536.055 100.612 537.223 100.706C538.422 100.77 539.417 100.88 540.206 101.038V116.805C539.48 116.552 538.328 116.331 536.749 116.142C535.203 115.921 533.703 115.811 532.251 115.811C529.126 115.811 526.317 116.489 523.823 117.847C521.361 119.172 519.42 121.019 517.999 123.386C516.579 125.754 515.869 128.484 515.869 131.578V174.333H498.729ZM552.351 174.333V77.3636H569.491V113.633H570.201C571.085 111.865 572.332 109.987 573.942 107.998C575.551 105.978 577.73 104.258 580.476 102.837C583.222 101.385 586.726 100.659 590.987 100.659C596.606 100.659 601.672 102.095 606.186 104.968C610.731 107.809 614.33 112.023 616.981 117.61C619.664 123.165 621.006 129.984 621.006 138.064C621.006 146.05 619.696 152.837 617.076 158.424C614.456 164.011 610.889 168.273 606.375 171.208C601.861 174.144 596.748 175.612 591.034 175.612C586.868 175.612 583.411 174.917 580.665 173.528C577.919 172.139 575.709 170.467 574.036 168.509C572.395 166.521 571.116 164.643 570.201 162.875H569.207V174.333H552.351ZM569.159 137.97C569.159 142.673 569.822 146.792 571.148 150.328C572.505 153.863 574.447 156.625 576.972 158.614C579.529 160.571 582.622 161.549 586.252 161.549C590.04 161.549 593.212 160.539 595.769 158.519C598.326 156.467 600.252 153.674 601.546 150.138C602.872 146.571 603.534 142.515 603.534 137.97C603.534 133.456 602.887 129.447 601.593 125.943C600.299 122.439 598.373 119.693 595.817 117.705C593.26 115.716 590.072 114.722 586.252 114.722C582.591 114.722 579.481 115.684 576.925 117.61C574.368 119.535 572.426 122.234 571.101 125.706C569.807 129.179 569.159 133.266 569.159 137.97ZM635.578 174.333V101.606H652.718V174.333H635.578ZM644.195 91.2841C641.48 91.2841 639.144 90.3844 637.187 88.5852C635.23 86.7544 634.252 84.5606 634.252 82.0038C634.252 79.4154 635.23 77.2216 637.187 75.4223C639.144 73.5915 641.48 72.6761 644.195 72.6761C646.941 72.6761 649.277 73.5915 651.203 75.4223C653.16 77.2216 654.138 79.4154 654.138 82.0038C654.138 84.5606 653.16 86.7544 651.203 88.5852C649.277 90.3844 646.941 91.2841 644.195 91.2841ZM706.659 101.606V114.864H664.851V101.606H706.659ZM675.173 84.1818H692.313V152.458C692.313 154.763 692.66 156.53 693.355 157.761C694.081 158.961 695.027 159.782 696.195 160.223C697.363 160.665 698.658 160.886 700.078 160.886C701.151 160.886 702.13 160.807 703.014 160.65C703.929 160.492 704.623 160.35 705.097 160.223L707.985 173.623C707.07 173.939 705.76 174.286 704.055 174.665C702.382 175.044 700.331 175.264 697.9 175.328C693.607 175.454 689.74 174.807 686.3 173.386C682.859 171.934 680.128 169.693 678.108 166.663C676.12 163.633 675.141 159.845 675.173 155.299V84.1818ZM819.787 108.33C818.998 105.773 817.909 103.484 816.52 101.464C815.162 99.4122 813.521 97.6603 811.596 96.2083C809.702 94.7563 807.524 93.6673 805.061 92.9413C802.599 92.1837 799.916 91.8049 797.012 91.8049C791.804 91.8049 787.164 93.1149 783.092 95.7348C779.02 98.3548 775.816 102.206 773.48 107.288C771.176 112.338 770.024 118.494 770.024 125.754C770.024 133.077 771.176 139.28 773.48 144.362C775.784 149.444 778.988 153.311 783.092 155.962C787.195 158.582 791.962 159.892 797.391 159.892C802.315 159.892 806.577 158.945 810.175 157.051C813.805 155.157 816.599 152.474 818.556 149.002C820.513 145.498 821.491 141.395 821.491 136.691L825.469 137.307H799.143V123.576H838.489V135.223C838.489 143.525 836.722 150.706 833.186 156.767C829.651 162.828 824.79 167.499 818.603 170.782C812.416 174.033 805.314 175.659 797.296 175.659C788.363 175.659 780.519 173.655 773.764 169.646C767.041 165.605 761.785 159.876 757.997 152.458C754.241 145.009 752.363 136.17 752.363 125.943C752.363 118.115 753.467 111.123 755.677 104.968C757.918 98.8125 761.043 93.5884 765.052 89.2954C769.061 84.9709 773.764 81.6881 779.162 79.4469C784.56 77.1742 790.431 76.0378 796.775 76.0378C802.142 76.0378 807.145 76.827 811.785 78.4053C816.425 79.952 820.544 82.1616 824.143 85.0341C827.773 87.9065 830.756 91.3156 833.092 95.2613C835.428 99.207 836.959 103.563 837.685 108.33H819.787ZM854.718 174.333V101.606H871.337V113.727H872.095C873.421 109.529 875.694 106.294 878.913 104.021C882.164 101.717 885.873 100.564 890.04 100.564C890.987 100.564 892.045 100.612 893.212 100.706C894.412 100.77 895.406 100.88 896.195 101.038V116.805C895.469 116.552 894.317 116.331 892.739 116.142C891.192 115.921 889.693 115.811 888.241 115.811C885.116 115.811 882.307 116.489 879.813 117.847C877.351 119.172 875.409 121.019 873.989 123.386C872.569 125.754 871.858 128.484 871.858 131.578V174.333H854.718ZM936.311 175.754C929.209 175.754 923.054 174.191 917.846 171.066C912.637 167.941 908.597 163.569 905.724 157.951C902.883 152.332 901.463 145.766 901.463 138.254C901.463 130.741 902.883 124.16 905.724 118.509C908.597 112.859 912.637 108.472 917.846 105.347C923.054 102.222 929.209 100.659 936.311 100.659C943.414 100.659 949.569 102.222 954.777 105.347C959.986 108.472 964.01 112.859 966.851 118.509C969.724 124.16 971.16 130.741 971.16 138.254C971.16 145.766 969.724 152.332 966.851 157.951C964.01 163.569 959.986 167.941 954.777 171.066C949.569 174.191 943.414 175.754 936.311 175.754ZM936.406 162.023C940.257 162.023 943.477 160.965 946.065 158.85C948.654 156.704 950.579 153.831 951.842 150.233C953.136 146.634 953.783 142.626 953.783 138.206C953.783 133.756 953.136 129.731 951.842 126.133C950.579 122.503 948.654 119.614 946.065 117.468C943.477 115.321 940.257 114.248 936.406 114.248C932.46 114.248 929.178 115.321 926.558 117.468C923.969 119.614 922.028 122.503 920.734 126.133C919.471 129.731 918.84 133.756 918.84 138.206C918.84 142.626 919.471 146.634 920.734 150.233C922.028 153.831 923.969 156.704 926.558 158.85C929.178 160.965 932.46 162.023 936.406 162.023ZM998.634 174.333L978.085 101.606H995.556L1008.34 152.742H1009L1022.07 101.606H1039.35L1052.42 152.458H1053.13L1065.73 101.606H1083.25L1062.65 174.333H1044.8L1031.16 125.186H1030.17L1016.53 174.333H998.634ZM1131.53 101.606V114.864H1089.72V101.606H1131.53ZM1100.04 84.1818H1117.18V152.458C1117.18 154.763 1117.53 156.53 1118.22 157.761C1118.95 158.961 1119.9 159.782 1121.07 160.223C1122.23 160.665 1123.53 160.886 1124.95 160.886C1126.02 160.886 1127 160.807 1127.88 160.65C1128.8 160.492 1129.49 160.35 1129.97 160.223L1132.85 173.623C1131.94 173.939 1130.63 174.286 1128.93 174.665C1127.25 175.044 1125.2 175.264 1122.77 175.328C1118.48 175.454 1114.61 174.807 1111.17 173.386C1107.73 171.934 1105 169.693 1102.98 166.663C1100.99 163.633 1100.01 159.845 1100.04 155.299V84.1818ZM1164.57 131.72V174.333H1147.43V77.3636H1164.19V113.964H1165.04C1166.74 109.86 1169.38 106.625 1172.95 104.258C1176.55 101.859 1181.12 100.659 1186.68 100.659C1191.73 100.659 1196.13 101.717 1199.89 103.831C1203.64 105.946 1206.55 109.04 1208.6 113.112C1210.68 117.184 1211.73 122.155 1211.73 128.026V174.333H1194.59V130.678C1194.59 125.785 1193.32 121.982 1190.8 119.267C1188.3 116.521 1184.8 115.148 1180.29 115.148C1177.26 115.148 1174.54 115.811 1172.14 117.136C1169.77 118.431 1167.91 120.309 1166.56 122.771C1165.23 125.233 1164.57 128.216 1164.57 131.72Z"
          className="fill-slate-900"
          fill="fill-current"
        />
        <circle
          cx="128"
          cy="128"
          r="115.2"
          className="stroke-slate-900"
          stroke="stroke-current"
          strokeWidth="25.6"
        />
        <path
          d="M256 128C256 198.692 198.692 256 128 256V128H0C0 57.3076 57.3076 0 128 0C198.692 0 256 57.3076 256 128Z"
          className="fill-slate-900"
          fill="fill-current"
        />
      </g>
      <defs>
        <clipPath id="clip0_6_216">
          <rect width="1221" height="256" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Logo;