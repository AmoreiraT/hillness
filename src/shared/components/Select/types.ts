import { SelectProps } from '@mui/material';

export interface SelectStylesProps {
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

export interface SelectComponentProps
  extends Omit<SelectProps, 'error'>,
    SelectStylesProps {
  label?: string;
  width?: string;
  options: OptionProps[];
  error?: string | false;
}
