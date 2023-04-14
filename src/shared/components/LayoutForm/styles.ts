import styled, { css } from 'styled-components';
import { LayoutFormStylesProps } from './types';

export const Content = styled.div<LayoutFormStylesProps>`
  ${({ theme, calcHeight = '32.9rem' }) => css`
    height: calc(100vh - ${calcHeight});
    background-color: ${theme.color.hsbc.content.on_dark_01};
  `}
`;

export const Form = styled.form`
  height: 100%;
  overflow-y: auto;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
`;
