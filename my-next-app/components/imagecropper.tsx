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
  const handlereset = () => {
    setCrop({ x: 0, y: 0 });
    setCroppedAreaPixels({ width: 0, height: 0 });
    setZoom(1);
    if (cropperRef.current) {
      const cropper = cropperRef.current?.cropper;
      cropper.reset();
    }
    console.log("Reset crop state and uploaded URL");
  };
  return (
    <div className="flex  items-center p-4 bg-black">
      {/* Left: Crop Data Table */}
      <div className=" flex flex-col items-center justify-between rounded-lg bg-black  shadow-sm border-2 p-8 w-full h-auto">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col justify-evenly items-left m-4 p-2">
            <h1 className="pl-4 font-medium text-xl text-white">
              crop position
            </h1>
            <div className="flex item-center justify-evenly gap-2 my-4 p-2">
              <div className="flex flex-col items-center ">
                <label className="block text-lg m-2 text-white">
                  position(X)
                </label>
                <input
                  type="text"
                  value={crop.x}
                  disabled
                  className="input-field border-1 rounded-sm  p-2 text-white mx-2"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label className="block text-lg m-2 text-white">
                  position(Y)
                </label>
                <input
                  type="text"
                  value={crop.y}
                  disabled
                  className="input-field border-1 rounded-sm  p-2 text-white mx-2"
                />
              </div>
            </div>
            <button
              className="text-white text-lg my-4 bg-red-500 hover:bg-red-700 rounded-md px-4 py-2 transition duration-300 ease-in-out hover:scale-105"
              onClick={handlereset}
            >
              reset
            </button>
          </div>

          <div className="flex flex-col justify-evenly items-left m-4 p-2">
            <h1 className="pl-4 font-medium text-xl text-white">
              crop reactangle
            </h1>
            <div className="flex item-center justify-evenly gap-2 my-4 p-2">
              <div className="flex flex-col items-center ">
                <label className="block text-lg m-2 text-white">Width</label>
                <input
                  type="text"
                  value={croppedAreaPixels?.width || 0}
                  disabled
                  className="input-field border-1 rounded-sm  p-2 text-white mx-2"
                />
              </div>
              <div className="flex flex-col items-center ">
                <label className="block text-lg m-2 text-white">Height</label>
                <input
                  type="text"
                  value={croppedAreaPixels?.height || 0}
                  disabled
                  className="input-field border-1 rounded-sm  p-2 text-white"
                />
              </div>
            </div>
            <Button
              onClick={handleCrop}
              className="mt-8 border-2 border-white text-white rounded-md px-4 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out hover:scale-105"
              disabled={!imageUrl} // Disable if no image URL is provided
            >
              Crop & Upload
            </Button>
          </div>
        </div>
      </div>

      {/* Right: Image Cropper */}
      <div className="rounded-2xl bg-black p-4 w-full aspect-auto">
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
