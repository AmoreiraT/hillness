import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Save(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 0H0V18H18V4L14 0ZM12.7992 1.2002V4.8002H5.19922V1.2002H12.7992ZM5.19922 16.8002V11.2002H12.7992V16.8002H5.19922ZM16.7992 16.8002H13.9992V10.0002H3.99922V16.8002H1.19922V1.2002H3.99922V6.0002H13.9992V1.6972L16.7992 4.4972V16.8002Z"
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
          d="M14 0H0V18H18V4L14 0ZM12.7992 1.2002V4.8002H5.19922V1.2002H12.7992ZM5.19922 16.8002V11.2002H12.7992V16.8002H5.19922ZM16.7992 16.8002H13.9992V10.0002H3.99922V16.8002H1.19922V1.2002H3.99922V6.0002H13.9992V1.6972L16.7992 4.4972V16.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_994)" />
    </svg>
  );
}

export { Save };
