import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Color } from '@shared/utils/types';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface BaseIconButtonProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'tertiary';
  backgroundColor?: Color;
}

type ConditionalProps =
  | ({ to: string } & ComponentPropsWithoutRef<'a'>)
  | ({ type: string } & ComponentPropsWithoutRef<'button'>);

export type IconButtonProps = BaseIconButtonProps & ConditionalProps;
export function IconButton({
  children,
  variant,
  backgroundColor,
  ...rest
}: IconButtonProps) {
  const isLink = 'to' in rest;

  return isLink ? (
    <S.Button
      as={Link}
      $backgroundColor={backgroundColor}
      $variant={variant ?? 'primary'}
      {...rest}
    >
      {children}
    </S.Button>
  ) : (
    <S.Button
      $backgroundColor={backgroundColor}
      $variant={variant ?? 'primary'}
      {...rest}
    >
      {children}
    </S.Button>
  );
}
