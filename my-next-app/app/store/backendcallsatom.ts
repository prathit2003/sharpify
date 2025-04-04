import { create } from "zustand";

interface BCEstate {
  section: string;
  toggle: boolean;
  setSection: (section: string) => void;
  setToggle: (toggle: boolean) => void;
  reset: () => void;
}
const initialState = {
  section: "",
  toggle: true,
};

const useBECstore = create<BCEstate>((set) => ({
  section: "",
  toggle: true,
  setSection: (section: string) => set({ section }),
  setToggle: (toggle: boolean) => set({ toggle }),
  reset: () => set(initialState),
}));

export default useBECstore;
