import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronRightThick(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.228516 16L8.22852 8L0.228516 0H2.77452L10.7725 8L2.77452 16H0.228516Z"
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
          d="M0.228516 16L8.22852 8L0.228516 0H2.77452L10.7725 8L2.77452 16H0.228516Z"
        />
      </mask>
      <g mask="url(#mask0_1_2137)" />
    </svg>
  );
}

export { ChevronRightThick };
