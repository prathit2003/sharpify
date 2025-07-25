"use client";
import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Enhance from "@/components/sections/dashboard/enhance";
import Resize from "@/components/sections/dashboard/resize";
import Removebg from "@/components/sections/dashboard/removebackground";
import ChangeFormat from "@/components/sections/dashboard/changeformat";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";

const Home = () => {
  const isSmall = useMediaQuery("(max-width: 640px)");
  const isMedium = useMediaQuery("(max-width: 1024px)");
  const router = useRouter();
  const searchParams = useSearchParams();

  const sectionParam = searchParams.get("section") || "enhance";
  const [activeSectionKey, setActiveSectionKey] = useState(sectionParam);

  useEffect(() => {
    setActiveSectionKey(sectionParam);
  }, [sectionParam]);

  let iconSize: "small" | "medium" | "large" = "large";
  if (isSmall) iconSize = "small";
  else if (isMedium) iconSize = "medium";

  const sectionMap = [
    {
      key: "enhance",
      title: "Enhance",
      component: <Enhance />,
      icon: <AutoAwesomeIcon fontSize={iconSize} />,
    },
    {
      key: "resize",
      title: "Resize",
      component: <Resize />,
      icon: <PhotoSizeSelectLargeIcon fontSize={iconSize} />,
    },
    {
      key: "rembg",
      title: "Remove Background",
      component: <Removebg />,
      icon: <FormatColorFillIcon fontSize={iconSize} />,
    },
    {
      key: "changeformat",
      title: "Change Format",
      component: <ChangeFormat />,
      icon: <FormatPaintIcon fontSize={iconSize} />,
    },
  ];

  const activeSection = sectionMap.find(
    (item) => item.key === activeSectionKey
  );

  return (
    <div className="h-full w-full bg-header border-1 rounded-2xl flex items-center justify-center px-4 py-8 min-md:px-2 min-md:py-4">
      <div className="h-full w-full p-10 flex items-center justify-center">
        {activeSection?.component}
      </div>
    </div>
  );
};

export default Home;
