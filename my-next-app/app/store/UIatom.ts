import {create} from "zustand";

interface UIstate {
  isMobileMenuOpen : boolean;
  setIsMobileMenuOpen : (isMobileMenuOpen : boolean) => void;
}
const initialState = {
  isMobileMenuOpen: false,
};

const useUIStore = create<UIstate>((set) => ({
  ...initialState,
  setIsMobileMenuOpen: (isMobileMenuOpen) => set({ isMobileMenuOpen }),  
}))


export default useUIStore;