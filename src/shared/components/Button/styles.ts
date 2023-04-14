import styled, { css } from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Button = styled.button<{
  $variant: 'primary' | 'secondary' | 'tertiary';
  $fullWidth: boolean;
  $minWidth?: string;
}>`
  height: 4.4rem;
  min-width: ${({ $minWidth }) => $minWidth || 'auto'};
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  & > svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  ${typography.m2.label.large}

  padding: 0.9rem 1.8rem 1.1rem 1.8rem;
  &:has(svg) {
    padding: 0.9rem 2rem 1.1rem 1.6rem;
  }

  border-radius: 0;

  transition: all 0.2s ease-in-out;

  ${({ $variant, theme }) =>
    $variant === 'primary'
      ? css`
          color: ${theme.color.cmb.interaction_default.o01};
          background: ${theme.color.hsbc.brand.o01_hsbc_red};

          & > svg {
            & > path {
              fill: ${theme.color.cmb.interaction_default.o01};
            }
          }

          @media (hover: hover) {
            &:hover:not(:disabled) {
              color: ${theme.color.cmb.interaction_default.o01};
              background: ${theme.color.hsbc.interaction_default.o07};
              box-shadow: 0 0.1rem 2px rgba(0, 0, 0, 0.3),
                0 0.1rem 3px 0.1rem rgba(0, 0, 0, 0.15);
            }
          }

          &:active:not(:disabled) {
            color: ${theme.color.cmb.interaction_default.o01};
            background: ${theme.color.hsbc.interaction_default.o07};
            box-shadow: 0 0.1rem 2px rgba(0, 0, 0, 0.3),
              0 0.1rem 3px 0.1rem rgba(0, 0, 0, 0.15);
          }

          &:disabled {
            cursor: not-allowed;
            color: ${theme.color.hsbc.content.on_light_01};
            background: transparent;
            border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
            opacity: 0.5;
            & > svg {
              & > path {
                fill: ${theme.color.hsbc.content.on_light_01};
              }
            }
          }
        `
      : $variant === 'secondary'
      ? css`
          color: ${theme.color.cmb.interaction_default.o01};
          background: ${theme.color.cmb.interaction_default.o05};

          & > svg {
            & > path {
              fill: ${theme.color.hsbc.brand.o03_white};
            }
          }

          @media (hover: hover) {
            &:hover:not(:disabled) {
              color: ${theme.color.cmb.interaction_default.o01};
              background: ${theme.color.cmb.sub_brand.o02_slate};
            }
          }

          &:active:not(:disabled) {
            color: ${theme.color.cmb.interaction_default.o01};
            background: ${theme.color.cmb.interaction_default.o07};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${theme.color.hsbc.content.on_light_01};
            background: transparent;
            border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
            opacity: 0.5;
            & > svg {
              & > path {
                fill: ${theme.color.hsbc.content.on_light_01};
              }
            }
          }
        `
      : $variant === 'tertiary'
      ? css`
          color: ${theme.color.hsbc.content.on_light_01};
          background: transparent;
          border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};

          & > svg {
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
            }
          }

          @media (hover: hover) {
            &:hover:not(:disabled) {
              color: ${theme.color.hsbc.content.on_light_01};
              background: ${theme.color.cmb.interaction_default.o02};
              border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
            }
          }

          &:active:not(:disabled) {
            color: ${theme.color.hsbc.content.on_light_01};
            background: ${theme.color.cmb.interaction_default.o03};
            border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${theme.color.hsbc.content.on_light_01};
            background: ${theme.color.cmb.interaction_default.o01};
            border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
            opacity: 0.5;

            & > svg {
              & > path {
                fill: ${theme.color.hsbc.content.on_light_01};
              }
            }
          }
        `
      : ''}
`;
