import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Script(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0V18H17V0H1ZM15.7992 16.8002H2.19922V1.2002H15.7992V16.8002ZM14 3.8H4V5H14V3.8ZM14 6.8H4V8H14V6.8ZM14 9.8H4V11H14V9.8ZM14 12.8H4V14H14V12.8Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 0V18H17V0H1ZM15.7992 16.8002H2.19922V1.2002H15.7992V16.8002ZM14 3.8H4V5H14V3.8ZM14 6.8H4V8H14V6.8ZM14 9.8H4V11H14V9.8ZM14 12.8H4V14H14V12.8Z"
        />
      </mask>
      <g mask="url(#mask0_1_940)" />
    </svg>
  );
}

export { Script };
