import { create } from "zustand";

interface PopupState {
  Errorpopup: boolean;
  setEroorpopup: (Errorpopup: boolean) => void;
  SignUppopup: boolean;
  setSignUppopup: (SignUppopup: boolean) => void;
  SignInpopup: boolean;
  setSignInpopup: (SignInpopup: boolean) => void;
  closepopup: () => void;
}
const initialState = {
  Errorpopup: false,
  SignUppopup: false,
  SignInpopup: false,
};
const usePopupStore = create<PopupState>((set) => ({
  ...initialState,
  setEroorpopup: (Errorpopup) => set({ Errorpopup }),
  setSignUppopup: (SignUppopup) => set({ SignUppopup }),
  setSignInpopup: (SignInpopup) => set({ SignInpopup }),
  closepopup: () =>
    set({
      Errorpopup: false,
      SignUppopup: false,
      SignInpopup: false,
    }),
}));

export default usePopupStore;
