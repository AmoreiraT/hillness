import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DirectionDown(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        opacity={0.01}
        x={18}
        y={18}
        width={18}
        height={18}
        transform="rotate(-180 18 18)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 10.847L9 17.849L16 10.847V9.151L9.6 15.551V0H8.4V15.551L2 9.151V10.847Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={14}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 10.847L9 17.849L16 10.847V9.151L9.6 15.551V0H8.4V15.551L2 9.151V10.847Z"
        />
      </mask>
      <g mask="url(#mask0_1_2951)" />
    </svg>
  );
}

export { DirectionDown };
