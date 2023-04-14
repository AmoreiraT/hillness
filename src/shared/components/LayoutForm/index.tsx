import { Footer } from '../Footer';
import { LayoutFormProps } from './types';

import * as S from './styles';

export function LayoutForm({
  children,
  calcHeight,
  ...props
}: LayoutFormProps) {
  return (
    <S.Content calcHeight={calcHeight}>
      <S.Form>{children}</S.Form>

      <Footer {...props} />
    </S.Content>
  );
}
