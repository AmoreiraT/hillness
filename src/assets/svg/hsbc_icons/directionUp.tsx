import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DirectionUp(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 7.153L9 0.151001L2 7.153V8.849L8.4 2.449V18H9.6V2.449L16 8.849V7.153Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={14}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 7.153L9 0.151001L2 7.153V8.849L8.4 2.449V18H9.6V2.449L16 8.849V7.153Z"
        />
      </mask>
      <g mask="url(#mask0_1_2939)" />
    </svg>
  );
}

export { DirectionUp };
