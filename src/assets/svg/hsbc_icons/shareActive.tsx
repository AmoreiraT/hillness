import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ShareActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.5 13C13.956 13 13.456 13.178 13.046 13.474L13.002 13.445L6.279 9L13.001 4.556L13.045 4.527C13.456 4.821 13.956 5 14.5 5C15.881 5 17 3.88 17 2.5C17 1.119 15.881 0 14.5 0C13.119 0 12 1.119 12 2.5C12 2.603 12.018 2.701 12.03 2.801L11.899 2.888L5.289 7.258C4.835 6.792 4.202 6.5 3.5 6.5C2.119 6.5 1 7.619 1 9C1 10.38 2.119 11.5 3.5 11.5C4.202 11.5 4.835 11.208 5.289 10.742L11.899 15.112L12.03 15.198C12.018 15.299 12 15.397 12 15.5C12 16.881 13.119 18 14.5 18C15.881 18 17 16.881 17 15.5C17 14.119 15.881 13 14.5 13Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.5 13C13.956 13 13.456 13.178 13.046 13.474L13.002 13.445L6.279 9L13.001 4.556L13.045 4.527C13.456 4.821 13.956 5 14.5 5C15.881 5 17 3.88 17 2.5C17 1.119 15.881 0 14.5 0C13.119 0 12 1.119 12 2.5C12 2.603 12.018 2.701 12.03 2.801L11.899 2.888L5.289 7.258C4.835 6.792 4.202 6.5 3.5 6.5C2.119 6.5 1 7.619 1 9C1 10.38 2.119 11.5 3.5 11.5C4.202 11.5 4.835 11.208 5.289 10.742L11.899 15.112L12.03 15.198C12.018 15.299 12 15.397 12 15.5C12 16.881 13.119 18 14.5 18C15.881 18 17 16.881 17 15.5C17 14.119 15.881 13 14.5 13Z"
        />
      </mask>
      <g mask="url(#mask0_1_2761)" />
    </svg>
  );
}

export { ShareActive };
