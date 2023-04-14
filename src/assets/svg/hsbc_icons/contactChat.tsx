import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactChat(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.50222L1.19922 15.1032V1.2002H16.7992V12.8002ZM14 4.3H4V5.5H14V4.3ZM14 8.5H4V9.7H14V8.5Z"
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
          d="M0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.50222L1.19922 15.1032V1.2002H16.7992V12.8002ZM14 4.3H4V5.5H14V4.3ZM14 8.5H4V9.7H14V8.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1261)" />
    </svg>
  );
}

export { ContactChat };
