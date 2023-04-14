import styled from 'styled-components';

import { Filter } from '@assets/svg/hsbc_icons/filter';
import { ChevronDown } from '@assets/svg/hsbc_icons/chevronDown';
import { ChevronUp } from '@assets/svg/hsbc_icons/chevronUp';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Title = styled.div`
  width: min-content;
  font-family: ${({ theme }) =>
    theme.typography.m2.headline.headline4.fontFamily};
  margin-bottom: 1.6rem;
  display: flex;
  align-items: center;
  gap: 0.8rem;
  position: relative;
`;

export const Content = styled.div`
  padding: 0rem 0rem 1.6rem 1.6rem;
  background: ${({ theme }) => theme.color.cmb.interaction_default.o02};
  margin-bottom: 3.2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const SelectBox = styled.div`
  width: calc(33.3% - 1.6rem);
  margin-top: 1.6rem;
  margin-right: 1.6rem;
`;

export const IconDowBox = styled.button`
  position: absolute;
  right: -3rem;
  cursor: pointer;

  svg {
    font-size: 2rem;
  }
`;

export const IconUpBox = styled(IconDowBox)`
  svg {
    margin-top: 0.7rem;
  }
`;

export const FilterIcon = styled(Filter)`
  height: 2rem;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  font-size: 2rem;
  position: absolute;
  right: -2.8rem;
  top: 0.5rem;
  cursor: pointer;
`;

export const ChevronUpIcon = styled(ChevronUp)`
  font-size: 2rem;
  position: absolute;
  right: -2.8rem;
  cursor: pointer;
`;
