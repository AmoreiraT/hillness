import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ShareIOSActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 12.0001H10V3.88513L13 6.88613V4.05713L9 0.0571289L5 4.05713V6.88613L8 3.88513V12.0001ZM15.0009 6.00013V15.0001H3.00586V6.00013H1.00586V17.0001H17.0009V6.00013H15.0009Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={17}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8 12.0001H10V3.88513L13 6.88613V4.05713L9 0.0571289L5 4.05713V6.88613L8 3.88513V12.0001ZM15.0009 6.00013V15.0001H3.00586V6.00013H1.00586V17.0001H17.0009V6.00013H15.0009Z"
        />
      </mask>
      <g mask="url(#mask0_1_2777)" />
    </svg>
  );
}

export { ShareIOSActive };
