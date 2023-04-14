import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function EducationBookActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.458 0.879L8.25 1.671V17.25L7.878 16.879C7.316 16.316 6.553 16 5.757 16H0V0H5.336C6.132 0 6.895 0.316 7.458 0.879ZM10.543 0.879C11.105 0.316 11.868 0 12.664 0H18V16H12.243C11.447 16 10.684 16.316 10.121 16.879L9.75 17.25V1.671L10.543 0.879Z"
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
          d="M7.458 0.879L8.25 1.671V17.25L7.878 16.879C7.316 16.316 6.553 16 5.757 16H0V0H5.336C6.132 0 6.895 0.316 7.458 0.879ZM10.543 0.879C11.105 0.316 11.868 0 12.664 0H18V16H12.243C11.447 16 10.684 16.316 10.121 16.879L9.75 17.25V1.671L10.543 0.879Z"
        />
      </mask>
      <g mask="url(#mask0_1_2120)" />
    </svg>
  );
}

export { EducationBookActive };
