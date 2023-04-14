export function SuccessStatusAndNotifications(
  props: React.SVGProps<SVGSVGElement>
) {
  return (
    <svg
      width="1.2em"
      height="1.2em"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path opacity={0.01} fill="#fff" d="M0 0h18v18H0z" />
      <circle cx={9} cy={9} r={9} fill="#00847F" />
      <path
        d="M7.216 13.553l-3.63-3.629L4.859 8.65l2.357 2.358 5.925-5.925 1.273 1.273-7.198 7.197z"
        fill="#fff"
      />
    </svg>
  );
}
