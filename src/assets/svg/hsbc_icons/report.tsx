import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Report(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0H0V18H12C13.104 18 14 17.105 14 16V2C14 0.895 13.104 0 12 0ZM12.7992 16.0002C12.7992 16.4412 12.4402 16.8002 11.9992 16.8002H1.19922V1.2002H11.9992C12.4402 1.2002 12.7992 1.5592 12.7992 2.0002V16.0002ZM3 5.2H11V4H3V5.2ZM8 14H11V12.8H8V14ZM15.1992 4.47412V5.76812L16.4372 6.26812L15.1992 9.33212V12.5361L17.9992 5.60612L15.1992 4.47412Z"
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
          d="M12 0H0V18H12C13.104 18 14 17.105 14 16V2C14 0.895 13.104 0 12 0ZM12.7992 16.0002C12.7992 16.4412 12.4402 16.8002 11.9992 16.8002H1.19922V1.2002H11.9992C12.4402 1.2002 12.7992 1.5592 12.7992 2.0002V16.0002ZM3 5.2H11V4H3V5.2ZM8 14H11V12.8H8V14ZM15.1992 4.47412V5.76812L16.4372 6.26812L15.1992 9.33212V12.5361L17.9992 5.60612L15.1992 4.47412Z"
        />
      </mask>
      <g mask="url(#mask0_1_1395)" />
    </svg>
  );
}

export { Report };
