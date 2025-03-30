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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(0); // First step hover effect activated by default

  return (
    <div className=" bg-black w-full flex flex-col md:flex-row justify-center items-center z-20 rounded-3xl  pt-8 p-8 px-20">
      {/* Image Container */}
      <div className="w-1/2 aspect-square overflow-hidden rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src="/images/flower.jpg"
          alt="Enhancement Preview"
        />
      </div>

      {/* Steps Section */}
      <div className="w-1/2 aspect-square flex-col justify-between items-center mt-20 p-6">
        <div>
          <h1 className=" ml-5 pt-10 text-left text-5xl text-white">
            How to enhance image quality
          </h1>
          <div className="mt-6 space-y-4">
            {steps.map((step, index) => (
              <div
                key={index}
                className="p-4 rounded-lg bg-black hover:shadow-md hover:p-5 hover:border-0.5 hover:border-white transition duration-300"
              >
                <h2 className="text-2xl text-white">{step.title}</h2>
                <p className="text-lg text-gray-300">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepExplainer;
