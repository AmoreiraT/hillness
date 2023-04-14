import styled from 'styled-components';
import * as typography from '@shared/styles/typography';

export const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 26,
  height: 26,
  border: `1px solid ${theme.color.hsbc.brand.o07_pewter}`,
  backgroundColor: theme.color.hsbc.content.on_dark_01,
  backgroundImage: `radial-gradient( ${theme.color.hsbc.content.on_dark_01}, ${theme.color.hsbc.content.on_dark_01} 28%,transparent 0%)`,

  '.Mui-focusVisible &': {
    // outline: '1px auto rgba(19,124,189,.6)',
    // outlineOffset: 5,
  },
  'input:hover ~ &': {
    borderColor: theme.color.hsbc.data_visualisation.o07_sapphire,
    // backgroundColor: theme.color.hsbc.brand.o07_pewter,
  },
  'input:disabled ~ &': {
    boxShadow: 'none',
    background: theme.color.hsbc.brand.o07_pewter,
  },
}));

export const BpCheckedIcon = styled(BpIcon)(({ theme }) => ({
  // backgroundColor: theme.color.hsbc.content.on_dark_01,
  border: `1px solid ${theme.color.hsbc.brand.o07_pewter}`,
  backgroundImage: `radial-gradient( ${theme.color.hsbc.rag.green_success}, ${theme.color.hsbc.rag.green_success} 40%,transparent 0%)`,
  '&:before': {
    display: 'block',
    width: 26,
    height: 26,
  },
  'input:hover ~ &': {
    backgroundColor: theme.color.hsbc.content.on_dark_01,
    border: `1px solid ${theme.color.hsbc.brand.o07_pewter}`,
    // backgroundColor: theme.color.hsbc.rag.green_success,
  },
}));
