import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecuritySecureActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 5.734H2.5C1.675 5.734 1 6.409 1 7.234V16.5C1 17.325 1.675 18 2.5 18H15.5C16.325 18 17 17.325 17 16.5V7.234C17 6.409 16.325 5.734 15.5 5.734ZM9.75 14H8.25V10H9.75V14ZM6 4C6 2.9 6.9 2 8 2H10C11.1 2 12 2.9 12 4V4.234H14V4C14 1.8 12.2 0 10 0H8C5.8 0 4 1.8 4 4V4.234H6V4Z"
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
          d="M15.5 5.734H2.5C1.675 5.734 1 6.409 1 7.234V16.5C1 17.325 1.675 18 2.5 18H15.5C16.325 18 17 17.325 17 16.5V7.234C17 6.409 16.325 5.734 15.5 5.734ZM9.75 14H8.25V10H9.75V14ZM6 4C6 2.9 6.9 2 8 2H10C11.1 2 12 2.9 12 4V4.234H14V4C14 1.8 12.2 0 10 0H8C5.8 0 4 1.8 4 4V4.234H6V4Z"
        />
      </mask>
      <g mask="url(#mask0_1_3193)" />
    </svg>
  );
}

export { SecuritySecureActive };
