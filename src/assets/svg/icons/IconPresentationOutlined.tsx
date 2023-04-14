import { Color } from '@shared/utils/types';

export function IconPresentationOutlined({
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
      viewBox="0 0 20 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M2 14H18V6H11V2H2V14ZM2 16C1.45 16 0.979333 15.8043 0.588 15.413C0.196 15.021 0 14.55 0 14V2C0 1.45 0.196 0.979333 0.588 0.588C0.979333 0.196 1.45 0 2 0H18C18.55 0 19.021 0.196 19.413 0.588C19.8043 0.979333 20 1.45 20 2V14C20 14.55 19.8043 15.021 19.413 15.413C19.021 15.8043 18.55 16 18 16H2Z"
        fill={color ?? 'white'}
      />
    </svg>
  );
}
