import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function QRCode(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 8H8V0H0V8ZM1.19922 1.2002H6.79922V6.8002H1.19922V1.2002ZM3 5H5V3H3V5ZM10 0V2H12V0H10ZM14 2H12V4H14V2ZM12 4H10V8H14V6H12V4ZM14 4V6H16V4H14ZM18 8V6H16V8H18ZM18 0H16V4H18V0ZM0 18H8V10H0V18ZM1.19922 11.2002H6.79922V16.8002H1.19922V11.2002ZM3 15H5V13H3V15ZM10 18H18V10H10V18ZM11.1992 11.2002H16.7992V16.8002H11.1992V11.2002V11.2002ZM13 15H15V13H13V15Z"
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
          d="M0 8H8V0H0V8ZM1.19922 1.2002H6.79922V6.8002H1.19922V1.2002ZM3 5H5V3H3V5ZM10 0V2H12V0H10ZM14 2H12V4H14V2ZM12 4H10V8H14V6H12V4ZM14 4V6H16V4H14ZM18 8V6H16V8H18ZM18 0H16V4H18V0ZM0 18H8V10H0V18ZM1.19922 11.2002H6.79922V16.8002H1.19922V11.2002ZM3 15H5V13H3V15ZM10 18H18V10H10V18ZM11.1992 11.2002H16.7992V16.8002H11.1992V11.2002V11.2002ZM13 15H15V13H13V15Z"
        />
      </mask>
      <g mask="url(#mask0_1_1888)" />
    </svg>
  );
}

export { QRCode };
