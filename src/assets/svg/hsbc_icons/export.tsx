import * as React from 'react';
import { SVGProps } from 'react';

type Props = SVGProps<SVGSVGElement>;

function Export(props: Props) {
  return (
    <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" {...props}>
      <rect opacity={0.01} width={18} height={18} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.8 15.8H2.2V2.2H8V1H1V17H17V11H15.8V15.8ZM7.40039 13H8.60039V8.5C8.60039 7.177 9.67739 6.1 11.0004 6.1H15.7024L11.8024 10H13.4984L17.9994 5.5L13.4984 1H11.8014L15.7014 4.9H11.0004C9.01539 4.9 7.40039 6.514 7.40039 8.5V13Z"
      />
      <mask
        style={{
          maskType: 'luminance',
        }}
        maskUnits="userSpaceOnUse"
        x={1}
        y={1}
        width={17}
        height={16}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.8 15.8H2.2V2.2H8V1H1V17H17V11H15.8V15.8ZM7.40039 13H8.60039V8.5C8.60039 7.177 9.67739 6.1 11.0004 6.1H15.7024L11.8024 10H13.4984L17.9994 5.5L13.4984 1H11.8014L15.7014 4.9H11.0004C9.01539 4.9 7.40039 6.514 7.40039 8.5V13Z"
        />
      </mask>
      <g mask="url(#mask0_1_2083)" />
    </svg>
  );
}

export { Export };
