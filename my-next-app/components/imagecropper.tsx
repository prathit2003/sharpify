import React, { useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import "react-cropper/node_modules/cropperjs/dist/cropper.css";
import useCropStore from "../app/store/cropatom";
import useImageStore from "@/app/store/fileupload";
import axios from "axios";
import { Button } from "./ui/button";

const ImageCropper = ({ imageUrl }: { imageUrl: string }) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const { setUploadedUrl } = useImageStore();
  const {
    crop,
    zoom,
    setCrop,
    setZoom,
    setCroppedAreaPixels,
    croppedAreaPixels,
  } = useCropStore();

  const handleCrop = async () => {
    if (!croppedAreaPixels) return alert("No crop area selected");

    try {
      const response = await axios.post("/api/crop", {
        imageUrl,
        cropArea: {
          x: crop.x,
          y: crop.y,
          width: croppedAreaPixels.width,
          height: croppedAreaPixels.height,
        },
      });

      if (response.data.croppedImageUrl) {
        setUploadedUrl(response.data.croppedImageUrl);
        console.log("Cropped image uploaded:", response.data.croppedImageUrl);
      }
    } catch (error) {
      console.error("Error cropping image:", error);
    }
  };

  const onCrop = () => {
    if (cropperRef.current) {
      // const cropper = cropperRef.current as any;
      const cropper = cropperRef.current?.cropper;
      const { x, y, width, height } = cropper.getData(true);
      setCrop({ x, y });
      setCroppedAreaPixels({ width, height });
    }
  };

  return (
    <div className="flex justify-evenly items-start gap-8 p-4">
      {/* Left: Crop Data Table */}
      <div className="rounded-2xl shadow-2xl bg-white p-6 w-full max-w-md">
        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">
                X
              </label>
              <input
                type="text"
                value={crop.x}
                disabled
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Y
              </label>
              <input
                type="text"
                value={crop.y}
                disabled
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Width
              </label>
              <input
                type="text"
                value={croppedAreaPixels?.width || 0}
                disabled
                className="input-field"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Height
              </label>
              <input
                type="text"
                value={croppedAreaPixels?.height || 0}
                disabled
                className="input-field"
              />
            </div>
          </div>
          <Button
            onClick={handleCrop}
            variant="outline"
            className="btn-primary"
          >
            Crop
          </Button>
        </div>
      </div>

      {/* Right: Image Cropper */}
      <div className="rounded-2xl bg-white/50 overflow-hidden max-w-[500px]">
        <Cropper
          src={imageUrl}
          className="w-full h-auto" // Ensures the image maintains aspect ratio
          initialAspectRatio={1}
          aspectRatio={1}
          guides={true}
          viewMode={1}
          cropBoxResizable={true}
          ref={cropperRef}
          crop={onCrop}
        />
      </div>
    </div>
  );
};

export default ImageCropper;
