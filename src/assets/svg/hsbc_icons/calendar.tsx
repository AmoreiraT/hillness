import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Calendar(props: Props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity={0.01} fill="#fff" d="M.334 0h18v18h-18z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.334 1V0h-1.2v1h-9.6V0h-1.2v1h-3v17h14.2l3.8-3.8V1h-3zm-.8 15.303V14.2h2.102l-2.103 2.103zm2.6-3.303h-3.8v3.8h-11.8V6h15.6v7zm0-8.2h-15.6V2.2h1.8v1.3h1.2V2.2h9.6v1.3h1.2V2.2h1.8v2.6zm-8 5.23V15h1.2V7.971L7.339 9.667l.59 1.045 1.207-.683z"
        fill="#333"
      />
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={0}
        width={19}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.334 1V0h-1.2v1h-9.6V0h-1.2v1h-3v17h14.2l3.8-3.8V1h-3zm-.8 15.303V14.2h2.102l-2.103 2.103zm2.6-3.303h-3.8v3.8h-11.8V6h15.6v7zm0-8.2h-15.6V2.2h1.8v1.3h1.2V2.2h9.6v1.3h1.2V2.2h1.8v2.6zm-8 5.23V15h1.2V7.971L7.339 9.667l.59 1.045 1.207-.683z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export { Calendar };
