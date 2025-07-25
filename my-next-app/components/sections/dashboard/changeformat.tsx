"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import useBECstore from "@/app/store/backendcallsatom";
import { useSession } from "next-auth/react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const ChangeFormat = () => {
  const { image, setImage } = useImageStore();
  const final_url = useBECstore((state) => state.final_url);
  const setFinalUrl = useBECstore((state) => state.setFinalUrl);
  const { data: session } = useSession();
  const [format, setFormat] = useState("jpg");
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const token = (session as any)?.accessToken;

  useEffect(() => {
    if (!image) return;

    const objectUrl = URL.createObjectURL(image);
    setPreviewUrl(objectUrl);

    const changeFormatOfImage = async () => {
      try {
        const formData = new FormData();
        formData.append("file", image);
        formData.append("format", format);

        const response = await axios.post(
          "http://localhost:8000/api/changeformat",
          formData,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-Type": "multipart/form-data",
            },
          }
        );

        setFinalUrl(response.data.url);
      } catch (error) {
        console.error("Error changing format", error);
      }
    };

    changeFormatOfImage();

    return () => URL.revokeObjectURL(objectUrl);
  }, []);

  return (
    <>
      {typeof final_url === "string" && final_url === "" ? (
        <div className="flex flex-col items-center space-y-4 w-full p-8 text-center">
          <h1 className="text-4xl font-semibold text-white">
            Change Image Format
          </h1>
          <p className="text-lg text-gray-400">
            Change the format of your image effortlessly using Sharpify AI.
          </p>
          {image == null ? (
            <div className="flex flex-col items-center gap-4">
              <img src="images/noimage.jpeg" className="w-full" />
              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) {
                    const selected = e.target.files[0];
                    setImage(selected);
                  }
                }}
              />
              <Button
                variant={"outline"}
                className="group relative rounded-4xl gap-2 bg-gradient-purple text-white hover:scale-105 mt-4"
                size={"lg"}
                onClick={() => inputRef.current?.click()}
              >
                Upload Image
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="white"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M3 15v4a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12V3" />
                </svg>
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-6">
              {previewUrl && (
                <img
                  src={previewUrl}
                  alt="Uploaded Preview"
                  className="w-1/4 aspect-square rounded-xl shadow-lg"
                />
              )}
              <div className="flex flex-col items-center gap-2">
                <h1 className="text-xl font-semibold text-white">
                  {image.name}
                </h1>
                <p className="text-md text-gray-400">
                  {(image.size / 1024).toFixed(2)} KB
                </p>
              </div>
              <div className="flex space-x-4 items-center">
                <Select onValueChange={setFormat}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="jpg" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="jpeg">jpeg</SelectItem>
                    <SelectItem value="png">png</SelectItem>
                    <SelectItem value="webp">webp</SelectItem>
                  </SelectContent>
                </Select>
                <Button
                  variant={"outline"}
                  className="group relative rounded-md gap-4 p-4 bg-gradient-purple text-white hover:scale-105"
                  size={"lg"}
                  onClick={() => inputRef.current?.click()}
                >
                  convert
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
      ) : (
        <div className="flex flex-col items-center justify-center gap-4 p-8 m-4">
          <img
            src={final_url as string}
            alt="Converted"
            className="w-1/3 rounded-xl"
          />
          <a
            href={final_url as string}
            download
            className="bg-gradient-purple text-white rounded-4xl p-4 hover:scale-105"
          >
            Download
          </a>
        </div>
      )}
    </>
  );
};

export default ChangeFormat;
