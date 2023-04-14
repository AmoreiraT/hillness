import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TransferActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        opacity={0.01}
        x={18}
        width={18}
        height={18}
        transform="rotate(90 18 0)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.029 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.029 13.971 0 9 0ZM13.9991 12.75H6.66006L8.91006 15H6.78906L3.78906 12L6.78906 9H8.91006L6.66006 11.25H13.9991V12.75ZM11.21 9H9.089L11.339 6.75H4V5.25H11.339L9.089 3H11.21L14.21 6L11.21 9Z"
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
          d="M9 0C4.029 0 0 4.029 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.029 13.971 0 9 0ZM13.9991 12.75H6.66006L8.91006 15H6.78906L3.78906 12L6.78906 9H8.91006L6.66006 11.25H13.9991V12.75ZM11.21 9H9.089L11.339 6.75H4V5.25H11.339L9.089 3H11.21L14.21 6L11.21 9Z"
        />
      </mask>
      <g mask="url(#mask0_1_1323)" />
    </svg>
  );
}

export { TransferActive };
