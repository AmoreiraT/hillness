import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function AddCircle(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM9.6 4H8.4V8.4H4V9.6H8.4V14H9.6V9.6H14V8.4H9.6V4Z"
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
          d="M9 0C4.03 0 0 4.03 0 9C0 13.97 4.03 18 9 18C13.97 18 18 13.97 18 9C18 4.03 13.97 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002ZM9.6 4H8.4V8.4H4V9.6H8.4V14H9.6V9.6H14V8.4H9.6V4Z"
        />
      </mask>
      <g mask="url(#mask0_1_3573)" />
    </svg>
  );
}

export { AddCircle };
