import styled, { css } from 'styled-components';
import {
  RadioGroup as MuiCheckbox,
  FormControlLabel as MuiFormControlLabel,
} from '@mui/material';

import * as typography from '@shared/styles/typography';
import { CheckboxStylesProps } from './types';
import { CheckedIcon } from '../../../assets/svg/hsbc_icons/checkedIcon';

export const Container = styled.div<CheckboxStylesProps>`
  ${({ inline, widthBox = '53rem', invalid }) => css`
    height: ${inline === true ? '4rem' : 'auto'};
    max-width: ${inline ? widthBox : '100%'};
    display: flex;
    flex-direction: ${inline === true ? 'row' : 'column'};
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

export const CheckboxBox = styled.div<CheckboxStylesProps>`
  width: ${({ width }) => width || '100%'};
  position: relative;
`;

export const CheckboxGroup = styled(MuiCheckbox)`
  display: flex;
  /* gap: 0.4rem; */
`;

export const FormControlLabel = styled(MuiFormControlLabel)`
  width: auto;
  margin: 0rem !important;
  margin-right: 1.6rem !important;
  & .MuiButtonBase-root {
    padding: 0rem;
  }

  & .MuiTypography-root {
    ${typography.m2.label.small}
    margin-left: 1.2rem !important;
    padding: 0.6rem 0rem;
  }
`;

export const BpIcon = styled.div<CheckboxStylesProps>`
  ${({ theme, invalid }) => css`
    width: 2rem;
    height: 2rem;
    background: ${invalid
      ? theme.color.hsbc.rag.red_tint_error
      : theme.color.hsbc.brand.o03_white};
    border: 1px solid;
    border-color: ${invalid
      ? theme.color.hsbc.rag.red_error
      : theme.color.hsbc.brand.o07_pewter};
    display: flex;
    align-items: center;
    justify-content: center;

    input:hover ~ & {
      border-color: ${invalid
        ? theme.color.hsbc.rag.red_error
        : theme.color.hsbc.data_visualisation.o07_sapphire} !important;
    }
  `}
`;

export const BpCheckedIcon = styled(CheckedIcon)`
  ${({ theme }, invalid?: string | false | undefined) => css`
    border: 1px solid;
    width: 2rem;
    height: 2rem;
    border-color: ${invalid
      ? theme.color.hsbc.rag.red_error
      : theme.color.hsbc.brand.o07_pewter};
    padding: 0.3rem;
    &:before {
      width: 1.2rem;
      height: 1.2rem;
      content: '';
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
