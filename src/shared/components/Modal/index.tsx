import { ReactNode } from 'react';

import * as S from './styles';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';

export function Modal({
  children,
  setOpenFn,
}: {
  children: ReactNode;
  setOpenFn: (value: boolean) => void;
}) {
  return (
    <S.Wrapper>
      <S.ModalWrapper>
        <S.Bar>
          <ChevronDown />
          <S.BtnClose onClick={() => setOpenFn(false)}>
            <ChevronDown />
          </S.BtnClose>
        </S.Bar>
        {children}
      </S.ModalWrapper>
    </S.Wrapper>
  );
}
