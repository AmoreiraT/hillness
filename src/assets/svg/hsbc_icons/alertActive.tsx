import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function AlertActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.99995 18C10.3809 18 11.4999 16.881 11.4999 15.5H6.49995C6.49995 16.881 7.61895 18 8.99995 18ZM17.2929 12.293L14.9999 10V6.251C14.9999 2.966 12.4679 0.101 9.18495 0.002C9.12295 0.001 9.06095 0 8.99995 0C5.68595 0 2.99995 2.686 2.99995 6V10L0.706947 12.293C0.0769474 12.923 0.522947 14 1.41395 14H16.5859C17.4769 14 17.9229 12.923 17.2929 12.293Z"
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
          d="M8.99995 18C10.3809 18 11.4999 16.881 11.4999 15.5H6.49995C6.49995 16.881 7.61895 18 8.99995 18ZM17.2929 12.293L14.9999 10V6.251C14.9999 2.966 12.4679 0.101 9.18495 0.002C9.12295 0.001 9.06095 0 8.99995 0C5.68595 0 2.99995 2.686 2.99995 6V10L0.706947 12.293C0.0769474 12.923 0.522947 14 1.41395 14H16.5859C17.4769 14 17.9229 12.923 17.2929 12.293Z"
        />
      </mask>
      <g mask="url(#mask0_1_3543)" />
    </svg>
  );
}

export { AlertActive };
