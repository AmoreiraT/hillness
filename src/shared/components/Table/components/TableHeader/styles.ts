import styled from 'styled-components';

export const TableHeaderGroup = styled.div`
  padding-right: 1rem;
  width: 100%;
  display: flex;
`;

export const TableRow = styled.div`
  width: 100%;
  display: flex;
  &:not(:last-child) {
    border-bottom: 0.1rem solid #b3c5ff;
  }
  &:nth-child(even) {
    background-color: #edf2ff;
  }
`;
