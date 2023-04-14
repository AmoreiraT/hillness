import styled from 'styled-components';
import { Collapse } from '../Collapse';
import { ChevronDown } from '../../../assets/svg/hsbc_icons/chevronDown';

export const CollapseWrapper = styled(Collapse)`
  position: absolute;
  top: 15rem;

  @media (${({ theme }) => theme.media.medium}) {
    top: 8rem;
    right: 0;
    border-bottom-right-radius: 1.5rem;
  }
`;
export const UserModalWrapper = styled.div`
  gap: 1rem;
  padding: 1rem;
  @media (${({ theme }) => theme.media.medium}) {
    gap: 2rem;
    padding: 2.4rem 1.5rem;
  }

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  white-space: nowrap;

  background: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};

  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.25);
  z-index: 10;
`;

export const UserModalInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

export const Heading = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 1.6rem;
  border-bottom: 0.1rem solid
    ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  width: 100%;
  padding-block: 0 1rem;
  padding-inline: 1rem;
  > h4 {
    font-family: 'Poppins', sans-serif;
    color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
    font-weight: 500;
    font-size: 1.8rem;
    line-height: 2rem;
  }
  @media (${({ theme }) => theme.media.medium}) {
    padding-block: 0 2.4rem;
    padding-inline: 2.4rem;
    > h4 {
      font-size: 2.2rem;
      line-height: 2.8rem;
    }
  }
`;
export const BtnCloseUserModal = styled.button`
  border-right: 0.1rem solid
    ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  display: flex;
  padding-inline: 1.5rem;
  @media (${({ theme }) => theme.media.medium}) {
    padding-inline: 2.7rem;
  }
`;

export const IconBtnCloseUserModal = styled(ChevronDown)`
  margin: auto;
`;

export const Avatar = styled.img`
  width: 100%;
  border-radius: 50%;
`;
export const AvatarOverlay = styled.div`
  background: rgba(0, 0, 0, 0.3);
  height: 50%;
  width: 100%;
  border-radius: 0 0 10rem 10rem;

  position: absolute;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  padding-bottom: 1rem;
`;

export const BtnEditAvatar = styled.button`
  position: relative;
  display: flex;
  width: 9.6rem;
  height: 9.6rem;
  border-radius: 10rem;
  > div {
    transition: all 0.3s ease-in-out;
    > svg {
      transition: all 0.3s ease-in-out;
    }
  }
  &:hover {
    > div {
      background: rgba(0, 0, 0, 0.5);
      > svg {
        transform: translate(0, -50%) scale(1.2);
      }
    }
  }
`;

export const IconBtnEditAvatar = styled(ChevronDown)``;

export const BtnFull = styled.button`
  font-family: 'Poppins', sans-serif;
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  font-weight: 500;

  width: 100%;

  border: 0.1rem solid ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  border-radius: 0.4rem;
  padding: 1rem;
  font-size: 1.6rem;
  line-height: 2.4rem;
  @media (${({ theme }) => theme.media.medium}) {
    font-size: 2.2rem;
    line-height: 2.8rem;
  }
`;

export const BtnLogout = styled.button`
  font-family: 'Poppins', sans-serif;
  align-self: flex-end;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  gap: 0.4rem;

  border: 0.1rem solid ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  border-radius: 0.4rem;

  font-size: 1.6rem;
  line-height: 2.4rem;
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  > svg {
    > path {
      transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
  }
  &:hover {
    > svg {
      > path {
        stroke: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
        transition: all 0.3s ease-in-out;
      }
      transition: all 0.3s ease-in-out;
    }
    transition: all 0.3s ease-in-out;
    background: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
    color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  }
  transition: all 0.3s ease-in-out;
`;

export const IconBtnLogout = styled(ChevronDown)``;
