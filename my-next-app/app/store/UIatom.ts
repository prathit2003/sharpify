import { create } from "zustand";

interface UIstate {
  isMobileMenuOpen: boolean;
  Loading: boolean;
  ActiveSidebarElement: number;
  setloading: (Loading: boolean) => void;
  setActiveSidebarElement: (ActiveSidebarElement: number) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}
const initialState = {
  isMobileMenuOpen: false,
  ActiveSidebarElement: 0,
  Loading: false,
};

const useUIStore = create<UIstate>((set) => ({
  ...initialState,
  setloading: (Loading) => set({ Loading }),
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
  setActiveSidebarElement: (ActiveSidebarElement) =>
    set({ ActiveSidebarElement }),
}));

export default useUIStore;
