import { ChangeEvent } from 'react';
import { RadioProps } from '@mui/material';

export interface RadioButtonsStylesProps {
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

export interface RadioButtonsProps
  extends Omit<RadioProps, 'onChange'>,
    RadioButtonsStylesProps {
  label?: string;
  error?: string | false;
  options: OptionProps[];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}
