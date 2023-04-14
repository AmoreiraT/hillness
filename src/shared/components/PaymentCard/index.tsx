import { useState } from 'react';

import { Download } from '@assets/svg/hsbc_icons/download';
import { NewModal } from '@assets/svg/hsbc_icons/newModal';
import { Button } from '../Button';
import { PaymentCardProps } from './types';

import * as S from './styles';

export function PaymentCard({ invoiceType }: PaymentCardProps) {
  const [isGenerated, setIsGenerated] = useState(false);

  return (
    <S.Container>
      <S.Title isGenerated={isGenerated}>Payment</S.Title>
      <S.Subtitle isGenerated={isGenerated}>Closed day February 4th</S.Subtitle>

      <S.GeneratedDataBox isGenerated={isGenerated}>
        {isGenerated && <S.TotalToPayText>Total to pay</S.TotalToPayText>}

        <S.ValueText>R$ 1.000.000,00</S.ValueText>

        {isGenerated && (
          <S.GeneratedData>
            <S.GeneratedDataText>
              XXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXX
            </S.GeneratedDataText>
            <Button type="button" variant="secondary">
              <NewModal />
              Copy
            </Button>
          </S.GeneratedData>
        )}
      </S.GeneratedDataBox>

      {invoiceType === 'automatic-debit-payment' ? (
        <>
          <S.Subtitle>Automatic debit on</S.Subtitle>
          <S.SubtitleTwo>February 12th</S.SubtitleTwo>
        </>
      ) : (
        <S.ButtonBox>
          {!isGenerated ? (
            <Button type="button" onClick={() => setIsGenerated(true)}>
              Generate boleto
            </Button>
          ) : (
            <Button type="button" onClick={() => setIsGenerated(true)}>
              <Download />
              PDF Download
            </Button>
          )}
        </S.ButtonBox>
      )}
    </S.Container>
  );
}
