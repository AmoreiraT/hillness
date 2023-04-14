// styles
import * as S from './styles';

export function TitleElementCardHolder() {
  const userName = 'Mateus Coutinho';
  const value = 200;
  const currencySynbol = 'R$';

  const initialsName = (fullName: string) => {
    const splited: string[] = fullName.split(' ');
    const name = `${splited[0].charAt(0)}${splited[1].charAt(0)}`;
    return name;
  };

  return (
    <S.Wrapper>
      <S.CircleAvatar>{initialsName(userName)}</S.CircleAvatar>
      <S.Container>
        <S.Name>{userName}</S.Name>
        <S.Value>
          {currencySynbol}
          {` ${value}`}
        </S.Value>
      </S.Container>
    </S.Wrapper>
  );
}
