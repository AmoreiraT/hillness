import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function LocationActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={9.40051} cy={7.5} r={2.75} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14.6335 2.184C13.1885 0.728 11.2945 0 9.4005 0C7.5065 0 5.6125 0.728 4.1675 2.184C1.2775 5.096 1.2775 9.817 4.1675 12.728L9.4005 18L14.6335 12.728C17.5235 9.816 17.5235 5.095 14.6335 2.184ZM9.4005 11.75C7.0575 11.75 5.1505 9.844 5.1505 7.5C5.1505 5.156 7.0575 3.25 9.4005 3.25C11.7435 3.25 13.6505 5.156 13.6505 7.5C13.6505 9.844 11.7435 11.75 9.4005 11.75Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={15}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14.6335 2.184C13.1885 0.728 11.2945 0 9.4005 0C7.5065 0 5.6125 0.728 4.1675 2.184C1.2775 5.096 1.2775 9.817 4.1675 12.728L9.4005 18L14.6335 12.728C17.5235 9.816 17.5235 5.095 14.6335 2.184ZM9.4005 11.75C7.0575 11.75 5.1505 9.844 5.1505 7.5C5.1505 5.156 7.0575 3.25 9.4005 3.25C11.7435 3.25 13.6505 5.156 13.6505 7.5C13.6505 9.844 11.7435 11.75 9.4005 11.75Z"
        />
      </mask>
      <g mask="url(#mask0_1_3297)" />
    </svg>
  );
}

export { LocationActive };
