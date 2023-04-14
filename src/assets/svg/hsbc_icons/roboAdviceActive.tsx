import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function RoboAdviceActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18L4 14H18V0H0ZM15.6004 4.33196L9.13139 10.801L6.22939 7.89696L2.40039 11.726V9.60496L6.22939 5.77596L9.13139 8.67996L15.6004 2.20996V4.33196Z"
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
          d="M0 0V18L4 14H18V0H0ZM15.6004 4.33196L9.13139 10.801L6.22939 7.89696L2.40039 11.726V9.60496L6.22939 5.77596L9.13139 8.67996L15.6004 2.20996V4.33196Z"
        />
      </mask>
      <g mask="url(#mask0_1_1006)" />
    </svg>
  );
}

export { RoboAdviceActive };
