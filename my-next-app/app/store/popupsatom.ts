import { create } from "zustand";

interface PopupState {
  error: string;
  seterror: (error: string) => void;
  reseterror: () => void;
  uploading: boolean;
  setuploading: (uploading: boolean) => void;
}
const initialState = {
  error: "",
  uploading: false,
};
const usePopupStore = create<PopupState>((set) => ({
  ...initialState,
  seterror: (error) => set({ error }),
  reseterror: () => set({ error: "" }),
  setuploading: (uploading) => set({ uploading }),
}))


export default usePopupStore;