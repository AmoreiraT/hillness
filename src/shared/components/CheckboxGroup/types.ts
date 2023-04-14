import { ChangeEvent } from 'react';
import { RadioProps, CheckboxProps } from '@mui/material';

export interface CheckboxStylesProps {
  open?: boolean;
  width?: string | number;
  widthBox?: string | number;
  inline?: boolean;
  invalid?: string | false;
}

export interface OptionProps {
  id: number | string;
  name: string;
}

export interface CustomCheckboxProps
  extends Omit<CheckboxProps, 'onChange'>,
    CheckboxStylesProps {
  label?: string;
  error?: string | false;
  options: OptionProps[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
