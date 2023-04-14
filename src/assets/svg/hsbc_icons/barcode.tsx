import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Barcode(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.8008 1V17H18.0008V1H16.8008ZM14.4004 17H15.6004V1H14.4004V17ZM10.8008 17H13.2008V1H10.8008V17ZM8.40039 17H9.60039V1H8.40039V17ZM2.40039 17H3.60039V1H2.40039V17ZM0 17H1.2V1H0V17ZM4.80078 17H7.20078V1H4.80078V17Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={19}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.8008 1V17H18.0008V1H16.8008ZM14.4004 17H15.6004V1H14.4004V17ZM10.8008 17H13.2008V1H10.8008V17ZM8.40039 17H9.60039V1H8.40039V17ZM2.40039 17H3.60039V1H2.40039V17ZM0 17H1.2V1H0V17ZM4.80078 17H7.20078V1H4.80078V17Z"
        />
      </mask>
      <g mask="url(#mask0_1_3497)" />
    </svg>
  );
}

export { Barcode };
