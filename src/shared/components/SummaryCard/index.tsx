import { SummaryCardProps } from './types';

import * as S from './styles';

export function SummaryCard({
  nationalPurchasesValue,
  internationalPurchasesValue,
  taxsValue,
  usedLimitValue,
  maxLimitValue,
  remainingimitValue,
}: SummaryCardProps) {
  return (
    <S.Container>
      <S.Title>Summary</S.Title>

      <S.Content>
        <S.TextBox>
          <S.Text>National purchases</S.Text>
          <S.Text>{nationalPurchasesValue}</S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Text>International purchases</S.Text>
          <S.Text>{internationalPurchasesValue}</S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Text>Taxs</S.Text>
          <S.Text>{taxsValue}</S.Text>
        </S.TextBox>
      </S.Content>

      <S.Separator />

      <S.Content>
        <S.TextBox>
          <S.Text>Used limit</S.Text>
          <S.Text>{usedLimitValue}</S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Text>Max limit</S.Text>
          <S.Text>{maxLimitValue}</S.Text>
        </S.TextBox>
        <S.TextBox>
          <S.Text>Remaining limit</S.Text>
          <S.Text>R$ 0,00</S.Text>
        </S.TextBox>
      </S.Content>

      <S.Separator />

      <S.TextBox>
        <S.TotalText>Total to play</S.TotalText>
        <S.TotalText>R$ 1.000.000,00</S.TotalText>
      </S.TextBox>
    </S.Container>
  );
}
