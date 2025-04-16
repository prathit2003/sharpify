// app/store/backendcallsatom.ts
"use client";

// Removed unused import of createStore
import { create } from "zustand";

interface BCEstate {
  section: string;
  final_url: string;
  toggle: boolean;
  setFinalUrl: (final_url: string) => void;
  setSection: (section: string) => void;
  setToggle: (toggle: boolean) => void;
  reset: () => void;
}

const initialState = {
  section: "",
  final_url: "",
  toggle: true,
};

const useBECstore = create<BCEstate>((set) => ({
  ...initialState,
  setFinalUrl: (final_url: string) => {
    console.log("Setting final_url in store:", final_url);
    set({ final_url });
  },
  setSection: (section: string) => set({ section }),
  setToggle: (toggle: boolean) => set({ toggle }),
  reset: () => set(initialState),
}));

export default useBECstore;
