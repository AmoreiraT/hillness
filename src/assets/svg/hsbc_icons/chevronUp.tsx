import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronUp(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 13.848L9 5.84999L17 13.848V12.152L9 4.15199L1 12.152V13.848Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={4}
        width={16}
        height={10}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 13.848L9 5.84999L17 13.848V12.152L9 4.15199L1 12.152V13.848Z"
        />
      </mask>
      <g mask="url(#mask0_1_2128)" />
    </svg>
  );
}

export { ChevronUp };
