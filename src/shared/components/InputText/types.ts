import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface InputTextStylesProps {
  width?: string | number;
  widthBox?: string | number;
  inline?: boolean;
  invalid?: boolean;
  disabled?: boolean;
  useIconColor?: boolean;
  error?: string | false;
}
export interface InputTextProps
  extends ComponentPropsWithoutRef<'input'>,
    InputTextStylesProps {
  children?: ReactNode;
  label?: string;
  placeholder?: string;
}
