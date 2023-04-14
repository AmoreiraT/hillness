import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function PersonalFinanceManagementActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H13V5H18V6.5H0V0ZM14.5 3.5V0.3L17.7 3.5H14.5ZM8.25 8H4.875V10.333H8.25V8ZM4.875 11.833H8.25V14.166H4.875V11.833ZM13.125 11.833H9.75V14.166H13.125V11.833ZM13.125 15.667H9.75V18H13.125V15.667ZM9.75 8H13.125V10.333H9.75V8ZM0 8H3.375V10.333H0V8ZM18 15.667H14.625V18H18V15.667ZM14.625 11.833H18V14.166H14.625V11.833ZM18 8H14.625V10.333H18V8ZM4.875 15.667H8.25V18H4.875V15.667ZM0 15.667H3.375V18H0V15.667ZM3.375 11.833H0V14.166H3.375V11.833Z"
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
          d="M0 0H13V5H18V6.5H0V0ZM14.5 3.5V0.3L17.7 3.5H14.5ZM8.25 8H4.875V10.333H8.25V8ZM4.875 11.833H8.25V14.166H4.875V11.833ZM13.125 11.833H9.75V14.166H13.125V11.833ZM13.125 15.667H9.75V18H13.125V15.667ZM9.75 8H13.125V10.333H9.75V8ZM0 8H3.375V10.333H0V8ZM18 15.667H14.625V18H18V15.667ZM14.625 11.833H18V14.166H14.625V11.833ZM18 8H14.625V10.333H18V8ZM4.875 15.667H8.25V18H4.875V15.667ZM0 15.667H3.375V18H0V15.667ZM3.375 11.833H0V14.166H3.375V11.833Z"
        />
      </mask>
      <g mask="url(#mask0_1_2009)" />
    </svg>
  );
}

export { PersonalFinanceManagementActive };
