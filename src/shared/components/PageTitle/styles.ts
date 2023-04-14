import styled from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Wrapper = styled.div`
  min-height: 7rem;
  width: 100%;
  display: flex;

  top: 0;
  ${typography.m2.headline[4]}
  padding: 1.6rem 0rem 1.6rem 5rem;
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
  background: ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  border-radius: 0rem;

  justify-content: space-between;
  align-items: center;

  ${typography.m2.headline[4]}

  @media (${({ theme }) => theme.media.medium}) {
    font-size: 3.2rem;
    line-height: 4rem;
  }
`;
