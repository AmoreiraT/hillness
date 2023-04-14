import styled, { DefaultTheme } from 'styled-components';
import { Color } from '@shared/utils/types';
import * as typography from '@shared/styles/typography';

type ColorMapType = {
  background: Color;
  color: Color;
};

const colorMap = (
  theme: DefaultTheme,
  severity: 'error' | 'warning' | 'info'
): ColorMapType => {
  switch (severity) {
    case 'error':
      return {
        background: theme.color.hsbc.brand.o01_hsbc_red,
        color: theme.color.hsbc.brand.o03_white,
      };
    case 'warning':
      return {
        background: theme.color.hsbc.brand.o01_hsbc_red,
        color: theme.color.hsbc.brand.o03_white,
      };
    case 'info':
      return {
        background: theme.color.hsbc.brand.o01_hsbc_red,
        color: theme.color.hsbc.brand.o03_white,
      };
    default: {
      return {
        background: theme.color.hsbc.brand.o01_hsbc_red,
        color: theme.color.hsbc.brand.o03_white,
      };
    }
  }
};

export const ErrorContainer = styled.div<{
  $severity: 'error' | 'warning' | 'info';
}>`
  display: flex;

  align-items: center;

  width: 100%;

  border-radius: 1.2rem;
  gap: 1rem;
  padding: 1.6rem;

  max-width: 35rem;
  @media (${({ theme }) => theme.media.medium}) {
    gap: 1.6rem;
    padding: 2.4rem;
  }

  background-color: ${({ theme, $severity }) =>
    colorMap(theme, $severity).background};

  & > svg {
    flex-shrink: 0;
    width: 2rem;
    height: 2rem;
    @media (${({ theme }) => theme.media.medium}) {
      width: 3rem;
      height: 3rem;
    }
    & > path {
      fill: ${({ theme, $severity }) => colorMap(theme, $severity).color};
    }
  }
`;

export const TextContainer = styled.div<{
  $severity: 'error' | 'warning' | 'info';
}>`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 0.5rem;
  & > p {
    color: ${({ theme, $severity }) => colorMap(theme, $severity).color};
    ${typography.m2.body[2]};
    @media ${({ theme }) => theme.media.medium} {
      ${typography.m2.body[1]}
    }
  }
`;
