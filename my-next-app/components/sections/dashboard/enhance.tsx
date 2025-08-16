"use client";
import useImageStore from "@/app/store/fileupload";
import useBECstore from "@/app/store/backendcallsatom";
import { useEffect, useRef, useState, DragEvent } from "react";
import { useSession } from "next-auth/react";
import ImageSlider from "@/components/ui/imageslider";
import axios from "axios";
import { Button } from "@/components/ui/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import DownloadIcon from "@mui/icons-material/Download";
import UploadIcon from "@mui/icons-material/Upload";

const Enhance = () => {
  const { image, setImage } = useImageStore();
  const final_url = useBECstore((state) => state.final_url);
  const setFinalUrl = useBECstore((state) => state.setFinalUrl);
  const { data: session } = useSession();
  const token = (session as any)?.accessToken;
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!image) return;

    const enhanceImage = async () => {
      setLoading(true);
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
      } finally {
        setLoading(false);
      }
    };

    enhanceImage();
  }, [image]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) setImage(file);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    const file = e.dataTransfer.files?.[0];
    if (file) setImage(file);
  };

  const handleBrowseClick = () => {
    inputRef.current?.click();
  };

  if (final_url) {
    return (
      <div className="flex flex-col items-center space-y-6 sm:space-y-8 md:space-y-12 p-4">
        <h1 className="text-main text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold text-center">
          Enhanced Image
        </h1>

        <div className="hidden md:block w-full max-w-md  aspect-[4/4] rounded-2xl overflow-hidden shadow-2xl">
          <ImageSlider path={final_url} />
        </div>

        <a
          href={final_url}
          download
          className="mt-4 px-5 py-3 text-main bg-card transition rounded-xl flex items-center gap-2 hover:cursor-pointer hover:scale-105"
        >
          <DownloadIcon fontSize="small" />
          <span className="mr-2">Download Enhanced Image</span>
        </a>
      </div>
    );
  }

  // === Initial Upload State ===
  return (
    <div className="flex flex-col items-center space-y-8 w-full max-w-screen-xl max-h-full">
      {/* Heading */}
      <div className="w-full text-center">
        <h1 className="text-main text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold">
          Free Photo Enhancer
        </h1>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg mt-2">
          Make photos clearer and sharper in just a click with AI-powered
          technology. The Picsart Photo Enhancer boosts image quality, adds
          detail, and gets your photos ready to share. Plus, you can save
          lower-resolution images for free!
        </p>
      </div>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full px-2">
        {/* Image Slider Section */}
        <div className="hidden md:flex w-1/3 rounded-2xl shadow-2xl">
          <div className="aspect-[4/4] w-full rounded-2xl overflow-hidden">
            <ImageSlider path="/images/clear.webp" />
          </div>
        </div>

        {/* Upload Section */}
        <div className="flex flex-col items-center justify-center gap-8 bg-card rounded-2xl shadow-2xl p-4 w-full lg:w-1/4 max-w-[500px]">
          <div className="border-[#ff9900] rounded-2xl border-2 p-4 w-full">
            {/* Icon Row */}
            <div className="space-y-4 p-4">
              <div className="flex items-center justify-center space-x-4">
                <img
                  src="/images/blur.webp"
                  className="w-8 md:w-10 lg:w-12 aspect-square object-cover rounded-xl border-2 shadow-2xl border-gray-300"
                  alt="Blurred"
                />
                <ArrowRightAltIcon fontSize="medium" className="text-main" />
                <img
                  src="/images/clear.webp"
                  className="w-8 md:w-10 lg:w-12 aspect-square object-cover rounded-xl border-2 shadow-2xl border-gray-300"
                  alt="Clear"
                />
              </div>
              <div className="space-y-2 flex flex-col items-center justify-center ">
                <h1 className="text-gray-200 font-bold text-center text-xs md:text-sm lg:text-base">
                  Refyned.AI Enhance
                </h1>
                <input
                  type="file"
                  accept="image/*"
                  ref={inputRef}
                  onChange={handleFileChange}
                  className="hidden"
                />
                <Button
                  onClick={handleBrowseClick}
                  className="mb-4 px-8 py-4 text-xs sm:text-sm md:text-base text-main rounded-xl bg-secondary hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2"
                  type="button"
                >
                  <UploadIcon sx={{ fontSize: 20, color: "#ffffff" }} />
                  Browse files
                </Button>
              </div>
            </div>

            {/* Drop Zone */}
            <div
              className={`flex flex-col items-center justify-center p-6 rounded-2xl bg-white/30 w-full dashed-border shadow-2xl cursor-pointer transition ${
                dragActive ? "bg-white/60" : ""
              }`}
              onDragOver={(e) => {
                e.preventDefault();
                setDragActive(true);
              }}
              onDragLeave={() => setDragActive(false)}
              onDrop={handleDrop}
            >
              <h1 className="text-gray-200 text-center text-sm md:text-base lg:text-lg">
                or drop your image here
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Enhance;
