"use client";
import {
  BuildRounded,
  BoltRounded,
  AutoAwesomeRounded,
  OpenInNewRounded,
} from "@mui/icons-material";
import { useEffect, useRef } from "react";

interface IconGalleryProps {
  type: "generate" | "enhance" | "tools";
  Heading: string;
  SubHeading: string;
}

const iconMap = {
  generate: (
    <BoltRounded
      fontSize="large"
      className="text-main group-hover:opacity-100 transition"
    />
  ),
  enhance: (
    <AutoAwesomeRounded
      fontSize="large"
      className="text-main  group-hover:opacity-100 transition"
    />
  ),
  tools: (
    <BuildRounded
      fontSize="large"
      className="text-main  group-hover:opacity-100 transition"
    />
  ),
};

const Component: React.FC<IconGalleryProps> = ({
  type,
  Heading,
  SubHeading,
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!ref.current) return;

        if (entry.isIntersecting) {
          ref.current.classList.add("fade-in-up");
          ref.current.classList.remove("opacity-0");
        } else {
          ref.current.classList.remove("fade-in-up");
          ref.current.classList.add("opacity-0");
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="opacity-0 group relative flex flex-col space-y-8 sm:space-y-12  md:space-y-16 lg:space-y-20  p-6 md:p-8 rounded-2xl bg-card hover:bg-card text-main transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:scale-[1.02]"
    >
      {/* Top icons */}
      <div className="flex items-center justify-between">
        {iconMap[type]}
        <OpenInNewRounded
          fontSize="medium"
          className="text-main hover:text-gray-400 opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-transform duration-300"
        />
      </div>

      {/* Text section */}
      <div>
        <h3 className="text-sm md:text-base lg:text-lg text-main font-bold mb-1 md:mb-2 text-nowrap">
          {Heading}
        </h3>
        <p className="text-xs md:text-sm  lg:text-base text-gray-400">
          {SubHeading}
        </p>
      </div>
    </div>
  );
};

export default Component;
