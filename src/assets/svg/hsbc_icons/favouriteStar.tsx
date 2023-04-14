import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FavouriteStar(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.00089 4.299L10.0359 7.382L10.3109 8.2H11.1739H14.4149L11.7949 10.174L11.1179 10.684L11.3719 11.492L12.3469 14.595L9.69689 12.709L9.00089 12.214L8.30489 12.709L5.65489 14.595L6.62989 11.492L6.88389 10.684L6.20689 10.174L3.58789 8.2H6.82889H7.69089L7.96589 7.382L9.00089 4.299ZM9 0.528L6.827 7H0L5.485 11.133L3.438 17.646L9 13.687L14.562 17.646L12.515 11.133L18 7H11.173L9 0.528Z"
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
          d="M9.00089 4.299L10.0359 7.382L10.3109 8.2H11.1739H14.4149L11.7949 10.174L11.1179 10.684L11.3719 11.492L12.3469 14.595L9.69689 12.709L9.00089 12.214L8.30489 12.709L5.65489 14.595L6.62989 11.492L6.88389 10.684L6.20689 10.174L3.58789 8.2H6.82889H7.69089L7.96589 7.382L9.00089 4.299ZM9 0.528L6.827 7H0L5.485 11.133L3.438 17.646L9 13.687L14.562 17.646L12.515 11.133L18 7H11.173L9 0.528Z"
        />
      </mask>
      <g mask="url(#mask0_1_2041)" />
    </svg>
  );
}

export { FavouriteStar };
