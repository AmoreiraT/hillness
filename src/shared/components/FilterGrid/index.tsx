import { useEffect, useMemo, useState } from 'react';
import { Collapse } from '@mui/material';
import { useFormik } from 'formik';

import { FilterGridProps, ValuesProps } from './types';

import { Select } from '../Select';

import * as S from './styles';

export function FilterGrid({ filtersData, onChange }: FilterGridProps) {
  const [selectedValues, setSelectedValues] = useState<ValuesProps[]>([]);
  const [isOpen, setIsOpen] = useState(true);

  const initialValues = useMemo(() => {
    const initialState = {} as { [x: string]: string };

    filtersData.forEach((item) => {
      initialState[item.label] = '';
    });

    return initialState;
  }, []);

  const { values, handleChange, setValues } = useFormik({
    initialValues,
    onSubmit: () => {},
  });

  const handleChangeValues = ({ id, value, index }: ValuesProps) => {
    if (index === 0) {
      const resetState = {} as { [x: string]: string };
      const withoutCurrentId = filtersData.filter((item) => item.label !== id);
      const formattedValues = withoutCurrentId.map((item, i) => {
        resetState[item.label] = item.selectData[0].name;

        return {
          index: i + 1,
          id: item.label,
          value: item.selectData[0].name,
        };
      });

      setValues({ ...{ [id]: value }, ...resetState });
      setSelectedValues([...formattedValues, { id, value, index }]);
    } else {
      const withoutCurrentIndex = selectedValues.filter(
        (item) => item.index !== index
      );

      setSelectedValues([...withoutCurrentIndex, { id, value, index }]);
    }
  };

  const handleInitialFilter = () => {
    const initialState = {} as { [x: string]: string };

    const filterValues = filtersData.map((item, index) => {
      initialState[item.label] = item.selectData[0].name;

      return {
        index,
        id: item.label,
        value: item.selectData[0].name,
      } as ValuesProps;
    });

    setValues(initialState);
    setSelectedValues(filterValues);
  };

  useEffect(() => {
    if (selectedValues.length) {
      onChange(selectedValues);
    } else {
      handleInitialFilter();
    }
  }, [selectedValues]);

  return (
    <S.Container>
      <S.Title>
        <S.FilterIcon />
        Filters
        {isOpen ? (
          <S.ChevronUpIcon onClick={() => setIsOpen(false)} />
        ) : (
          <S.ChevronDownIcon onClick={() => setIsOpen(true)} />
        )}
      </S.Title>

      <Collapse in={isOpen}>
        <S.Content>
          {filtersData.map((item, index) => (
            <S.SelectBox key={`${item.label}-${index + 1}`}>
              <Select
                name={item.label}
                required={item.required}
                label={item.label}
                options={item.selectData}
                value={values[item.label]}
                onChange={(event) => {
                  handleChange(event);
                  handleChangeValues({
                    id: item.label,
                    value: String(event.target.value),
                    index,
                  });
                }}
              />
            </S.SelectBox>
          ))}
        </S.Content>
      </Collapse>
    </S.Container>
  );
}
