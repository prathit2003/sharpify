"use client"

import useImageStore from "@/app/store/fileupload";
import usePopupStore from "@/app/store/popupsatom";
import axios from "axios";


export default function UploadImage() {
  const { image, setImage, uploadedUrl, setUploadedUrl } = useImageStore();
  const { uploading, seterror, setuploading } = usePopupStore();


  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setImage(file);
  }

  const handleUpload = async () => {
    if (!image) {
      alert("Please select a file first!");
      return;
    }


    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = async () => {
      try {
        const response = await axios.post('/api/upload', {
          file: reader.result,
        });

        setUploadedUrl(response.data.url);
        setuploading(true);
        console.log('Uploaded Image URL:', response.data.url);
      } catch (error: any) {
        console.error('Upload Error:', error.response?.data || error.message);
      }
    };
  }

  return (
    <div>
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleUpload}>Upload</button>
      {uploading && <div><a>{uploadedUrl}</a></div>}
    </div>
  )
}