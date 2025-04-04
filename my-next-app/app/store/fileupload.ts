import { create } from "zustand";

interface ImageState {
  image: File | null;
  setImage: (file: File | null) => void;
  uploadedUrl: string | null;
  setUploadedUrl: (url: string | null) => void;
}

const useImageStore = create<ImageState>((set) => ({
  image: null,
  setImage: (file) => set({ image: file }),
  uploadedUrl: null,
  setUploadedUrl: (url) => set({ uploadedUrl: url }),
}));

export default useImageStore;
