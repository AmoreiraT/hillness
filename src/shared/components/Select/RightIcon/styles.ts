import styled from 'styled-components';

import { ChevronDown } from '@assets/svg/hsbc_icons/chevronDown';
import { ChevronUp } from '@assets/svg/hsbc_icons/chevronUp';

export const Container = styled.div`
  width: 4rem !important;
  display: flex;
  align-items: center;
  justify-content: center;
  border-left: 1px solid
    ${({ theme }) => theme.color.cmb.interaction_default.o04};
  position: absolute;
  z-index: 10;
`;

export const ChevronDownIcon = styled(ChevronDown)`
  font-size: 1.8rem;
`;

export const ChevronUpIcon = styled(ChevronUp)`
  font-size: 1.8rem;
`;
