import styled from 'styled-components';
import * as typography from '@shared/styles/typography';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  height: auto;
  width: 100%;
  gap: 0.8rem;
  flex-wrap: wrap;
  align-content: flex-start;
  justify-content: flex-start;
  align-items: flex-start;
`;

export const CircleAvatar = styled.div`
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  ${typography.m2.body[1]}
  flex: none;
  order: 0;
  flex-grow: 0;
  background-color: rgba(255, 255, 255, 0.12);
  border-radius: 100px;
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
`;

export const Container = styled.div`
  display: grid;
`;

export const Name = styled.div`
  ${typography.m2.headline.subtitle[1]};
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
`;

export const Value = styled.div`
  ${typography.m2.body[2]}
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
  opacity: 0.6;
`;
