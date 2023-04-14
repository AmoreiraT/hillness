import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronDoubleRight(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} y={1} width={18} height={16} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0.695312 1L8.69331 9L0.695312 17H2.39131L10.3913 9L2.39131 1H0.695312ZM9.39131 1H7.69531L15.6933 9L7.69531 17H9.39131L17.3913 9L9.39131 1Z"
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
          d="M0.695312 1L8.69331 9L0.695312 17H2.39131L10.3913 9L2.39131 1H0.695312ZM9.39131 1H7.69531L15.6933 9L7.69531 17H9.39131L17.3913 9L9.39131 1Z"
        />
      </mask>
      <g mask="url(#mask0_1_2152)" />
    </svg>
  );
}

export { ChevronDoubleRight };
