import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DeviceMobile(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5 0H13C14.1 0 15 0.9 15 2V16C15 17.1 14.1 18 13 18H5C3.9 18 3 17.1 3 16V2C3 0.9 3.9 0 5 0ZM12.9992 1.2002H4.99922C4.59922 1.2002 4.19922 1.6002 4.19922 2.0002V13.0002H13.7992V2.0002C13.7992 1.6002 13.3992 1.2002 12.9992 1.2002ZM12.9992 16.8002H4.99922C4.59922 16.8002 4.19922 16.4002 4.19922 16.0002V14.2002H13.7992V16.0002C13.7992 16.4002 13.3992 16.8002 12.9992 16.8002Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={3}
        y={0}
        width={12}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5 0H13C14.1 0 15 0.9 15 2V16C15 17.1 14.1 18 13 18H5C3.9 18 3 17.1 3 16V2C3 0.9 3.9 0 5 0ZM12.9992 1.2002H4.99922C4.59922 1.2002 4.19922 1.6002 4.19922 2.0002V13.0002H13.7992V2.0002C13.7992 1.6002 13.3992 1.2002 12.9992 1.2002ZM12.9992 16.8002H4.99922C4.59922 16.8002 4.19922 16.4002 4.19922 16.0002V14.2002H13.7992V16.0002C13.7992 16.4002 13.3992 16.8002 12.9992 16.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_3369)" />
    </svg>
  );
}

export { DeviceMobile };
