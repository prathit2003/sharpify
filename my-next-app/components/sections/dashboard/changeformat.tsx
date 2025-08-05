"use client";

import useImageStore from "@/app/store/fileupload";
import { Button } from "@/components/ui/button";
import { useState, useRef } from "react";
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
  const inputRef = useRef<HTMLInputElement>(null);
  const token = (session as any)?.accessToken;
  const changeFormatOfImage = async () => {
    try {
      if (!image) return;
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

  return <></>;
};

export default ChangeFormat;
