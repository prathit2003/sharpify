"use client";
import { Button } from "../ui/button";

const Hero = () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  return (
    <section className=" relative flex flex-col items-start justify-between w-full my-20">
      <div className="flex items-center justify-center mx-6 mt-10 p-4">
        <h1 className="text-8xl text-main font-medium leading-tight">
          TRANSFORM YOUR IMAGES <br></br>
          <span className="text-primary text-cyan">INSTANTLY</span> WITH{" "}
          <span className="text-primary text-cyan whitespace-nowrap">
            AI-POWERED
          </span>{" "}
          ENHANCEMENT
        </h1>
      </div>
      <Button className="mx-12 mt-2 px-8 py-8 text-4xl font-semibold text-cyan border-2 border-cyan-400 bg-none rounded-4xl hover:bg-mint hover:scale-105 transition duration-300 ease-in-out flex items-center gap-2 group">
        Get Started
        <div
          className="relative
        "
        >
          {" "}
          <div className="absolute inset-0 rounded-full border-2 border-cyan opacity-0 group-hover:opacity-100 transition duration-300 scale-125"></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transform transition-all duration-300 group-hover:translate-x-2 group-hover:scale-x-125"
          >
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </div>
      </Button>

      <div className="hidden md:flex items-center justify-between w-full px-20  h-auto relative overflow-visible">
        {/* Date on the left */}
        <div className="text-sm text-subheading font-display">{today}</div>

        {/* Shape on the right */}
        <div className="-mt-20">
          <div className="self-end w-96 aspect-square rounded-full bg-main overflow-hidden">
            <video
              src="/images/sharpify-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
