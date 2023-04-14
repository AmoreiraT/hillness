import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function EducationActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 1.5L0 5.5L9 9.5L16.8 6.033V13.5H18V5.5L9 1.5ZM9 11.142L8.391 10.871L3 8.475V13.5C3 15.157 5.686 16.5 9 16.5C12.314 16.5 15 15.157 15 13.5V8.475L9.609 10.871L9 11.142Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M9 1.5L0 5.5L9 9.5L16.8 6.033V13.5H18V5.5L9 1.5ZM9 11.142L8.391 10.871L3 8.475V13.5C3 15.157 5.686 16.5 9 16.5C12.314 16.5 15 15.157 15 13.5V8.475L9.609 10.871L9 11.142Z"
        />
      </mask>
      <g mask="url(#mask0_1_2102)" />
    </svg>
  );
}

export { EducationActive };
