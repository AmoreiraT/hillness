import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ShortcutsActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M6.77367 9.84519C6.28367 10.3352 6.01367 10.9882 6.01367 11.6802C6.01367 12.1162 6.11967 12.5352 6.32067 12.9092L11.2007 8.02919L12.5497 9.37919V5.34619L8.51867 5.34719L9.89567 6.72419L6.77367 9.84519ZM0 0V18H18V0H0ZM14.0497 12.9992L11.2007 10.1492L6.24367 15.1062L5.71367 14.5762C4.94067 13.8032 4.51367 12.7742 4.51367 11.6802C4.51367 10.5862 4.93967 9.55819 5.71367 8.78419L7.77467 6.72319L4.89667 3.84719L14.0487 3.84619V12.9992H14.0497Z"
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
          d="M6.77367 9.84519C6.28367 10.3352 6.01367 10.9882 6.01367 11.6802C6.01367 12.1162 6.11967 12.5352 6.32067 12.9092L11.2007 8.02919L12.5497 9.37919V5.34619L8.51867 5.34719L9.89567 6.72419L6.77367 9.84519ZM0 0V18H18V0H0ZM14.0497 12.9992L11.2007 10.1492L6.24367 15.1062L5.71367 14.5762C4.94067 13.8032 4.51367 12.7742 4.51367 11.6802C4.51367 10.5862 4.93967 9.55819 5.71367 8.78419L7.77467 6.72319L4.89667 3.84719L14.0487 3.84619V12.9992H14.0497Z"
        />
      </mask>
      <g mask="url(#mask0_1_2727)" />
    </svg>
  );
}

export { ShortcutsActive };
