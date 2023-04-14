import { Dispatch, SetStateAction, useEffect, useState } from 'react';

import * as S from './styles';
import { ChevronDown } from '../../../../../assets/svg/hsbc_icons/chevronDown';

interface Props<T extends object> {
  hasFilter: boolean;
  columnName: string;
  columnKey: keyof T & string;
  columnIndex: number;
  handleFilterChange: (column: keyof T, value: string) => void;
  handleMoveColumn: (
    column: keyof T & string,
    direction: 'left' | 'right'
  ) => void;
  sortBy: keyof T | null;
  setSortBy: Dispatch<SetStateAction<keyof T>>;
  keysLength: number;
}
export function TableHeaderCell<T extends object>({ ...props }: Props<T>) {
  const {
    columnName,
    columnKey,
    handleFilterChange,
    hasFilter,
    handleMoveColumn,
    columnIndex,
    sortBy,
    setSortBy,
    keysLength,
  } = props;
  const [toggleFilter, setToggleFilter] = useState(false);
  const [filterValue, setFilterValue] = useState('');

  const onFilterToggle = () => {
    setFilterValue('');
    setToggleFilter(!toggleFilter);
  };

  useEffect(() => {
    if (filterValue !== '') {
      handleFilterChange(columnKey, filterValue);
    } else {
      handleFilterChange(columnKey, '');
    }
  }, [columnKey, filterValue]);

  return (
    <S.TableColumnHeader role="columnheader">
      {columnName}
      {toggleFilter && (
        <S.TableHeaderFilterInput
          onChange={(e) => setFilterValue(e.target.value)}
          placeholder="Filtrar..."
        />
      )}
      <S.ButtonsWrapper>
        <S.TableHeaderButton
          onClick={() => handleMoveColumn(columnKey, 'left')}
          disabled={columnIndex === 0}
        >
          <ChevronDown
            color={columnIndex === 0 ? '#eeeeee' : '#00045D'}
            direction="left"
          />
        </S.TableHeaderButton>
        <S.TableHeaderButton
          onClick={() => handleMoveColumn(columnKey, 'right')}
          disabled={columnIndex === keysLength - 1}
        >
          <ChevronDown
            color={columnIndex === keysLength - 1 ? '#eeeeee' : '#00045D'}
            direction="right"
          />
        </S.TableHeaderButton>
        <S.TableHeaderButton
          onClick={() => setSortBy(columnKey)}
          disabled={sortBy === columnKey}
        >
          <ChevronDown color={sortBy === columnKey ? '#eeeeee' : '#00045D'} />
        </S.TableHeaderButton>

        {hasFilter && (
          <S.TableHeaderButton onClick={onFilterToggle}>
            {toggleFilter ? (
              <ChevronDown color="#00045D" />
            ) : (
              <ChevronDown color="#00045D" />
            )}
          </S.TableHeaderButton>
        )}
      </S.ButtonsWrapper>
    </S.TableColumnHeader>
  );
}
