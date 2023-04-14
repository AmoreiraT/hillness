import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 3.2rem;
  border-top: 1px solid ${({ theme }) => theme.color.hsbc.brand.o02_black};
  display: flex;
  justify-content: space-between;
`;

export const NextButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
