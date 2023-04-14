import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Copy(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1 17H11V7H1V17ZM2.19922 8.2002H9.79922V15.8002H2.19922V8.2002ZM8.2 4.2H7V5.8H8.2V4.2ZM8.2 2.2H9V1H7V3H8.2V2.2ZM15 1V2.2H15.8V3H17V1H15ZM12.1992 10.9998H13.7992V9.7998H12.1992V10.9998ZM15.8 9.8H15V11H17V8.2H15.8V9.8ZM15.8008 7.0002H17.0008V4.2002H15.8008V7.0002ZM10.1992 2.2H13.7992V1H10.1992V2.2Z"
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
          d="M1 17H11V7H1V17ZM2.19922 8.2002H9.79922V15.8002H2.19922V8.2002ZM8.2 4.2H7V5.8H8.2V4.2ZM8.2 2.2H9V1H7V3H8.2V2.2ZM15 1V2.2H15.8V3H17V1H15ZM12.1992 10.9998H13.7992V9.7998H12.1992V10.9998ZM15.8 9.8H15V11H17V8.2H15.8V9.8ZM15.8008 7.0002H17.0008V4.2002H15.8008V7.0002ZM10.1992 2.2H13.7992V1H10.1992V2.2Z"
        />
      </mask>
      <g mask="url(#mask0_1_690)" />
    </svg>
  );
}

export { Copy };
