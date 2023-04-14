import { forwardRef, useEffect, useState } from 'react';

import { ChevronDown } from '@assets/svg/hsbc_icons/chevronDown';
import { StatusAndNotifications } from '@assets/svg/hsbc_icons/statusAndNotifications';
import { InputTextProps } from './types';

import * as S from './styles';

export const InputText = forwardRef<HTMLInputElement, InputTextProps>(
  (
    {
      children,
      label,
      placeholder,
      useIconColor,
      error,
      required,
      inline,
      widthBox,
      maxLength,
      onChange,
      ...rest
    },
    ref
  ) => {
    const [remainingChars, setRemainingChars] = useState('');

    const handleInputChange = (value: string) => {
      const inputValue = value;
      if (maxLength && inputValue.length <= maxLength) {
        setRemainingChars(value);
      }
    };

    useEffect(() => {
      setRemainingChars(rest.value as string);
    }, [rest.value]);

    return (
      <S.Wrapper
        ref={ref}
        aria-label="none"
        inline={inline}
        widthBox={widthBox}
        error={error}
      >
        {label && (
          <S.Label htmlFor={rest.id ?? rest.name}>{`${label}${
            required ? '*' : ''
          }`}</S.Label>
        )}

        <S.IconWrapper disabled={!!rest.disabled} useIconColor={!!useIconColor}>
          {children}
          {rest.type === 'number' && (
            <S.NumberControlsWrapper>
              <S.NumberControlButton type="button" onClick={() => {}}>
                <ChevronDown direction="up" />
              </S.NumberControlButton>
              <S.NumberControlButton type="button">
                <ChevronDown direction="down" />
              </S.NumberControlButton>
            </S.NumberControlsWrapper>
          )}
        </S.IconWrapper>

        <S.InputBox>
          <S.Input
            ref={ref}
            invalid={!!error}
            id={rest.id ?? rest.name}
            placeholder={placeholder}
            maxLength={maxLength && maxLength}
            onChange={(event) => {
              handleInputChange(event.target.value);
              if (onChange) onChange(event);
            }}
            {...rest}
          />

          {error && (
            <S.ErrorMessage>
              <StatusAndNotifications />
              {error}
            </S.ErrorMessage>
          )}
        </S.InputBox>

        {!!maxLength && (
          <S.RemainingChars>{`${
            maxLength - remainingChars.length
          } remaining chars`}</S.RemainingChars>
        )}
      </S.Wrapper>
    );
  }
);

InputText.displayName = 'Input';
