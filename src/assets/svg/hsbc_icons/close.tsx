import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Close(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.424 2.42399L15.576 1.57599L9.00005 8.15199L2.42405 1.57599L1.57605 2.42399L8.15205 8.99999L1.57605 15.576L2.42405 16.424L9.00005 9.84799L15.576 16.424L16.424 15.576L9.84805 8.99999L16.424 2.42399Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.424 2.42399L15.576 1.57599L9.00005 8.15199L2.42405 1.57599L1.57605 2.42399L8.15205 8.99999L1.57605 15.576L2.42405 16.424L9.00005 9.84799L15.576 16.424L16.424 15.576L9.84805 8.99999L16.424 2.42399Z"
        />
      </mask>
      <g mask="url(#mask0_1_1689)" />
    </svg>
  );
}

export { Close };
