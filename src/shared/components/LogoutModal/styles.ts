import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;
  padding: 3.2rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  gap: 2rem;
`;

export const Message = styled.span`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  font-weight: 500;
  font-size: 2.4rem;
  line-height: 3.2rem;
`;
