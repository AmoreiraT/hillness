import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Add(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8.4H9.6V0H8.4V8.4H0V9.6H8.4V18H9.6V9.6H18V8.4Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M18 8.4H9.6V0H8.4V8.4H0V9.6H8.4V18H9.6V9.6H18V8.4Z"
        />
      </mask>
      <g mask="url(#mask0_1_3561)" />
    </svg>
  );
}

export { Add };
