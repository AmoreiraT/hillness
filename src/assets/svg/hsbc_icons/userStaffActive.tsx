import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function UserStaffActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5 4.891C12.5 2.751 11.479 0.75 9.01 0.75C6.541 0.75 5.5 2.731 5.5 4.891C5.5 7.011 6.52 9.25 9.01 9.25C11.459 9.25 12.5 6.952 12.5 4.891ZM2.654 11.453C2.286 11.831 2.006 12.286 1.809 12.775L0 17.25H6.16L3.515 10.704C3.211 10.935 2.919 11.18 2.654 11.453ZM4.81055 9.90682L7.77755 17.2498H8.24955V11.7628L5.93155 9.44482C5.53755 9.57182 5.16755 9.73182 4.81055 9.90682ZM12.084 9.451L9.75 11.785V17.25H10.24L13.204 9.915C12.847 9.739 12.478 9.579 12.084 9.451ZM16.1904 12.7749C15.9924 12.2859 15.7124 11.8309 15.3444 11.4529C15.0834 11.1839 14.7974 10.9419 14.4974 10.7129L11.8574 17.2499H17.9994L16.1904 12.7749Z"
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
          d="M12.5 4.891C12.5 2.751 11.479 0.75 9.01 0.75C6.541 0.75 5.5 2.731 5.5 4.891C5.5 7.011 6.52 9.25 9.01 9.25C11.459 9.25 12.5 6.952 12.5 4.891ZM2.654 11.453C2.286 11.831 2.006 12.286 1.809 12.775L0 17.25H6.16L3.515 10.704C3.211 10.935 2.919 11.18 2.654 11.453ZM4.81055 9.90682L7.77755 17.2498H8.24955V11.7628L5.93155 9.44482C5.53755 9.57182 5.16755 9.73182 4.81055 9.90682ZM12.084 9.451L9.75 11.785V17.25H10.24L13.204 9.915C12.847 9.739 12.478 9.579 12.084 9.451ZM16.1904 12.7749C15.9924 12.2859 15.7124 11.8309 15.3444 11.4529C15.0834 11.1839 14.7974 10.9419 14.4974 10.7129L11.8574 17.2499H17.9994L16.1904 12.7749Z"
        />
      </mask>
      <g mask="url(#mask0_1_888)" />
    </svg>
  );
}

export { UserStaffActive };
