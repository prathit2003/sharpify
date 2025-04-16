"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useRef } from "react";
import axios from "axios";
import useBECstore from "@/app/store/backendcallsatom";
import { useSession } from "next-auth/react";
import usePopupStore from "@/app/store/popupsatom";
import useUIStore from "@/app/store/UIatom";

const Resize = () => {
  const { setUploadedUrl, uploadedUrl } = useImageStore();
  const final_url = useBECstore((state) => state.final_url);
  const setFinalUrl = useBECstore((state) => state.setFinalUrl);

  const { data: session } = useSession();
  const token = (session as any)?.accessToken;
  const { setPriviewpopup } = usePopupStore();

  useEffect(() => {
    const reduceImageSize = async () => {
      try {
        const fetched_url = await axios.post(
          "http://localhost:8000/api/reducesize",
          {
            image_url: uploadedUrl,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setFinalUrl(fetched_url.data.url);
      } catch (error) {
        console.error("Error reducing size:", error);
      }
    };

    if (uploadedUrl) {
      reduceImageSize();
    }
  }, [uploadedUrl]);

  useEffect(() => {
    if (final_url !== "") {
      setTimeout(() => {
        setPriviewpopup(true);
      }, 10);
    }
  }, [final_url]);

  return (
    <div className="flex flex-col items-center gap-4 w-full p-8 text-center bg-none">
      <div>
        <h1 className="text-4xl font-semibold text-white">Resize your file</h1>
        <p className="text-lg font-medium text-grey-400">
          Resize files to your desired dimensions, improve its quality
        </p>
      </div>

      <CldUploadWidget
        uploadPreset="prathit_web_images"
        onSuccess={(result) => {
          if (
            result?.info &&
            typeof result.info === "object" &&
            "secure_url" in result.info
          ) {
            setUploadedUrl(result.info.secure_url);
          }
        }}
        onQueuesEnd={(result, { widget }) => {
          widget.close();
        }}
      >
        {({ open }) => (
          <Button
            variant={"outline"}
            className="group relative items-center rounded-4xl gap-2 bg-gradient-purple transition-all hover:scale-105 active:scale-95 text-white"
            size={"lg"}
            onClick={() => open()}
          >
            Upload Image
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5 transition-transform group-hover:scale-110"
            >
              <path d="M3 15v4c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2v-4M17 9l-5 5-5-5M12 12v-9" />
            </svg>
            <span className="absolute inset-0 rounded-full ring-1 ring-inset ring-card-foreground/10 opacity-0 transition-opacity group-hover:opacity-100"></span>
          </Button>
        )}
      </CldUploadWidget>
    </div>
  );
};

export default Resize;
