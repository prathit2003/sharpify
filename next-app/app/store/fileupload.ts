import { create } from "zustand";

interface ImageState {
  image: File | null;
  setImage: (file: File | null) => void;

  uploadedUrl: string | null;
  setUploadedUrl: (url: string | null) => void;

  Filename: string | null;
  setFilename: (name: string | null) => void;

  FileSize: number;
  setFileSize: (size: number) => void;

  Resize: number;
  setResize: (resize: number) => void;
}

const useImageStore = create<ImageState>((set) => ({
  image: null,
  setImage: (file) => set({ image: file }),

  uploadedUrl: null,
  setUploadedUrl: (url) => set({ uploadedUrl: url }),

  Filename: null,
  setFilename: (name) => set({ Filename: name }),

  FileSize: 0,
  setFileSize: (size) => set({ FileSize: size }),

  Resize: 0,
  setResize: (resize) => set({ Resize: resize }),
}));

export default useImageStore;
