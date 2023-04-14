import * as React from 'react';

export function Edit(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.368 1.766l-.952-.952a2.157 2.157 0 00-3.054 0L2.954 11.223 0 18.182l6.959-2.954L17.368 4.82a2.16 2.16 0 000-3.054zM6.277 14.214l-4.011 1.702 1.702-4.011 8.454-8.454 2.308 2.308-8.453 8.455zM16.518 3.97l-.94.94-2.308-2.307.94-.941a.953.953 0 01.678-.281c.257 0 .498.1.678.28l.952.953a.96.96 0 010 1.356z"
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
        height={19}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M17.368 1.766l-.952-.952a2.157 2.157 0 00-3.054 0L2.954 11.223 0 18.182l6.959-2.954L17.368 4.82a2.16 2.16 0 000-3.054zM6.277 14.214l-4.011 1.702 1.702-4.011 8.454-8.454 2.308 2.308-8.453 8.455zM16.518 3.97l-.94.94-2.308-2.307.94-.941a.953.953 0 01.678-.281c.257 0 .498.1.678.28l.952.953a.96.96 0 010 1.356z"
          fill="#fff"
        />
      </mask>
    </svg>
  );
}
