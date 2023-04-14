import { useState } from 'react';
import { useRouteError } from 'react-router-dom';
// assets
// import errorImage from '@assets/png/error-404-img.png';
// import logo from '@assets/png/hsbc/logo_hsbc.png';
// core
import { ErrorType } from '@core/error';
// styles
import * as S from './styles';

export function ErrorBoundary({
  error,
  logoutFn,
}: {
  error?: ErrorType;
  logoutFn?: () => void;
}) {
  const [isErrorLogVisible, setIsErrorLogVisible] = useState(false);

  const errorLog = useRouteError() as { message: string; stack: string };

  const message =
    (error && 'message' in error && error.message) ??
    errorLog?.message ??
    'Erro desconhecido';

  return (
    <S.Wrapper>
      {/* <S.Image src={errorImage} /> */}
      <S.InnerWrapper>
        {/* <S.Logo src={logo} /> */}
        <S.Title>Parece que ocorreu um problema por aqui</S.Title>
        <S.Subtitle>
          Estamos trabalhando para resolver isso agora mesmo
        </S.Subtitle>
        <S.Text>
          Tente reiniciar a sua internet. Caso isso não funcione, entre em
          contato com o suporte e informe o erro abaixo.
        </S.Text>
        {error && logoutFn ? (
          <>
            <S.LogWrapper>
              <p>{message}</p>
            </S.LogWrapper>
            <S.BtnRestart onClick={() => logoutFn()}>
              Voltar para o início
            </S.BtnRestart>
          </>
        ) : (
          <>
            <S.BtnToggleErrorLog
              $isErrorLogVisible={isErrorLogVisible}
              onClick={() => setIsErrorLogVisible(!isErrorLogVisible)}
            >
              Ver mais detalhes
            </S.BtnToggleErrorLog>
            {isErrorLogVisible && (
              <S.LogWrapper>
                <p>{message}</p>
                <p>{errorLog.stack}</p>
              </S.LogWrapper>
            )}
          </>
        )}
      </S.InnerWrapper>
    </S.Wrapper>
  );
}
