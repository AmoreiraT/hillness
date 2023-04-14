import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronDownThick(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0.227997L8 8.228L0 0.227997V2.774L8 10.772L16 2.774V0.227997Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={16}
        height={11}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16 0.227997L8 8.228L0 0.227997V2.774L8 10.772L16 2.774V0.227997Z"
        />
      </mask>
      <g mask="url(#mask0_1_2149)" />
    </svg>
  );
}

export { ChevronDownThick };
