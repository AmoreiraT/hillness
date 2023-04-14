import styled, { css } from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Wrapper = styled.div<{
  $fullWidth?: boolean;
}>`
  display: inline-grid;
  grid-template-columns: repeat(5, 1fr);

  justify-items: stretch;
  align-items: center;

  width: ${({ $fullWidth }) => ($fullWidth ? '100%' : 'auto')};
  gap: 0.4rem;
`;

export const Label = styled.label`
  grid-column: 1 / span all;
  border-radius: 0;
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  ${typography.m2.label.large}
  @media (${({ theme }) => theme.media.medium}) {
    ${typography.m2.label.medium};
  }
`;
export const Input = styled.input<{ $invalid?: boolean }>`
  background: ${({ theme, $invalid }) =>
    $invalid ? theme.color.hsbc.rag.red_tint_error : 'transparent'};
  grid-column: 1 / span all;
  grid-row: 2;

  display: flex;
  border: 0.1rem solid
    ${({ theme, $invalid }) =>
      $invalid
        ? theme.color.hsbc.rag.red_error
        : theme.color.hsbc.brand.o07_pewter};
  border-radius: 0rem;
  color: ${({ theme, $invalid }) =>
    $invalid
      ? theme.color.hsbc.rag.red_error
      : theme.color.hsbc.brand.o07_pewter};

  &::placeholder {
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  }

  padding-block: 0.7rem 0.9rem;
  padding-inline: 1.2rem;
  ${typography.m2.label.large};

  @media (${({ theme }) => theme.media.medium}) {
    padding: 0.8rem 1.2rem;
    ${typography.m2.body[1]};
  }

  &[type='number'] {
    appearance: textfield;

    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }

  &:disabled {
    cursor: not-allowed;
    background: ${({ theme }) => theme.color.hsbc.brand.o04_light_pearl};
    border-color: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
    color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
    opacity: 0.5;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme, $invalid }) =>
      $invalid
        ? theme.color.hsbc.rag.red_error
        : theme.color.hsbc.data_visualisation.o07_sapphire};
    box-shadow: 0 0 1px 1px rgba(21, 197, 206, 0.16);
  }

  @media (hover: hover) {
    &:hover {
      border-color: ${({ theme, $invalid }) =>
        $invalid
          ? theme.color.hsbc.rag.red_error
          : theme.color.hsbc.data_visualisation.o07_sapphire};
    }
  }

  transition: border-color 0.2s ease-in-out;
`;

export const ErrorMessage = styled.p`
  grid-row: 3;
  grid-column: 1 / span all;

  ${typography.m2.label.small};

  @media (${({ theme }) => theme.media.medium}) {
    ${typography.m2.label.small};
  }
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
`;

export const IconWrapper = styled.div<{
  $disabled: boolean;
  $useIconColor: boolean;
}>`
  grid-column: 5 / -1;
  grid-row: 2;
  z-index: 10;
  justify-self: end;

  display: flex;
  align-items: center;
  gap: 0.4rem;

  margin-right: 0.2rem;
  @media (${({ theme }) => theme.media.medium}) {
    margin-right: 0.8rem;
  }

  & > * {
    padding: 0.2rem;
    @media (${({ theme }) => theme.media.medium}) {
      padding: 0.5rem;
    }
  }

  & > button {
    display: flex;

    @media (hover: hover) {
      &:hover {
        & > path {
          fill: ${({ theme }) => theme.color.hsbc.content.on_light_01};
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

    ${({ theme, $disabled, $useIconColor }) =>
      $disabled
        ? css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
              opacity: 0.5;
            }
          `
        : !$useIconColor
        ? css`
            & > path {
              fill: ${theme.color.hsbc.content.on_light_01};
            }
          `
        : ``};
  }
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
