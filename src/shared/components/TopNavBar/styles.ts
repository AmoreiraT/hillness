import styled from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Wrapper = styled.div`
  min-height: 7rem;
  width: 100%;
  display: flex;
  gap: 1.6rem;
  top: 0;
  padding-left: 5rem;
  color: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
  background: ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  border-radius: 0rem;
  border-bottom: 0.2rem solid
    ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
  justify-content: start;
  align-items: center;
`;

export const Title = styled.h1`
  display: flex;
  align-items: center;

  ${typography.m2.headline[4]}

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;
