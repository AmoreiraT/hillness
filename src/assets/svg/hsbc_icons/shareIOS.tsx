import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ShareIOS(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M13.0009 5.99986V7.21686H15.7839V15.7829H2.22286V7.21686H5.00086V5.99986H1.00586V16.9999H17.0009V5.99986H13.0009ZM8.4 11.9999H9.6V2.44786L12 4.84786V3.15186L9 0.151855L6 3.15186V4.84786L8.4 2.44786V11.9999Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={17}
        height={17}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.0009 5.99986V7.21686H15.7839V15.7829H2.22286V7.21686H5.00086V5.99986H1.00586V16.9999H17.0009V5.99986H13.0009ZM8.4 11.9999H9.6V2.44786L12 4.84786V3.15186L9 0.151855L6 3.15186V4.84786L8.4 2.44786V11.9999Z"
        />
      </mask>
      <g mask="url(#mask0_1_3143)" />
    </svg>
  );
}

export { ShareIOS };
