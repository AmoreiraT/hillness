import styled from 'styled-components';

export const TableColumnHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
  font-weight: 600;
  font-size: 1.6rem;
  color: #001849;
  padding: 1.6rem 1.3rem;
  &:not(:last-of-type) {
    border-right: 0.1rem solid #bcd7ff;
  }
  box-shadow: inset -0.1rem 0 0 #eeeeee, inset 0 -0.1rem 0 #eeeeee;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const TableHeaderButton = styled.button`
  color: #001849;
  font-size: 2.2rem;
`;

export const TableHeaderFilterInput = styled.input`
  font-family: 'Poppins', sans-serif;
  padding: 0.5rem;
  border: 0.1rem solid #e4e9f2;
  border-radius: 0.4rem;
  background-color: transparent;
  width: 15rem;
  &:focus {
    outline: none;
  }
`;
