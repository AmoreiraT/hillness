import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Presentation(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 1H9.6V0H8.4V1H0V14H8.151L4.151 18H5.847L8.4 15.449V18H9.6V15.449L12.152 18H13.848L9.848 14H18V1ZM16.7992 12.8002H1.19922V2.2002H16.7992V12.8002ZM4 6.5C4.552 6.5 5 6.052 5 5.5C5 4.948 4.552 4.5 4 4.5C3.448 4.5 3 4.948 3 5.5C3 6.052 3.448 6.5 4 6.5ZM4 10.5C4.552 10.5 5 10.052 5 9.5C5 8.948 4.552 8.5 4 8.5C3.448 8.5 3 8.948 3 9.5C3 10.052 3.448 10.5 4 10.5ZM15 5H7V6H15V5ZM15 9H7V10H15V9Z"
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
          d="M18 1H9.6V0H8.4V1H0V14H8.151L4.151 18H5.847L8.4 15.449V18H9.6V15.449L12.152 18H13.848L9.848 14H18V1ZM16.7992 12.8002H1.19922V2.2002H16.7992V12.8002ZM4 6.5C4.552 6.5 5 6.052 5 5.5C5 4.948 4.552 4.5 4 4.5C3.448 4.5 3 4.948 3 5.5C3 6.052 3.448 6.5 4 6.5ZM4 10.5C4.552 10.5 5 10.052 5 9.5C5 8.948 4.552 8.5 4 8.5C3.448 8.5 3 8.948 3 9.5C3 10.052 3.448 10.5 4 10.5ZM15 5H7V6H15V5ZM15 9H7V10H15V9Z"
        />
      </mask>
      <g mask="url(#mask0_1_1974)" />
    </svg>
  );
}

export { Presentation };
