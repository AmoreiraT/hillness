import { useTheme } from 'styled-components';

// resources
import profile from '@assets/png/default-profile.png';

import * as S from './styles';

export interface UserModalProps {
  setLogoutModalOpen: (value: boolean) => void;
  isUserModalOpen: boolean;
  setUserModalOpen: (value: boolean) => void;
}

export function UserModal({
  setLogoutModalOpen,
  isUserModalOpen,
  setUserModalOpen,
}: UserModalProps) {
  const theme = useTheme();

  return (
    <S.CollapseWrapper orientation="horizontal" open={isUserModalOpen}>
      <S.UserModalWrapper>
        <S.Heading>
          <S.BtnCloseUserModal onClick={() => setUserModalOpen(false)}>
            <S.IconBtnCloseUserModal
              color={theme.color.hsbc.brand.o01_hsbc_red}
            />
          </S.BtnCloseUserModal>

          <h4>Perfil do Usuário</h4>
        </S.Heading>
        <S.UserModalInner>
          <S.BtnEditAvatar>
            <S.Avatar src={profile} />
            <S.AvatarOverlay>
              <S.IconBtnEditAvatar />
            </S.AvatarOverlay>
          </S.BtnEditAvatar>
          <S.BtnFull>Alterar foto de perfil</S.BtnFull>
          <S.BtnFull>Alterar informações do cadastro</S.BtnFull>
          <S.BtnLogout onClick={() => setLogoutModalOpen(true)}>
            <S.IconBtnLogout />
            Sair da conta
          </S.BtnLogout>
        </S.UserModalInner>
      </S.UserModalWrapper>
    </S.CollapseWrapper>
  );
}
