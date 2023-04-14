import { useMemo } from 'react';
import { ptBR } from '@mui/x-data-grid';

import { Empty } from './Empty';
import { getRows } from './Rows';
import { getColumns } from './Columns';
import { GridProps } from './types';

import * as S from './styles';

export function DataGrid({ data, height, actions, ...props }: GridProps) {
  const columns = useMemo(() => getColumns({ data, actions }), [actions, data]);
  const rows = useMemo(() => getRows({ data }), [data]);

  return (
    <S.DataGrid
      getRowId={(row) => row.id}
      rows={rows}
      columns={columns}
      rowHeight={47}
      headerHeight={47}
      autoHeight={!height}
      showCellRightBorder
      showColumnRightBorder
      rowsPerPageOptions={[5, 10, 20, 50, 100]}
      localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
      components={{ NoRowsOverlay: Empty }}
      isRowSelectable={() => false}
      disableColumnFilter
      hideFooterPagination={data.length <= 5}
      sx={{ height }}
      {...props}
    />
  );
}
