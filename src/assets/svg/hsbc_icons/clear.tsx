import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Clear(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.576 4.576L9 8.152L5.424 4.576L4.576 5.424L8.152 9L4.576 12.576L5.425 13.424L9 9.848L12.576 13.424L13.425 12.576L9.848 9L13.424 5.424L12.576 4.576ZM9 0C4.029 0 0 4.03 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.03 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002Z"
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
          d="M12.576 4.576L9 8.152L5.424 4.576L4.576 5.424L8.152 9L4.576 12.576L5.425 13.424L9 9.848L12.576 13.424L13.425 12.576L9.848 9L13.424 5.424L12.576 4.576ZM9 0C4.029 0 0 4.03 0 9C0 13.97 4.029 18 9 18C13.971 18 18 13.97 18 9C18 4.03 13.971 0 9 0ZM8.99922 16.8002C4.69822 16.8002 1.19922 13.3012 1.19922 9.0002C1.19922 4.6992 4.69822 1.2002 8.99922 1.2002C13.3002 1.2002 16.7992 4.6992 16.7992 9.0002C16.7992 13.3012 13.3002 16.8002 8.99922 16.8002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1724)" />
    </svg>
  );
}

export { Clear };
