import styled, { css } from 'styled-components';
import { CollapseProps } from '@shared/components/Collapse/index';

interface HandleTransitionProps {
  open: boolean;
  transitioning: boolean;
}

type ConditionalProps =
  | {
      orientation: 'both';
      min?: { width: number; height: number };
      max: { width: number; height: number };
      mobileMin?: { width: number; height: number };
      mobileMax?: { width: number; height: number };
    }
  | {
      orientation: 'vertical' | 'horizontal';
      min?: number;
      max: number;
      mobileMin?: number;
      mobileMax?: number;
    };

const handleTransition = ({
  open,
  transitioning,
  orientation,
  min,
  max,
  mobileMin,
  mobileMax,
}: HandleTransitionProps & ConditionalProps) => {
  if (!transitioning) {
    if (open) {
      switch (orientation) {
        case 'vertical':
          return css`
            height: ${mobileMax ?? max}rem;
            @media (${({ theme }) => theme.media.medium}) {
              height: ${max}rem;
            }
          `;
        case 'horizontal':
          return css`
            width: ${mobileMax ?? max}rem;
            @media (${({ theme }) => theme.media.medium}) {
              width: ${max}rem;
            }
          `;
        case 'both':
          return css`
            height: ${max.height}rem;
            width: ${max.width}rem;
          `;
        default:
          return ``;
      }
    } else {
      switch (orientation) {
        case 'vertical':
          return min
            ? css`
                height: ${mobileMin ?? min}rem;
                @media (${({ theme }) => theme.media.medium}) {
                  height: ${min}rem;
                }
              `
            : css`
                height: 0;
              `;
        case 'horizontal':
          return min
            ? css`
                width: ${mobileMin ?? min}rem;
                @media (${({ theme }) => theme.media.medium}) {
                  width: ${min}rem;
                }
              `
            : css`
                width: 0;
              `;
        case 'both':
          return css`
            height: ${min ? min.height : `0`}rem;
            width: ${min ? min.width : `0`}rem;
          `;
        default:
          return ``;
      }
    }
  } else if (open) {
    switch (orientation) {
      case 'vertical':
        return css`
          height: ${mobileMax ?? max}rem;

          @media (${({ theme }) => theme.media.medium}) {
            height: ${max}rem;
          }
        `;
      case 'horizontal':
        return css`
          width: ${mobileMax ?? max}rem;

          @media (${({ theme }) => theme.media.medium}) {
            width: ${max}rem;
          }
        `;
      case 'both':
        return css`
          height: ${mobileMax ? mobileMax.height : max.height}rem;
          width: ${mobileMax ? mobileMax.width : max.width}rem;

          @media (${({ theme }) => theme.media.medium}) {
            height: ${max.height}rem;
            width: ${max.width}rem;
          }
        `;
      default:
        return ``;
    }
  } else {
    switch (orientation) {
      case 'vertical':
        return css`
          height: ${mobileMin ?? min ?? `0`}rem;

          @media (${({ theme }) => theme.media.medium}) {
            height: ${min ?? `0`}rem;
          }
        `;
      case 'horizontal':
        return css`
          width: ${mobileMin ?? min ?? `0`}rem;

          @media (${({ theme }) => theme.media.medium}) {
            width: ${min ?? `0`}rem;
          }
        `;
      case 'both':
        return css`
          height: ${min ?? `0`}rem;
          width: ${min ?? `0`}rem;
        `;
      default:
        return ``;
    }
  }
};

type BaseStyledCollapseProps = {
  [key in keyof CollapseProps as `$${key}`]: CollapseProps[key];
};

type StyledCollapseProps = BaseStyledCollapseProps & {
  $transitioning: boolean;
  $max: number | { height: number; width: number };
};
export const Collapse = styled.div<StyledCollapseProps>`
  transition: ${({ $orientation }) =>
    $orientation === 'both'
      ? `width 0.3s ease-in-out, height 0.3s ease-in-out`
      : $orientation === 'vertical'
      ? `0.3s height ease-in-out`
      : `0.3s width ease-in-out`};

  ${({
    $open,
    $transitioning,
    $orientation,
    $min,
    $max,
    $mobileMin,
    $mobileMax,
  }) =>
    $orientation === 'both'
      ? handleTransition({
          open: $open,
          transitioning: $transitioning,
          orientation: $orientation,
          min: $min as { width: number; height: number },
          max: $max as { width: number; height: number },

          mobileMin: $mobileMin as { width: number; height: number },
          mobileMax: $mobileMax as { width: number; height: number },
        })
      : handleTransition({
          open: $open,
          transitioning: $transitioning,
          orientation: $orientation,
          min: $min as number,
          max: $max as number,
          mobileMin: $mobileMin as number,
          mobileMax: $mobileMax as number,
        })}
  overflow: hidden;
  max-width: 100vw;
  max-height: 100vh;
`;
