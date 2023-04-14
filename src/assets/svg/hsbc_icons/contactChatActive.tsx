import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactChatActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18L4 14H18V0H0ZM14 10H4V8.5H14V10ZM14 5.5H4V4H14V5.5Z"
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
          d="M0 0V18L4 14H18V0H0ZM14 10H4V8.5H14V10ZM14 5.5H4V4H14V5.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1251)" />
    </svg>
  );
}

export { ContactChatActive };
