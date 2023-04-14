import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function TouchTap(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.1 0H7V2.6H8.1V0ZM7.5 3.5C6.5 3.5 5.6 4.3 5.6 5.4V10.8L5.3 10.5C4.9 10.1 4.4 9.9 3.9 9.9C3.4 9.9 3 10.1 2.6 10.4C1.8 11.1 1.8 12.3 2.6 13.1L6.4 16.9C7.1 17.6 8.1 18 9.1 18H13.2C14.7 18 16 16.7 16 15.2V11.2C16 10.4 15.5 9.8 14.8 9.5L12.2 8.6L9.4 7.7V5.4C9.4 4.4 8.5 3.5 7.5 3.5ZM7.49922 4.7002C7.89922 4.7002 8.29922 5.0002 8.29922 5.4002V7.7002V8.5002L9.09922 8.8002L11.8992 9.7002L14.3992 10.5002C14.6992 10.6002 14.7992 10.9002 14.7992 11.2002V15.2002C14.7992 16.1002 13.9992 16.9002 13.0992 16.9002H9.09922C8.39922 16.9002 7.69922 16.6002 7.29922 16.1002L3.49922 12.3002C3.29922 12.2002 3.19922 12.0002 3.19922 11.8002C3.19922 11.6002 3.29922 11.4002 3.39922 11.3002C3.59922 11.1002 3.79922 11.1002 3.89922 11.1002C4.09922 11.1002 4.29922 11.2002 4.49922 11.3002L4.89922 11.7002L6.79922 13.6002V10.9002V5.4002C6.79922 5.0002 7.09922 4.7002 7.49922 4.7002ZM4.74805 4.22607V5.32607H2.14805V4.22607H4.74805ZM13.0371 5.33584V4.23584H10.4371V5.33584H13.0371ZM3.49438 1.55988L4.27219 0.78207L6.11065 2.62053L5.33284 3.39834L3.49438 1.55988ZM8.93899 2.73391L9.7168 3.51172L11.5553 1.67326L10.7774 0.895449L8.93899 2.73391Z"
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
          d="M8.1 0H7V2.6H8.1V0ZM7.5 3.5C6.5 3.5 5.6 4.3 5.6 5.4V10.8L5.3 10.5C4.9 10.1 4.4 9.9 3.9 9.9C3.4 9.9 3 10.1 2.6 10.4C1.8 11.1 1.8 12.3 2.6 13.1L6.4 16.9C7.1 17.6 8.1 18 9.1 18H13.2C14.7 18 16 16.7 16 15.2V11.2C16 10.4 15.5 9.8 14.8 9.5L12.2 8.6L9.4 7.7V5.4C9.4 4.4 8.5 3.5 7.5 3.5ZM7.49922 4.7002C7.89922 4.7002 8.29922 5.0002 8.29922 5.4002V7.7002V8.5002L9.09922 8.8002L11.8992 9.7002L14.3992 10.5002C14.6992 10.6002 14.7992 10.9002 14.7992 11.2002V15.2002C14.7992 16.1002 13.9992 16.9002 13.0992 16.9002H9.09922C8.39922 16.9002 7.69922 16.6002 7.29922 16.1002L3.49922 12.3002C3.29922 12.2002 3.19922 12.0002 3.19922 11.8002C3.19922 11.6002 3.29922 11.4002 3.39922 11.3002C3.59922 11.1002 3.79922 11.1002 3.89922 11.1002C4.09922 11.1002 4.29922 11.2002 4.49922 11.3002L4.89922 11.7002L6.79922 13.6002V10.9002V5.4002C6.79922 5.0002 7.09922 4.7002 7.49922 4.7002ZM4.74805 4.22607V5.32607H2.14805V4.22607H4.74805ZM13.0371 5.33584V4.23584H10.4371V5.33584H13.0371ZM3.49438 1.55988L4.27219 0.78207L6.11065 2.62053L5.33284 3.39834L3.49438 1.55988ZM8.93899 2.73391L9.7168 3.51172L11.5553 1.67326L10.7774 0.895449L8.93899 2.73391Z"
        />
      </mask>
      <g mask="url(#mask0_1_1754)" />
    </svg>
  );
}

export { TouchTap };
