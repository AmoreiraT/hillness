import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ControlPlay(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.774 9L3 1V17L16.774 9Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={1}
        width={14}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.774 9L3 1V17L16.774 9Z"
        />
      </mask>
      <g mask="url(#mask0_1_712)" />
    </svg>
  );
}

export { ControlPlay };
