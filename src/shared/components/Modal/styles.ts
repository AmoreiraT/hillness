import styled from 'styled-components';

export const Wrapper = styled.div`
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: auto;
  left: 0;
  top: 0;
  position: fixed;
`;

export const ModalWrapper = styled.div`
  display: flex;
  border-radius: 1.5rem;

  margin: auto;
  background-color: white;

  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow: visible;
`;

export const Bar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 1.5rem 1.5rem 0 0;
  padding: 0.8rem 2.4rem;
  background: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
`;
export const BtnClose = styled.button`
  padding: 0.9rem;
  border-radius: 0.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);
`;
