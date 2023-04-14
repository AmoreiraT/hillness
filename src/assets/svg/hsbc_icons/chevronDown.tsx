import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronDown(props: Props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17 4.334l-8 7.998-8-7.998V6.03l8 8 8-8V4.334z"
        fill="#333"
      />
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={4}
        width={16}
        height={11}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17 4.334l-8 7.998-8-7.998V6.03l8 8 8-8V4.334z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export { ChevronDown };
