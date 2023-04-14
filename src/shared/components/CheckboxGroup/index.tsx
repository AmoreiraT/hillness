import { Checkbox } from '@mui/material';

import { StatusAndNotifications } from '@assets/svg/hsbc_icons/statusAndNotifications';
import { CustomCheckboxProps } from './types';

import * as S from './styles';

export function CheckboxGroup({
  label,
  width,
  inline,
  required,
  options,
  value,
  error,
  onChange,
  ...props
}: CustomCheckboxProps) {
  return (
    <S.Container inline={inline} invalid={error}>
      {label && (
        <S.Label id={`select-${label}`}>{`${label}${
          required ? '*' : ''
        }`}</S.Label>
      )}

      <S.CheckboxBox width={width}>
        <S.CheckboxGroup row={inline} value={value}>
          {options.map((option) => (
            <S.FormControlLabel
              key={option.id}
              label={option.name}
              value={option.id}
              control={
                <Checkbox
                  name={option.name}
                  disableRipple
                  color="default"
                  checkedIcon={<S.BpCheckedIcon />}
                  icon={<S.BpIcon invalid={error} />}
                  onChange={(event) => {
                    onChange(event);
                    // console.log({ name: event.target.name });
                  }}
                  {...props}
                />
              }
            />
          ))}
        </S.CheckboxGroup>

        {error && (
          <S.ErrorMessage>
            <StatusAndNotifications />
            {error}
          </S.ErrorMessage>
        )}
      </S.CheckboxBox>
    </S.Container>
  );
}
