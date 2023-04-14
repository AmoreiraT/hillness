import styled from 'styled-components';
import * as typography from '@shared/styles/typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';

export const AccordionStyled = styled(Accordion)`
  background: ${({ theme }) =>
    theme.color.cmb.interaction_default.o01} !important;
  border-radius: 0rem !important;
  ${typography.m2.label.large};
  padding: 0rem 0rem 0rem 0rem !important;
  margin: 0rem 0rem 0rem 0rem !important;
`;

export const AccordionSummaryStyled = styled(AccordionSummary)`
  padding: 0rem 1rem 0rem 0rem !important;
  margin: 0rem 0rem 0rem 0rem !important;
  min-height: 4.3rem !important;
  & .MuiAccordionSummary-content {
    margin: 0rem 0rem 0rem 0rem !important;
    padding: 0rem 0rem 0rem 0rem !important;
  }

  & .MuiAccordionSummary-expandIconWrapper {
    display: flex;
    width: 2rem !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    & > svg {
      font-size: 1.6rem !important;
      & > path {
        fill: ${({ theme }) => theme.color.hsbc.content.on_light_01};
      }
    }
  }
`;

export const TypographyStyled = styled.span`
  ${typography.m2.label.large};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
`;

export const AccordionDetailsStyled = styled(AccordionDetails)`
  ${typography.m2.body[1]};
  padding: 0.8rem 0rem 2rem 0rem !important;
`;
