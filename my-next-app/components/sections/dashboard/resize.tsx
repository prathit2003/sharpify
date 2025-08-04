"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import useBECstore from "@/app/store/backendcallsatom";
import { useSession } from "next-auth/react";
import { Slider } from "@/components/ui/slider";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
const Resize = () => {
  const { image, setImage, Filename, setFilename, FileSize, setFileSize } =
    useImageStore();
  const final_url = useBECstore((state) => state.final_url);
  const setFinalUrl = useBECstore((state) => state.setFinalUrl);
  const { data: session } = useSession();
  const token = (session as any)?.accessToken;
  const [quality, setQuality] = useState(80);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleResize = async () => {
    if (!image) return;
    try {
      const formData = new FormData();
      formData.append("file", image);
      formData.append("quality", quality.toString());

      const response = await axios.post(
        "http://localhost:8000/api/reducesize",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setFilename(response.data.Filename);
      setFileSize(response.data.size);
      setFinalUrl(response.data.url);
    } catch (error) {
      console.error("Error reducing size of image", error);
    }
  };

  return (
    <>
      {final_url === "" && (
        <div className="flex flex-col items-center justify-center gap-4 w-full p-8 text-center">
          <h1 className="text-4xl font-bold text-main">Resize your Image</h1>
          <p className="text-lg -mt-2 text-gray-400">
            Resize image without losing its quality using Refyned.AI.
          </p>
          {!image && (
            <div className="mt-2">
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    setImage(e.target.files[0]);
                  }
                }}
              />
              <Button
                className="group relative rounded-xl gap-3 bg-secondary text-main hover:scale-105 w-full"
                onClick={() => inputRef.current?.click()}
              >
                Upload Image
                <UploadIcon />
              </Button>
            </div>
          )}
          <div className="dashed-border rounded-xl bg-white/80 flex items-center justify-center w-[25vw] aspect-video">
            <p className="text-xl text-main">or drop your files here</p>
          </div>
          {image && (
            <div className="w-[25vw] space-y-2">
              <div className="w-full">
                <Slider
                  defaultValue={[quality]}
                  max={100}
                  step={1}
                  onValueChange={(val) => setQuality(val[0])}
                />
                <p className="text-sm text-gray-300 mt-2">
                  Quality: {quality}%
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 w-full">
                <div className="relative flex items-center gap-4 pl-4 pr-8 py-3 border border-amber-500 rounded-xl shadow-md bg-card">
                  {/* File Info */}
                  <button
                    className="absolute top-0.5 right-1 text-main hover:text-secondary transition-colors"
                    aria-label="Remove file"
                  >
                    <HighlightOffIcon fontSize="small" />
                  </button>
                  <div className="flex flex-col text-left">
                    <h1 className="text-sm font-semibold text-main break-words">
                      {image.name}
                    </h1>
                    <p className="text-xs text-gray-400">
                      {(image.size / 1024).toFixed(2)} KB
                    </p>
                  </div>
                </div>

                <Button
                  className="group relative rounded-xl gap-4 p-6 bg-secondary text-main hover:scale-105 shadow-md hover:shadow-xl"
                  size={"lg"}
                  onClick={handleResize}
                >
                  Resize
                  <span className="ml-2 flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                    >
                      <path d="M5 12h14M13 6l6 6-6 6" />
                    </svg>
                  </span>
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
      {typeof final_url === "string" && final_url != "" && (
        <div className="flex flex-col items-center justify-center gap-4 w-full p-8 text-center">
          <h1 className="text-4xl font-bold text-main">Resize your Image</h1>
          <p className="text-lg text-gray-400">
            Resize image without losing its quality using Refyned.AI.
          </p>
          <div className="dashed-border rounded-xl bg-white/80 flex items-center justify-center w-[25vw] aspect-video">
            <p className="text-xl text-main">or drop your files here</p>
          </div>
          <div className="relative flex flex-col gap-1 px-4 py-3 border border-amber-500 rounded-lg shadow-md">
            {/* Close Icon */}
            <button className="absolute top-1 right-1 text-main hover:text-secondary">
              <HighlightOffIcon fontSize="small" />
            </button>

            {/* File Info */}
            <div className="flex flex-col">
              <h1 className="text-sm font-medium text-main break-all">
                {Filename}
              </h1>
              <p className="text-xs text-gray-500">
                {(FileSize / 1024).toFixed(2)} KB
              </p>
            </div>
          </div>
          <a
            href={final_url as string}
            download
            className="flex item-center bg-secondary text-main rounded-xl py-4 px-6 hover:scale-105"
          >
            Download
            <DownloadIcon fontSize="small" />
          </a>
        </div>
      )}
    </>
  );
};

export default Resize;
