import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ClientManagementActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H5V2.5H15V4H10.321L13.5 7.179V15H16C17.104 15 18 14.104 18 13V2C18 0.896 17.104 0 16 0ZM0 4V18H12V9H7V4H0ZM11.7 7.5H8.5V4.3L11.7 7.5Z"
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
          d="M16 0H5V2.5H15V4H10.321L13.5 7.179V15H16C17.104 15 18 14.104 18 13V2C18 0.896 17.104 0 16 0ZM0 4V18H12V9H7V4H0ZM11.7 7.5H8.5V4.3L11.7 7.5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1692)" />
    </svg>
  );
}

export { ClientManagementActive };
