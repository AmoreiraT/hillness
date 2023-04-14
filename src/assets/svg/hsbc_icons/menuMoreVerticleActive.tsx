import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function MenuMoreVerticleActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        opacity={0.01}
        x={18}
        width={18}
        height={18}
        transform="rotate(90 18 0)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 4C10.104 4 11 3.104 11 2C11 0.896 10.104 0 9 0C7.895 0 7 0.896 7 2C7 3.104 7.895 4 9 4ZM9 14C7.895 14 7 14.896 7 16C7 17.104 7.895 18 9 18C10.104 18 11 17.104 11 16C11 14.896 10.104 14 9 14ZM9 7C7.895 7 7 7.896 7 9C7 10.104 7.895 11 9 11C10.104 11 11 10.104 11 9C11 7.896 10.104 7 9 7Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={7}
        y={0}
        width={4}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 4C10.104 4 11 3.104 11 2C11 0.896 10.104 0 9 0C7.895 0 7 0.896 7 2C7 3.104 7.895 4 9 4ZM9 14C7.895 14 7 14.896 7 16C7 17.104 7.895 18 9 18C10.104 18 11 17.104 11 16C11 14.896 10.104 14 9 14ZM9 7C7.895 7 7 7.896 7 9C7 10.104 7.895 11 9 11C10.104 11 11 10.104 11 9C11 7.896 10.104 7 9 7Z"
        />
      </mask>
      <g mask="url(#mask0_1_3245)" />
    </svg>
  );
}

export { MenuMoreVerticleActive };
