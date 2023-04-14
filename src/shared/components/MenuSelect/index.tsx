import React from 'react';
import * as S from './styles';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';
import { ChevronUp } from '../../../assets/svg/hsbc_icons/chevronUp';

export interface MenuSelectProps {
  anchorEl?: Element | ((element: Element) => Element) | null | undefined;
  labelButton?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  hasChildren?: boolean;
  children?: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  onClose?:
    | ((event: object, reason: 'backdropClick' | 'escapeKeyDown') => void)
    | undefined;

  iconClosed?: JSX.Element;
  iconOpen?: JSX.Element;
}

export function MenuSelect({
  anchorEl,
  labelButton,
  variant,
  hasChildren,
  children,
  onClick,
  onClose,
  iconClosed,
  iconOpen,
  ...props
}: MenuSelectProps) {
  const open = Boolean(anchorEl);
  return (
    <>
      <S.Button
        $fullWidth={false}
        $variant={variant ?? 'primary'}
        $hasChildren={hasChildren ?? true}
        onClick={onClick}
        {...props}
      >
        {variant === 'secondary' ? (open ? iconOpen : iconClosed) : null}
        {variant !== 'secondary' ? labelButton : null}
        {variant === 'tertiary' ? open ? <ChevronUp /> : <ChevronDown /> : null}
      </S.Button>
      {variant === 'secondary' ? null : children !== null ? (
        <S.StyledMenu
          elevation={0}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
          id="demo-customized-menu"
          MenuListProps={{
            'aria-labelledby': 'demo-customized-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={onClose}
        >
          {children}
        </S.StyledMenu>
      ) : null}
    </>
  );
}
