import { create } from "zustand";

interface CropState {
  crop: { x: number; y: number };
  zoom: number;
  croppedAreaPixels: any | null;
  setCrop: (crop: { x: number; y: number }) => void;
  setZoom: (zoom: number) => void;
  setCroppedAreaPixels: (pixels: any | null) => void;
}

const useCropStore = create<CropState>((set) => ({
  crop: { x: 0, y: 0 },
  zoom: 1,
  croppedAreaPixels: null,
  setCrop: (crop) => set({ crop }),
  setZoom: (zoom) => set({ zoom }),
  setCroppedAreaPixels: (pixels) => set({ croppedAreaPixels: pixels }),
}));

export default useCropStore;
