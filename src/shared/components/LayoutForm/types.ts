import { ReactNode } from 'react';
import { FooterProps } from '../Footer';

export interface LayoutFormStylesProps {
  calcHeight?: string;
}

export interface LayoutFormProps extends FooterProps, LayoutFormStylesProps {
  children: ReactNode;
}
