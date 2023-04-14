import { createGlobalStyle } from 'styled-components';
import * as typography from './typography';
import Memories from './../../assets/fonts/Memories.ttf';
import UniversNextMd from './../../assets/fonts/hsbc/UniversNextforHSBCW29-Md.ttf';
import UniversNextRg from './../../assets/fonts/hsbc/UniversNextforHSBCW29-Rg.ttf';
import UniversNextThin from './../../assets/fonts/hsbc/UniversNextforHSBCW29-Thin.ttf';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  @font-face {
    font-family: 'Memories';
    src: local('Memories.ttf'), url(${Memories}) format('truetype');
    /* font-weight: 600; */
  }
  @font-face {
    font-family: 'Univers Next for HSBC W29 Rg';
    src: local('UniversNextforHSBCW29-Rg.ttf'),
      url(${UniversNextRg}) format('truetype');
    /* font-weight: 600; */
  }

  @font-face {
    font-family: 'Univers Next for HSBC W29 Md';
    src: local('UniversNextforHSBCW29-Md'),
      url(${UniversNextMd}) format('truetype');
    /* font-weight: 400; */
  }

  @font-face {
    font-family: 'Univers Next for HSBC W29 Thin';
    src: local('UniversNextforHSBCW29-Thin'),
      url(${UniversNextThin}) format('truetype');
    /* font-weight: 400; */
  }

  :root {
    font-synthesis: none;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-text-size-adjust: 100%;
  }

  html {
    font-size: 62.5%;
    & body {
      height: 100vh;
    }
  }

  @media (prefers-reduced-motion: no-preference) {
    html {
      scroll-behavior: smooth;
    }
  }

  body {
    font-size: 1.6rem;
    line-height: 1.5;

    color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
    font-family: 'Univers Next for HSBC W29 Rg';
    overflow: hidden;

    > div#root {
      background-color: ${({ theme }) => theme.color.hsbc.content.on_light_01};
    }
  }

  ::-webkit-scrollbar {
    height: 1.2rem;
    width: 1.2rem;
  }

  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.color.hsbc.brand.o05_pearl};
  }

  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.color.hsbc.brand.o07_pewter};
  }

  ::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme.color.hsbc.brand.o08_charcoal};
  }

  * {
    list-style: none;
    text-decoration: none;

    margin: 0;
    padding: 0;
    font: inherit;
    color: inherit;
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  img,
  picture,
  svg,
  video {
    display: block;
  }

  button {
    cursor: pointer;
    border: none;
    background: transparent;
    font-family: ${({ theme }) =>
      theme.typography.m2.label.large.fontFamily} !important;
    font-size: ${({ theme }) =>
      theme.typography.m2.label.large.fontSize} !important;
    font-weight: ${({ theme }) =>
      theme.typography.m2.label.large.fontWeight} !important;
    line-height: ${({ theme }) =>
      theme.typography.m2.label.large.lineHeight} !important;
    letterspacing: ${({ theme }) =>
      theme.typography.m2.label.large.letterSpacing} !important;
  }

  div.MuiPaper-root {
    padding: 0rem;
    border-radius: 0rem;
    margin-top: 0.1rem;

    ul {
      padding: 0rem;
    }
  }

  button.MuiStepButton-root {
    margin: 0rem;
    padding: 0rem;
  }

  div.MuiStepConnector-root {
    padding: 0.8rem;
  }

  div.MuiStep-root {
    padding: 0rem;
  }

  div.MuiSelect-select {
    font-family: ${({ theme }) =>
      theme.typography.m2.label.medium.fontFamily} !important;
    font-size: ${({ theme }) =>
      theme.typography.m2.label.medium.fontSize} !important;
    font-weight: ${({ theme }) =>
      theme.typography.m2.label.medium.fontWeight} !important;
    line-height: ${({ theme }) =>
      theme.typography.m2.label.medium.lineHeight} !important;
    letterspacing: ${({ theme }) =>
      theme.typography.m2.label.medium.letterSpacing} !important;
    ${typography.m2.label.medium}
  }

  li.MuiButtonBase-root {
    font-family: ${({ theme }) =>
      theme.typography.m2.label.large.fontFamily} !important;
    font-size: ${({ theme }) =>
      theme.typography.m2.label.large.fontSize} !important;
    font-weight: ${({ theme }) =>
      theme.typography.m2.label.large.fontWeight} !important;
    line-height: ${({ theme }) =>
      theme.typography.m2.label.large.lineHeight} !important;
    letterspacing: ${({ theme }) =>
      theme.typography.m2.label.large.letterSpacing} !important;
    :hover {
      border-radius: 0rem;
      background: ${({ theme }) => theme.color.hsbc.content.on_dark_01};
    }
  }
`;
