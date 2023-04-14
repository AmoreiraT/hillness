import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactComplaint(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1522L1.19922 15.1032V1.2002H16.7992V12.8002ZM9 11C9.552 11 10 10.552 10 10C10 9.448 9.552 9 9 9C8.448 9 8 9.448 8 10C8 10.552 8.448 11 9 11ZM9.60139 2.38281H8.40039V7.49981H9.60039V2.38281H9.60139Z"
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
          d="M0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1522L1.19922 15.1032V1.2002H16.7992V12.8002ZM9 11C9.552 11 10 10.552 10 10C10 9.448 9.552 9 9 9C8.448 9 8 9.448 8 10C8 10.552 8.448 11 9 11ZM9.60139 2.38281H8.40039V7.49981H9.60039V2.38281H9.60139Z"
        />
      </mask>
      <g mask="url(#mask0_1_1239)" />
    </svg>
  );
}

export { ContactComplaint };
