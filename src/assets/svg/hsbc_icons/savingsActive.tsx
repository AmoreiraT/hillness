import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SavingsActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16.5 0H4.5C3.675 0 3 0.675 3 1.5V5.739C3.767 5.586 4.604 5.5 5.5 5.5C5.67 5.5 5.834 5.507 6 5.513V4H8V5.739C10.708 6.278 12.5 7.694 12.5 9.5C12.5 10.04 12.335 10.542 12.039 11H16.5C17.325 11 18 10.325 18 9.5V1.5C18 0.675 17.325 0 16.5 0ZM5.5 13.5C3.239 13.5 1.325 12.976 0.073 12.112C0.029 12.239 0 12.368 0 12.5C0 13.881 2.462 15 5.5 15C8.538 15 11 13.881 11 12.5C11 12.368 10.971 12.239 10.927 12.112C9.675 12.976 7.761 13.5 5.5 13.5ZM5.5 16.5C3.239 16.5 1.325 15.976 0.073 15.112C0.029 15.239 0 15.368 0 15.5C0 16.881 2.462 18 5.5 18C8.538 18 11 16.881 11 15.5C11 15.368 10.971 15.239 10.927 15.112C9.675 15.976 7.761 16.5 5.5 16.5ZM5.5 7C2.462 7 0 8.119 0 9.5C0 10.881 2.462 12 5.5 12C8.538 12 11 10.881 11 9.5C11 8.119 8.538 7 5.5 7Z"
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
          d="M16.5 0H4.5C3.675 0 3 0.675 3 1.5V5.739C3.767 5.586 4.604 5.5 5.5 5.5C5.67 5.5 5.834 5.507 6 5.513V4H8V5.739C10.708 6.278 12.5 7.694 12.5 9.5C12.5 10.04 12.335 10.542 12.039 11H16.5C17.325 11 18 10.325 18 9.5V1.5C18 0.675 17.325 0 16.5 0ZM5.5 13.5C3.239 13.5 1.325 12.976 0.073 12.112C0.029 12.239 0 12.368 0 12.5C0 13.881 2.462 15 5.5 15C8.538 15 11 13.881 11 12.5C11 12.368 10.971 12.239 10.927 12.112C9.675 12.976 7.761 13.5 5.5 13.5ZM5.5 16.5C3.239 16.5 1.325 15.976 0.073 15.112C0.029 15.239 0 15.368 0 15.5C0 16.881 2.462 18 5.5 18C8.538 18 11 16.881 11 15.5C11 15.368 10.971 15.239 10.927 15.112C9.675 15.976 7.761 16.5 5.5 16.5ZM5.5 7C2.462 7 0 8.119 0 9.5C0 10.881 2.462 12 5.5 12C8.538 12 11 10.881 11 9.5C11 8.119 8.538 7 5.5 7Z"
        />
      </mask>
      <g mask="url(#mask0_1_956)" />
    </svg>
  );
}

export { SavingsActive };
