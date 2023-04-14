import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function InvestmentActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1.2 0H0V18H18V16.8H1.2V0ZM15.6052 1.54492L8.39522 8.75592L5.62822 5.98792L2.69922 8.91692V15.2999H17.9992V3.93892L15.6052 1.54492Z"
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
          d="M1.2 0H0V18H18V16.8H1.2V0ZM15.6052 1.54492L8.39522 8.75592L5.62822 5.98792L2.69922 8.91692V15.2999H17.9992V3.93892L15.6052 1.54492Z"
        />
      </mask>
      <g mask="url(#mask0_1_604)" />
    </svg>
  );
}

export { InvestmentActive };
