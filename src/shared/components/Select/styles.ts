import styled, { css } from 'styled-components';
import { Select as MuiSelect, MenuItem as MuiMenuItem } from '@mui/material';

import * as typography from '@shared/styles/typography';
import { SelectStylesProps } from './types';

export const Container = styled.div<SelectStylesProps>`
  ${({ inline, widthBox = '53rem', invalid }) => css`
    max-width: ${inline ? widthBox : '100%'};
    display: flex;
    flex-direction: ${inline ? 'row' : 'column'};
    align-items: ${inline ? 'center' : 'start'};
    justify-content: ${inline ? 'space-between' : 'start'};
    margin-bottom: ${invalid ? '1.6rem' : '0rem'};
  `}
`;

export const Label = styled.label`
  ${typography.m2.label.medium}
  margin-bottom: 0.4rem;
  white-space: nowrap;
`;

export const SelectBox = styled.div<SelectStylesProps>`
  width: ${({ width }) => width || '100%'};
  position: relative;
`;

export const Select = styled(MuiSelect)<SelectStylesProps>`
  ${({ theme, open, invalid }) => css`
    height: 4rem;
    background: ${invalid
      ? theme.color.hsbc.rag.red_tint_error
      : theme.color.hsbc.brand.o03_white};

    &.MuiInputBase-root {
      &::before {
        content: none;
      }

      &::after {
        content: none;
      }

      display: flex;
      justify-content: end;
      position: relative;
      border: 0.1rem solid;
      border-color: ${invalid
        ? theme.color.hsbc.rag.red_error
        : !open
        ? theme.color.hsbc.brand.o07_pewter
        : theme.color.hsbc.data_visualisation.o07_sapphire};

      &:hover {
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
      }

      &:active {
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
      }

      & .MuiSelect-select {
        height: 100%;
        padding-left: 1.2rem;
        background: transparent;
        width: calc(100% - 2.4rem);
        display: flex;
        align-items: center;
        z-index: 20;
      }
    }
  `}
`;

export const MenuItem = styled(MuiMenuItem)`
  ${({ theme }) => css`
    &.MuiMenuItem-root {
      height: 4rem;
      ${typography.m2.label.medium}

      &.Mui-selected {
        border-left: 0.4rem solid ${theme.color.hsbc.brand.o01_hsbc_red};
        background: ${theme.color.hsbc.brand.o03_white} !important;

        &:hover {
          background: ${theme.color.hsbc.brand.o04_light_pearl} !important;
        }
      }

      &:hover {
        transition: all ease 0.3s;
        background: ${theme.color.hsbc.brand.o04_light_pearl};
      }
    }
  `}
`;

export const ErrorMessage = styled.span`
  ${typography.m2.label.medium};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  position: absolute;
  bottom: -2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;
