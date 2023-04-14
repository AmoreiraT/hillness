import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactAddressBookActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15 0H1V4H0V5.2H1V8.4H0V9.6H1V12.8H0V14H1V18H15C16.104 18 17 17.104 17 16V2C17 0.896 16.104 0 15 0ZM9.00336 4.78613C10.1014 4.78613 10.5544 5.67513 10.5544 6.62713C10.5544 7.54313 10.0914 8.56413 9.00336 8.56413C7.89736 8.56413 7.44336 7.56913 7.44336 6.62713C7.44336 5.66713 7.90636 4.78613 9.00336 4.78613ZM5 13L5.804 11.011C5.892 10.794 6.016 10.592 6.18 10.423C6.571 10.021 7.059 9.717 7.637 9.531L9.005 10.899L10.371 9.533C10.945 9.719 11.432 10.022 11.821 10.423C11.984 10.591 12.109 10.793 12.197 11.011L13 13H5Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={17}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15 0H1V4H0V5.2H1V8.4H0V9.6H1V12.8H0V14H1V18H15C16.104 18 17 17.104 17 16V2C17 0.896 16.104 0 15 0ZM9.00336 4.78613C10.1014 4.78613 10.5544 5.67513 10.5544 6.62713C10.5544 7.54313 10.0914 8.56413 9.00336 8.56413C7.89736 8.56413 7.44336 7.56913 7.44336 6.62713C7.44336 5.66713 7.90636 4.78613 9.00336 4.78613ZM5 13L5.804 11.011C5.892 10.794 6.016 10.592 6.18 10.423C6.571 10.021 7.059 9.717 7.637 9.531L9.005 10.899L10.371 9.533C10.945 9.719 11.432 10.022 11.821 10.423C11.984 10.591 12.109 10.793 12.197 11.011L13 13H5Z"
        />
      </mask>
      <g mask="url(#mask0_1_1637)" />
    </svg>
  );
}

export { ContactAddressBookActive };
