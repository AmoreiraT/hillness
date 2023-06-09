import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function HealthActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.6203 2.37925C14.7813 0.54025 11.7983 0.54025 9.95925 2.37925C9.54425 2.79425 9.22825 3.26925 9.00025 3.77525C8.77225 3.26925 8.45625 2.79425 8.04025 2.37925C6.20125 0.54025 3.21825 0.54025 1.37925 2.37925C-0.45975 4.21825 -0.45975 7.20025 1.37925 9.03925L9.00025 16.6593L16.6203 9.03925C18.4603 7.20025 18.4603 4.21825 16.6203 2.37925ZM8.36705 11.307L5.37305 8.31304L6.43405 7.25204L8.36705 9.18604L12.513 5.04004L13.574 6.10104L8.36705 11.307Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={19}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M16.6203 2.37925C14.7813 0.54025 11.7983 0.54025 9.95925 2.37925C9.54425 2.79425 9.22825 3.26925 9.00025 3.77525C8.77225 3.26925 8.45625 2.79425 8.04025 2.37925C6.20125 0.54025 3.21825 0.54025 1.37925 2.37925C-0.45975 4.21825 -0.45975 7.20025 1.37925 9.03925L9.00025 16.6593L16.6203 9.03925C18.4603 7.20025 18.4603 4.21825 16.6203 2.37925ZM8.36705 11.307L5.37305 8.31304L6.43405 7.25204L8.36705 9.18604L12.513 5.04004L13.574 6.10104L8.36705 11.307Z"
        />
      </mask>
      <g mask="url(#mask0_1_1113)" />
    </svg>
  );
}

export { HealthActive };
