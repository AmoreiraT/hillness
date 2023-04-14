import styled from 'styled-components';

export const TableBody = styled.div`
  height: 100%;
  overflow-y: scroll;
`;

export const TableBodyRow = styled.div`
  width: 100%;
  display: flex;
  &:not(:last-child) {
    border-bottom: 0.1rem solid
      ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  }
  &:nth-child(even) {
    background-color: ${({ theme }) =>
      theme.color.cmb.sub_brand.o01_light_slate};
  }
`;

export const TableBodyCell = styled.div`
  width: 100%;
  display: flex;

  &:not(:last-child) {
    border-right: 0.1rem solid
      ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  }
  padding: 1.6rem 1.3rem;
  align-items: center;
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
