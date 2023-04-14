import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Investment(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6064 1.54492L8.39639 8.75592L5.62939 5.98792L2.40039 9.21692V10.9139L5.62939 7.68592L8.39639 10.4539L15.6064 3.24292L18.0004 5.63492V3.93892L15.6064 1.54492ZM1.2 0H0V16.8V18H1.2H18V16.8H1.2V0Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6064 1.54492L8.39639 8.75592L5.62939 5.98792L2.40039 9.21692V10.9139L5.62939 7.68592L8.39639 10.4539L15.6064 3.24292L18.0004 5.63492V3.93892L15.6064 1.54492ZM1.2 0H0V16.8V18H1.2H18V16.8H1.2V0Z"
        />
      </mask>
      <g mask="url(#mask0_1_612)" />
    </svg>
  );
}

export { Investment };
