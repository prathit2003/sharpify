import { create } from "zustand";

interface AuthState {
  email: string;
  password: string;
  username: string;
  confirmPass: string;
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUsername: (username: string) => void;
  setConfirmPass: (confirmPass: string) => void;
  reset: () => void;
}
const initialState = {
  email: "",
  password: "",
  username: "",
  confirmPass: "",
};

const useAuthStore = create<AuthState>((set) => ({
  email: "",
  password: "",
  username: "",
  confirmPass: "",
  setEmail: (email) => set({ email }),
  setPassword: (password) => set({ password }),
  setUsername: (username) => set({ username }),
  setConfirmPass: (confirmPass) => set({ confirmPass }),
  reset: () => set(initialState),
}));

export default useAuthStore;
