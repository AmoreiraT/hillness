import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function VolumeOFf(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5V13H5L10 18V0L5 5H0ZM5.84822 5.84897L8.79922 2.89697V15.103L5.84722 12.151L5.49622 11.8H1.19922V6.19997H5.49622L5.84822 5.84897ZM17.7465 6.92417L16.8975 6.07617L14.8215 8.15217L12.7455 6.07617L11.8965 6.92417L13.9745 9.00017L11.8985 11.0762L12.7475 11.9242L14.8235 9.84817L16.8995 11.9242L17.7485 11.0762L15.6705 9.00017L17.7465 6.92417Z"
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
          d="M0 5V13H5L10 18V0L5 5H0ZM5.84822 5.84897L8.79922 2.89697V15.103L5.84722 12.151L5.49622 11.8H1.19922V6.19997H5.49622L5.84822 5.84897ZM17.7465 6.92417L16.8975 6.07617L14.8215 8.15217L12.7455 6.07617L11.8965 6.92417L13.9745 9.00017L11.8985 11.0762L12.7475 11.9242L14.8235 9.84817L16.8995 11.9242L17.7485 11.0762L15.6705 9.00017L17.7465 6.92417Z"
        />
      </mask>
      <g mask="url(#mask0_1_390)" />
    </svg>
  );
}

export { VolumeOFf };
