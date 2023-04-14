import * as React from 'react';

export function StatusAndNotifications(props: React.SVGProps<SVGSVGElement>) {
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
        d="M8.31 1.682L.11 15.8A.8.8 0 00.8 17h16.4a.8.8 0 00.691-1.2l-8.2-14.118a.799.799 0 00-1.382 0z"
        fill="#A8000B"
      />
      <path d="M8.1 5h1.8v6H8.1V5z" fill="#fff" />
      <circle cx={9} cy={13.576} r={1.25} fill="#fff" />
    </svg>
  );
}
