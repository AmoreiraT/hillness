import * as S from './styles';
import { PageTitleProps } from './types';

export function PageTitle({ title, children }: PageTitleProps) {
  return (
    <S.Wrapper id={`page-title-${title}`} className="page-title">
      {children}
    </S.Wrapper>
  );
}
