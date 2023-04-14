import { Step, Stepper } from '@mui/material';
import { CircleStepperProps } from './types';

import * as S from './styles';

export function CircleStepper({ stepsList, stepNumber }: CircleStepperProps) {
  return (
    <Stepper
      nonLinear
      activeStep={stepNumber - 1}
      connector={<S.QontoConnector />}
    >
      {stepsList.map((label, index) => (
        <Step key={label} completed={index < stepNumber - 1}>
          <S.StepButton completed={Number(index <= stepNumber - 1)}>
            {label}
          </S.StepButton>
        </Step>
      ))}
    </Stepper>
  );
}
