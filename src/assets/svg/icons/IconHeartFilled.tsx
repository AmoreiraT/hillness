import { Color } from '@shared/utils/types';

export function IconHeartFilled({
  color,
  className,
  size,
}: {
  color?: Color;
  className?: string;
  size?: number;
}) {
  return (
    <svg
      width={`${size ?? 2.4}rem`}
      height={`${size ?? 2.4}rem`}
      viewBox="0 0 20 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M10 19L8.55 17.7C6.86667 16.1834 5.475 14.875 4.375 13.775C3.275 12.675 2.4 11.6874 1.75 10.812C1.1 9.93736 0.646 9.13336 0.388 8.40002C0.129333 7.66669 0 6.91669 0 6.15002C0 4.58336 0.525 3.27502 1.575 2.22502C2.625 1.17502 3.93333 0.650024 5.5 0.650024C6.36667 0.650024 7.19167 0.833358 7.975 1.20002C8.75833 1.56669 9.43333 2.08336 10 2.75002C10.5667 2.08336 11.2417 1.56669 12.025 1.20002C12.8083 0.833358 13.6333 0.650024 14.5 0.650024C16.0667 0.650024 17.375 1.17502 18.425 2.22502C19.475 3.27502 20 4.58336 20 6.15002C20 6.91669 19.871 7.66669 19.613 8.40002C19.3543 9.13336 18.9 9.93736 18.25 10.812C17.6 11.6874 16.725 12.675 15.625 13.775C14.525 14.875 13.1333 16.1834 11.45 17.7L10 19Z"
        fill={color ?? 'white'}
      />
    </svg>
  );
}
