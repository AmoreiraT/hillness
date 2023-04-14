import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function LiquidityManagement(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8 9V0H8.4V9H5.4V5H0V18H18V9H13.8ZM9.59961 1.19922H12.5996V16.8012H9.59961V1.19922ZM8.40039 10.1992V16.8012H5.40039V10.1992H8.40039V10.1992ZM1.19922 6.19922H4.19922V16.8012H1.19922V6.19922ZM16.8008 16.8012H13.8008V10.1992H16.8008V16.8012Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8 9V0H8.4V9H5.4V5H0V18H18V9H13.8ZM9.59961 1.19922H12.5996V16.8012H9.59961V1.19922ZM8.40039 10.1992V16.8012H5.40039V10.1992H8.40039V10.1992ZM1.19922 6.19922H4.19922V16.8012H1.19922V6.19922ZM16.8008 16.8012H13.8008V10.1992H16.8008V16.8012Z"
        />
      </mask>
      <g mask="url(#mask0_1_3329)" />
    </svg>
  );
}

export { LiquidityManagement };
