import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Upload(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8 12V15.8H2.2V12H1V17H17V12H15.8ZM8.4 13.849H9.6V3.297L14 7.697V6.001L9 1L4 6.001V7.698L8.4 3.298V13.849Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8 12V15.8H2.2V12H1V17H17V12H15.8ZM8.4 13.849H9.6V3.297L14 7.697V6.001L9 1L4 6.001V7.698L8.4 3.298V13.849Z"
        />
      </mask>
      <g mask="url(#mask0_1_1289)" />
    </svg>
  );
}

export { Upload };
