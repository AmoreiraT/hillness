import styled from 'styled-components';
import * as typography from '@shared/styles/typography';
import { TextareaAutosize } from '@mui/material';

export const Wrapper = styled.div<{
  width?: string;
}>`
  display: flex;
  flex-direction: column;
  width: ${({ width }) => width || '100%'};
`;

export const LabelSelect = styled.label`
  ${typography.m2.label.medium};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  padding-bottom: 0.7rem;
`;

export const LabelHelpText = styled.label`
  ${typography.m2.body.caption};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  padding-bottom: 0.7rem;
`;

export const TextAreaStyled = styled(TextareaAutosize)`
  ${typography.m2.body[1]}
  background: transparent;
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
  height: 4rem;
  border-radius: 0;
  border-color: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
  padding: 0.8rem 1.2rem;
  .sc-gJFNMl .bcJpuV {
    border-radius: 0;
  }
  &:hover {
    border-radius: 0;
    border-color: ${({ theme }) =>
      theme.color.hsbc.data_visualisation.o07_sapphire};
  }
  &:active {
    border-radius: 0;
    border-color: ${({ theme }) =>
      theme.color.hsbc.data_visualisation.o07_sapphire};
  }
  &:focus {
    border-radius: 0;
    border-color: ${({ theme }) =>
      theme.color.hsbc.data_visualisation.o07_sapphire};
  }
`;
