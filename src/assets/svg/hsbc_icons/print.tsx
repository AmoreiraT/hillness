import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Print(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 8C18 6.896 17.104 6 16 6H15V0H3V6H2C0.895 6 0 6.896 0 8V16H3V18H15V16H18V8ZM4.19922 1.2002H13.7992V6.0002H4.19922V1.2002ZM13.7992 16.8002H4.19922V12.2002H13.7992V16.8002ZM16.7992 14.8002H14.9992V11.0002H2.99922V14.8002H1.19922V8.0002C1.19922 7.5592 1.55822 7.2002 1.99922 7.2002H15.9992C16.4402 7.2002 16.7992 7.5592 16.7992 8.0002V14.8002Z"
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
          d="M18 8C18 6.896 17.104 6 16 6H15V0H3V6H2C0.895 6 0 6.896 0 8V16H3V18H15V16H18V8ZM4.19922 1.2002H13.7992V6.0002H4.19922V1.2002ZM13.7992 16.8002H4.19922V12.2002H13.7992V16.8002ZM16.7992 14.8002H14.9992V11.0002H2.99922V14.8002H1.19922V8.0002C1.19922 7.5592 1.55822 7.2002 1.99922 7.2002H15.9992C16.4402 7.2002 16.7992 7.5592 16.7992 8.0002V14.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1962)" />
    </svg>
  );
}

export { Print };
