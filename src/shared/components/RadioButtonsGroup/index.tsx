import { Radio } from '@mui/material';

import { StatusAndNotifications } from '@assets/svg/hsbc_icons/statusAndNotifications';
import { RadioButtonsProps } from './types';

import * as S from './styles';

export function RadioButtonsGroup({
  label,
  width,
  inline,
  required,
  options,
  value,
  error,
  onChange,
  ...props
}: RadioButtonsProps) {
  return (
    <S.Container inline={inline} invalid={error}>
      {label && (
        <S.Label id={`select-${label}`}>{`${label}${
          required ? '*' : ''
        }`}</S.Label>
      )}

      <S.RadioGroupBox width={width}>
        <S.RadioGroup row={inline} value={value} onChange={onChange}>
          {options.map((option) => (
            <S.FormControlLabel
              key={option.id}
              label={option.name}
              value={option.id}
              control={
                <Radio
                  disableRipple
                  color="default"
                  checkedIcon={<S.BpCheckedIcon />}
                  icon={<S.BpIcon invalid={error} />}
                  {...props}
                />
              }
            />
          ))}
        </S.RadioGroup>

        {error && (
          <S.ErrorMessage>
            <StatusAndNotifications />
            {error}
          </S.ErrorMessage>
        )}
      </S.RadioGroupBox>
    </S.Container>
  );
}
