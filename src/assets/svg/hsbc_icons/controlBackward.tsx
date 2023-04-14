import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ControlBackward(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 8.55V1H1V17H4V9.45L17 17V1L4 8.55Z"
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
          d="M4 8.55V1H1V17H4V9.45L17 17V1L4 8.55Z"
        />
      </mask>
      <g mask="url(#mask0_1_728)" />
    </svg>
  );
}

export { ControlBackward };
