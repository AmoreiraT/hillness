import styled, { css } from 'styled-components';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Badge, BadgeProps, Divider } from '@mui/material';
import * as typography from '@shared/styles/typography';

export const Header = styled.header`
  grid-area: header;
  display: grid;
  background-color: ${({ theme }) =>
    theme.color.cmb.sub_brand.o04_corporate_slate};

  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: repeat(1, 1fr);

  align-items: center;
  gap: 2rem;
  padding: 1.6rem 5rem 1.6rem 5rem;

  @media (${({ theme }) => theme.media.small}) {
    display: grid;

    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);

    align-items: center;
    justify-content: center;
    justify-items: stretch;
    gap: 2rem;
  }

  @media (${({ theme }) => theme.media.medium}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);

    align-items: center;
    justify-content: center;
    justify-items: stretch;
    gap: 2rem;
  }

  @media (${({ theme }) => theme.media.large}) {
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: repeat(1, 1fr);

    align-items: center;
    justify-content: center;
    justify-items: stretch;
    gap: 2rem;
  }
`;

export const ActionsContainer = styled.div`
  display: inline-flex;
  height: 2.6rem;
  gap: 1.6rem;
  justify-content: flex-end;
  align-items: center;
`;

export const BtnLogo = styled.button`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.6rem;
  @media (${({ theme }) => theme.media.medium}) {
    display: flex;
    &:hover {
      transform: scale(1.01);
    }
    transition: transform 0.2s ease-in-out;
  }
`;
export const Logo = styled.img`
  width: 13rem;
  background-size: contain;
  object-fit: contain;
  @media (${({ theme }) => theme.media.medium}) {
    width: 12rem;
    grid-column: 1;
  }
`;

export const Vdivider = styled(Divider)`
  width: 0.1rem;
  /* background-color: rgb(64, 70, 75); */
  background-color: ${({ theme }) => theme.color.cmb.interaction_default.o06};

  /* background-color: ${({ theme }) =>
    theme.color.cmb.sub_brand.o03_dark_slate}; */
`;

export const CompanyName = styled.span`
  /* font-family: 'Memories'; */
  width: 100%;
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
  white-space: nowrap;
  display: block;
`;

export const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 3,
    top: 3,
    color: theme.color.hsbc.brand.o03_white,
    backgroundColor: theme.color.hsbc.brand.o01_hsbc_red,
    fontSize: theme.typography.m2.body.caption.fontSize,
    lineHeight: theme.typography.m2.body.caption.lineHeight,
    fontFamily: theme.typography.m2.body.caption.fontFamily,
  },
}));
