import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function SecuritySecure(props: Props) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity={0.01} fill="#fff" d="M0 .182h18v18H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.5 5.916H14V4.182c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v1.734H2.5c-.825 0-1.5.675-1.5 1.5v9.266c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5V7.416c0-.825-.675-1.5-1.5-1.5zM5.2 4.182c0-1.544 1.255-2.8 2.8-2.8h2c1.543 0 2.8 1.256 2.8 2.8v1.734h-1.2V4.182c0-.882-.719-1.6-1.6-1.6H8c-.883 0-1.6.718-1.6 1.6v1.734H5.2V4.182zm5.2 0v1.734H7.6V4.182c0-.217.183-.4.4-.4h2c.217 0 .4.183.4.4zm5.4 12.5c0 .163-.138.3-.3.3h-13a.304.304 0 01-.3-.3V7.416c0-.163.136-.3.3-.3h13c.162 0 .3.137.3.3v9.266zm-7.4-2.5h1.2v-4H8.4v4z"
        fill="#333"
      />
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.5 5.916H14V4.182c0-2.2-1.8-4-4-4H8c-2.2 0-4 1.8-4 4v1.734H2.5c-.825 0-1.5.675-1.5 1.5v9.266c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5V7.416c0-.825-.675-1.5-1.5-1.5zM5.2 4.182c0-1.544 1.255-2.8 2.8-2.8h2c1.543 0 2.8 1.256 2.8 2.8v1.734h-1.2V4.182c0-.882-.719-1.6-1.6-1.6H8c-.883 0-1.6.718-1.6 1.6v1.734H5.2V4.182zm5.2 0v1.734H7.6V4.182c0-.217.183-.4.4-.4h2c.217 0 .4.183.4.4zm5.4 12.5c0 .163-.138.3-.3.3h-13a.304.304 0 01-.3-.3V7.416c0-.163.136-.3.3-.3h13c.162 0 .3.137.3.3v9.266zm-7.4-2.5h1.2v-4H8.4v4z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}

export { SecuritySecure };
