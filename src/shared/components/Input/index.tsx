import { ComponentPropsWithoutRef, ReactNode, forwardRef } from 'react';
import * as S from './styles';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';

export interface InputProps extends ComponentPropsWithoutRef<'input'> {
  children?: ReactNode;
  label?: string;
  placeholder?: string;
  fullWidth?: boolean;
  error?: string;
  useIconColor?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { children, label, placeholder, fullWidth, useIconColor, error, ...rest },
    ref
  ) => {
    return (
      <S.Wrapper
        ref={ref}
        className="input-wrapper"
        aria-label="none"
        $fullWidth={fullWidth}
      >
        {label && (
          <S.Label
            htmlFor={rest.id ?? rest.name}
            className="input-component-child"
          >
            {label}
          </S.Label>
        )}
        <S.IconWrapper
          $disabled={!!rest.disabled}
          $useIconColor={!!useIconColor}
        >
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
        <S.Input
          {...rest}
          $invalid={!!error}
          id={rest.id ?? rest.name}
          className="input-component-child"
          placeholder={placeholder}
          ref={ref}
        />
        {error && (
          <S.ErrorMessage className="input-component-child">
            {error}
          </S.ErrorMessage>
        )}
      </S.Wrapper>
    );
  }
);

Input.displayName = 'Input';
