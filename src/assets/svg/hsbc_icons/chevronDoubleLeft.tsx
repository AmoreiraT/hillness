import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ChevronDoubleLeft(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} y={1} width={18} height={16} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.60742 1H10.3034L2.30542 9L10.3034 17H8.60742L0.607422 9L8.60742 1ZM17.3034 1L9.30542 9L17.3034 17H15.6074L7.60742 9L15.6074 1H17.3034Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={1}
        width={18}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.60742 1H10.3034L2.30542 9L10.3034 17H8.60742L0.607422 9L8.60742 1ZM17.3034 1L9.30542 9L17.3034 17H15.6074L7.60742 9L15.6074 1H17.3034Z"
        />
      </mask>
      <g mask="url(#mask0_1_2160)" />
    </svg>
  );
}

export { ChevronDoubleLeft };
