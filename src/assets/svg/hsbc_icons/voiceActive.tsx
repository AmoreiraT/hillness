import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function VoiceActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 13C11.75 13 14 10.75 14 8V5C14 2.25 11.75 0 9 0C6.25 0 4 2.25 4 5V8C4 10.75 6.25 13 9 13ZM15.4004 6V8C15.4004 11.529 12.5294 14.4 9.00039 14.4C5.47139 14.4 2.60039 11.529 2.60039 8V6H1.40039V8C1.40039 11.988 4.49039 15.261 8.40039 15.569V16.8H5.00039V18H13.0004V16.8H9.60039V15.569C13.5104 15.261 16.6004 11.988 16.6004 8V6H15.4004Z"
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
          d="M9 13C11.75 13 14 10.75 14 8V5C14 2.25 11.75 0 9 0C6.25 0 4 2.25 4 5V8C4 10.75 6.25 13 9 13ZM15.4004 6V8C15.4004 11.529 12.5294 14.4 9.00039 14.4C5.47139 14.4 2.60039 11.529 2.60039 8V6H1.40039V8C1.40039 11.988 4.49039 15.261 8.40039 15.569V16.8H5.00039V18H13.0004V16.8H9.60039V15.569C13.5104 15.261 16.6004 11.988 16.6004 8V6H15.4004Z"
        />
      </mask>
      <g mask="url(#mask0_1_422)" />
    </svg>
  );
}

export { VoiceActive };
