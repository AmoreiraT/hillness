import { ComponentPropsWithoutRef, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import * as S from './styles';

interface BaseButtonProps {
  variant?: 'primary' | 'secondary' | 'tertiary';
  children: ReactNode;
  fullWidth?: boolean;
  minWidth?: string;
}

type ConditionalProps =
  | ({ to: string } & ComponentPropsWithoutRef<'a'>)
  | ({ type: string } & ComponentPropsWithoutRef<'button'>);

export type ButtonProps = BaseButtonProps & ConditionalProps;
export function Button({
  variant,
  children,
  fullWidth,
  minWidth,
  ...props
}: ButtonProps) {
  return 'to' in props ? (
    <S.Button
      as={Link}
      $variant={variant ?? 'primary'}
      $fullWidth={!!fullWidth}
      $minWidth={minWidth}
      {...props}
    >
      {children}
    </S.Button>
  ) : (
    <S.Button
      $variant={variant ?? 'primary'}
      $fullWidth={!!fullWidth}
      $minWidth={minWidth}
      {...props}
    >
      {children}
    </S.Button>
  );
}
