import { Radio, RadioProps } from '@mui/material';
import * as S from './styles';

export function BpRadio(props: RadioProps) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<S.BpCheckedIcon />}
      icon={<S.BpIcon />}
      {...props}
    />
  );
}
