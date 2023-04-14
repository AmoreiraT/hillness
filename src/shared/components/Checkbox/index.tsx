import { Checkbox, CheckboxProps } from '@mui/material';
import * as S from './styles';

export function CustomCheckBox(props: CheckboxProps) {
  return (
    <Checkbox
      disableRipple
      color="default"
      checkedIcon={<S.BpCheckedIcon />}
      icon={<S.BpIcon />}
      {...props}
    />
  );
}
