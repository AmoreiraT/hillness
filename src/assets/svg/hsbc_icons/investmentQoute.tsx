import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InvestmentQoute(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} y={0.0140076} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.58739 8.576L2.40039 11.762V10.066L5.58739 6.878L8.35439 9.645L18.0004 0V1.696L8.35439 11.342L5.58739 8.576ZM16.8 16.814V4.615L18 3.415V18.014H0V0.014H1.2V16.814H5.8V10.507L7 11.707V16.814H11V10.415L12.2 9.215V16.814H16.8Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.58739 8.576L2.40039 11.762V10.066L5.58739 6.878L8.35439 9.645L18.0004 0V1.696L8.35439 11.342L5.58739 8.576ZM16.8 16.814V4.615L18 3.415V18.014H0V0.014H1.2V16.814H5.8V10.507L7 11.707V16.814H11V10.415L12.2 9.215V16.814H16.8Z"
        />
      </mask>
      <g mask="url(#mask0_1_628)" />
    </svg>
  );
}

export { InvestmentQoute };
