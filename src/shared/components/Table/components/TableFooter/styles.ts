import styled from 'styled-components';

export const Footer = styled.div`
  width: 100%;
  height: 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

export const PageButton = styled.button<{ $active: boolean }>`
  font-family: 'Roboto', sans-serif;
  padding: 1.6rem;
  border-radius: 0.5rem;
  background-color: ${({ $active }) => ($active ? '#DAE1FF' : '')};
  color: ${({ $active }) => ($active ? '#5674C4' : '#4B4B4B')};
`;

export const ArrowButton = styled.button`
  font-family: 'Roboto', sans-serif;
  padding: 1.6rem;
  border-radius: 0.5rem;
  color: #1b1b1f;

  &:disabled {
    background-color: #eeeeee;
  }
`;

export const PageSizes = styled.div`
  color: #919094;
  font-family: 'Roboto', sans-serif;
  line-height: 2.2rem;
  display: flex;
  gap: 0.8rem;
`;

export const RowsPerPageSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  &::after {
    content: '▼';

    position: absolute;
    right: 0;
  }
`;
