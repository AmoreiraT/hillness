import * as React from 'react';

export function EditActive(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity={0.01} fill="#fff" d="M0 0h18v18H0z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.366 4.638l-.834.834-4.007-4.006.835-.834a2.16 2.16 0 013.054 0l.952.952a2.16 2.16 0 010 3.054zM2.954 11.041l8.513-8.514 4.006 4.006-8.514 8.513L0 18l2.954-6.959z"
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
        width={18}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.366 4.638l-.834.834-4.007-4.006.835-.834a2.16 2.16 0 013.054 0l.952.952a2.16 2.16 0 010 3.054zM2.954 11.041l8.513-8.514 4.006 4.006-8.514 8.513L0 18l2.954-6.959z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}
