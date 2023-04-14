import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Transfer(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect
        opacity={0.01}
        x={18}
        width={18}
        height={18}
        transform="rotate(90 18 0)"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM9.302 9H10.999L13.999 6L10.999 3H9.302L11.702 5.4H4V6.6H11.702L9.302 9ZM8.698 9H7.002L4.002 12L7.002 15H8.699L6.299 12.6H14V11.4H6.298L8.698 9Z"
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
          d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM9.302 9H10.999L13.999 6L10.999 3H9.302L11.702 5.4H4V6.6H11.702L9.302 9ZM8.698 9H7.002L4.002 12L7.002 15H8.699L6.299 12.6H14V11.4H6.298L8.698 9Z"
        />
      </mask>
      <g mask="url(#mask0_1_1333)" />
    </svg>
  );
}

export { Transfer };
