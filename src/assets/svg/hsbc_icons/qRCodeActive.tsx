import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function QRCodeActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} x={11.5} y={5} width={1.5} height={1.5} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.79922 11.2002H3.19922V14.8002H6.79922V11.2002ZM5.60039 13.5999H4.40039V12.3999H5.60039V13.5999ZM6.79922 3.2002H3.19922V6.8002H6.79922V3.2002ZM5.60039 5.5999H4.40039V4.3999H5.60039V5.5999ZM14.7992 11.2002H11.1992V14.8002H14.7992V11.2002ZM13.6004 13.5999H12.4004V12.3999H13.6004V13.5999ZM0 0V18H18V0H0ZM8 16H2V10H8V16ZM8 8H2V2H8V8ZM16 16H10V10H16V16ZM16 5H14.5V6.5H16V8H14.5V6.5H13V8H10V5H11.5V3.5H10V2H11.5V3.5H13V5H14.5V2H16V5Z"
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
          d="M6.79922 11.2002H3.19922V14.8002H6.79922V11.2002ZM5.60039 13.5999H4.40039V12.3999H5.60039V13.5999ZM6.79922 3.2002H3.19922V6.8002H6.79922V3.2002ZM5.60039 5.5999H4.40039V4.3999H5.60039V5.5999ZM14.7992 11.2002H11.1992V14.8002H14.7992V11.2002ZM13.6004 13.5999H12.4004V12.3999H13.6004V13.5999ZM0 0V18H18V0H0ZM8 16H2V10H8V16ZM8 8H2V2H8V8ZM16 16H10V10H16V16ZM16 5H14.5V6.5H16V8H14.5V6.5H13V8H10V5H11.5V3.5H10V2H11.5V3.5H13V5H14.5V2H16V5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1489)" />
    </svg>
  );
}

export { QRCodeActive };
