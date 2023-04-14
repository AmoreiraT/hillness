import styled, { css } from 'styled-components';
import { TextField } from '@mui/material';

import * as typography from '@shared/styles/typography';
import { TextFieldStylesProps } from './types';

export const Wrapper = styled.div<TextFieldStylesProps>`
  ${({ error, inline, widthBox = '53rem' }) => css`
    max-width: ${inline ? widthBox : '100%'};
    display: flex;
    flex-direction: ${inline ? 'row' : 'column'};
    align-items: ${inline ? 'center' : 'start'};
    justify-content: ${inline ? 'space-between' : 'start'};
    margin-bottom: ${error ? '1.6rem' : '0rem'};
    position: relative;
  `}
`;

export const Label = styled.label`
  ${typography.m2.label.medium}
  grid-column: 1 / span all;
  border-radius: 0;
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  margin-bottom: 0.4rem;
  white-space: nowrap;
`;

export const TextFieldBox = styled.div``;

export const InputField = styled(TextField)<TextFieldStylesProps>`
  border-radius: 0;
    background: ${({ theme, invalid }) =>
      invalid
        ? theme.color.hsbc.rag.red_tint_error
        : theme.color.hsbc.brand.o03_white};
  
  & .MuiInputBase-input {
    ${typography.m2.label.medium}
    position: relative;
    margin-top: 0.8rem;
    margin-bottom: 1.2rem;
    padding: 0.2rem 0rem 0rem 0rem !important;

    &[type='number'] {
      appearance: textfield;
      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    ${({ theme, iconPrefix, ...props }) =>
      props.InputProps?.startAdornment
        ? css`
            border-left: 1px solid ${theme.color.hsbc.brand.o07_pewter} !important;
            padding-left: 1.2rem !important;
            margin-left: 1.2rem !important;
          `
        : css`
            margin-left: 1.2rem !important;
          `};

    ${({ theme, iconPrefix, ...props }) =>
      props.InputProps?.endAdornment
        ? css`
            border-right: 1px solid ${theme.color.cmb.interaction_default.o04} !important;
            padding-right: 1.2rem !important;
            margin-right: 1.2rem !important;
          `
        : css`
            padding-right: 1.2rem !important;
            margin-right: 1.2rem !important;
          `};
            }
  }

  & button {
    display: flex;
  }

  & svg {
    font-size: 1.8rem !important;

    ${({ theme, disabled, invalid }) =>
      disabled
        ? css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
              opacity: 0.5;
            }
          `
        : invalid
        ? css`
            & > path {
              /* fill: ${theme.color.hsbc.rag.red_error}; */
              /* opacity: 0.5; */
            }
          `
        : css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
            }
          `};
  }

  & label.Mui-focused {
    ${typography.m2.label.large};
    border-radius: 0;
    color: ${({ theme }) => theme.color.hsbc.data_visualisation.o07_sapphire};
  }

  & .MuiInput-underline:after {
    ${typography.m2.label.large};
    border-radius: 0;
    border-bottom-color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  }

  & .MuiOutlinedInput-root {
    ${({ theme, invalid }) => css`
      & fieldset {
        ${typography.m2.label.large};
        border-radius: 0;
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.content.on_light_01};
      }

      &:hover fieldset {
        ${typography.m2.label.large};
        border-radius: 0;
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
        color: ${theme.color.hsbc.data_visualisation.o07_sapphire};
      }

      &.Mui-focused fieldset {
        ${typography.m2.label.large};
        border-radius: 0;
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
      }
    `}
  }
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
