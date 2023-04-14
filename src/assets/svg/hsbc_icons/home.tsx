import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Home(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0L1 8V18H8V11.2H10V18H17V8L9 0ZM15.7992 16.7998H11.1992V9.99978H6.79922V16.7998H2.19922V8.49678L8.99922 1.69678L15.7992 8.49678V16.7998Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0L1 8V18H8V11.2H10V18H17V8L9 0ZM15.7992 16.7998H11.1992V9.99978H6.79922V16.7998H2.19922V8.49678L8.99922 1.69678L15.7992 8.49678V16.7998Z"
        />
      </mask>
      <g mask="url(#mask0_1_1083)" />
    </svg>
  );
}

export { Home };
