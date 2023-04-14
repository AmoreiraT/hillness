import styled, { css } from 'styled-components';

import * as typography from '@shared/styles/typography';

export const Container = styled.div`
  ${({ theme }) => css`
    width: 100%;
    padding: 1.6rem;
    border: 1px solid ${theme.color.cmb.interaction_default.o04};
    background: ${theme.color.cmb.interaction_default.o01};
  `}
`;

export const Title = styled.div`
  ${typography.m2.headline[6]};
  margin-bottom: 1.6rem;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Text = styled.span`
  ${typography.m2.body[2]};
`;

export const TotalText = styled.div`
  ${typography.m2.headline[6]};
  font-size: 1.6rem;
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 1.6rem 0rem;
  background-color: ${({ theme }) => theme.color.cmb.interaction_default.o04};
`;
