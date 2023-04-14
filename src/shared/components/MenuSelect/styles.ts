import styled, { css } from 'styled-components';
import * as typography from '@shared/styles/typography';
import { Menu } from '@mui/material';

export const Button = styled.button<{
  $variant: 'primary' | 'secondary' | 'tertiary';
  $fullWidth: boolean;
  $hasChildren: boolean;
}>`
  height: min-content;
  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.8rem;

  & > svg {
    width: 1.8rem;
    height: 1.8rem;
  }

  ${typography.m2.label.medium}

  border-radius: 0;

  ${({ $variant, theme, $hasChildren }) =>
    $variant === 'primary'
      ? css`
          color: ${theme.color.hsbc.brand.o07_pewter};

          @media (hover: hover) {
            &:hover:not(:disabled) {
              color: ${theme.color.hsbc.content.on_dark_01};
              padding: ${$hasChildren ? null : `0.5rem 0rem 0.2rem 0rem`};
              border-bottom: ${$hasChildren
                ? null
                : ` 0.3rem solid ${theme.color.hsbc.brand.o01_hsbc_red}`};
            }
          }

          &:active:not(:disabled) {
            color: ${theme.color.hsbc.content.on_dark_01};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${theme.color.hsbc.content.on_light_01};
            background: transparent;
            border: 0.1rem solid ${theme.color.hsbc.content.on_light_01};
            opacity: 0.5;
          }
        `
      : $variant === 'secondary'
      ? css`
          color: ${theme.color.cmb.interaction_default.o01};
          &:has(svg) {
            padding: 0rem;
          }
          & > svg {
            & > path {
              fill: ${theme.color.hsbc.brand.o03_white};
            }
          }

          @media (hover: hover) {
            &:hover:not(:disabled) {
              color: ${theme.color.cmb.interaction_default.o01};
            }
          }

          &:active:not(:disabled) {
            color: ${theme.color.cmb.interaction_default.o01};
          }

          &:disabled {
            cursor: not-allowed;
            color: ${theme.color.hsbc.content.on_light_01};
            background: transparent;
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
          color: ${theme.color.hsbc.content.on_dark_01};
          background: transparent;

          & > svg {
            & > path {
              fill: ${theme.color.hsbc.content.on_dark_01};
            }
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

export const StyledMenu = styled(Menu)(({ theme }) => ({
  '& .MuiPaper-root': {
    marginTop: '2.5rem',
    borderRadius: 0,
    marginLeft: 'auto',
    color: theme.color.hsbc.brand.o07_pewter,
    minWidth: 180,
    backgroundColor: theme.color.cmb.sub_brand.o04_corporate_slate,
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '0 0',
    },
    '& .MuiMenuItem-root': {
      fontSize: theme.typography.m2.label.medium.fontSize,
      '&:active': {
        backgroundColor: theme.color.cmb.sub_brand.o03_dark_slate,
      },
      '&:hover': {
        color: theme.color.hsbc.content.on_dark_01,
        backgroundColor: theme.color.cmb.sub_brand.o03_dark_slate,
        borderLeft: `0.3rem solid ${theme.color.hsbc.brand.o01_hsbc_red}`,
        paddingLeft: '1.4rem',
      },
    },
  },
}));
