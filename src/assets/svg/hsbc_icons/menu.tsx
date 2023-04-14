import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Menu(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17H17V15.8H1V17ZM1 1V2.2H17V1H1ZM1 9.6H17V8.4H1V9.6Z"
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
          d="M1 17H17V15.8H1V17ZM1 1V2.2H17V1H1ZM1 9.6H17V8.4H1V9.6Z"
        />
      </mask>
      <g mask="url(#mask0_1_2901)" />
    </svg>
  );
}

export { Menu };
