import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function NewModal(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.8 15.8H2.2V6.2H4.8V5H1V17H13V13.2H11.8V15.8ZM15.8 10.8H7.2V2.2H10V1H6V12H17V8H15.8V10.8ZM11.4593 7.388L15.7993 3.048V6.856L16.9993 5.656V1H12.3423L11.1433 2.199H14.9523L10.6113 6.54L11.4593 7.388Z"
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
          d="M11.8 15.8H2.2V6.2H4.8V5H1V17H13V13.2H11.8V15.8ZM15.8 10.8H7.2V2.2H10V1H6V12H17V8H15.8V10.8ZM11.4593 7.388L15.7993 3.048V6.856L16.9993 5.656V1H12.3423L11.1433 2.199H14.9523L10.6113 6.54L11.4593 7.388Z"
        />
      </mask>
      <g mask="url(#mask0_1_2881)" />
    </svg>
  );
}

export { NewModal };
