"use client";

import { Button } from "@/components/ui/button";
import usePopupStore from "@/app/store/popupsatom";
import { Close as CloseIcon } from "@mui/icons-material";
import useBECstore from "@/app/store/backendcallsatom";

const PrivewPopup = () => {
  const { setFinalUrl, final_url } = useBECstore();
  const { closepopup } = usePopupStore();

  const getFileName = (url: string) => {
    const parts = url.split("/");
    return parts[parts.length - 1] || "downloaded_image.png";
  };

  const handleDownload = async () => {
    try {
      const response = await fetch(final_url);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = getFileName(final_url);
      document.body.appendChild(link);
      link.click();
      link.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading image:", error);
    }
  };

  return (
    <div>
      <div className="relative bg-header rounded-2xl shadow-lg p-4 w-80 border-2 z-4">
        <button
          className="absolute top-2 right-2"
          onClick={() => {
            closepopup();
            setFinalUrl("");
          }}
        >
          <CloseIcon className="text-white" />
        </button>
        {final_url ? (
          <div className="flex flex-col items-center">
            <img
              src={final_url}
              alt="Preview"
              className="w-full h-auto rounded-lg mb-4"
            />
            <div className="flex items-center justify-evenly w-full my-4 p-4">
              <Button
                className="bg-gradient-purple text-white rounded-lg px-4 py-2 flex items-center"
                onClick={() => window.open(final_url, "_blank")}
              >
                <span>Preview</span>
              </Button>
              <Button
                className="bg-gradient-purple text-white rounded-lg px-4 py-2 flex items-center justify-center font-medium shadow hover:opacity-90 transition"
                onClick={handleDownload}
              >
                Download
              </Button>
            </div>
          </div>
        ) : (
          <p className="text-white font-bold">No image to preview</p>
        )}
      </div>
    </div>
  );
};

export default PrivewPopup;
