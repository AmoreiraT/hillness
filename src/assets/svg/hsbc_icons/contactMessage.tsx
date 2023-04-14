import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactMessage(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 2V16H18V2H0ZM15.9528 3.2002L9.00083 10.1512L2.04883 3.2002H15.9528ZM1.19922 14.7999V4.04785L8.99922 11.8479L16.7992 4.04785V14.7999H1.19922Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={18}
        height={14}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0 2V16H18V2H0ZM15.9528 3.2002L9.00083 10.1512L2.04883 3.2002H15.9528ZM1.19922 14.7999V4.04785L8.99922 11.8479L16.7992 4.04785V14.7999H1.19922Z"
        />
      </mask>
      <g mask="url(#mask0_1_1197)" />
    </svg>
  );
}

export { ContactMessage };
