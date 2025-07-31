"use client";

import { Button } from "@/components/ui/button";
import React from "react";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import Link from "next/link";

const Sidebar = () => {
  const { ActiveSidebarElement, setActiveSidebarElement } = useUIStore();
  const router = useRouter();

  const elements = [
    {
      title: "enhance",
      icon: <AutoAwesomeIcon fontSize="small" />,
      link: "/tools?section=enhanceimage",
    },
    {
      title: "resize",
      icon: <PhotoSizeSelectLargeIcon fontSize="small" />,
      link: "/tools?section=reducesize",
    },
    {
      title: "remove background",
      icon: <FormatPaintIcon fontSize="small" />,
      link: "/tools?section=removebackground",
    },
    {
      title: "change format",
      icon: <FormatColorFillIcon fontSize="small" />,
      link: "/tools?section=changeformat",
    },
  ];

  const handleClick = (index: number) => {
    setActiveSidebarElement(index);
  };

  return (
    <div className="flex flex-col items-start justify-between h-full rounded-2xl bg-card border px-2 py-3 sm:px-4 sm:py-4">
      <div className="bg-main w-full flex items-center justify-center h-1/3 rounded-xl my-2 p-2">
        <div className="flex flex-col items-center space-y-3">
          <div className="flex items-center space-x-2">
            <img />
            <h1
              className="text-main font-semibold text-[8px] sm:text-xs 
            md:text-sm text-center"
            >
              Try our pro version
            </h1>
          </div>
          <p
            className="text-main text-[8px] sm:text-xs  md:text-sm 
          text-center px-1"
          >
            Enjoy the latest version of real esgran upscaling AI and cloudinery
            cloud storage for your files.
          </p>
          <Button className="bg-none text-white font-medium rounded-xl text-[8px]sm:text-xs md:text-sm py-1.5 sm:py-2 px-3 sm:px-4 button-shadow hover:scale-105 transition-all duration-300">
            Get pro verion
          </Button>
        </div>
      </div>

      {/* Navigation Links */}
      <div className="flex flex-col items-center justify-center w-full gap-1 sm:gap-2">
        {elements.map((element, index) => (
          <Link
            key={index}
            href={`${element.link}`}
            onClick={() => handleClick(index)}
            className={`flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer w-full transition-all
              ${
                ActiveSidebarElement === index
                  ? "bg-gradient-purple"
                  : "hover:bg-gradient-purple"
              }`}
          >
            <div className="text-base sm:text-xl text-white">
              {element.icon}
            </div>
            <h1 className="text-white font-medium text-xs sm:text-sm">
              {element.title}
            </h1>
          </Link>
        ))}
      </div>

      {/* Storage Info */}
      <div className="flex flex-col items-start space-y-1 sm:space-y-2 p-1 sm:p-2 w-full">
        <p className="text-left font-semibold text-xs sm:text-sm text-white">
          Current Storage
        </p>
        <p className="text-left font-medium text-[10px] sm:text-xs text-white">
          0 Bytes / 100 MB used
        </p>
        <p className="text-left font-medium text-[10px] sm:text-xs text-gray-400">
          Enjoy up to 10 GB more storage with Pro.
        </p>
        <Button className="bg-none border-2 border-green text-green font-medium rounded-3xl text-xs sm:text-sm py-1.5 sm:py-2 px-3 sm:px-4 hover:scale-105 transition-all duration-300 w-full">
          Upgrade to Pro
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
