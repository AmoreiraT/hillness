import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Reply(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.29344 4.99993H6.99944V1.02393L0.0234375 7.99993L6.99944 14.9759V10.9999H9.29344C11.8724 10.9999 15.0414 11.2679 17.5784 16.1179C17.8114 15.3349 17.9414 14.5069 17.9414 13.6469C17.9414 8.87093 14.0694 4.99993 9.29344 4.99993ZM9.2927 9.79987H5.7987V12.0779L1.7207 7.99988L5.7987 3.92188V6.19988H9.2927C13.0797 6.19988 16.2157 9.04088 16.6807 12.7029C14.0227 9.79988 11.0537 9.79987 9.2927 9.79987Z"
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
          d="M9.29344 4.99993H6.99944V1.02393L0.0234375 7.99993L6.99944 14.9759V10.9999H9.29344C11.8724 10.9999 15.0414 11.2679 17.5784 16.1179C17.8114 15.3349 17.9414 14.5069 17.9414 13.6469C17.9414 8.87093 14.0694 4.99993 9.29344 4.99993ZM9.2927 9.79987H5.7987V12.0779L1.7207 7.99988L5.7987 3.92188V6.19988H9.2927C13.0797 6.19988 16.2157 9.04088 16.6807 12.7029C14.0227 9.79988 11.0537 9.79987 9.2927 9.79987Z"
        />
      </mask>
      <g mask="url(#mask0_1_1413)" />
    </svg>
  );
}

export { Reply };
