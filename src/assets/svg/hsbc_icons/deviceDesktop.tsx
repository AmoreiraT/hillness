import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DeviceDesktop(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 15V0H0V15H8.4V16.8H4V18H14V16.8H9.6V15H18ZM1.19922 1.2002H16.7992V13.8002H1.19922V1.2002Z"
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
          d="M18 15V0H0V15H8.4V16.8H4V18H14V16.8H9.6V15H18ZM1.19922 1.2002H16.7992V13.8002H1.19922V1.2002Z"
        />
      </mask>
      <g mask="url(#mask0_1_3385)" />
    </svg>
  );
}

export { DeviceDesktop };
