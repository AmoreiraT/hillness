import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InvestmentMarketActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 0H0V18H18V16.8H1.2V0ZM15.6052 1.54492L8.39522 8.75592L5.62822 5.98792L2.69922 8.91692V13.1959L9.04522 10.5029L13.0362 12.1959L17.9992 7.23392V5.63492V3.93892L15.6052 1.54492ZM9.04522 12.132L2.69922 14.826V15.3H17.9992V9.35498L13.3822 13.972L9.04522 12.132Z"
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
          d="M1.2 0H0V18H18V16.8H1.2V0ZM15.6052 1.54492L8.39522 8.75592L5.62822 5.98792L2.69922 8.91692V13.1959L9.04522 10.5029L13.0362 12.1959L17.9992 7.23392V5.63492V3.93892L15.6052 1.54492ZM9.04522 12.132L2.69922 14.826V15.3H17.9992V9.35498L13.3822 13.972L9.04522 12.132Z"
        />
      </mask>
      <g mask="url(#mask0_1_636)" />
    </svg>
  );
}

export { InvestmentMarketActive };
