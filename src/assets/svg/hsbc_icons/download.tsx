import * as React from 'react';

export function Download(props: React.SVGProps<SVGSVGElement>) {
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
        d="M15.8 12v3.8H2.2V12H1v5h16v-5h-1.2zM14 8.848V7.151l-4.4 4.4V1H8.4v10.551L4 7.151v1.697l5 5.001 5-5.001z"
        fill="#333"
      />
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={16}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8 12v3.8H2.2V12H1v5h16v-5h-1.2zM14 8.848V7.151l-4.4 4.4V1H8.4v10.551L4 7.151v1.697l5 5.001 5-5.001z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}
