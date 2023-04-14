import styled, { css } from 'styled-components';
import { GridActionsCellItem as MuiGridActionsCellItem } from '@mui/x-data-grid';

export const GridActionsCellItem = styled(MuiGridActionsCellItem)`
  ${({ theme }) => css`
    & > svg {
      font-size: 1.8rem;

      & > path {
        fill: ${theme.color.hsbc.content.on_light_01};
      }
    }
  `}
`;
