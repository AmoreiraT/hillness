import { ReactElement } from 'react';
import { DataGridProps, GridRowParams } from '@mui/x-data-grid';

export type RowProps = {
  [X: string]: string | number | ReactElement;
};

export type ElementProps = {
  id: string;
  element: ReactElement;
  onClick?: (params: GridRowParams) => void;
};

export type ActionProps = {
  columnName: string;
  cellWidth?: number;
  elements: ElementProps[];
  align?: 'left' | 'center' | 'right';
};

export type GridProps = Omit<DataGridProps, 'rows' | 'columns'> & {
  gridId?: string;
  data: RowProps[];
  height?: number | string;
  actions?: ActionProps;
};
