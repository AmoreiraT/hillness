import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function BorrowingActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 17C0 17.55 0.45 18 1 18H12C12.55 18 13 17.55 13 17V12.5H0V17ZM9 14H11V15.5H9V14ZM12 8H1C0.45 8 0 8.45 0 9V11H13V9C13 8.45 12.55 8 12 8ZM11.5 0L5 6.499V6.5H12C13.379 6.5 14.5 7.622 14.5 9V13.981H18V6.499L11.5 0Z"
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
          d="M0 17C0 17.55 0.45 18 1 18H12C12.55 18 13 17.55 13 17V12.5H0V17ZM9 14H11V15.5H9V14ZM12 8H1C0.45 8 0 8.45 0 9V11H13V9C13 8.45 12.55 8 12 8ZM11.5 0L5 6.499V6.5H12C13.379 6.5 14.5 7.622 14.5 9V13.981H18V6.499L11.5 0Z"
        />
      </mask>
      <g mask="url(#mask0_1_3099)" />
    </svg>
  );
}

export { BorrowingActive };
