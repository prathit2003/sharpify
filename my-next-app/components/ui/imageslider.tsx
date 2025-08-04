"use client";

import { useEffect, useRef, useState } from "react";

interface ImageSliderProps {
  path: string;
}

export default function ImageSlider({ path }: ImageSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const updatePosition = (x: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const pos = Math.min(Math.max(x - rect.left, 0), rect.width);
    setSliderX(pos);
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging) updatePosition(e.clientX);
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && e.touches[0]) updatePosition(e.touches[0].clientX);
    };

    const stopDragging = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", stopDragging);
    window.addEventListener("touchmove", handleTouchMove);
    window.addEventListener("touchend", stopDragging);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", stopDragging);
    };
  }, [isDragging]);

  useEffect(() => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setSliderX(rect.width / 2);
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full rounded-2xl overflow-hidden shadow-lg select-none touch-none"
    >
      {/* Base image (blurred) */}
      <img
        src={path}
        alt="Blurred side"
        className="w-full h-full object-cover filter blur-lg absolute inset-0"
      />

      {/* Clear side (masked) */}
      <div
        className="absolute top-0 left-0 h-full overflow-hidden"
        style={{ width: `${sliderX}px` }}
      >
        <img
          src={path}
          alt="Clear side"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Slider handle */}
      <div
        className="absolute top-0 h-full w-1 bg-white z-30 cursor-ew-resize"
        style={{ left: `${sliderX}px` }}
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
      >
        {/* Circle in middle */}
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-6 h-6 bg-white rounded-full border border-gray-300 shadow" />
      </div>
    </div>
  );
}
