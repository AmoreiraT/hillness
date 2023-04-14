import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactMessageActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99955 9.939L1.06055 2H16.9385L8.99955 9.939ZM0 3.061L9 12.061L18 3.061V16H0V3.061Z"
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
          d="M8.99955 9.939L1.06055 2H16.9385L8.99955 9.939ZM0 3.061L9 12.061L18 3.061V16H0V3.061Z"
        />
      </mask>
      <g mask="url(#mask0_1_1189)" />
    </svg>
  );
}

export { ContactMessageActive };
