import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DocumentConfidential(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.2 0H4V4.934C4.322 4.855 4.654 4.8 5 4.8C5.068 4.8 5.132 4.816 5.2 4.82V1.2H13V5H16.8V14.8H11.2V16H18V3.8L14.2 0ZM14.1992 3.79978V1.69678L16.3022 3.79978H14.1992ZM8.8 10H8V9C8 7.35 6.65 6 5 6C3.35 6 2 7.35 2 9V10H1.2C0.54 10 0 10.54 0 11.2V16.8C0 17.46 0.54 18 1.2 18H8.8C9.46 18 10 17.46 10 16.8V11.2C10 10.54 9.46 10 8.8 10ZM3.19922 9.0002C3.19922 8.0082 4.00722 7.2002 4.99922 7.2002C5.99122 7.2002 6.79922 8.0082 6.79922 9.0002V10.0002H3.19922V9.0002ZM8.79922 16.8002H1.19922V11.2002H8.79922V16.8002ZM5.60039 13H4.40039V15H5.60039V13Z"
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
          d="M14.2 0H4V4.934C4.322 4.855 4.654 4.8 5 4.8C5.068 4.8 5.132 4.816 5.2 4.82V1.2H13V5H16.8V14.8H11.2V16H18V3.8L14.2 0ZM14.1992 3.79978V1.69678L16.3022 3.79978H14.1992ZM8.8 10H8V9C8 7.35 6.65 6 5 6C3.35 6 2 7.35 2 9V10H1.2C0.54 10 0 10.54 0 11.2V16.8C0 17.46 0.54 18 1.2 18H8.8C9.46 18 10 17.46 10 16.8V11.2C10 10.54 9.46 10 8.8 10ZM3.19922 9.0002C3.19922 8.0082 4.00722 7.2002 4.99922 7.2002C5.99122 7.2002 6.79922 8.0082 6.79922 9.0002V10.0002H3.19922V9.0002ZM8.79922 16.8002H1.19922V11.2002H8.79922V16.8002ZM5.60039 13H4.40039V15H5.60039V13Z"
        />
      </mask>
      <g mask="url(#mask0_1_2911)" />
    </svg>
  );
}

export { DocumentConfidential };
