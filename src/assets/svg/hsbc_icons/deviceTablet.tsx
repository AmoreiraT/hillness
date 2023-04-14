import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DeviceTablet(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.40039 0H14.4004C15.5004 0 16.4004 0.9 16.5004 2V16C16.5004 17.1 15.6004 18 14.5004 18H3.40039C2.30039 18 1.40039 17.1 1.40039 16V2C1.40039 0.9 2.30039 0 3.40039 0ZM14.4996 1.2002H3.39961C2.89961 1.2002 2.59961 1.6002 2.59961 2.0002V2.8002H15.2996V2.0002C15.2996 1.6002 14.8996 1.2002 14.4996 1.2002ZM15.1996 12.8V4H2.59961V12.8H15.1996ZM14.3996 16.8H3.39961C2.99961 16.8 2.59961 16.4 2.59961 16V14H15.2996V16C15.1996 16.4 14.8996 16.8 14.3996 16.8Z"
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
          d="M3.40039 0H14.4004C15.5004 0 16.4004 0.9 16.5004 2V16C16.5004 17.1 15.6004 18 14.5004 18H3.40039C2.30039 18 1.40039 17.1 1.40039 16V2C1.40039 0.9 2.30039 0 3.40039 0ZM14.4996 1.2002H3.39961C2.89961 1.2002 2.59961 1.6002 2.59961 2.0002V2.8002H15.2996V2.0002C15.2996 1.6002 14.8996 1.2002 14.4996 1.2002ZM15.1996 12.8V4H2.59961V12.8H15.1996ZM14.3996 16.8H3.39961C2.99961 16.8 2.59961 16.4 2.59961 16V14H15.2996V16C15.1996 16.4 14.8996 16.8 14.3996 16.8Z"
        />
      </mask>
      <g mask="url(#mask0_1_3351)" />
    </svg>
  );
}

export { DeviceTablet };
