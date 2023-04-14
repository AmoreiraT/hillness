import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecurityHSBCServices(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V6.031V7.247C0 12.927 3.803 16.5 9 18C14.197 16.5 18 11.711 18 6.031V0H0ZM16.7992 6.0312C16.7992 10.9022 13.6082 15.2592 8.99622 16.7472C5.93422 15.7922 1.19922 13.3302 1.19922 7.2472V6.0312V1.2002H16.7992V6.0312ZM13.8606 4.8812L13.0116 4.0332L7.34462 9.6992L4.98962 7.3452L4.14062 8.1942L7.34462 11.3962L13.8606 4.8812Z"
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
          d="M0 0V6.031V7.247C0 12.927 3.803 16.5 9 18C14.197 16.5 18 11.711 18 6.031V0H0ZM16.7992 6.0312C16.7992 10.9022 13.6082 15.2592 8.99622 16.7472C5.93422 15.7922 1.19922 13.3302 1.19922 7.2472V6.0312V1.2002H16.7992V6.0312ZM13.8606 4.8812L13.0116 4.0332L7.34462 9.6992L4.98962 7.3452L4.14062 8.1942L7.34462 11.3962L13.8606 4.8812Z"
        />
      </mask>
      <g mask="url(#mask0_1_507)" />
    </svg>
  );
}

export { SecurityHSBCServices };
