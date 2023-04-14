import * as React from 'react';

export function CheckedIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.739 10.339L.107 6.709l.795-.797L3.74 8.748l6.69-6.69.796.796-7.486 7.485z"
        fill="#00847F"
      />
      <mask
        id="prefix__a"
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={0}
        y={2}
        width={12}
        height={9}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.739 10.339L.107 6.709l.795-.797L3.74 8.748l6.69-6.69.796.796-7.486 7.485z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}
