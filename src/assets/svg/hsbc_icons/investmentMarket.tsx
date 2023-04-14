import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InvestmentMarket(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.6064 0.544922L8.39639 7.75592L5.62939 4.98792L2.40039 8.21692V9.91392L5.62939 6.68592L8.39639 9.45392L15.6064 2.24292L18.0004 4.63492V2.93892L15.6064 0.544922ZM9.04639 10.6658L2.40039 13.4858V14.7898L9.04639 11.9678L13.3484 13.7928L18.0004 9.1418V7.4458L13.0724 12.3738L9.04639 10.6658ZM1.2 0H0V16.8V18H1.2H18V16.8H1.2V0Z"
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
          d="M15.6064 0.544922L8.39639 7.75592L5.62939 4.98792L2.40039 8.21692V9.91392L5.62939 6.68592L8.39639 9.45392L15.6064 2.24292L18.0004 4.63492V2.93892L15.6064 0.544922ZM9.04639 10.6658L2.40039 13.4858V14.7898L9.04639 11.9678L13.3484 13.7928L18.0004 9.1418V7.4458L13.0724 12.3738L9.04639 10.6658ZM1.2 0H0V16.8V18H1.2H18V16.8H1.2V0Z"
        />
      </mask>
      <g mask="url(#mask0_1_646)" />
    </svg>
  );
}

export { InvestmentMarket };
