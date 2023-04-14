// components
import { Button } from '@shared/components/Button';
import { Modal } from '../Modal';
// styles
import * as S from './styles';

export interface LogoutModalProps {
  setLogoutModalOpen: (value: boolean) => void;
  logoutFn: () => void;
}
export function LogoutModal({
  setLogoutModalOpen,
  logoutFn,
}: LogoutModalProps) {
  return (
    <Modal setOpenFn={setLogoutModalOpen}>
      <S.Content>
        <S.Message>Deseja fazer o logout?</S.Message>
        <S.ButtonContainer>
          <Button
            type="button"
            onClick={() => setLogoutModalOpen(false)}
            variant="secondary"
          >
            Fechar
          </Button>

          <Button type="button" onClick={() => logoutFn()}>
            Confirma
          </Button>
        </S.ButtonContainer>
      </S.Content>
    </Modal>
  );
}
