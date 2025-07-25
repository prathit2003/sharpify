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
    <>
      <section className="flex lg:hidden flex-col items-center justify-evenly w-full px-10 md:py-6 md:px-16 mt-30 md:mt-15 mb-20">
        <div
          className="flex flex-col items-center justify-between gap-4 p-4 md:p-6 sm:gap-6 md:gap-8
        rounded-2xl border-[2px] border-[#c666fe] w-1/2 max-h-[500px] max-w-[300px]"
        >
          <div className="flex items-center justify-center p-4  w-full h-1/2">
            <Button className="p-4 text-sm md:text-xl text-white font-semibold rounded-2xl  bg-gradient-purple  hover:scale-105 transition duration-300 ease-in-out flex items-center  group relative">
              upload Image
            </Button>
          </div>
          <div className="flex items-center justify-center w-full aspect-square rounded-2xl border-[2px] border-dashed border-[#c666fe]">
            <h2 className="font-semibold md:text-lg text-gray-300">
              Or Drop It Here
            </h2>
          </div>
        </div>
        <div className="space-y-2 text-center m-6">
          <h1 className="font-bold text-white text-xl md:text-2xl">
            Upscale image quality with sharpify, free online
          </h1>
          <p className="text-xs sm:text-base md:text-lg text-gray-200">
            Enhance. Erase. Convert. Compress. All without losing quality,with
            Sharpify. Try it free!
          </p>
        </div>
        <Button className="p-4 text-md text-white font-semibold rounded-4xl  bg-gradient-purple hover:scale-105 transition duration-300 ease-in-out flex items-center  group relative">
          Get Started
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="opacity-80 scale-80 group-hover:scale-100 transition-all duration-300"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Button>
      </section>
      <section className="hidden lg:flex items-center justify-between w-full px-30 py-10 mt-30 mb-20">
        <div className="text-left max-w-[600px] space-y-6">
          <h1 className="font-bold text-white text-4xl xl:text-5xl">
            Upscale image quality with sharpify, free online
          </h1>
          <p className="text-xl xl:text-2xl text-gray-200 ">
            Enhance. Erase. Convert. Compress. All without losing quality, with
            Sharpify. Try it free!
          </p>
          <Button className="p-6 text-xl  text-white font-bold rounded-4xl  bg-gradient-purple  transition duration-300 ease-in-out flex items-center  group relative">
            Get Started
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="opacity-80 scale-80 group-hover:scale-100 transition-all duration-300"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Button>
        </div>
        <div
          className="flex flex-col items-center justify-between  gap-8 p-4 
        rounded-2xl border-[2px] border-[#c666fe] w-1/2 max-h-[500px] max-w-[350px]"
        >
          <div className="flex items-center justify-center p-4  w-full h-1/2">
            <Button className="p-4 text-xl text-white font-semibold rounded-2xl  bg-gradient-purple  hover:scale-105 transition duration-300 mt-2 ease-in-out flex items-center  group relative">
              upload Image
            </Button>
          </div>
          <div className="flex items-center justify-center w-full aspect-square rounded-2xl border-[2px] border-dashed border-[#c666fe]">
            <h2 className="font-semibold text-xl text-gray-300">
              Or Drop It Here
            </h2>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
