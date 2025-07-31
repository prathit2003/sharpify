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
      className="text-white opacity-80 group-hover:opacity-100 transition"
    />
  ),
  enhance: (
    <AutoAwesomeRounded
      fontSize="large"
      className="text-white opacity-80 group-hover:opacity-100 transition"
    />
  ),
  tools: (
    <BuildRounded
      fontSize="large"
      className="text-white opacity-80 group-hover:opacity-100 transition"
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
      className="opacity-0 group relative flex flex-col justify-between p-8 rounded-2xl border-2 border:border-white bg-secondary-glass-lightest text-main hover:bg-secondary-glass transition-all duration-300 shadow-xl hover:shadow-2xl aspect-[4/3] transform hover:scale-[1.02]"
    >
      {/* Top icons */}
      <div className="flex items-center justify-between mb-6">
        {iconMap[type]}
        <OpenInNewRounded
          fontSize="medium"
          className="text-main hover:text-primary opacity-50 group-hover:opacity-100 transform group-hover:-translate-y-1 transition-transform duration-300"
        />
      </div>

      {/* Text section */}
      <div>
        <h3 className="text-xl text-main font-bold mb-1">{Heading}</h3>
        <p className="text-md text-gray-300">{SubHeading}</p>
      </div>
    </div>
  );
};

export default Component;
