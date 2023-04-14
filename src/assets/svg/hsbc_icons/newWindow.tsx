import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function NewWindow(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8 15.8H2.2V2.2H9V1H1V17H17V9H15.8V15.8ZM10.4593 8.388L15.7993 3.048V7.856L16.9993 6.656V1H11.3423L10.1433 2.199H14.9523L9.61133 7.54L10.4593 8.388Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8 15.8H2.2V2.2H9V1H1V17H17V9H15.8V15.8ZM10.4593 8.388L15.7993 3.048V7.856L16.9993 6.656V1H11.3423L10.1433 2.199H14.9523L9.61133 7.54L10.4593 8.388Z"
        />
      </mask>
      <g mask="url(#mask0_1_2873)" />
    </svg>
  );
}

export { NewWindow };
