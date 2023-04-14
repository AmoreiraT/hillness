import { ReactNode } from 'react';
import { create } from 'zustand';

export interface PageTitleState {
  // title
  title: string;
  setTitle: (value: string) => void;

  pageTitleElement: ReactNode;
  setPageTitleElement: (value: ReactNode) => void;
}

export const usePageTitle = create<PageTitleState>((set) => ({
  // title
  title: '',
  setTitle: (value: string) => set({ title: value }),
  // pageTitleElement
  pageTitleElement: '',
  setPageTitleElement: (value: ReactNode) => set({ pageTitleElement: value }),
}));
