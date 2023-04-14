import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FastTrack(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.03 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.03 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM6.193 5H4.496L8.496 9L4.496 13H6.193L10.193 9L6.193 5ZM10.612 5H8.916L12.916 9L8.916 13H10.613L14.614 9L10.612 5Z"
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
          d="M9 0C4.029 0 0 4.03 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.03 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM6.193 5H4.496L8.496 9L4.496 13H6.193L10.193 9L6.193 5ZM10.612 5H8.916L12.916 9L8.916 13H10.613L14.614 9L10.612 5Z"
        />
      </mask>
      <g mask="url(#mask0_1_2071)" />
    </svg>
  );
}

export { FastTrack };
