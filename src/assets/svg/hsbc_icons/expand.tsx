import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Expand(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.139 11.709L6.291 10.861L2.2 14.952V10.8L1 12V17H6L7.2 15.8H3.048L7.139 11.709ZM15.8008 14.9518L11.7098 10.8618L10.8618 11.7098L14.9528 15.7998H10.8008L12.0008 16.9998H17.0008V11.9998L15.8008 10.7998V14.9518ZM12.0008 1L10.8008 2.2H14.9528L10.8628 6.29L11.7108 7.138L15.8008 3.048V7.2L17.0008 6V1H12.0008ZM1 1V6L2.2 7.2V3.048L6.291 7.138L7.139 6.29L3.048 2.2H7.2L6 1H1Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={17}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.139 11.709L6.291 10.861L2.2 14.952V10.8L1 12V17H6L7.2 15.8H3.048L7.139 11.709ZM15.8008 14.9518L11.7098 10.8618L10.8618 11.7098L14.9528 15.7998H10.8008L12.0008 16.9998H17.0008V11.9998L15.8008 10.7998V14.9518ZM12.0008 1L10.8008 2.2H14.9528L10.8628 6.29L11.7108 7.138L15.8008 3.048V7.2L17.0008 6V1H12.0008ZM1 1V6L2.2 7.2V3.048L6.291 7.138L7.139 6.29L3.048 2.2H7.2L6 1H1Z"
        />
      </mask>
      <g mask="url(#mask0_1_2091)" />
    </svg>
  );
}

export { Expand };
