import { create } from "zustand";

interface PopupState {
  Priviewpopup: boolean;
  setPriviewpopup: (Errorpopup: boolean) => void;
  SignUppopup: boolean;
  setSignUppopup: (SignUppopup: boolean) => void;
  SignInpopup: boolean;
  setSignInpopup: (SignInpopup: boolean) => void;
  closepopup: () => void;
}
const initialState = {
  Priviewpopup: false,
  SignUppopup: false,
  SignInpopup: false,
};
const usePopupStore = create<PopupState>((set) => ({
  ...initialState,
  setPriviewpopup: (Priviewpopup) => set({ Priviewpopup }),
  setSignUppopup: (SignUppopup) => set({ SignUppopup }),
  setSignInpopup: (SignInpopup) => set({ SignInpopup }),
  closepopup: () =>
    set({
      Priviewpopup: false,
      SignUppopup: false,
      SignInpopup: false,
    }),
}));

export default usePopupStore;
