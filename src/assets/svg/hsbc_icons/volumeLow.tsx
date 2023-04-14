import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function VolumeLow(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8909 6.2992C12.5669 7.0002 12.9889 7.9502 12.9889 9.0002C12.9889 10.0982 12.5299 11.0872 11.7969 11.7962L12.6449 12.6442C13.5949 11.7172 14.1889 10.4282 14.1889 9.0002C14.1889 7.6192 13.6329 6.3702 12.7389 5.4502L11.8909 6.2992ZM0 5V13H5L10 18V0L5 5H0ZM5.84822 5.84897L8.79922 2.89697V15.103L5.84822 12.151L5.49622 11.8H1.19922V6.19997H5.49622L5.84822 5.84897Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={15}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M11.8909 6.2992C12.5669 7.0002 12.9889 7.9502 12.9889 9.0002C12.9889 10.0982 12.5299 11.0872 11.7969 11.7962L12.6449 12.6442C13.5949 11.7172 14.1889 10.4282 14.1889 9.0002C14.1889 7.6192 13.6329 6.3702 12.7389 5.4502L11.8909 6.2992ZM0 5V13H5L10 18V0L5 5H0ZM5.84822 5.84897L8.79922 2.89697V15.103L5.84822 12.151L5.49622 11.8H1.19922V6.19997H5.49622L5.84822 5.84897Z"
        />
      </mask>
      <g mask="url(#mask0_1_400)" />
    </svg>
  );
}

export { VolumeLow };
