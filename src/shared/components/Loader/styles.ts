import styled from 'styled-components';
import { Color } from '@shared/utils/types';

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  height: 100%;
  width: 100%;
`;
export const Svg = styled.svg<{ $size?: number; $color?: Color }>`
  animation: rotate 2s linear infinite;
  z-index: 2;

  width: ${({ $size }) => $size ?? 5}rem;
  height: ${({ $size }) => $size ?? 5}rem;

  & > circle {
    stroke: ${({ theme, $color }) =>
      $color ?? theme.color.hsbc.brand.o01_hsbc_red};
    stroke-linecap: round;
    animation: dash 1.5s ease-in-out infinite;
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes dash {
    0% {
      stroke-dasharray: 1, 150;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 90, 150;
      stroke-dashoffset: -124;
    }
  }
`;
