import styled, { css } from 'styled-components';

export interface LayoutFormStylesProps {
  calcHeight?: string;
}

export const Content = styled.div<LayoutFormStylesProps>`
  ${({ theme, calcHeight = '35rem' }) => css`
    height: calc(100vh - ${calcHeight});
    /* padding: 0rem 3.2rem; */
    background-color: ${theme.color.hsbc.content.on_dark_01};
  `}
`;

export const Form = styled.form`
  height: 100%;
  overflow-y: auto;
  padding: 3.2rem;
  background-color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
`;

export const Separator = styled.div`
  width: 100%;
  height: 0.1rem;
  margin: 3.2rem 0rem;
  background-color: ${({ theme }) => theme.color.cmb.interaction_default.o04};
`;

export const LabelBox = styled.div`
  margin-top: 3.2rem;
  margin-bottom: 1.6rem;
`;

export const FieldsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
`;
