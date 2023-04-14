import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function CalendarActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0V1H18V4H0V1H3V0H5V1H13V0H15ZM17.7 14.5L14.5 17.7V14.5H17.7ZM0 18H13V13H18V5.5H0V18ZM10.1507 6.71387V14.9999H8.65069V9.28587L7.66869 9.84187L6.92969 8.53687L10.1507 6.71387Z"
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
          d="M15 0V1H18V4H0V1H3V0H5V1H13V0H15ZM17.7 14.5L14.5 17.7V14.5H17.7ZM0 18H13V13H18V5.5H0V18ZM10.1507 6.71387V14.9999H8.65069V9.28587L7.66869 9.84187L6.92969 8.53687L10.1507 6.71387Z"
        />
      </mask>
      <g mask="url(#mask0_1_3049)" />
    </svg>
  );
}

export { CalendarActive };
