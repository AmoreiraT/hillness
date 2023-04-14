import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ComposeActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.508 1.233L16.767 0.492C16.111 -0.164 15.048 -0.164 14.392 0.492L6.298 8.587L4 14L9.413 11.702L17.508 3.607C18.164 2.951 18.164 1.888 17.508 1.233ZM10.268 12.969L9.999 13.083L4.586 15.381L1.169 16.832L2.62 13.415L4.918 8.002L5.032 7.733L5.238 7.527L11.764 1H0V18H16V7.236L10.474 12.762L10.268 12.969Z"
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
          d="M17.508 1.233L16.767 0.492C16.111 -0.164 15.048 -0.164 14.392 0.492L6.298 8.587L4 14L9.413 11.702L17.508 3.607C18.164 2.951 18.164 1.888 17.508 1.233ZM10.268 12.969L9.999 13.083L4.586 15.381L1.169 16.832L2.62 13.415L4.918 8.002L5.032 7.733L5.238 7.527L11.764 1H0V18H16V7.236L10.474 12.762L10.268 12.969Z"
        />
      </mask>
      <g mask="url(#mask0_1_1659)" />
    </svg>
  );
}

export { ComposeActive };
