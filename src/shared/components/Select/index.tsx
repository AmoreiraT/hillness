import { useState } from 'react';

import { StatusAndNotifications } from '@assets/svg/hsbc_icons/statusAndNotifications';
import { SelectComponentProps } from './types';
import { RightIcon } from './RightIcon';

import * as S from './styles';

export function Select({
  label,
  options,
  width,
  inline,
  required,
  widthBox,
  error,
  onChange,
  ...props
}: SelectComponentProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <S.Container inline={inline} widthBox={widthBox} invalid={error}>
      <S.Label id={`select-${label}`}>{`${label}${
        required ? '*' : ''
      }`}</S.Label>

      <S.SelectBox width={width}>
        <S.Select
          open={isOpen}
          id={`select-${label}`}
          labelId={`select-${label}`}
          IconComponent={() => RightIcon({ isOpen })}
          onOpen={() => setIsOpen(true)}
          onClose={() => setIsOpen(false)}
          defaultValue={options[0].name}
          onChange={onChange}
          variant="standard"
          invalid={error}
          {...props}
        >
          {options.map((item) => (
            <S.MenuItem key={item.id} value={item.name}>
              {item.name}
            </S.MenuItem>
          ))}
        </S.Select>

        {error && (
          <S.ErrorMessage>
            <StatusAndNotifications />
            {error}
          </S.ErrorMessage>
        )}
      </S.SelectBox>
    </S.Container>
  );
}
