import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronRight(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.15234 17L12.1503 9L4.15234 1H5.84834L13.8483 9L5.84834 17H4.15234Z"
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
          d="M4.15234 17L12.1503 9L4.15234 1H5.84834L13.8483 9L5.84834 17H4.15234Z"
        />
      </mask>
      <g mask="url(#mask0_1_2134)" />
    </svg>
  );
}

export { ChevronRight };
