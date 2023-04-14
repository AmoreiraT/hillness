import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ClientManagement(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 0H5V2.8H6.2V1.2H16C16.441 1.2 16.8 1.559 16.8 2V13C16.8 13.441 16.441 13.8 16 13.8H13.2V15H16C17.105 15 18 14.105 18 13V2C18 0.895 17.105 0 16 0ZM8.2 4H7H0V18H12V9V7.8L8.2 4ZM10.7992 16.8002H1.19922V5.2002H6.99922V9.0002H10.7992V16.8002ZM10.3022 7.79978H8.19922V5.69678L10.3022 7.79978ZM14.9995 3H8.89648L10.0965 4.2H14.9995V3Z"
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
          d="M16 0H5V2.8H6.2V1.2H16C16.441 1.2 16.8 1.559 16.8 2V13C16.8 13.441 16.441 13.8 16 13.8H13.2V15H16C17.105 15 18 14.105 18 13V2C18 0.895 17.105 0 16 0ZM8.2 4H7H0V18H12V9V7.8L8.2 4ZM10.7992 16.8002H1.19922V5.2002H6.99922V9.0002H10.7992V16.8002ZM10.3022 7.79978H8.19922V5.69678L10.3022 7.79978ZM14.9995 3H8.89648L10.0965 4.2H14.9995V3Z"
        />
      </mask>
      <g mask="url(#mask0_1_1702)" />
    </svg>
  );
}

export { ClientManagement };
