"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    src: "/images/c1.jpg",
    title: "Enhance Image Quality",
    description:
      "Boost resolution, sharpen details, and improve colors in just one click.",
  },
  {
    src: "/images/c2.jpg",
    title: "Remove Background",
    description:
      "Instantly remove backgrounds with AI, keeping only the subject in perfect detail.",
  },
  {
    src: "/images/background3.jpg",
    title: "Crop & Adjust",
    description:
      "Resize and crop images to fit any platform while maintaining top quality.",
  },
  {
    src: "/images/background.jpg",
    title: "Change Size",
    description:
      "Scale images up or down without losing clarity, perfect for any use case.",
  },
  {
    src: "/images/c3.jpg",
    title: "Change Format",
    description:
      "Convert images between PNG, JPG, and WebP seamlessly while preserving quality.",
  },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setTimeout(() => {
        nextSlide();
      }, 3500);
      return () => clearTimeout(interval);
    }
  }, [isHovered, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10 mb-20 p-6 gap-6">
      {/* Carousel Wrapper */}
      <div
        className="flex flex-col items-center w-full h-120 overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img
          src={slides[currentIndex].src}
          alt={slides[currentIndex].title}
          className="w-full h-full object-cover object-center transition-all duration-500"
        />
      </div>

      {/* Navigation Controls */}
      <div className="flex items-center justify-between w-full max-w-4xl px-6">
        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          <ChevronLeft size={24} />
        </button>

        {/* Heading */}
        <div className="text-black text-center text-3xl font-semibold transition-all duration-500">
          {slides[currentIndex].title}
        </div>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700 transition-all"
        >
          <ChevronRight size={24} />
        </button>
      </div>

      {/* Description */}
      <div className="text-lg text-gray-600 text-center max-w-2xl transition-all duration-500">
        {slides[currentIndex].description}
      </div>

      {/* Dots Navigation */}
      <div className="flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-gray-950" : "bg-gray-400"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
