import styled, { css } from 'styled-components';

import * as typography from '@shared/styles/typography';
import { InputTextStylesProps } from './types';

export const Wrapper = styled.div<InputTextStylesProps>`
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
  margin-bottom: 0.4rem;
`;

export const Input = styled.input<InputTextStylesProps>`
  ${({ theme, width, invalid }) => css`
    ${typography.m2.label.medium}
    height: 4rem;
    width: ${width || '100%'};
    background: ${invalid
      ? theme.color.hsbc.rag.red_tint_error
      : 'transparent'};
    grid-column: 1 / span all;
    grid-row: 2;

    display: flex;
    border: 0.1rem solid
      ${invalid
        ? theme.color.hsbc.rag.red_error
        : theme.color.hsbc.brand.o07_pewter};
    border-radius: 0rem;
    color: ${invalid
      ? theme.color.hsbc.rag.red_error
      : theme.color.hsbc.content.on_light_01};

    &::placeholder {
      color: ${theme.color.hsbc.content.on_light_01};
    }

    padding-block: 0.7rem 0.9rem;
    padding-inline: 1.2rem;

    &[type='number'] {
      appearance: textfield;

      &::-webkit-inner-spin-button,
      &::-webkit-outer-spin-button {
        -webkit-appearance: none;
      }
    }

    &:disabled {
      cursor: not-allowed;
      background: ${theme.color.hsbc.brand.o04_light_pearl};
      border-color: ${theme.color.hsbc.brand.o07_pewter};
      color: ${theme.color.hsbc.brand.o01_hsbc_red};
      opacity: 0.5;
    }

    &:focus {
      outline: none;
      border-color: ${invalid
        ? theme.color.hsbc.rag.red_error
        : theme.color.hsbc.data_visualisation.o07_sapphire};
      box-shadow: 0 0 1px 1px rgba(21, 197, 206, 0.16);
    }

    @media (hover: hover) {
      &:hover {
        border-color: ${invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
      }
    }

    transition: border-color 0.2s ease-in-out;
  `}
`;

export const InputBox = styled.div``;

export const ErrorMessage = styled.span`
  ${typography.m2.label.medium};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  position: absolute;
  bottom: -2rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
`;

export const IconWrapper = styled.div<InputTextStylesProps>`
  ${({ theme, disabled, useIconColor }) => css`
    grid-column: 5 / -1;
    grid-row: 2;
    z-index: 10;
    justify-self: end;

    display: flex;
    align-items: center;
    gap: 0.4rem;

    margin-right: 0.2rem;
    @media (${theme.media.medium}) {
      margin-right: 0.8rem;
    }

    & > * {
      padding: 0.2rem;
      @media (${theme.media.medium}) {
        padding: 0.5rem;
      }
    }

    & > button {
      display: flex;

      @media (hover: hover) {
        &:hover {
          & > path {
            fill: ${theme.color.hsbc.content.on_light_01};
            opacity: 0.5;
          }
        }
      }

      transition: background-color 0.2s ease-in-out;
    }

    & svg {
      box-sizing: content-box;
      width: 1.8rem;
      height: 1.8rem;

      ${disabled
        ? css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
              opacity: 0.5;
            }
          `
        : !useIconColor
        ? css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
            }
          `
        : ``};
    }
  `}
`;

export const NumberControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
`;

export const NumberControlButton = styled.button`
  display: flex;
  & > svg {
    width: 1.4rem;
    height: 1.4rem;
    & > path {
      fill: ${({ theme }) => theme.color.hsbc.content.on_light_01};
    }
  }
`;

export const RemainingChars = styled.span`
  ${typography.m2.label.medium}
  color: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
  position: absolute;
  right: -14rem;
`;
