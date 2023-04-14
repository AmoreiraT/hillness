import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DialActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.9492 5.05H17.9992V1.5C17.9992 0.675 17.3242 0 16.4992 0H12.9492V5.05ZM6.55078 6.5498H11.4508V11.4498H6.55078V6.5498ZM11.4508 0H6.55078V5.05H11.4508V0ZM0 6.55H5.05V11.45H0V6.55ZM11.4508 12.9502H6.55078V18.0002H11.4508V12.9502ZM5.05 12.95H0V16.5C0 17.325 0.675 18 1.5 18H5.05V12.95ZM12.9492 18.0002V12.9502H17.9992V16.5002C17.9992 17.3252 17.3242 18.0002 16.4992 18.0002H12.9492ZM12.9492 6.5498H17.9992V11.4498H12.9492V6.5498ZM5.05 0V5.05H0V1.5C0 0.675 0.675 0 1.5 0H5.05Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={18}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.9492 5.05H17.9992V1.5C17.9992 0.675 17.3242 0 16.4992 0H12.9492V5.05ZM6.55078 6.5498H11.4508V11.4498H6.55078V6.5498ZM11.4508 0H6.55078V5.05H11.4508V0ZM0 6.55H5.05V11.45H0V6.55ZM11.4508 12.9502H6.55078V18.0002H11.4508V12.9502ZM5.05 12.95H0V16.5C0 17.325 0.675 18 1.5 18H5.05V12.95ZM12.9492 18.0002V12.9502H17.9992V16.5002C17.9992 17.3252 17.3242 18.0002 16.4992 18.0002H12.9492ZM12.9492 6.5498H17.9992V11.4498H12.9492V6.5498ZM5.05 0V5.05H0V1.5C0 0.675 0.675 0 1.5 0H5.05Z"
        />
      </mask>
      <g mask="url(#mask0_1_2981)" />
    </svg>
  );
}

export { DialActive };
