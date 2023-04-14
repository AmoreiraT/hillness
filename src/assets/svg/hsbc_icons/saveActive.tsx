import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SaveActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0V6H4V0H0V18H4V10H14V18H18V4L14 0ZM5.5 0H12.5V4.5H5.5V0ZM12.5 11.5H5.5V18H12.5V11.5Z"
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
          d="M14 0V6H4V0H0V18H4V10H14V18H18V4L14 0ZM5.5 0H12.5V4.5H5.5V0ZM12.5 11.5H5.5V18H12.5V11.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_984)" />
    </svg>
  );
}

export { SaveActive };
