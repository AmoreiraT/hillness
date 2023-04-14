import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function PaymentByAliasActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0H1V7H8V0ZM11 0V7H18V0H11ZM11 17H18V10H11V17ZM5 8C2.239 8 0 10.239 0 13C0 15.761 2.239 18 5 18C7.761 18 10 15.761 10 13C10 10.239 7.761 8 5 8ZM7.5 14.061L5.75 12.311V16.101H4.25V12.311L2.5 14.061V11.94L5 9.44L7.5 11.94V14.061Z"
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
          d="M8 0H1V7H8V0ZM11 0V7H18V0H11ZM11 17H18V10H11V17ZM5 8C2.239 8 0 10.239 0 13C0 15.761 2.239 18 5 18C7.761 18 10 15.761 10 13C10 10.239 7.761 8 5 8ZM7.5 14.061L5.75 12.311V16.101H4.25V12.311L2.5 14.061V11.94L5 9.44L7.5 11.94V14.061Z"
        />
      </mask>
      <g mask="url(#mask0_1_2785)" />
    </svg>
  );
}

export { PaymentByAliasActive };
