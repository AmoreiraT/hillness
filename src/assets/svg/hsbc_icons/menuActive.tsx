import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function MenuActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17H17V15H1V17ZM1 1V3H17V1H1ZM1 10H17V8H1V10Z"
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
          d="M1 17H17V15H1V17ZM1 1V3H17V1H1ZM1 10H17V8H1V10Z"
        />
      </mask>
      <g mask="url(#mask0_1_2891)" />
    </svg>
  );
}

export { MenuActive };
