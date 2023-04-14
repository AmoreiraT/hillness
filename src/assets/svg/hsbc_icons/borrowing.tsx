import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Borrowing(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.5 0L5 6.499V6.8H6.396L11.5 1.697L16.8 6.996V12.781H14.2V13.981H18V6.499L11.5 0ZM11.5 8H1.5C0.675 8 0 8.675 0 9.5V11V12.2V16.5C0 17.325 0.675 18 1.5 18H11.5C12.325 18 13 17.325 13 16.5V12.2V11V9.5C13 8.675 12.325 8 11.5 8ZM11.7992 16.5002C11.7992 16.6632 11.6622 16.8002 11.4992 16.8002H1.49922C1.33622 16.8002 1.19922 16.6632 1.19922 16.5002V12.2002H11.7992V16.5002ZM11.7992 11.0002H1.19922V9.5002C1.19922 9.3372 1.33622 9.2002 1.49922 9.2002H11.4992C11.6622 9.2002 11.7992 9.3372 11.7992 9.5002V11.0002ZM10 14H8V15.2H10V14Z"
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
          d="M11.5 0L5 6.499V6.8H6.396L11.5 1.697L16.8 6.996V12.781H14.2V13.981H18V6.499L11.5 0ZM11.5 8H1.5C0.675 8 0 8.675 0 9.5V11V12.2V16.5C0 17.325 0.675 18 1.5 18H11.5C12.325 18 13 17.325 13 16.5V12.2V11V9.5C13 8.675 12.325 8 11.5 8ZM11.7992 16.5002C11.7992 16.6632 11.6622 16.8002 11.4992 16.8002H1.49922C1.33622 16.8002 1.19922 16.6632 1.19922 16.5002V12.2002H11.7992V16.5002ZM11.7992 11.0002H1.19922V9.5002C1.19922 9.3372 1.33622 9.2002 1.49922 9.2002H11.4992C11.6622 9.2002 11.7992 9.3372 11.7992 9.5002V11.0002ZM10 14H8V15.2H10V14Z"
        />
      </mask>
      <g mask="url(#mask0_1_3111)" />
    </svg>
  );
}

export { Borrowing };
