import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function DocumentArticle(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 3.518V1.822L13.178 0H3V1.199H12.681L15 3.518ZM12.2 2.4H2V18H16V6.2L12.2 2.4ZM14.7992 16.8001H3.19922V3.6001H10.9992V7.4001H14.7992V16.8001ZM14.3022 6.20017H12.1992V4.09717L14.3022 6.20017Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={2}
        y={0}
        width={14}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 3.518V1.822L13.178 0H3V1.199H12.681L15 3.518ZM12.2 2.4H2V18H16V6.2L12.2 2.4ZM14.7992 16.8001H3.19922V3.6001H10.9992V7.4001H14.7992V16.8001ZM14.3022 6.20017H12.1992V4.09717L14.3022 6.20017Z"
        />
      </mask>
      <g mask="url(#mask0_1_2927)" />
    </svg>
  );
}

export { DocumentArticle };
