"use client";
import React, { useEffect, useRef } from "react";
import Cropper, { ReactCropperElement } from "react-cropper";
import useUIStore from "@/app/store/UIatom";
import "react-cropper/node_modules/cropperjs/dist/cropper.css";
import useCropStore from "@/app/store/cropatom";
import useImageStore from "@/app/store/fileupload";
import axios from "axios";
import { Button } from "@/components/ui/button";
import useBECstore from "@/app/store/backendcallsatom";

const ImageCropper = ({ imageUrl }: { imageUrl: string }) => {
  const cropperRef = useRef<ReactCropperElement>(null);
  const { setFinalUrl, final_url } = useBECstore();
  const { setloading } = useUIStore();
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

    setloading(true);

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
        setFinalUrl(response.data.croppedImageUrl);
        setUploadedUrl(response.data.croppedImageUrl);
        console.log("Cropped image uploaded:", response.data.croppedImageUrl);
      }
    } catch (error) {
      console.error("Error cropping image:", error);
    } finally {
      setloading(false);
    }
  };

  const onCrop = () => {
    if (cropperRef.current) {
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
    <div className="flex flex-col items-center rounded-2xl justify-evenly border-2 bg-header w-full h-full p-4">
      <div className="rounded-2xl bg-header w-full max-w-3xl aspect-square overflow-hidden">
        <Cropper
          src={imageUrl}
          className="w-full max-w-1/2 aspect-video object-contain"
          initialAspectRatio={1}
          aspectRatio={1}
          guides={true}
          viewMode={1}
          cropBoxResizable={true}
          ref={cropperRef}
          crop={onCrop}
        />
      </div>

      <div className="flex gap-4 mt-6">
        <Button
          onClick={handleCrop}
          className="border-2 border-white text-white rounded-md px-4 py-2 hover:bg-black hover:text-white transition duration-300 ease-in-out hover:scale-105"
          disabled={!imageUrl}
        >
          Crop & Upload
        </Button>

        <Button
          onClick={handlereset}
          className="border-2 border-white text-white rounded-md px-4 py-2 hover:bg-gray-700 hover:text-white transition duration-300 ease-in-out hover:scale-105"
        >
          Reset
        </Button>
      </div>
    </div>
  );
};

export default ImageCropper;
