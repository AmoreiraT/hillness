import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  height: 100vh;

  background: ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  /* background-blend-mode: color-dodge; */

  /* @media (${({ theme }) => theme.media.medium}) {
    display: grid;
    grid-template-areas: 'nav header' 'nav main';
    grid-template-columns: min-content 1fr;
    grid-template-rows: min-content 1fr;
  }

  @media (${({ theme }) => theme.media.extraLarge}) {
    grid-template-rows: 8rem 1fr;
  } */
`;

export const Main = styled.main`
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background: ${({ theme }) => theme.color.cmb.sub_brand.o03_dark_slate};
  height: 100% !important;
  padding: 0rem 1rem 1rem 1rem;
  overflow-y: hidden;
  /* @media (${({ theme }) => theme.media.medium}) {
  
  } */
`;

export const Content = styled.div`
  overflow-y: hidden;
  height: 100% !important;
  /* padding: 3.2rem 3.2rem; */
  background-color: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
  /* box-shadow: 0 0.1rem 0.5rem rgba(45, 47, 51, 0.1); */
  border-radius: 0rem;
`;
