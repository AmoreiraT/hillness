import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ControlPause(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6 1H2V17H6V1ZM16 1H12V17H16V1Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={1}
        width={14}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M6 1H2V17H6V1ZM16 1H12V17H16V1Z"
        />
      </mask>
      <g mask="url(#mask0_1_716)" />
    </svg>
  );
}

export { ControlPause };
