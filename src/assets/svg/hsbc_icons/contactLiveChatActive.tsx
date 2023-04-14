import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function ContactLiveChatActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.5008 6.968V5.5H7.67377C7.48277 4.958 7.38477 4.365 7.38477 3.769C7.38477 1.479 8.64377 0 10.5918 0C12.5318 0 13.7848 1.479 13.7848 3.768C13.7848 4.974 13.3628 6.214 12.5008 6.968ZM12.989 8.44916L13.286 8.16016L13.662 8.33516C14.389 8.67416 15.026 9.12216 15.555 9.66616C15.873 9.99516 16.127 10.3912 16.31 10.8442L17.99 15.0002H12.5V8.84316C12.671 8.72716 12.836 8.59916 12.989 8.44916ZM11 7H0V18L3 15H11V7ZM8 11.75H3V10.25H8V11.75Z"
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
          d="M12.5008 6.968V5.5H7.67377C7.48277 4.958 7.38477 4.365 7.38477 3.769C7.38477 1.479 8.64377 0 10.5918 0C12.5318 0 13.7848 1.479 13.7848 3.768C13.7848 4.974 13.3628 6.214 12.5008 6.968ZM12.989 8.44916L13.286 8.16016L13.662 8.33516C14.389 8.67416 15.026 9.12216 15.555 9.66616C15.873 9.99516 16.127 10.3912 16.31 10.8442L17.99 15.0002H12.5V8.84316C12.671 8.72716 12.836 8.59916 12.989 8.44916ZM11 7H0V18L3 15H11V7ZM8 11.75H3V10.25H8V11.75Z"
        />
      </mask>
      <g mask="url(#mask0_1_1207)" />
    </svg>
  );
}

export { ContactLiveChatActive };
