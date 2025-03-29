"use client";

import useUIStore from "@/app/store/UIatom";
import { useState } from "react";

const steps = [
  {
    title: "Upload Your Image",
    description: "Drag and drop your image to start the enhancement process.",
  },
  {
    title: "Choose Enhancement Options",
    description:
      "Select from background removal, upscaling, color correction, or sharpening.",
  },
  {
    title: "Preview & Adjust",
    description:
      "Check the preview, tweak the settings, and apply final adjustments.",
  },
  {
    title: "Download & Share",
    description:
      "Save your enhanced image in high quality and share instantly.",
  },
];

const StepExplainer = () => {
  const {} = useUIStore();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative bg-black w-full flex flex-col justify-center items-center z-20 rounded-3xl -mt-16 pt-8 p-2">
      <h1 className="text-center text-white text-3xl font-semibold mt-10 mb-6">
        Effortless Image Enhancement, Clear & Perfect in Just a Few Clicks!
      </h1>

      <div className="flex flex-col md:flex-row justify-center items-center w-full gap-10">
        {/* Image Container */}
        <div className="w-1/3 aspect-square overflow-hidden rounded-xl shadow-lg">
          <img
            className="object-cover w-full aspect-square transition-transform duration-300 hover:scale-105"
            src="/images/flower.jpg"
            alt="Enhancement Preview"
          />
        </div>

        {/* Steps Section */}
        <div className="w-full md:w-1/3 flex flex-col gap-4">
          {steps.map((step, i) => (
            <div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="flex flex-row items-center p-10 bg-black rounded-2xl shadow-lg transition-all duration-300 ease-in-out hover:border-gray-600 hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:scale-105 cursor-pointer overflow-hidden"
              style={{
                maxHeight: hoveredIndex === i ? "7rem" : "4rem",
                transition: "max-height 0.3s ease-in-out",
              }}
            >
              <h1 className="text-2xl font-bold p-4 text-white">{i + 1}</h1>
              <div className="flex flex-col">
                <h2 className="text-white text-xl font-semibold">
                  {step.title}
                </h2>
                <p
                  className={`text-white text-lg mt-1 transition-opacity duration-300 ${
                    hoveredIndex === i ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {step.description}
                </p>
                {step.title === "Choose Enhancement Options" && (
                  <div className="text-yellow-400 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fillRule="nonzero"
                      viewBox="0 0 24 24"
                      className="w-6 h-6"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepExplainer;
