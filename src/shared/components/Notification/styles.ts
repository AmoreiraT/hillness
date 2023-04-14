import styled, { css } from 'styled-components';

import * as typography from '@shared/styles/typography';
import { NotificationStylesProps } from './types';

export const Container = styled.div<NotificationStylesProps>`
  ${({ theme, marginTop }) => css`
    margin-top: ${marginTop || '0rem'};
    padding: 1.2rem 2rem;
    border: 1px solid;
    border-color: ${theme.color.cmb.interaction_defined.o07};
    background: ${theme.color.cmb.interaction_defined.o03};
    display: flex;
    align-items: center;
  `}
`;

export const Message = styled.span`
  ${typography.m2.headline.subtitle[2]}
  margin-left: 0.8rem;
`;
