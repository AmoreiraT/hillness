import { ChangeEvent, Dispatch, SetStateAction } from 'react';
import * as S from './styles';

interface Props {
  dataLength: number;
  currentPageDataLength: number;
  numberOfPages: number;
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
  rowsPerPage: number;
  setRowsPerPage: Dispatch<SetStateAction<number>>;
}
export function TableFooter({ ...props }: Props) {
  const {
    dataLength,
    currentPageDataLength,
    numberOfPages,
    currentPage,
    setCurrentPage,
    rowsPerPage,
    setRowsPerPage,
  } = props;

  const handleRowsPerPageChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setRowsPerPage(Number(e.target.value));
  };

  return (
    <S.Footer id="table-footer">
      <S.PageSizes id="table-page-sizes">
        <span>
          {rowsPerPage * currentPage + 1}-
          {rowsPerPage * currentPage + currentPageDataLength} de {dataLength}{' '}
          items
        </span>
        <S.RowsPerPageSelector id="table-rows-per-page-selector">
          <select onChange={(e) => handleRowsPerPageChange(e)}>
            <option value={10}>10/pag</option>
            <option value={25}>25/pag</option>
            <option value={50}>50/pag</option>
            <option value={100}>100/pag</option>
            <option value={dataLength}>todos</option>
          </select>
        </S.RowsPerPageSelector>
      </S.PageSizes>
      <S.Pagination>
        <S.ArrowButton
          onClick={() => setCurrentPage((curr) => curr - 1)}
          disabled={currentPage === 0}
        >
          {'<'}
        </S.ArrowButton>
        {Array(numberOfPages)
          .fill(numberOfPages)
          .map((_, i) => (
            <S.PageButton
              key={`pagination_btn_${i}`}
              onClick={() => setCurrentPage(i)}
              $active={i === currentPage}
            >
              {i + 1}
            </S.PageButton>
          ))}
        <S.ArrowButton
          onClick={() => setCurrentPage((curr) => curr + 1)}
          disabled={currentPage === numberOfPages - 1}
        >
          {'>'}
        </S.ArrowButton>
      </S.Pagination>
    </S.Footer>
  );
}
