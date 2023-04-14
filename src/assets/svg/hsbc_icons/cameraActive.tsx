import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function CameraActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 4.5H14.148L12.912 1.44C12.682 0.872 12.131 0.5 11.518 0.5H6.482C5.869 0.5 5.318 0.872 5.088 1.44L3.852 4.5H1.5C0.675 4.5 0 5.175 0 6V16C0 16.825 0.675 17.5 1.5 17.5H16.5C17.325 17.5 18 16.825 18 16V6C18 5.175 17.325 4.5 16.5 4.5ZM12.5 10C12.5 11.933 10.933 13.5 9 13.5C7.067 13.5 5.5 11.933 5.5 10C5.5 8.067 7.067 6.5 9 6.5C10.933 6.5 12.5 8.067 12.5 10ZM4 10C4 12.761 6.239 15 9 15C11.761 15 14 12.761 14 10C14 7.239 11.761 5 9 5C6.239 5 4 7.239 4 10Z"
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
          d="M16.5 4.5H14.148L12.912 1.44C12.682 0.872 12.131 0.5 11.518 0.5H6.482C5.869 0.5 5.318 0.872 5.088 1.44L3.852 4.5H1.5C0.675 4.5 0 5.175 0 6V16C0 16.825 0.675 17.5 1.5 17.5H16.5C17.325 17.5 18 16.825 18 16V6C18 5.175 17.325 4.5 16.5 4.5ZM12.5 10C12.5 11.933 10.933 13.5 9 13.5C7.067 13.5 5.5 11.933 5.5 10C5.5 8.067 7.067 6.5 9 6.5C10.933 6.5 12.5 8.067 12.5 10ZM4 10C4 12.761 6.239 15 9 15C11.761 15 14 12.761 14 10C14 7.239 11.761 5 9 5C6.239 5 4 7.239 4 10Z"
        />
      </mask>
      <g mask="url(#mask0_1_3027)" />
    </svg>
  );
}

export { CameraActive };
