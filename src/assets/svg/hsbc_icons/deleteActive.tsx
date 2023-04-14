import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DeleteActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2 18H16V6H2V18ZM10.5 9H12V15H10.5V9ZM6 9H7.5V15H6V9ZM17 4.5V3.5C17 2.671 16.329 2 15.5 2H12V1.5C12 0.675 11.325 0 10.5 0H7.5C6.675 0 6 0.675 6 1.5V2H2.5C1.671 2 1 2.671 1 3.5V4.5H17ZM7.19922 1.5002C7.19922 1.3372 7.33622 1.2002 7.49922 1.2002H10.4992C10.6622 1.2002 10.7992 1.3372 10.7992 1.5002V2.0002H7.19922V1.5002Z"
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
          d="M2 18H16V6H2V18ZM10.5 9H12V15H10.5V9ZM6 9H7.5V15H6V9ZM17 4.5V3.5C17 2.671 16.329 2 15.5 2H12V1.5C12 0.675 11.325 0 10.5 0H7.5C6.675 0 6 0.675 6 1.5V2H2.5C1.671 2 1 2.671 1 3.5V4.5H17ZM7.19922 1.5002C7.19922 1.3372 7.33622 1.2002 7.49922 1.2002H10.4992C10.6622 1.2002 10.7992 1.3372 10.7992 1.5002V2.0002H7.19922V1.5002Z"
        />
      </mask>
      <g mask="url(#mask0_1_3409)" />
    </svg>
  );
}

export { DeleteActive };
