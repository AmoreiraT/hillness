import { ReactNode } from 'react';
import { isColor } from '@shared/utils/types';
import * as S from './styles';
import { ChevronDown } from '../../../../../assets/svg/hsbc_icons/chevronDown';

interface Props<T extends object> {
  tableData: T[];
  keys: Array<keyof T & string>;
}

const cellRender = <V extends number | string | object | boolean>(value: V) => {
  if (isColor(value)) {
    return (
      <S.IconWrapper>
        <ChevronDown color={value} />
      </S.IconWrapper>
    );
  }
  if (typeof value === 'boolean') {
    return value ? 'Sim' : 'Não';
  }
  return value as ReactNode;
};

export function TableBody<T extends object>({ ...props }: Props<T>) {
  const { tableData, keys } = props;
  return (
    <S.TableBody role="rowgroup" className="body">
      {tableData.map((item, i) => (
        <S.TableBodyRow role="row" key={`tr_${i}`}>
          {keys.map((key, j) => (
            <S.TableBodyCell role="cell" key={`td_${key}_${i}_${j}`}>
              {
                cellRender(
                  item[key] as number | string | object | boolean
                ) as ReactNode
              }
            </S.TableBodyCell>
          ))}
        </S.TableBodyRow>
      ))}
    </S.TableBody>
  );
}
