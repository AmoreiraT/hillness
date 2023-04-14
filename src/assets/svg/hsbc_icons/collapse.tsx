import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Collapse(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.924 0.076L5.8 4.952V0L7 1.2V7H1.2L0 5.8H4.952L0.076 0.924L0.924 0.076ZM13.048 5.8H18L16.8 7H11V1.2L12.2 0V4.952L17.076 0.076L17.924 0.924L13.048 5.8ZM12.2 13.048L17.076 17.924L17.924 17.076L13.048 12.2H18L16.8 11H11V16.8L12.2 18V13.048ZM4.952 12.2H0L1.2 11H7V16.8L5.8 18V13.048L0.924 17.924L0.076 17.076L4.952 12.2Z"
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
          d="M0.924 0.076L5.8 4.952V0L7 1.2V7H1.2L0 5.8H4.952L0.076 0.924L0.924 0.076ZM13.048 5.8H18L16.8 7H11V1.2L12.2 0V4.952L17.076 0.076L17.924 0.924L13.048 5.8ZM12.2 13.048L17.076 17.924L17.924 17.076L13.048 12.2H18L16.8 11H11V16.8L12.2 18V13.048ZM4.952 12.2H0L1.2 11H7V16.8L5.8 18V13.048L0.924 17.924L0.076 17.076L4.952 12.2Z"
        />
      </mask>
      <g mask="url(#mask0_1_1677)" />
    </svg>
  );
}

export { Collapse };
