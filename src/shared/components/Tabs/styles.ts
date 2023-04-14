import styled, { css } from 'styled-components';
import * as typography from '@shared/styles/typography';
import { Tabs, Tab, Box } from '@mui/material';

export const WrapperBox = styled(Box)<{
  $orientation: 'horizontal' | 'vertical' | undefined;
}>`
  position: relative;
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: ${({ $orientation }) =>
    $orientation !== 'vertical' ? 'column' : 'row'} !important;
`;

export const Wrapper = styled(Box)<{
  $orientation: 'horizontal' | 'vertical' | undefined;
}>`
  position: relative;
  height: 100%;
  width: 100%;
  padding: ${({ $orientation }) =>
    $orientation !== 'vertical'
      ? ' 0rem'
      : ' 0rem 0rem 0rem 2.0rem'} !important;

  background: ${({ theme }) => theme.color.cmb.interaction_default.o01};
`;

export const StyledTabs = styled(Tabs)`
  && * {
    min-height: 4rem !important;
  }
  max-width: ${({ orientation }) =>
    orientation !== 'vertical' ? 'auto' : '17.6rem'} !important;

  span.MuiTabs-indicator {
    display: none;
    overflow: hidden;
  }
  height: ${({ orientation }) =>
    orientation !== 'horizontal' ? '100%' : 'auto'} !important;

  min-height: 4rem !important;
  ${typography.m2.label.medium};
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
  background-color: ${({ theme, orientation }) =>
    orientation !== 'vertical'
      ? theme.color.cmb.sub_brand.o03_dark_slate
      : theme.color.cmb.interaction_default.o03} !important;

  &:hover {
    color: ${({ theme }) => theme.color.hsbc.brand.o03_white} !important;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
  }

  &.Mui-focusVisible {
    background-color: ${({ theme }) =>
      theme.color.cmb.sub_brand.o02_slate} !important;
  }
`;

export const StyledTitleTab = styled(Tab)`
  && * {
    min-height: 4.4rem !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
  }
  && {
    ${typography.m2.label.medium};
    /* height: 4rem !important; */
    text-transform: none !important;
    /* min-height: 4rem !important; */
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
  }
  &:disabled {
    padding: 1.7rem !important;
    min-height: 4.4rem !important;
    opacity: 1 !important;
    ${typography.m2.label.medium};
    font-size: 1.6rem !important;
    min-height: 4.4rem !important;
    border-left: 0.4rem solid
      ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red} !important;
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
  }

  &:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }
  &.MuiButtonBase-root {
    height: 2rem !important;
  }

  &:active:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
    border-color: ${({ theme }) =>
      theme.color.hsbc.brand.o01_hsbc_red} !important;
    border-top: 0.4rem solid
      ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red} !important;
  }

  .Mui-focused {
    color: ${({ theme }) => theme.color.hsbc.data_visualisation.o07_sapphire};
  }

  &.Mui-focusVisible {
    background-color: ${({ theme }) =>
      theme.color.cmb.sub_brand.o03_dark_slate};
  }
`;

export const StyledVerticalTab = styled(Tab)`
  display: flex !important;
  padding: 1.7rem !important;
  text-transform: none !important;
  min-height: 4.4rem !important;
  width: 17.6rem !important;
  ${typography.m2.label.large};
  font-size: 1.6rem !important;
  @media (${({ theme }) => theme.media.large}) {
    font-size: 1.4rem !important;
  }
  @media (${({ theme }) => theme.media.medium}) {
    font-size: 1.4rem !important;
    width: 19.6rem !important;
  }
  @media (${({ theme }) => theme.media.small}) {
    font-size: 0.9rem !important;
    width: 19.6rem !important;
    padding: 1.7rem !important;
  }
  text-align: left !important;
  align-items: start !important;
  min-height: 4.4rem !important;
  color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
  background-color: ${({ theme }) =>
    theme.color.cmb.interaction_default.o03} !important;

  & .css-10d9dml-MuiTabs-indicator {
    display: none !important;
    overflow: hidden !important;
    width: 0 !important;
  }

  &:disabled {
    padding: 1.7rem !important;
    min-height: 4.4rem !important;
    opacity: 1 !important;
    ${typography.m2.label.medium};
    font-size: 1.6rem !important;
    min-height: 4.4rem !important;
    border-left: 0.3rem solid
      ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red} !important;
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
  }

  &:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }
  &.MuiButtonBase-root {
    height: 2rem !important;
  }

  &:active:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }

  &.Mui-selected {
    border-left: 0.3rem solid
      ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red} !important;
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
    border-color: ${({ theme }) =>
      theme.color.hsbc.brand.o01_hsbc_red} !important;
  }

  .Mui-focused {
    color: ${({ theme }) => theme.color.hsbc.data_visualisation.o07_sapphire};
  }

  &.Mui-focusVisible {
    background-color: ${({ theme }) =>
      theme.color.cmb.sub_brand.o03_dark_slate};
  }
`;

export const StyledTab = styled(Tab)`
  text-transform: none !important;
  ${typography.m2.label.medium};
  font-size: 1.4rem !important;
  color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
  background-color: ${({ theme }) =>
    theme.color.cmb.sub_brand.o02_slate} !important;

  &:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }
  &.MuiButtonBase-root {
    height: 2rem !important;
  }

  &:active:hover {
    color: ${({ theme }) => theme.color.hsbc.content.on_dark_01} !important;
    background-color: ${({ theme }) =>
      theme.color.cmb.interaction_default.o05} !important;
    opacity: 1;
  }

  &.Mui-selected {
    color: ${({ theme }) => theme.color.hsbc.content.on_light_01} !important;
    background-color: ${({ theme }) =>
      theme.color.hsbc.brand.o03_white} !important;
    border-color: ${({ theme }) =>
      theme.color.hsbc.brand.o01_hsbc_red} !important;
    border-top: 0.4rem solid
      ${({ theme }) => theme.color.hsbc.brand.o01_hsbc_red} !important;
  }

  .Mui-focused {
    color: ${({ theme }) => theme.color.hsbc.data_visualisation.o07_sapphire};
  }

  &.Mui-focusVisible {
    background-color: ${({ theme }) =>
      theme.color.cmb.sub_brand.o03_dark_slate};
  }
`;
