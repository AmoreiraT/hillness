import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronLeft(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.8483 17L5.85034 9L13.8483 1H12.1523L4.15234 9L12.1523 17H13.8483Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={4}
        y={1}
        width={10}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.8483 17L5.85034 9L13.8483 1H12.1523L4.15234 9L12.1523 17H13.8483Z"
        />
      </mask>
      <g mask="url(#mask0_1_2140)" />
    </svg>
  );
}

export { ChevronLeft };
