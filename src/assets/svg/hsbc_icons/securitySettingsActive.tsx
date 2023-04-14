import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecuritySettingsActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18 10.352V7.648L16.376 6.992C16.208 6.374 15.96 5.774 15.634 5.205L16.319 3.591L14.408 1.68L12.794 2.365C12.225 2.039 11.626 1.791 11.008 1.623L10.352 0H7.648L6.992 1.624C6.374 1.791 5.774 2.04 5.206 2.365L3.592 1.68L1.68 3.592L2.365 5.206C2.04 5.774 1.791 6.374 1.624 6.992L0 7.648V10.351L1.624 11.007C1.791 11.626 2.04 12.225 2.366 12.794L1.68 14.408L3.592 16.32L5.206 15.635C5.775 15.961 6.374 16.209 6.993 16.377L7.648 18H10.351L11.007 16.376C11.626 16.209 12.225 15.96 12.794 15.634L14.408 16.319L16.32 14.407L15.635 12.793C15.961 12.224 16.209 11.625 16.377 11.006L18 10.352ZM13 8.221C13 10.746 11.31 12.874 9 13.541C6.69 12.874 5 10.746 5 8.221V6H13V8.221Z"
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
          d="M18 10.352V7.648L16.376 6.992C16.208 6.374 15.96 5.774 15.634 5.205L16.319 3.591L14.408 1.68L12.794 2.365C12.225 2.039 11.626 1.791 11.008 1.623L10.352 0H7.648L6.992 1.624C6.374 1.791 5.774 2.04 5.206 2.365L3.592 1.68L1.68 3.592L2.365 5.206C2.04 5.774 1.791 6.374 1.624 6.992L0 7.648V10.351L1.624 11.007C1.791 11.626 2.04 12.225 2.366 12.794L1.68 14.408L3.592 16.32L5.206 15.635C5.775 15.961 6.374 16.209 6.993 16.377L7.648 18H10.351L11.007 16.376C11.626 16.209 12.225 15.96 12.794 15.634L14.408 16.319L16.32 14.407L15.635 12.793C15.961 12.224 16.209 11.625 16.377 11.006L18 10.352ZM13 8.221C13 10.746 11.31 12.874 9 13.541C6.69 12.874 5 10.746 5 8.221V6H13V8.221Z"
        />
      </mask>
      <g mask="url(#mask0_1_3173)" />
    </svg>
  );
}

export { SecuritySettingsActive };
