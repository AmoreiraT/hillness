import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function QRScanActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM0 10H18V8H0V10Z"
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
          d="M2 2H6V0H2C0.9 0 0 0.9 0 2V6H2V2ZM2 12H0V16C0 17.1 0.9 18 2 18H6V16H2V12ZM16 0H12V2H16V6H18V2C18 0.9 17.1 0 16 0ZM16 16H12V18H16C17.1 18 18 17.1 18 16V12H16V16ZM0 10H18V8H0V10Z"
        />
      </mask>
      <g mask="url(#mask0_1_1461)" />
    </svg>
  );
}

export { QRScanActive };
