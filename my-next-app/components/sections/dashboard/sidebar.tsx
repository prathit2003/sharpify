"use client";

import { Button } from "@/components/ui/button";
import React, { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
import { BoltRounded } from "@mui/icons-material";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import PhotoSizeSelectLargeIcon from "@mui/icons-material/PhotoSizeSelectLarge";
import FormatPaintIcon from "@mui/icons-material/FormatPaint";
import FormatColorFillIcon from "@mui/icons-material/FormatColorFill";
import Link from "next/link";

const Sidebar = () => {
  const { ActiveSidebarElement, setActiveSidebarElement } = useUIStore();
  const searchParams = useSearchParams();
  const section = searchParams.get("section");

  const elements = [
    {
      title: "enhance",
      icon: <AutoAwesomeIcon fontSize="small" />,
      link: "/tools?section=enhanceimage",
      section: "enhanceimage",
    },
    {
      title: "resize",
      icon: <PhotoSizeSelectLargeIcon fontSize="small" />,
      link: "/tools?section=reducesize",
      section: "reducesize",
    },
    {
      title: "remove background",
      icon: <FormatPaintIcon fontSize="small" />,
      link: "/tools?section=removebackground",
      section: "removebackground",
    },
    {
      title: "change format",
      icon: <FormatColorFillIcon fontSize="small" />,
      link: "/tools?section=changeformat",
      section: "changeformat",
    },
  ];

  // Dynamically set active tab based on section param
  useEffect(() => {
    const index = elements.findIndex((el) => el.section === section);
    if (index !== -1) {
      setActiveSidebarElement(index);
    }
  }, [section]);

  const handleClick = (index: number) => {
    setActiveSidebarElement(index);
  };

  return (
    <div className="flex flex-col items-start justify-between h-full w-full rounded-2xl bg-header px-2 py-3 sm:px-4 sm:py-4 space-y-8">
      {/* Top Block */}

      <div className="flex flex-col items-center space-y-4 w-full mt-4">
        <h1 className="text-left text-xs sm:text-sm text-main px-2">
          Try our new feature and Bring Your Imagination to Life!
        </h1>

        <Link
          href="/genrate"
          className="flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg bg-card cursor-pointer w-full transition-all"
        >
          <div className="text-base md:text-md lg:text-xl text-main">
            <BoltRounded fontSize="small" />
          </div>
          <h1 className="text-main font-medium text-xs md:text-sm">genrate</h1>
        </Link>
      </div>

      {/* Navigation */}
      <div className="flex flex-col items-center justify-center w-full gap-1 sm:gap-2">
        {elements.map((element, index) => (
          <Link
            key={index}
            href={element.link}
            onClick={() => handleClick(index)}
            className={`flex items-center gap-2 px-3 sm:px-6 py-1.5 sm:py-2 rounded-lg cursor-pointer w-full transition-all
              ${
                ActiveSidebarElement === index
                  ? "bg-secondary"
                  : "hover:cursor-pointer"
              }`}
          >
            <div className="text-base md:text-md lg:text-xl text-main">
              {element.icon}
            </div>
            <h1 className="text-main font-medium text-xs md:text-sm">
              {element.title}
            </h1>
          </Link>
        ))}
      </div>

      {/* Storage Info */}
      <div className="flex flex-col items-start space-y-2 sm:space-y-4 p-2 sm:p-4 w-full">
        <div className="spacey-1 sm:space-y-2">
          <p className="text-left font-semibold text-xs sm:text-sm text-main">
            Current Storage
          </p>
          <p className="text-left font-medium text-[10px] sm:text-xs text-main">
            0 Bytes / 100 MB used
          </p>
          <p className="text-left font-medium text-[10px] sm:text-xs text-gray-400">
            Enjoy up to 10 GB more storage with Pro.
          </p>
        </div>
        <Button className="text-main bg-card  ftext-xs sm:text-sm md:text-base px-4 sm:px-6 py-2 sm:py-4 rounded-3xl hover:scale-105 transition-all duration-300 w-full">
          Upgrade to Pro
        </Button>
      </div>
    </div>
  );
};

export default Sidebar;
