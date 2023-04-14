import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronLeftThick(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.7725 16L2.77252 8L10.7725 0H8.22652L0.228516 8L8.22652 16H10.7725Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={11}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M10.7725 16L2.77252 8L10.7725 0H8.22652L0.228516 8L8.22652 16H10.7725Z"
        />
      </mask>
      <g mask="url(#mask0_1_2143)" />
    </svg>
  );
}

export { ChevronLeftThick };
