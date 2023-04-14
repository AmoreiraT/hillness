// noinspection JSUnusedGlobalSymbols

import { useCallback, useEffect, useMemo, useState } from 'react';
import { getKeys } from '@shared/utils/functions';
import * as S from './styles';
// shared
// components
import { TableHeader } from './components/TableHeader';
import { TableBody } from './components/TableBody';
import { TableFooter } from './components/TableFooter';

interface Props<T extends object> {
  data: T[];
  columns: Record<keyof T, string>;
}

export function Table<T extends object>({ data, columns }: Props<T>) {
  const [tableData, setTableData] = useState<T[]>(data);
  const [currentPageData, setCurrentPageData] = useState<T[]>([]);
  const [keys, setKeys] = useState<Array<keyof T & string>>(getKeys(data[0]));
  const [currentPage, setCurrentPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [filters, setFilters] = useState<
    Array<{ key: keyof T; value: string }>
  >([]);
  const [sortBy, setSortBy] = useState<keyof T>(keys[0]);

  const getItemFromKey = (key: keyof T) => {
    return data[0][key];
  };

  const handleFilterChange = (column: keyof T, value: string) => {
    const filterAlreadyExists = filters.find((filter) => filter.key === column);
    if (filterAlreadyExists && value !== '') {
      const newFilters = filters.map((filter) => {
        if (filter.key === column) {
          return { key: column, value };
        }
        return filter;
      });
      setFilters(newFilters);
    } else if (filterAlreadyExists) {
      const newFilters = filters.filter((filter) => filter.key !== column);

      setFilters(newFilters);
    } else if (value !== '') {
      setFilters((curr) => [...curr, { key: column, value }]);
    }
  };

  const handleMoveColumn = (
    column: keyof T & string,
    direction: 'left' | 'right'
  ) => {
    const index = keys.indexOf(column);
    if (direction === 'left' && index > 0) {
      const newKeys = [...keys];
      newKeys[index] = keys[index - 1];
      newKeys[index - 1] = column;
      setKeys(newKeys);
    } else if (direction === 'right' && index < keys.length - 1) {
      const newKeys = [...keys];
      newKeys[index] = keys[index + 1];
      newKeys[index + 1] = column;
      setKeys(newKeys);
    }
  };

  const numberOfPages = useMemo(() => {
    return Math.ceil(tableData.length / rowsPerPage);
  }, [rowsPerPage, tableData]);

  const applyFilters = useCallback(() => {
    const filteredData = !filters.length
      ? data
      : data.filter((item) => {
          const tests = filters.map((filter) => {
            const current = item[filter.key];
            const currAsString = current as string;

            if (currAsString) {
              return currAsString
                .toLowerCase()
                .includes(filter.value.toLowerCase());
            }
            // TODO: implementar lógica de filtragem
            return false;
          });
          return tests.every((test) => test);
        });
    setTableData(filteredData);
  }, [filters]);

  const sortByColumn = useCallback(() => {
    if (sortBy) {
      const sortedData = tableData.sort((a, b) => {
        if (a[sortBy] < b[sortBy]) {
          return -1;
        }
        if (a[sortBy] > b[sortBy]) {
          return 1;
        }
        return 0;
      });
      setTableData(sortedData);
    }
  }, [sortBy]);

  const buildCurrentTablePage = useCallback(() => {
    const start = rowsPerPage * currentPage;
    const end = start + rowsPerPage;
    setCurrentPageData(tableData.slice(start, end));
  }, [rowsPerPage, currentPage, tableData]);

  useEffect(() => {
    sortByColumn();
    applyFilters();
    buildCurrentTablePage();
  }, [currentPage, rowsPerPage, filters, sortBy]);

  return (
    <S.Wrapper id="table-wrapper">
      <S.Table role="table" id="table">
        <TableHeader<T>
          keys={keys}
          columns={columns}
          getItemFromKey={getItemFromKey}
          handleFilterChange={handleFilterChange}
          handleMoveColumn={handleMoveColumn}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <TableBody tableData={currentPageData} keys={keys} />
      </S.Table>
      <TableFooter
        dataLength={tableData.length}
        currentPageDataLength={currentPageData.length}
        numberOfPages={numberOfPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        rowsPerPage={rowsPerPage}
        setRowsPerPage={setRowsPerPage}
      />
    </S.Wrapper>
  );
}
