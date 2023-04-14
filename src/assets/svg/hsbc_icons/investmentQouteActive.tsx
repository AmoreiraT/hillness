import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InvestmentQouteActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.35322 9.419L5.58622 6.652L2.69922 9.54V15.3H6.79922V9.986L8.29922 11.486V15.3H12.3992V7.494L13.8992 5.994V15.3H17.9992V0L8.35322 9.419ZM1.2 0H0V18H18V16.8H1.2V0Z"
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
          d="M8.35322 9.419L5.58622 6.652L2.69922 9.54V15.3H6.79922V9.986L8.29922 11.486V15.3H12.3992V7.494L13.8992 5.994V15.3H17.9992V0L8.35322 9.419ZM1.2 0H0V18H18V16.8H1.2V0Z"
        />
      </mask>
      <g mask="url(#mask0_1_620)" />
    </svg>
  );
}

export { InvestmentQouteActive };
