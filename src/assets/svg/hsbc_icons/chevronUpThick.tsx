import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronUpThick(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10.772L8 2.772L16 10.772V8.226L8 0.227997L0 8.226V10.772Z"
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
          d="M0 10.772L8 2.772L16 10.772V8.226L8 0.227997L0 8.226V10.772Z"
        />
      </mask>
      <g mask="url(#mask0_1_2131)" />
    </svg>
  );
}

export { ChevronUpThick };
