import { Color } from '@shared/utils/types';
import { CSSProperties } from 'react';
import * as S from './styles';

interface LoaderProps {
  color?: Color;
  stroke?: number;
  size?: number;
  fullSize?: boolean;
  style?: CSSProperties;
}

export function Loader({ color, size, stroke, fullSize, style }: LoaderProps) {
  return !fullSize ? (
    <S.Svg viewBox="0 0 50 50" $size={size} $color={color} style={{ ...style }}>
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth={stroke ?? 5}
      />
    </S.Svg>
  ) : (
    <S.Wrapper style={{ ...style }}>
      <S.Svg viewBox="0 0 50 50" $size={size} $color={color}>
        <circle
          className="path"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          strokeWidth={stroke ?? 5}
        />
      </S.Svg>
    </S.Wrapper>
  );
}
