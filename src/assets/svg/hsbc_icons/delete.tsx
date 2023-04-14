import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Delete(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 2H12V1.5C12 0.675 11.325 0 10.5 0H7.5C6.675 0 6 0.675 6 1.5V2H2.5C1.672 2 1 2.672 1 3.5V6H2V18H16V6H17V3.5C17 2.672 16.328 2 15.5 2ZM7.19922 1.5002C7.19922 1.3372 7.33622 1.2002 7.49922 1.2002H10.4992C10.6622 1.2002 10.7992 1.3372 10.7992 1.5002V2.0002H7.19922V1.5002ZM14.7992 16.8H3.19922V6H14.7992V16.8ZM15.7992 4.8002H2.19922V3.5002C2.19922 3.3352 2.33422 3.2002 2.49922 3.2002H15.4992C15.6652 3.2002 15.7992 3.3352 15.7992 3.5002V4.8002ZM7.2 8H6V15H7.2V8ZM12.0008 8H10.8008V15H12.0008V8Z"
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
          d="M15.5 2H12V1.5C12 0.675 11.325 0 10.5 0H7.5C6.675 0 6 0.675 6 1.5V2H2.5C1.672 2 1 2.672 1 3.5V6H2V18H16V6H17V3.5C17 2.672 16.328 2 15.5 2ZM7.19922 1.5002C7.19922 1.3372 7.33622 1.2002 7.49922 1.2002H10.4992C10.6622 1.2002 10.7992 1.3372 10.7992 1.5002V2.0002H7.19922V1.5002ZM14.7992 16.8H3.19922V6H14.7992V16.8ZM15.7992 4.8002H2.19922V3.5002C2.19922 3.3352 2.33422 3.2002 2.49922 3.2002H15.4992C15.6652 3.2002 15.7992 3.3352 15.7992 3.5002V4.8002ZM7.2 8H6V15H7.2V8ZM12.0008 8H10.8008V15H12.0008V8Z"
        />
      </mask>
      <g mask="url(#mask0_1_3423)" />
    </svg>
  );
}

export { Delete };
