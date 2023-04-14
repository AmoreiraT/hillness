import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecurityHSBCServicesActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V6.031V7.247C0 12.927 3.803 16.5 9 18C14.198 16.5 18 11.711 18 6.031V0H0ZM7.3432 11.6078L4.0332 8.29978L5.0942 7.23878L7.3432 9.48678L12.9052 3.92578L13.9662 4.98678L7.3432 11.6078Z"
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
          d="M0 0V6.031V7.247C0 12.927 3.803 16.5 9 18C14.198 16.5 18 11.711 18 6.031V0H0ZM7.3432 11.6078L4.0332 8.29978L5.0942 7.23878L7.3432 9.48678L12.9052 3.92578L13.9662 4.98678L7.3432 11.6078Z"
        />
      </mask>
      <g mask="url(#mask0_1_499)" />
    </svg>
  );
}

export { SecurityHSBCServicesActive };
