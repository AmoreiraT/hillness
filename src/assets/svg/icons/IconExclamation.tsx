import { Color } from '@shared/utils/types';

export function IconExclamation({ color }: { color?: Color }) {
  return (
    <svg width={28} height={28} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M.666 14C.666 6.645 6.647.665 13.999.665s13.334 5.98 13.334 13.333c0 7.352-5.982 13.334-13.334 13.334-4.169 0-8.022-1.898-10.569-5.203a.969.969 0 111.536-1.184 11.324 11.324 0 009.033 4.448c6.283 0 11.395-5.11 11.395-11.395 0-6.282-5.112-11.394-11.395-11.394-6.282 0-11.394 5.112-11.394 11.394 0 .584.044 1.164.13 1.732a.97.97 0 01-.812 1.104.96.96 0 01-1.104-.81 13.469 13.469 0 01-.153-2.026zm13.333-6.062a1 1 0 00-1 1v5.893a1 1 0 002 0V8.939a1 1 0 00-1-1zm.014 10.123H14a.995.995 0 00-.994 1c0 .552.455 1 1.007 1a1 1 0 000-2z"
        fill={color ?? 'white'}
      />
    </svg>
  );
}
