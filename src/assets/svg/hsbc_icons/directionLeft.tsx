import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DirectionLeft(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        opacity={0.01}
        y={18}
        width={18}
        height={18}
        transform="rotate(-90 0 18)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.15239 2L0.150391 9L7.15239 16H8.84839L2.44839 9.6H17.9994V8.4H2.44839L8.84839 2H7.15239Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={18}
        height={14}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.15239 2L0.150391 9L7.15239 16H8.84839L2.44839 9.6H17.9994V8.4H2.44839L8.84839 2H7.15239Z"
        />
      </mask>
      <g mask="url(#mask0_1_2947)" />
    </svg>
  );
}

export { DirectionLeft };
