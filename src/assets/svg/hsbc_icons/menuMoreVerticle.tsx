import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function MenuMoreVerticle(props: Props) {
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
        d="M9 3C9.828 3 10.5 2.328 10.5 1.5C10.5 0.672 9.828 0 9 0C8.171 0 7.5 0.672 7.5 1.5C7.5 2.328 8.171 3 9 3ZM9 15C8.171 15 7.5 15.672 7.5 16.5C7.5 17.328 8.171 18 9 18C9.828 18 10.5 17.328 10.5 16.5C10.5 15.672 9.828 15 9 15ZM9 7.5C8.171 7.5 7.5 8.172 7.5 9C7.5 9.828 8.171 10.5 9 10.5C9.828 10.5 10.5 9.828 10.5 9C10.5 8.172 9.828 7.5 9 7.5Z"
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
          d="M9 3C9.828 3 10.5 2.328 10.5 1.5C10.5 0.672 9.828 0 9 0C8.171 0 7.5 0.672 7.5 1.5C7.5 2.328 8.171 3 9 3ZM9 15C8.171 15 7.5 15.672 7.5 16.5C7.5 17.328 8.171 18 9 18C9.828 18 10.5 17.328 10.5 16.5C10.5 15.672 9.828 15 9 15ZM9 7.5C8.171 7.5 7.5 8.172 7.5 9C7.5 9.828 8.171 10.5 9 10.5C9.828 10.5 10.5 9.828 10.5 9C10.5 8.172 9.828 7.5 9 7.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_3255)" />
    </svg>
  );
}

export { MenuMoreVerticle };
