import logo from '@assets/png/logo-ju.png';
import * as S from './styles';

export function LoadingScreen() {
  return (
    <S.Container>
      <S.Logo src={logo} />
    </S.Container>
  );
}
