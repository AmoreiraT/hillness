import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ProductsAndServices(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2 0H6V5.8H7.2V1.2H13V5H16.8V12.8H16.2V14H18V3.8L14.2 0ZM14.1992 3.79978V1.69678L16.3022 3.79978H14.1992ZM13.5 7H1.5C0.675 7 0 7.675 0 8.5V16.5C0 17.325 0.675 18 1.5 18H13.5C14.325 18 15 17.325 15 16.5V8.5C15 7.675 14.325 7 13.5 7ZM13.7992 16.5002C13.7992 16.6632 13.6622 16.8002 13.4992 16.8002H1.49922C1.33622 16.8002 1.19922 16.6632 1.19922 16.5002V11.2002H13.7992V16.5002ZM13.7992 10.0002H1.19922V8.5002C1.19922 8.3372 1.33622 8.2002 1.49922 8.2002H13.4992C13.6622 8.2002 13.7992 8.3372 13.7992 8.5002V10.0002ZM12 12.8H9V14H12V12.8Z"
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
          d="M14.2 0H6V5.8H7.2V1.2H13V5H16.8V12.8H16.2V14H18V3.8L14.2 0ZM14.1992 3.79978V1.69678L16.3022 3.79978H14.1992ZM13.5 7H1.5C0.675 7 0 7.675 0 8.5V16.5C0 17.325 0.675 18 1.5 18H13.5C14.325 18 15 17.325 15 16.5V8.5C15 7.675 14.325 7 13.5 7ZM13.7992 16.5002C13.7992 16.6632 13.6622 16.8002 13.4992 16.8002H1.49922C1.33622 16.8002 1.19922 16.6632 1.19922 16.5002V11.2002H13.7992V16.5002ZM13.7992 10.0002H1.19922V8.5002C1.19922 8.3372 1.33622 8.2002 1.49922 8.2002H13.4992C13.6622 8.2002 13.7992 8.3372 13.7992 8.5002V10.0002ZM12 12.8H9V14H12V12.8Z"
        />
      </mask>
      <g mask="url(#mask0_1_1936)" />
    </svg>
  );
}

export { ProductsAndServices };
