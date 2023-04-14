import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function MenuMoreHorizontal(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.5 7.5C0.672 7.5 0 8.172 0 9C0 9.828 0.672 10.5 1.5 10.5C2.328 10.5 3 9.829 3 9C3 8.171 2.328 7.5 1.5 7.5ZM16.5 7.5C15.672 7.5 15 8.172 15 9C15 9.828 15.672 10.5 16.5 10.5C17.328 10.5 18 9.829 18 9C18 8.171 17.328 7.5 16.5 7.5ZM9 7.5C8.172 7.5 7.5 8.172 7.5 9C7.5 9.828 8.172 10.5 9 10.5C9.828 10.5 10.5 9.828 10.5 9C10.5 8.172 9.828 7.5 9 7.5Z"
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
          d="M1.5 7.5C0.672 7.5 0 8.172 0 9C0 9.828 0.672 10.5 1.5 10.5C2.328 10.5 3 9.829 3 9C3 8.171 2.328 7.5 1.5 7.5ZM16.5 7.5C15.672 7.5 15 8.172 15 9C15 9.828 15.672 10.5 16.5 10.5C17.328 10.5 18 9.829 18 9C18 8.171 17.328 7.5 16.5 7.5ZM9 7.5C8.172 7.5 7.5 8.172 7.5 9C7.5 9.828 8.172 10.5 9 10.5C9.828 10.5 10.5 9.828 10.5 9C10.5 8.172 9.828 7.5 9 7.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_3275)" />
    </svg>
  );
}

export { MenuMoreHorizontal };
