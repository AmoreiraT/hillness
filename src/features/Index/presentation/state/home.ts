import { ReactNode } from 'react';
import { create } from 'zustand';
import { ErrorType } from '@core/error';

export interface HomeState {
  // title
  title: string;
  setTitle: (value: string) => void;

  pageTitleElement: ReactNode;
  setPageTitleElement: (value: ReactNode) => void;

  // title
  labelButton: string;
  setLabelButton: (value: string) => void;

  // menu state
  isNavOpen: boolean;
  setNavOpen: (value: boolean) => void;

  // logout modal
  isLogoutModalOpen: boolean;
  setLogoutModalOpen: (value: boolean) => void;
  // user modal
  isUserModalOpen: boolean;
  setUserModalOpen: (value: boolean) => void;
}

export const useHomeStore = create<HomeState>((set) => ({
  // title
  title: '',
  setTitle: (value: string) => set({ title: value }),
  // pageTitleElement
  pageTitleElement: '',
  setPageTitleElement: (value: ReactNode) => set({ pageTitleElement: value }),
  // labelButton
  labelButton: '',
  setLabelButton: (value: string) => set({ labelButton: value }),
  // logout modal
  isLogoutModalOpen: false,
  setLogoutModalOpen: (value: boolean) => set({ isLogoutModalOpen: value }),
  // user modal
  isUserModalOpen: false,
  setUserModalOpen: (value: boolean) => set({ isUserModalOpen: value }),
  // menu state
  isNavOpen: false,
  setNavOpen: (value: boolean) => set({ isNavOpen: value }),
}));
