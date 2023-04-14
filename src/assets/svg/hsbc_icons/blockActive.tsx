import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function BlockActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C11.161 0 13.143 0.763 14.694 2.032L2.033 14.695C0.763 13.143 0 11.161 0 9C0 4.029 4.029 0 9 0ZM3.30664 15.9682L15.9676 3.30518C17.2376 4.85618 18.0006 6.83918 18.0006 9.00018C18.0006 13.9712 13.9716 18.0002 9.00064 18.0002C6.83964 18.0002 4.85764 17.2372 3.30664 15.9682Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 0C11.161 0 13.143 0.763 14.694 2.032L2.033 14.695C0.763 13.143 0 11.161 0 9C0 4.029 4.029 0 9 0ZM3.30664 15.9682L15.9676 3.30518C17.2376 4.85618 18.0006 6.83918 18.0006 9.00018C18.0006 13.9712 13.9716 18.0002 9.00064 18.0002C6.83964 18.0002 4.85764 17.2372 3.30664 15.9682Z"
        />
      </mask>
      <g mask="url(#mask0_1_3125)" />
    </svg>
  );
}

export { BlockActive };
