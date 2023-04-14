import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactVirtual(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.25 8.25C4.94 8.25 5.5 7.69 5.5 7C5.5 6.31 4.94 5.75 4.25 5.75C3.56 5.75 3 6.31 3 7C3 7.69 3.56 8.25 4.25 8.25ZM13.75 8.25C14.44 8.25 15 7.69 15 7C15 6.31 14.44 5.75 13.75 5.75C13.06 5.75 12.5 6.31 12.5 7C12.5 7.69 13.06 8.25 13.75 8.25ZM9 8.25C9.69 8.25 10.25 7.69 10.25 7C10.25 6.31 9.69 5.75 9 5.75C8.31 5.75 7.75 6.31 7.75 7C7.75 7.69 8.31 8.25 9 8.25ZM0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1512L1.19922 15.1032V1.2002H16.7992V12.8002Z"
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
          d="M4.25 8.25C4.94 8.25 5.5 7.69 5.5 7C5.5 6.31 4.94 5.75 4.25 5.75C3.56 5.75 3 6.31 3 7C3 7.69 3.56 8.25 4.25 8.25ZM13.75 8.25C14.44 8.25 15 7.69 15 7C15 6.31 14.44 5.75 13.75 5.75C13.06 5.75 12.5 6.31 12.5 7C12.5 7.69 13.06 8.25 13.75 8.25ZM9 8.25C9.69 8.25 10.25 7.69 10.25 7C10.25 6.31 9.69 5.75 9 5.75C8.31 5.75 7.75 6.31 7.75 7C7.75 7.69 8.31 8.25 9 8.25ZM0 0V18L4 14H18V0H0ZM16.7992 12.8002H3.99922H3.50222L3.15022 13.1512L1.19922 15.1032V1.2002H16.7992V12.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_770)" />
    </svg>
  );
}

export { ContactVirtual };
