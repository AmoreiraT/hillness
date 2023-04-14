import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InsightActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.167 3.436C13.833 1.284 11.527 0 8.99902 0C6.46902 0 4.16202 1.286 2.82902 3.44C2.14502 4.545 2.03302 5.934 2.52702 7.156L4.28502 11.5H6.99902V6C6.99902 4.896 7.89402 4 8.99902 4C10.103 4 10.999 4.895 10.999 6V11.5H13.713L15.47 7.153C15.965 5.93 15.852 4.539 15.167 3.436ZM5 13V16L7 18H11L13 16V13H5ZM8.5 6C8.5 5.724 8.724 5.5 9 5.5C9.275 5.5 9.5 5.724 9.5 6V11.5H8.5V6Z"
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
          d="M15.167 3.436C13.833 1.284 11.527 0 8.99902 0C6.46902 0 4.16202 1.286 2.82902 3.44C2.14502 4.545 2.03302 5.934 2.52702 7.156L4.28502 11.5H6.99902V6C6.99902 4.896 7.89402 4 8.99902 4C10.103 4 10.999 4.895 10.999 6V11.5H13.713L15.47 7.153C15.965 5.93 15.852 4.539 15.167 3.436ZM5 13V16L7 18H11L13 16V13H5ZM8.5 6C8.5 5.724 8.724 5.5 9 5.5C9.275 5.5 9.5 5.724 9.5 6V11.5H8.5V6Z"
        />
      </mask>
      <g mask="url(#mask0_1_1058)" />
    </svg>
  );
}

export { InsightActive };
