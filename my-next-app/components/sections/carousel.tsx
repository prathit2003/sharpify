"use client";

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const images = [
  {
    src: "/images/slide-1.jpg",
    text: "Slide 1 - Print bravely with increased photo resolution",
  },
  { src: "/images/slide-2.jpg", text: "Slide 2 - Explore the Beauty" },
  { src: "/images/slide-3.jpg", text: "Slide 3 - Adventure Awaits" },
];

const CustomCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) {
      const interval = setTimeout(() => {
        nextSlide();
      }, 2000);
      return () => clearTimeout(interval);
    }
  }, [isHovered, currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="relative flex flex-col items-center justify-center h-screen p-6">
      {/* Carousel Wrapper */}
      <div
        className="relative w-full max-w-4xl h-96 overflow-hidden rounded-lg shadow-lg"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image */}
        <img
          src={images[currentIndex].src}
          alt={`Slide ${currentIndex + 1}`}
          className="w-full h-full object-cover transition-all duration-500"
        />

        {/* Text Overlay at Bottom */}
        <div className="absolute bottom-0 left-0 w-full bg-black/60 text-white p-4 text-center text-lg">
          {images[currentIndex].text}
        </div>
      </div>

      {/* Prev Button */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
      >
        <ChevronLeft size={24} />
      </button>

      {/* Next Button */}
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 bg-gray-900 text-white p-3 rounded-full shadow-lg hover:bg-gray-700"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-blue-600" : "bg-gray-400"
            } transition-all duration-300`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default CustomCarousel;
