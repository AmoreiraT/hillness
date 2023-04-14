import styled, { css } from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Container = styled.div`
  display: grid;
  grid-auto-columns: 1fr;
  width: 100%;
`;

export const Title = styled.span<{
  $state: 'visualized' | 'selected' | 'next' | '';
}>`
  ${typography.m2.body[1]};

  ${({ $state, theme }) =>
    $state === 'visualized'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'selected'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'next'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : ''}
`;

export const SubTitle = styled.span<{
  $state: 'visualized' | 'selected' | 'next' | '';
}>`
  ${typography.m2.body[2]};
  white-space: nowrap;

  ${({ $state, theme }) =>
    $state === 'visualized'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'selected'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'next'
      ? css`
          color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : ''}
`;

export const Step = styled.div<{
  $state: 'visualized' | 'selected' | 'next' | '';
  $index: number;
  $max: number;
}>`
  margin-left: ${({ $index }) => ($index === 0 ? 0 : `calc(-9% + 1px)`)};

  display: flex;
  flex-direction: column;
  justify-content: center;
  grid-row: 1 / span all;
  grid-column: ${({ $index }) => $index + 1} / span 1;
  height: 5.6rem;
  position: relative;

  padding-block: 1rem;
  padding-inline: 4.8rem 2.4rem;

  box-shadow: 0 1px 2px rgba(55, 65, 81, 0.08);
  cursor: pointer;

  ${({ $index, $max }) =>
    $index === 0
      ? css`
          clip-path: polygon(0% 0%, 90% 0%, 100% 50%, 90% 100%, 0% 100%);
          border-top-left-radius: 0.5rem;
          border-bottom-left-radius: 0.5rem;
        `
      : $index !== $max - 1
      ? css`
          clip-path: polygon(0 0, 90% 0, 100% 50%, 90% 100%, 0 100%, 10% 50%);
        `
      : css`
          clip-path: polygon(0 0, 100% 0, 100% 50%, 100% 100%, 0 100%, 10% 50%);
          border-top-right-radius: 0.5rem;
          border-bottom-right-radius: 0.5rem;
        `}

  &::before {
    content: '';
    display: flex;
    position: absolute;
    top: 2px;
    left: 2px;
    width: calc(100% - 4px);
    height: calc(100% - 4px);
    z-index: -1;

    ${({ $index, $max }) =>
      $index === 0
        ? css`
            clip-path: polygon(0% 0%, 90% 0%, 99.5% 50%, 90% 100%, 0% 100%);
            border-top-left-radius: 0.5rem;
            border-bottom-left-radius: 0.5rem;
          `
        : $index !== $max - 1
        ? css`
            clip-path: polygon(
              1% 0,
              90% 0%,
              99.5% 50%,
              90% 100%,
              1% 100%,
              10.5% 50%
            );
          `
        : css`
            clip-path: polygon(
              1% 0,
              100% 0,
              100% 50%,
              100% 100%,
              1% 100%,
              10.5% 50%
            );
            border-top-right-radius: 0.5rem;
            border-bottom-right-radius: 0.5rem;
          `}

    // bg color
    ${({ $state, theme }) =>
      $state === 'visualized'
        ? css`
            background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
          `
        : $state === 'selected'
        ? css`
            background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
          `
        : $state === 'next'
        ? css`
            background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
          `
        : ''}
  }

  // border
  ${({ $state, theme }) =>
    $state === 'visualized'
      ? css`
          background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'selected'
      ? css`
          background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : $state === 'next'
      ? css`
          background-color: ${theme.color.hsbc.brand.o01_hsbc_red};
        `
      : ''}
`;
