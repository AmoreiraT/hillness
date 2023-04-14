import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Portfolio(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.471 6.5H5.109C4.294 6.5 3.56 6.995 3.255 7.751L1.2 12.835V5C1.2 4.837 1.337 4.7 1.5 4.7H13.5C13.663 4.7 13.8 4.837 13.8 5V5.3H15V5C15 4.175 14.325 3.5 13.5 3.5H11V2C11 1.172 10.328 0.5 9.5 0.5H5.5C4.672 0.5 4 1.172 4 2V3.5H1.5C0.675 3.5 0 4.175 0 5L0.01 16.16C0.052 16.877 0.636 17.5 1.423 17.5H13.291C13.871 17.5 14.392 17.148 14.609 16.611L17.861 8.562C18.26 7.576 17.534 6.5 16.471 6.5ZM5.19922 2.0002C5.19922 1.8352 5.33422 1.7002 5.49922 1.7002H9.49922C9.66422 1.7002 9.79922 1.8352 9.79922 2.0002V3.5002H5.19922V2.0002ZM16.7487 8.1122L13.4967 16.1612C13.4627 16.2452 13.3817 16.3002 13.2907 16.3002H1.42267C1.32567 16.3002 1.26867 16.2472 1.23867 16.2022C1.19467 16.1372 1.18767 16.0682 1.21667 15.9952L4.36667 8.2002C4.48967 7.8962 4.78067 7.7002 5.10867 7.7002H16.4707C16.6027 7.7002 16.6787 7.7722 16.7197 7.8322C16.7597 7.8932 16.7977 7.9902 16.7487 8.1122Z"
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
          d="M16.471 6.5H5.109C4.294 6.5 3.56 6.995 3.255 7.751L1.2 12.835V5C1.2 4.837 1.337 4.7 1.5 4.7H13.5C13.663 4.7 13.8 4.837 13.8 5V5.3H15V5C15 4.175 14.325 3.5 13.5 3.5H11V2C11 1.172 10.328 0.5 9.5 0.5H5.5C4.672 0.5 4 1.172 4 2V3.5H1.5C0.675 3.5 0 4.175 0 5L0.01 16.16C0.052 16.877 0.636 17.5 1.423 17.5H13.291C13.871 17.5 14.392 17.148 14.609 16.611L17.861 8.562C18.26 7.576 17.534 6.5 16.471 6.5ZM5.19922 2.0002C5.19922 1.8352 5.33422 1.7002 5.49922 1.7002H9.49922C9.66422 1.7002 9.79922 1.8352 9.79922 2.0002V3.5002H5.19922V2.0002ZM16.7487 8.1122L13.4967 16.1612C13.4627 16.2452 13.3817 16.3002 13.2907 16.3002H1.42267C1.32567 16.3002 1.26867 16.2472 1.23867 16.2022C1.19467 16.1372 1.18767 16.0682 1.21667 15.9952L4.36667 8.2002C4.48967 7.8962 4.78067 7.7002 5.10867 7.7002H16.4707C16.6027 7.7002 16.6787 7.7722 16.7197 7.8322C16.7597 7.8932 16.7977 7.9902 16.7487 8.1122Z"
        />
      </mask>
      <g mask="url(#mask0_1_1998)" />
    </svg>
  );
}

export { Portfolio };
