"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useEffect, useRef } from "react";
import axios from "axios";
import useBECstore from "@/app/store/backendcallsatom";
import { useSession } from "next-auth/react";
import usePopupStore from "@/app/store/popupsatom";

const Enhance = () => {
  const { image, setImage } = useImageStore();
  const final_url = useBECstore((state) => state.final_url);
  const setFinalUrl = useBECstore((state) => state.setFinalUrl);
  const { data: session } = useSession();
  const token = (session as any)?.accessToken;

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!image) return;

    const enhanceImage = async () => {
      try {
        const formData = new FormData();
        formData.append("file", image);

        const response = await axios.post(
          "http://localhost:8000/api/enhanceimage",
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
        console.error("Error enhancing image", error);
      }
    };

    enhanceImage();
  }, [image]);

  return (
    <>
      {typeof final_url === "string" && final_url === "" ? (
        <div className="flex flex-col items-center gap-4 w-full p-8 text-center">
          <h1 className="text-4xl font-semibold text-white">Enhance Image</h1>
          <p className="text-lg text-gray-400">
            Improve image quality effortlessly using Sharpify AI.
          </p>
          <img src="images/noimage.jpeg" className="w-1/3 "></img>
          <Input
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
            variant="outline"
            className="group relative rounded-4xl gap-2 bg-gradient-purple text-white hover:scale-105"
            size="lg"
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
        <div className="flex flex-col items-center justify-center gap-4 p-8 m-4">
          <img
            src={final_url as string}
            alt="Enhanced"
            className="w-1/3 aspect-auto"
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

export default Enhance;
