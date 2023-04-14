import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ReplyActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29344 4.99993H6.99944V1.02393L0.0234375 7.99993L6.99944 14.9759V10.9999H9.29344C11.8724 10.9999 15.0414 11.2679 17.5784 16.1179C17.8114 15.3339 17.9414 14.5059 17.9414 13.6469C17.9414 8.87093 14.0694 4.99993 9.29344 4.99993Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9.29344 4.99993H6.99944V1.02393L0.0234375 7.99993L6.99944 14.9759V10.9999H9.29344C11.8724 10.9999 15.0414 11.2679 17.5784 16.1179C17.8114 15.3339 17.9414 14.5059 17.9414 13.6469C17.9414 8.87093 14.0694 4.99993 9.29344 4.99993Z"
        />
      </mask>
      <g mask="url(#mask0_1_1409)" />
    </svg>
  );
}

export { ReplyActive };
