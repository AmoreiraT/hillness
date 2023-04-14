import styled, { css } from 'styled-components';

import * as typography from '@shared/styles/typography';

export interface PaymentCardStylesProps {
  isGenerated?: boolean;
}

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.6rem;
    border: 1px solid ${theme.color.cmb.interaction_default.o04};
    background: ${theme.color.cmb.interaction_default.o01};
  `}
`;

export const Title = styled.div<PaymentCardStylesProps>`
  ${({ isGenerated }) => css`
    ${typography.m2.headline[6]};
    margin-bottom: ${!isGenerated ? '4rem' : '2rem'};
  `}
`;

export const Subtitle = styled.div<PaymentCardStylesProps>`
  ${({ isGenerated }) => css`
    ${typography.m2.headline.subtitle[1]};
    margin-bottom: ${isGenerated ? '0.6rem' : ''};
  `}
`;

export const SubtitleTwo = styled.div`
  ${typography.m2.headline.subtitle[2]};
`;

export const GeneratedDataBox = styled.div<PaymentCardStylesProps>`
  ${({ theme, isGenerated }) => css`
    width: min-content;
    padding: ${isGenerated ? '1.6rem' : ''};
    background: ${isGenerated ? theme.color.cmb.interaction_default.o02 : ''};
    margin-bottom: ${!isGenerated ? '4rem' : '2rem'};
  `}
`;

export const TotalToPayText = styled.div`
  ${typography.m2.headline.subtitle[1]};
`;

export const ValueText = styled.div`
  ${typography.m2.headline[3]};
  white-space: nowrap;
`;

export const GeneratedData = styled.div`
  background: ${({ theme }) => theme.color.cmb.interaction_default.o03};
  padding: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.6rem;
  gap: 1.6rem;

  > button {
    ${typography.m2.body.caption};
    height: 3.2rem;
  }
`;

export const GeneratedDataText = styled.p`
  ${typography.m2.body.caption};
  height: 100%;
`;

export const ButtonBox = styled.div`
  > button {
    ${typography.m2.body.caption};
    height: 3.2rem;
  }
`;
