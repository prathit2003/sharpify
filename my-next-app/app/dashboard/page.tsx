"use client";

import { useState, useEffect } from "react";
import { useMediaQuery } from "@mui/material";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";

import CropRender from "@/components/sections/dashboard/crop";
import Enhance from "@/components/sections/dashboard/enhance";
import Resize from "@/components/sections/dashboard/resize";
import Removebg from "@/components/sections/dashboard/removebackground";
import ChangeFormat from "@/components/sections/dashboard/changeformat";

import CropIcon from "@mui/icons-material/Crop";
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
      key: "crop",
      title: "Crop",
      component: <CropRender />,
      icon: <CropIcon fontSize={iconSize} />,
    },
    {
      key: "resize",
      title: "Resize",
      component: <Resize />,
      icon: <PhotoSizeSelectLargeIcon fontSize={iconSize} />,
    },
    {
      key: "removebackground",
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
    <div className="h-full w-full bg-header border-1 rounded-2xl px-4 py-8 min-md:px-2 min-md:py-4">
      <div className="flex flex-col h-full w-full items-center justify-start gap-4">
        <div className="h-1/4 w-3/4 button-shadow rounded-2xl bg-none p-4">
          <div className="grid grid-cols-5 gap-4 w-full p-2 mt-6 bg-gradient-purple rounded-2xl border-2">
            {sectionMap.map(({ key, title, icon }) => {
              const isActive = key === activeSectionKey;
              return (
                <button
                  key={key}
                  onClick={() => router.push(`/dashboard?section=${key}`)}
                  className={`flex flex-col items-center justify-center rounded-lg py-2 transition-all
                  ${
                    isActive
                      ? "text-black scale-105"
                      : "text-gray-300 hover:scale-105 hover:text-gray-900"
                  }
                  text-xs md:text-sm`}
                >
                  {icon}
                  <span className="text-[10px] md:text-sm mt-1 ">{title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Icon Grid */}

        {/* Main Section */}
        <div className="flex flex-col items-center justify-start p-4 w-full  h-[60vh]">
          {activeSection?.component}
        </div>
      </div>
    </div>
  );
};

export default Home;
