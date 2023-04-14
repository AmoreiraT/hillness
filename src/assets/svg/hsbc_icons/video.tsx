import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Video(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18H18V0H0ZM16.7992 16.8002H1.19922V1.2002H16.7992V16.8002ZM6 5.5V12.5L12.14 9L6 5.5Z"
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
          d="M0 0V18H18V0H0ZM16.7992 16.8002H1.19922V1.2002H16.7992V16.8002ZM6 5.5V12.5L12.14 9L6 5.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_858)" />
    </svg>
  );
}

export { Video };
