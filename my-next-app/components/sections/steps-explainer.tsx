"use client";

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
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First step active by default

  return (
    <div className="bg-black w-full flex flex-col md:flex-row justify-center items-center z-20 rounded-3xl pt-8 p-8 px-20">
      {/* Image Container */}
      <div className="w-1/2 aspect-square overflow-hidden rounded-xl shadow-lg">
        <img
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          src="/images/flower.jpg"
          alt="Enhancement Preview"
        />
      </div>

      {/* Steps Section */}
      <div className="w-1/2 aspect-square flex flex-col items-start mt-20 p-6">
        <h1 className="ml-5 pt-10 text-left text-5xl text-white">
          How to enhance image quality
        </h1>
        <div className=" space-y-4 mt-10 w-full">
          {steps.map((step, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveIndex(index)}
              className={`p-4 rounded-lg transition-all duration-300 cursor-pointer border border-transparent 
                ${
                  activeIndex === index
                    ? "backdrop-blur-lg bg-white/10 shadow-lg p-5 border-white"
                    : "bg-black"
                }`}
            >
              <h2 className="text-2xl text-white">{step.title}</h2>
              {activeIndex === index && (
                <p className="text-lg text-gray-300 mt-2">{step.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepExplainer;
