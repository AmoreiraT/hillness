import { forwardRef } from 'react';

import { StatusAndNotifications } from '@assets/svg/hsbc_icons/statusAndNotifications';
import { TextFieldProp } from './types';

import * as S from './styles';

export const TextFieldWLabel = forwardRef<HTMLInputElement, TextFieldProp>(
  (
    {
      name,
      iconPrefix,
      label,
      fullWidth,
      value,
      placeholder,
      error,
      actionSufix,
      disabled,
      helperText,
      required,
      inline,
      widthBox,
      onChange,
      ...props
    },
    ref
  ) => {
    return (
      <S.Wrapper
        className="input-wrapper"
        aria-label="none"
        $fullWidth={fullWidth}
        widthBox={widthBox}
        inline={inline}
        error={error}
        ref={ref}
      >
        {label && <S.Label>{`${label}${required ? '*' : ''}`}</S.Label>}

        <S.TextFieldBox>
          <S.InputField
            name={name}
            fullWidth={fullWidth}
            invalid={error}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            helperText={helperText}
            InputLabelProps={{ shrink: true }}
            onChange={onChange}
            InputProps={{
              startAdornment: iconPrefix,
              endAdornment: actionSufix,
            }}
            sx={{ ...props }}
          />

          {error && (
            <S.ErrorMessage>
              <StatusAndNotifications />
              {error}
            </S.ErrorMessage>
          )}
        </S.TextFieldBox>
      </S.Wrapper>
    );
  }
);
TextFieldWLabel.displayName = 'TextFieldWLabel';
