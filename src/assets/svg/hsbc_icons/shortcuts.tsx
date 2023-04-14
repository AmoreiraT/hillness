import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Shortcuts(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0V18H18V0H0ZM16.7992 16.8002H1.19922V1.2002H16.7992V16.8002ZM5.81952 14.4701L6.24352 14.8951L11.2005 9.93809L13.8995 12.6381V3.99609L5.26052 3.99709L7.98752 6.72409L5.81952 8.89109C4.28152 10.4291 4.28152 12.9321 5.81952 14.4701ZM6.66728 9.73782L9.68328 6.72282L8.15528 5.19582L12.6993 5.19482V9.73882L11.2003 8.23982L6.28928 13.1508C6.01128 12.7148 5.86328 12.2088 5.86328 11.6788C5.86328 10.9468 6.14828 10.2578 6.66728 9.73782Z"
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
          d="M0 0V18H18V0H0ZM16.7992 16.8002H1.19922V1.2002H16.7992V16.8002ZM5.81952 14.4701L6.24352 14.8951L11.2005 9.93809L13.8995 12.6381V3.99609L5.26052 3.99709L7.98752 6.72409L5.81952 8.89109C4.28152 10.4291 4.28152 12.9321 5.81952 14.4701ZM6.66728 9.73782L9.68328 6.72282L8.15528 5.19582L12.6993 5.19482V9.73882L11.2003 8.23982L6.28928 13.1508C6.01128 12.7148 5.86328 12.2088 5.86328 11.6788C5.86328 10.9468 6.14828 10.2578 6.66728 9.73782Z"
        />
      </mask>
      <g mask="url(#mask0_1_2737)" />
    </svg>
  );
}

export { Shortcuts };
