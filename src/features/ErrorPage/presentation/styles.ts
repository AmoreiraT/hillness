import styled from 'styled-components';

export const Wrapper = styled.div`
  margin: auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  @media (${({ theme }) => theme.media.large}) {
    flex-direction: row;
  }
  padding: 4rem;
  align-items: center;
  justify-content: center;
  gap: 10.4rem;

  width: 100vw;
  height: 100vh;
  background-color: #fff;
`;

export const InnerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.6rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 42rem;
`;

export const Logo = styled.img`
  width: 10rem;
`;

export const Title = styled.h1`
  font-size: 5.7rem;
  line-height: 6.4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: ${({ theme }) => theme.color.hsbc.brand.o08_charcoal};
`;

export const Subtitle = styled.h2`
  font-size: 3.2rem;
  line-height: 4rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.color.hsbc.brand.o02_black};
`;

export const Text = styled.p`
  font-size: 2.2rem;
  line-height: 2.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.color.hsbc.brand.o02_black};
`;

export const BtnRestart = styled.button`
  margin-right: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.2rem;
  line-height: 2.8rem;
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};

  background-color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};

  padding: 2rem;
  border-radius: 0.4rem;

  box-shadow: 0 0.4rem 0.4rem rgba(0, 0, 0, 0.25);

  &:hover {
    background-color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};
  }
  transition: background-color 0.2s ease-in-out;
`;

export const BtnToggleErrorLog = styled.button<{ $isErrorLogVisible: boolean }>`
  display: flex;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red};

  &::after {
    padding-left: 0.5rem;
    content: ${({ $isErrorLogVisible }) =>
      $isErrorLogVisible ? '"▲"' : '"▼"'};
    display: inline-block;
  }
`;

export const LogWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  padding: 1rem;
  border-radius: 0.4rem;
  background-color: ${({ theme }) => theme.color.hsbc.brand.o04_light_pearl};
  color: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};

  & > p:first-child {
    font-size: 1.8rem;
    font-style: italic;
  }
  & > p {
    font-size: 1.4rem;
    font-style: italic;
  }
`;
