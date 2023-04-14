import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function UserMultiple(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.07361 3.833C9.05661 3.66 9.04961 3.51 9.04961 3.431C9.04961 2.598 9.27161 1.2 10.7576 1.2C12.2296 1.2 12.4496 2.598 12.4496 3.431C12.4496 3.67 12.3916 5.683 10.9026 5.818C11.0576 6.177 11.1836 6.56 11.2566 6.983C12.9216 6.692 13.6496 4.988 13.6496 3.431C13.6496 1.658 12.8036 0 10.7576 0C8.71161 0 7.84961 1.642 7.84961 3.431C7.84961 3.445 7.85261 3.46 7.85261 3.474C8.29261 3.533 8.70261 3.651 9.07361 3.833ZM11.3125 8.68787C11.2695 9.13587 11.1825 9.54187 11.0605 9.91287C11.9805 9.86687 12.8595 9.62287 13.6425 9.17587C14.1555 9.43287 14.6105 9.76487 15.0005 10.1669C15.1775 10.3489 15.3215 10.5769 15.4305 10.8459L16.2205 12.8009H13.4645C13.7395 13.1419 13.9815 13.5159 14.1555 13.9469L14.1775 13.9999H17.9995L16.5425 10.3949C16.3835 10.0009 16.1575 9.63487 15.8615 9.32987C15.2235 8.67287 14.4405 8.15987 13.5265 7.81787C12.8915 8.29487 12.1395 8.59187 11.3125 8.68787ZM12.362 13.33C11.657 12.604 10.775 12.055 9.735 11.717L7.259 14.192L4.779 11.712C3.732 12.049 2.847 12.601 2.139 13.329C1.843 13.634 1.617 14 1.458 14.394L0 18H14.5L13.043 14.396C12.884 14.001 12.658 13.635 12.362 13.33ZM1.7793 16.7998L2.5693 14.8438C2.6773 14.5758 2.8223 14.3468 2.9983 14.1658C3.4213 13.7308 3.9183 13.3788 4.4833 13.1138L6.4093 15.0398L7.2583 15.8878L8.1063 15.0398L10.0273 13.1198C10.5873 13.3838 11.0813 13.7338 11.5003 14.1658C11.6763 14.3468 11.8213 14.5758 11.9293 14.8448L12.7193 16.7998H1.7793ZM7.25761 11.6592C9.28661 11.6592 10.1496 9.75521 10.1496 8.04721C10.1496 6.27421 9.30361 4.61621 7.25761 4.61621C5.21161 4.61621 4.34961 6.25821 4.34961 8.04821C4.34961 9.80421 5.19461 11.6592 7.25761 11.6592ZM7.25878 5.81592C8.73078 5.81592 8.95078 7.21392 8.95078 8.04692C8.95078 8.29392 8.90378 10.4589 7.25878 10.4589C5.63278 10.4589 5.55078 8.44992 5.55078 8.04692C5.55078 7.21392 5.77278 5.81592 7.25878 5.81592Z"
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
          d="M9.07361 3.833C9.05661 3.66 9.04961 3.51 9.04961 3.431C9.04961 2.598 9.27161 1.2 10.7576 1.2C12.2296 1.2 12.4496 2.598 12.4496 3.431C12.4496 3.67 12.3916 5.683 10.9026 5.818C11.0576 6.177 11.1836 6.56 11.2566 6.983C12.9216 6.692 13.6496 4.988 13.6496 3.431C13.6496 1.658 12.8036 0 10.7576 0C8.71161 0 7.84961 1.642 7.84961 3.431C7.84961 3.445 7.85261 3.46 7.85261 3.474C8.29261 3.533 8.70261 3.651 9.07361 3.833ZM11.3125 8.68787C11.2695 9.13587 11.1825 9.54187 11.0605 9.91287C11.9805 9.86687 12.8595 9.62287 13.6425 9.17587C14.1555 9.43287 14.6105 9.76487 15.0005 10.1669C15.1775 10.3489 15.3215 10.5769 15.4305 10.8459L16.2205 12.8009H13.4645C13.7395 13.1419 13.9815 13.5159 14.1555 13.9469L14.1775 13.9999H17.9995L16.5425 10.3949C16.3835 10.0009 16.1575 9.63487 15.8615 9.32987C15.2235 8.67287 14.4405 8.15987 13.5265 7.81787C12.8915 8.29487 12.1395 8.59187 11.3125 8.68787ZM12.362 13.33C11.657 12.604 10.775 12.055 9.735 11.717L7.259 14.192L4.779 11.712C3.732 12.049 2.847 12.601 2.139 13.329C1.843 13.634 1.617 14 1.458 14.394L0 18H14.5L13.043 14.396C12.884 14.001 12.658 13.635 12.362 13.33ZM1.7793 16.7998L2.5693 14.8438C2.6773 14.5758 2.8223 14.3468 2.9983 14.1658C3.4213 13.7308 3.9183 13.3788 4.4833 13.1138L6.4093 15.0398L7.2583 15.8878L8.1063 15.0398L10.0273 13.1198C10.5873 13.3838 11.0813 13.7338 11.5003 14.1658C11.6763 14.3468 11.8213 14.5758 11.9293 14.8448L12.7193 16.7998H1.7793ZM7.25761 11.6592C9.28661 11.6592 10.1496 9.75521 10.1496 8.04721C10.1496 6.27421 9.30361 4.61621 7.25761 4.61621C5.21161 4.61621 4.34961 6.25821 4.34961 8.04821C4.34961 9.80421 5.19461 11.6592 7.25761 11.6592ZM7.25878 5.81592C8.73078 5.81592 8.95078 7.21392 8.95078 8.04692C8.95078 8.29392 8.90378 10.4589 7.25878 10.4589C5.63278 10.4589 5.55078 8.44992 5.55078 8.04692C5.55078 7.21392 5.77278 5.81592 7.25878 5.81592Z"
        />
      </mask>
      <g mask="url(#mask0_1_1273)" />
    </svg>
  );
}

export { UserMultiple };
