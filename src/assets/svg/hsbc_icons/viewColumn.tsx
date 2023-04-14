import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ViewColumn(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17H8V1H1V17ZM2.19922 2.2002H6.79922V15.8002H2.19922V2.2002ZM10 1V17H17V1H10ZM15.7992 15.8002H11.1992V2.2002H15.7992V15.8002Z"
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
          d="M1 17H8V1H1V17ZM2.19922 2.2002H6.79922V15.8002H2.19922V2.2002ZM10 1V17H17V1H10ZM15.7992 15.8002H11.1992V2.2002H15.7992V15.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_818)" />
    </svg>
  );
}

export { ViewColumn };
