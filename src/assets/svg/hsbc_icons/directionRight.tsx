import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DirectionRight(props: Props) {
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
        d="M10.847 2L17.849 9L10.847 16H9.151L15.551 9.6H0V8.4H15.551L9.151 2H10.847Z"
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
          d="M10.847 2L17.849 9L10.847 16H9.151L15.551 9.6H0V8.4H15.551L9.151 2H10.847Z"
        />
      </mask>
      <g mask="url(#mask0_1_2943)" />
    </svg>
  );
}

export { DirectionRight };
