import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FilterDown(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18L9 9L0 0Z" />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={9}
      >
        <path fillRule="evenodd" clipRule="evenodd" d="M0 0H18L9 9L0 0Z" />
      </mask>
      <g mask="url(#mask0_1_1620)" />
    </svg>
  );
}

export { FilterDown };
