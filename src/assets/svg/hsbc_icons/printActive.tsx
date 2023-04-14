import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function PrintActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 6H2C0.896 6 0 6.896 0 8V16H3V11H15V16H18V8C18 6.896 17.104 6 16 6ZM15 0H3V4.5H15V0ZM4.5 18H13.5V12.5H4.5V18Z"
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
          d="M16 6H2C0.896 6 0 6.896 0 8V16H3V11H15V16H18V8C18 6.896 17.104 6 16 6ZM15 0H3V4.5H15V0ZM4.5 18H13.5V12.5H4.5V18Z"
        />
      </mask>
      <g mask="url(#mask0_1_1952)" />
    </svg>
  );
}

export { PrintActive };
