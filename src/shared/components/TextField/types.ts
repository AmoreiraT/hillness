import { ComponentPropsWithoutRef, ReactNode } from 'react';

export interface TextFieldStylesProps {
  disabled?: boolean;
  iconPrefix?: React.ReactNode;
  actionSufix?: React.ReactNode;
  invalid?: string | false;
  $fullWidth?: boolean;
  widthBox?: string | number;
  inline?: boolean;
  error?: string | false;
}

export interface TextFieldProp
  extends ComponentPropsWithoutRef<'input'>,
    TextFieldStylesProps {
  iconPrefix?: ReactNode;
  actionSufix?: ReactNode;
  fullWidth?: boolean;
  disabled?: boolean;
  label?: string;
  value?: string;
  helperText?: string;
  placeholder?: string;
}
