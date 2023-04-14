import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TravelActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 7.088V10H13.5V7.088L12.5 6.088L11.5 7.088ZM16.5 3.5H13V2C13 1.175 12.325 0.5 11.5 0.5H6.5C5.675 0.5 5 1.175 5 2V3.5H1.5C0.675 3.5 0 4.175 0 5V16C0 16.825 0.675 17.5 1.5 17.5H4V4.713H5.5V17.5H13.5V11.5H10V6.467L12.5 3.967L15 6.467V17.5H16.5C17.325 17.5 18 16.825 18 16V5C18 4.175 17.325 3.5 16.5 3.5ZM11.7992 3.5002H6.19922V2.0002C6.19922 1.8372 6.33622 1.7002 6.49922 1.7002H11.4992C11.6622 1.7002 11.7992 1.8372 11.7992 2.0002V3.5002Z"
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
          d="M11.5 7.088V10H13.5V7.088L12.5 6.088L11.5 7.088ZM16.5 3.5H13V2C13 1.175 12.325 0.5 11.5 0.5H6.5C5.675 0.5 5 1.175 5 2V3.5H1.5C0.675 3.5 0 4.175 0 5V16C0 16.825 0.675 17.5 1.5 17.5H4V4.713H5.5V17.5H13.5V11.5H10V6.467L12.5 3.967L15 6.467V17.5H16.5C17.325 17.5 18 16.825 18 16V5C18 4.175 17.325 3.5 16.5 3.5ZM11.7992 3.5002H6.19922V2.0002C6.19922 1.8372 6.33622 1.7002 6.49922 1.7002H11.4992C11.6622 1.7002 11.7992 1.8372 11.7992 2.0002V3.5002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1297)" />
    </svg>
  );
}

export { TravelActive };
