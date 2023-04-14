import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Education(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5L0 5.5L9 9.5L16.8 6.033V13.5H18V5.5L9 1.5ZM9 8.187L2.955 5.5L9 2.813L15.045 5.5L9 8.187ZM13.8 13.5C13.8 14.135 11.978 15.3 9 15.3C6.022 15.3 4.2 14.135 4.2 13.5V8.68L3 8.146V13.5C3 15.157 5.686 16.5 9 16.5C12.314 16.5 15 15.157 15 13.5V8.146L13.8 8.68V13.5Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1.5L0 5.5L9 9.5L16.8 6.033V13.5H18V5.5L9 1.5ZM9 8.187L2.955 5.5L9 2.813L15.045 5.5L9 8.187ZM13.8 13.5C13.8 14.135 11.978 15.3 9 15.3C6.022 15.3 4.2 14.135 4.2 13.5V8.68L3 8.146V13.5C3 15.157 5.686 16.5 9 16.5C12.314 16.5 15 15.157 15 13.5V8.146L13.8 8.68V13.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_2110)" />
    </svg>
  );
}

export { Education };
