import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FavouritePinActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} y={0.000488281} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.5613 4.4095L13.5913 0.4395C13.0053 -0.1465 12.0553 -0.1465 11.4703 0.4395L6.90925 5.0005H0.00025L5.79325 10.7935L0.29325 16.2935C-0.09775 16.6845 -0.09775 17.3165 0.29325 17.7075C0.48825 17.9025 0.74425 18.0005 1.00025 18.0005C1.25625 18.0005 1.51225 17.9025 1.70725 17.7075L7.20725 12.2075L13.0002 18.0005V11.0915L17.5613 6.5305C18.1463 5.9455 18.1463 4.9955 17.5613 4.4095Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.5613 4.4095L13.5913 0.4395C13.0053 -0.1465 12.0553 -0.1465 11.4703 0.4395L6.90925 5.0005H0.00025L5.79325 10.7935L0.29325 16.2935C-0.09775 16.6845 -0.09775 17.3165 0.29325 17.7075C0.48825 17.9025 0.74425 18.0005 1.00025 18.0005C1.25625 18.0005 1.51225 17.9025 1.70725 17.7075L7.20725 12.2075L13.0002 18.0005V11.0915L17.5613 6.5305C18.1463 5.9455 18.1463 4.9955 17.5613 4.4095Z"
        />
      </mask>
      <g mask="url(#mask0_1_2049)" />
    </svg>
  );
}

export { FavouritePinActive };
