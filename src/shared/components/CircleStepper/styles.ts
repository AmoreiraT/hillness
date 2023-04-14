import styled, { css } from 'styled-components';
import {
  Stepper as MuiStepper,
  StepButton as MuiStepButton,
  StepConnector,
  stepConnectorClasses,
} from '@mui/material';

import * as typography from '@shared/styles/typography';

interface StepButtonProps {
  completed: number;
}

export const Stepper = styled(MuiStepper)`
  & .MuiStepConnector-line {
    border-color: ${({ theme }) => theme.color.cmb.interaction_default.o04};
  }
`;

export const StepButton = styled(MuiStepButton)<StepButtonProps>`
  ${({ theme, completed }) => css`
    & .MuiStepLabel-iconContainer {
      & svg {
        font-size: 2.4rem;
        color: ${!completed
          ? theme.color.cmb.interaction_defined.o03
          : theme.color.hsbc.rag.green_success};

        & .MuiStepIcon-text {
          ${typography.m2.label.medium}
          fill: ${!completed
            ? theme.color.hsbc.content.on_light_01
            : theme.color.hsbc.content.on_dark_01};
        }
      }
    }

    & .MuiStepLabel-labelContainer {
      > span {
        ${typography.m2.body[2]}
      }
    }
  `}
`;

export const QontoConnector = styled(StepConnector)(({ theme }) => ({
  [`& .${stepConnectorClasses.line}`]: {
    borderTopWidth: 2,
    borderColor: theme.color.cmb.interaction_default.o04,
  },
  [`&.${stepConnectorClasses.active}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.color.hsbc.rag.green_success,
    },
  },
  [`&.${stepConnectorClasses.completed}`]: {
    [`& .${stepConnectorClasses.line}`]: {
      borderColor: theme.color.hsbc.rag.green_success,
    },
  },
}));
