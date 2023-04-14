import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Newspaper(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 0V18H17V0H1ZM15.7992 16.8002H2.19922V1.2002H15.7992V16.8002ZM8 8.4H4V9.6H8V8.4ZM8 13.8H4V15H8V13.8ZM8 11.1H4V12.3H8V11.1ZM10 15H14V8.4H10V15ZM11.1992 9.6001H12.7992V13.8001H11.1992V9.6001ZM14 3H4V4.2H14V3ZM14 5.7H4V6.9H14V5.7Z"
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
          d="M1 0V18H17V0H1ZM15.7992 16.8002H2.19922V1.2002H15.7992V16.8002ZM8 8.4H4V9.6H8V8.4ZM8 13.8H4V15H8V13.8ZM8 11.1H4V12.3H8V11.1ZM10 15H14V8.4H10V15ZM11.1992 9.6001H12.7992V13.8001H11.1992V9.6001ZM14 3H4V4.2H14V3ZM14 5.7H4V6.9H14V5.7Z"
        />
      </mask>
      <g mask="url(#mask0_1_2851)" />
    </svg>
  );
}

export { Newspaper };
