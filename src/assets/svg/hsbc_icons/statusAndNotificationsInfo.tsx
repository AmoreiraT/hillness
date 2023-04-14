import * as React from 'react';

export function StatusAndNotificationsInfo(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="1.3em"
      height="1.3em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity={0.01} fill="#fff" d="M18 18H0V0h18z" />
      <circle cx={9} cy={9} r={9} fill="#305A85" />
      <circle cx={9.002} cy={5} r={1.25} fill="#fff" />
      <path d="M8.1 8.25h1.8v6H8.1v-6z" fill="#fff" />
    </svg>
  );
}
