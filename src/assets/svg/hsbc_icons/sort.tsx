import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Sort(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 7.5L9 0L16.5 7.5H1.5ZM16.5 10.5L9 18L1.5 10.5H16.5Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.5 7.5L9 0L16.5 7.5H1.5ZM16.5 10.5L9 18L1.5 10.5H16.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_2701)" />
    </svg>
  );
}

export { Sort };
