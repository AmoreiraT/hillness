import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DataChartActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 2C3.582 2 0 5.582 0 10C0 11.939 0.69 13.716 1.838 15.101L8 8.939V2ZM2.89844 16.161C4.28344 17.309 6.06144 18 8.00044 18C9.93944 18 11.7174 17.309 13.1024 16.161L8.00044 11.061L2.89844 16.161ZM14.1615 15.101C15.3095 13.716 15.9995 11.939 15.9995 10H9.06055L14.1615 15.101ZM11 0V7H18C18 3.134 14.866 0 11 0Z"
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
          d="M8 2C3.582 2 0 5.582 0 10C0 11.939 0.69 13.716 1.838 15.101L8 8.939V2ZM2.89844 16.161C4.28344 17.309 6.06144 18 8.00044 18C9.93944 18 11.7174 17.309 13.1024 16.161L8.00044 11.061L2.89844 16.161ZM14.1615 15.101C15.3095 13.716 15.9995 11.939 15.9995 10H9.06055L14.1615 15.101ZM11 0V7H18C18 3.134 14.866 0 11 0Z"
        />
      </mask>
      <g mask="url(#mask0_1_3439)" />
    </svg>
  );
}

export { DataChartActive };
