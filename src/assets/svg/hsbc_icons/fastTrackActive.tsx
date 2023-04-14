import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FastTrackActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM4.2832 13L8.2832 9L4.2832 5H6.4042L10.4042 9L6.4042 13H4.2832ZM10.824 13H8.703L12.703 9L8.703 5H10.824L14.824 9L10.824 13Z"
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
          d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM4.2832 13L8.2832 9L4.2832 5H6.4042L10.4042 9L6.4042 13H4.2832ZM10.824 13H8.703L12.703 9L8.703 5H10.824L14.824 9L10.824 13Z"
        />
      </mask>
      <g mask="url(#mask0_1_2061)" />
    </svg>
  );
}

export { FastTrackActive };
