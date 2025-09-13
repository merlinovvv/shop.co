import { create } from "zustand";

interface HeaderStoreProps {
  headerHeight: number;
  isActiveSearch: boolean;
  isActiveBurgerButton: boolean;
  setIsActiveBurgerButton: (active: boolean) => void;
  setIsActiveSearch: (active: boolean) => void;
  setHeaderHeight: (ref: HTMLElement) => void;
}

export const useHeaderStore = create<HeaderStoreProps>((use) => ({
  headerHeight: 0,
  isActiveBurgerButton: false,
  isActiveSearch: false,
  setIsActiveBurgerButton: (active) => use({ isActiveBurgerButton: active }),
  setIsActiveSearch: (active) => use({ isActiveSearch: active }),
  setHeaderHeight: (ref) => use({ headerHeight: ref.clientHeight }),
}));
