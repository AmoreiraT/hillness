import { ErrorType } from '@core/error';

import * as S from './styles';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';

interface Props {
  error: ErrorType | undefined;
  severity?: 'info' | 'warning' | 'error';
}

function Icon({
  severity,
  size,
}: {
  severity: 'info' | 'warning' | 'error';
  size: number;
}) {
  switch (severity) {
    case 'info':
      return <ChevronDown />;
    case 'warning':
      return <ChevronDown />;
    case 'error':
      return <ChevronDown />;
    default:
      return <ChevronDown />;
  }
}
export function ErrorComponent({ error, severity }: Props) {
  // api error
  if (error && 'message' in error) {
    return (
      <S.ErrorContainer $severity={severity ?? 'error'}>
        <Icon severity={severity ?? 'error'} size={3} />
        <S.TextContainer $severity={severity ?? 'error'}>
          <p>{error.message}</p>
        </S.TextContainer>
      </S.ErrorContainer>
    );
  }
  // status code error
  if (error && 'status' in error) {
    return (
      <S.ErrorContainer $severity={severity ?? 'error'}>
        <Icon severity={severity ?? 'error'} size={3} />
        <S.TextContainer $severity={severity ?? 'error'}>
          <p>Erro.</p>
          <p>{error.status}</p>
        </S.TextContainer>
      </S.ErrorContainer>
    );
  }
  // unknown error
  return (
    <S.ErrorContainer $severity={severity ?? 'error'}>
      <Icon severity={severity ?? 'error'} size={3} />
      <S.TextContainer $severity={severity ?? 'error'}>
        <p>Erro desconhecido.</p>
        <p>Contate o suporte.</p>
      </S.TextContainer>
    </S.ErrorContainer>
  );
}
