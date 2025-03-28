"use client";

import useImageStore from "@/app/store/fileupload";
import usePopupStore from "@/app/store/popupsatom";
import { useState } from "react";

export default function UploadImage() {
  const { image, setImage, uploadedUrl, setUploadedUrl } = useImageStore();
  const { uploading, seterror, setuploading } = usePopupStore();
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) {
      alert("Please select a file first!");
      return;
    }

    setLoading(true);
    setuploading(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = async () => {
      try {
        const response = await fetch("/api/upload", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ file: reader.result }),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Upload failed");

        setUploadedUrl(data.url);
        console.log("Uploaded Image URL:", data.url);
      } catch (error: any) {
        console.error("Upload Error:", error.message);
        seterror("error");
      } finally {
        setLoading(false);
        setuploading(false);
      }
    };
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Uploading..." : "Upload"}
      </button>
      {uploadedUrl && (
        <div>
          <a href={uploadedUrl} target="_blank" rel="noopener noreferrer">
            {uploadedUrl}
          </a>
        </div>
      )}
    </div>
  );
}
