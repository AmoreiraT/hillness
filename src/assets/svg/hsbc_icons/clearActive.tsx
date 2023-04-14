import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ClearActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM13.6353 12.3628L12.3633 13.6358L8.99928 10.2728L5.63528 13.6368L4.36328 12.3638L7.72628 8.99979L4.36328 5.63679L5.63528 4.36379L8.99928 7.72679L12.3633 4.36279L13.6353 5.63579L10.2723 8.99979L13.6353 12.3628Z"
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
          d="M9 0C4.029 0 0 4.029 0 9C0 13.971 4.029 18 9 18C13.971 18 18 13.971 18 9C18 4.029 13.971 0 9 0ZM13.6353 12.3628L12.3633 13.6358L8.99928 10.2728L5.63528 13.6368L4.36328 12.3638L7.72628 8.99979L4.36328 5.63679L5.63528 4.36379L8.99928 7.72679L12.3633 4.36279L13.6353 5.63579L10.2723 8.99979L13.6353 12.3628Z"
        />
      </mask>
      <g mask="url(#mask0_1_1716)" />
    </svg>
  );
}

export { ClearActive };
