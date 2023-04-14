import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ViewGrid(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 8H8V1H1V8ZM2.19922 2.2002H6.79922V6.8002H2.19922V2.2002ZM1 17H8V10H1V17ZM2.19922 11.2002H6.79922V15.8002H2.19922V11.2002ZM10 1V8H17V1H10ZM15.7992 6.8002H11.1992V2.2002H15.7992V6.8002ZM10 17H17V10H10V17ZM11.1992 11.2002H15.7992V15.8002H11.1992V11.2002Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1 8H8V1H1V8ZM2.19922 2.2002H6.79922V6.8002H2.19922V2.2002ZM1 17H8V10H1V17ZM2.19922 11.2002H6.79922V15.8002H2.19922V11.2002ZM10 1V8H17V1H10ZM15.7992 6.8002H11.1992V2.2002H15.7992V6.8002ZM10 17H17V10H10V17ZM11.1992 11.2002H15.7992V15.8002H11.1992V11.2002Z"
        />
      </mask>
      <g mask="url(#mask0_1_798)" />
    </svg>
  );
}

export { ViewGrid };
