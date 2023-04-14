import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FilterUp(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fillRule="evenodd" clipRule="evenodd" d="M0 9H18L9 0L0 9Z" />
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
        <path fillRule="evenodd" clipRule="evenodd" d="M0 9H18L9 0L0 9Z" />
      </mask>
      <g mask="url(#mask0_1_1617)" />
    </svg>
  );
}

export { FilterUp };
