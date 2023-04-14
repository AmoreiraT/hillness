import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function FavouriteStarActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 7.00002H11.173L9 0.528015L6.827 7.00002H0L5.485 11.133L3.438 17.646L9 13.687L14.562 17.646L12.515 11.133L18 7.00002Z"
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
          d="M18 7.00002H11.173L9 0.528015L6.827 7.00002H0L5.485 11.133L3.438 17.646L9 13.687L14.562 17.646L12.515 11.133L18 7.00002Z"
        />
      </mask>
      <g mask="url(#mask0_1_1633)" />
    </svg>
  );
}

export { FavouriteStarActive };
