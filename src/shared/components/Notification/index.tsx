import { SuccessStatusAndNotifications } from '@assets/svg/hsbc_icons/successStatusAndNotifications';
import { NotificationProps } from './types';

import * as S from './styles';

export function Notification({ message, marginTop }: NotificationProps) {
  return (
    <S.Container marginTop={marginTop}>
      <SuccessStatusAndNotifications />
      <S.Message>{message}</S.Message>
    </S.Container>
  );
}
