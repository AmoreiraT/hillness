import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function MenuMoreHorizontalActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 7C0.896 7 0 7.896 0 9C0 10.104 0.896 11 2 11C3.104 11 4 10.104 4 9C4 7.896 3.104 7 2 7ZM16 7C14.896 7 14 7.896 14 9C14 10.104 14.896 11 16 11C17.104 11 18 10.104 18 9C18 7.896 17.104 7 16 7ZM9 7C7.896 7 7 7.896 7 9C7 10.104 7.896 11 9 11C10.104 11 11 10.104 11 9C11 7.896 10.104 7 9 7Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={7}
        width={18}
        height={4}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2 7C0.896 7 0 7.896 0 9C0 10.104 0.896 11 2 11C3.104 11 4 10.104 4 9C4 7.896 3.104 7 2 7ZM16 7C14.896 7 14 7.896 14 9C14 10.104 14.896 11 16 11C17.104 11 18 10.104 18 9C18 7.896 17.104 7 16 7ZM9 7C7.896 7 7 7.896 7 9C7 10.104 7.896 11 9 11C10.104 11 11 10.104 11 9C11 7.896 10.104 7 9 7Z"
        />
      </mask>
      <g mask="url(#mask0_1_3265)" />
    </svg>
  );
}

export { MenuMoreHorizontalActive };
