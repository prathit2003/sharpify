import { create } from "zustand";

interface UIstate {
  isMobileMenuOpen: boolean;
  Loading: boolean;
  ActiveSidebarElement: number;
  expandIconClick: boolean;
  setexpandIconClick: (expandIconClick: boolean) => void;
  setloading: (Loading: boolean) => void;
  setActiveSidebarElement: (ActiveSidebarElement: number) => void;
  setIsMobileMenuOpen: (isMobileMenuOpen: boolean) => void;
}
const initialState = {
  isMobileMenuOpen: false,
  ActiveSidebarElement: 0,
  Loading: false,
  expandIconClick: false,
};

const useUIStore = create<UIstate>((set) => ({
  ...initialState,
  setloading: (Loading) => set({ Loading }),
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),
  setActiveSidebarElement: (ActiveSidebarElement) =>
    set({ ActiveSidebarElement }),
  setexpandIconClick: (expandIconClick) => set({ expandIconClick }),
}));

export default useUIStore;
