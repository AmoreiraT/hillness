import { Dispatch, SetStateAction } from 'react';
import { TableHeaderCell } from '../TableHeaderCell';
import * as S from './styles';

interface Props<T extends object> {
  columns: Record<keyof T, string>;
  keys: Array<keyof T & string>;
  handleFilterChange: (column: keyof T, value: string) => void;
  handleMoveColumn: (
    column: keyof T & string,
    direction: 'left' | 'right'
  ) => void;
  getItemFromKey: (key: keyof T) => T[keyof T];
  sortBy: keyof T | null;
  setSortBy: Dispatch<SetStateAction<keyof T>>;
}
export function TableHeader<T extends object>({ ...props }: Props<T>) {
  const {
    columns,
    keys,
    handleFilterChange,
    getItemFromKey,
    handleMoveColumn,
    sortBy,
    setSortBy,
  } = props;
  return (
    <S.TableHeaderGroup role="rowgroup" id="table-header-group">
      <S.TableRow role="row" id="table-header-row">
        {keys.map((key, i) => (
          <TableHeaderCell
            hasFilter={typeof getItemFromKey(key) === 'string'}
            columnName={columns[key]}
            columnKey={key}
            columnIndex={i}
            keysLength={keys.length}
            key={`th_${key}_${i}`}
            handleFilterChange={handleFilterChange}
            handleMoveColumn={handleMoveColumn}
            sortBy={sortBy}
            setSortBy={setSortBy}
          />
        ))}
      </S.TableRow>
    </S.TableHeaderGroup>
  );
}
