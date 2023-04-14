import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactScreenShare(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4 2.8V0H18V11H15.2V9.8H16.8V1.2H5.2V2.8H4ZM4 6.4H5.2V9.8H11.6V11H4V6.4ZM14 4H0V15H6.4V16.8H3V18H11V16.8H7.6V15H14V4ZM12.7992 13.8002H1.19922V5.2002H12.7992V13.8002Z"
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
          d="M4 2.8V0H18V11H15.2V9.8H16.8V1.2H5.2V2.8H4ZM4 6.4H5.2V9.8H11.6V11H4V6.4ZM14 4H0V15H6.4V16.8H3V18H11V16.8H7.6V15H14V4ZM12.7992 13.8002H1.19922V5.2002H12.7992V13.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1163)" />
    </svg>
  );
}

export { ContactScreenShare };
