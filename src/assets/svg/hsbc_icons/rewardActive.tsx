import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function RewardActive(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.25 11.75H1V18H8.25V11.75ZM17 11.75H9.75V18H17V11.75ZM15.482 4C16.225 3.022 16.16 1.624 15.268 0.73C14.294 -0.243 12.71 -0.244 11.737 0.731L8.999 3.469L6.261 0.73C5.287 -0.242 3.704 -0.241 2.73 0.731C1.839 1.624 1.774 3.022 2.517 4H1V10.25H8.25V5.2H9.75V10.25H17V4H15.482ZM4.16592 3.99982L3.57992 3.41382C3.07492 2.90782 3.07492 2.08482 3.57992 1.57982C4.08392 1.07382 4.90792 1.07382 5.41292 1.57882L7.83392 3.99982H4.16592ZM14.4181 3.41293L13.8311 3.99993H10.1641L12.5851 1.57993C13.0901 1.07393 13.9131 1.07493 14.4181 1.57893C14.9241 2.08493 14.9241 2.90793 14.4181 3.41293Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={0}
        width={16}
        height={18}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M8.25 11.75H1V18H8.25V11.75ZM17 11.75H9.75V18H17V11.75ZM15.482 4C16.225 3.022 16.16 1.624 15.268 0.73C14.294 -0.243 12.71 -0.244 11.737 0.731L8.999 3.469L6.261 0.73C5.287 -0.242 3.704 -0.241 2.73 0.731C1.839 1.624 1.774 3.022 2.517 4H1V10.25H8.25V5.2H9.75V10.25H17V4H15.482ZM4.16592 3.99982L3.57992 3.41382C3.07492 2.90782 3.07492 2.08482 3.57992 1.57982C4.08392 1.07382 4.90792 1.07382 5.41292 1.57882L7.83392 3.99982H4.16592ZM14.4181 3.41293L13.8311 3.99993H10.1641L12.5851 1.57993C13.0901 1.07393 13.9131 1.07493 14.4181 1.57893C14.9241 2.08493 14.9241 2.90793 14.4181 3.41293Z"
        />
      </mask>
      <g mask="url(#mask0_1_1024)" />
    </svg>
  );
}

export { RewardActive };
