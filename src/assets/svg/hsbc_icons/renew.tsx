import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Renew(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 16.8C5.84 16.8 3.12 14.908 1.897 12.2H7L5.8 11H0V16.8L1.2 18V13.464C2.75 16.171 5.657 18 9 18C13.971 18 18 13.971 18 9H16.8C16.8 13.301 13.301 16.8 9 16.8ZM16.8 0V4.536C15.25 1.829 12.343 0 9 0C4.03 0 0 4.029 0 9H1.2C1.2 4.699 4.699 1.2 9 1.2C12.16 1.2 14.88 3.092 16.103 5.8H11L12.2 7H18V1.2L16.8 0Z"
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
          d="M9 16.8C5.84 16.8 3.12 14.908 1.897 12.2H7L5.8 11H0V16.8L1.2 18V13.464C2.75 16.171 5.657 18 9 18C13.971 18 18 13.971 18 9H16.8C16.8 13.301 13.301 16.8 9 16.8ZM16.8 0V4.536C15.25 1.829 12.343 0 9 0C4.03 0 0 4.029 0 9H1.2C1.2 4.699 4.699 1.2 9 1.2C12.16 1.2 14.88 3.092 16.103 5.8H11L12.2 7H18V1.2L16.8 0Z"
        />
      </mask>
      <g mask="url(#mask0_1_1421)" />
    </svg>
  );
}

export { Renew };
