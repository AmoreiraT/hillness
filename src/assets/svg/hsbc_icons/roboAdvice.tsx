import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function RoboAdvice(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.13139 10.5889L15.6004 4.11885V2.42285L9.13139 8.89185L6.22939 5.98785L2.40039 9.81685V11.5129L6.22939 7.68485L9.13139 10.5889ZM0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1512L1.19922 15.1032V1.2002H16.7992V12.8002Z"
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
          d="M9.13139 10.5889L15.6004 4.11885V2.42285L9.13139 8.89185L6.22939 5.98785L2.40039 9.81685V11.5129L6.22939 7.68485L9.13139 10.5889ZM0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1512L1.19922 15.1032V1.2002H16.7992V12.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1014)" />
    </svg>
  );
}

export { RoboAdvice };
