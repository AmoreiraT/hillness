import * as S from './styles';

interface RightIconProps {
  isOpen: boolean;
}

export function RightIcon({ isOpen }: RightIconProps) {
  return (
    <S.Container>
      {isOpen ? <S.ChevronUpIcon /> : <S.ChevronDownIcon />}
    </S.Container>
  );
}
