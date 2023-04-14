import styled, { css } from 'styled-components';
import { DataGrid as MuiDataGrid } from '@mui/x-data-grid';

import * as typography from '@shared/styles/typography';

export const DataGrid = styled(MuiDataGrid)`
  ${({ theme }) => css`
    border: none !important;

    & .MuiIconButton-root {
      &:hover {
        background: none;
      }
    }

    & .MuiSvgIcon-root {
      height: 1.6rem;
      width: 1.6rem;
    }

    & .MuiDataGrid-columnHeaders {
      border-radius: 0rem;
      background: ${theme.color.cmb.interaction_default.o03};
    }

    & .MuiDataGrid-columnHeader {
      background: ${theme.color.cmb.interaction_default.o03};
      padding-right: 1.6rem;
      border-color: ${theme.color.hsbc.brand.o03_white} !important;
    }

    & .MuiDataGrid-columnHeaderTitle {
      ${typography.m2.body[2]}
      padding-left: 0.6rem;
    }

    & .MuiDataGrid-cell--textLeft {
      ${typography.m2.body[2]}
      padding-left: 1.6rem !important;
    }

    & .MuiDataGrid-cell--textRight {
      font-size: 1.4rem;
      font-weight: ${theme.typography.m2.headline.headline1.fontWeight};
      line-height: 20;
    }

    & .muidatagrid-columnseparator {
      display: none;
    }

    & .MuiDataGrid-footerContainer {
      min-height: 3.5rem;

      & .MuiTablePagination-root {
        & .MuiSelect-select {
          ${typography.m2.label.small}
          margin-top: 0.4rem;
        }

        & .MuiTablePagination-selectLabel {
          ${typography.m2.label.small}
        }

        & .MuiTablePagination-displayedRows {
          ${typography.m2.label.small}
        }

        > div {
          min-height: 3.5rem;
        }
      }

      & .MuiTablePagination-actions {
        margin-top: 0.3rem;
      }
    }
  `}
`;
