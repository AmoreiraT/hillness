import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function LiquidityManagementActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.05 0H9.75V18H13.05V0ZM0 5H3.45V18H0V5ZM8.24922 9H4.94922V18H8.24922V9ZM18.0008 9H14.5508V18H18.0008V9Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.05 0H9.75V18H13.05V0ZM0 5H3.45V18H0V5ZM8.24922 9H4.94922V18H8.24922V9ZM18.0008 9H14.5508V18H18.0008V9Z"
        />
      </mask>
      <g mask="url(#mask0_1_3317)" />
    </svg>
  );
}

export { LiquidityManagementActive };
