"use client";
import { Button } from "../ui/button";
const Hero = () => {
  return (
    <>
      <div className="flex items-center justify-center p-12 my-8">
        <section className="flex flex-col-reverse lg:flex-row justify-around items-center max-w-[80vw] lg:justify-between lg:max-w-[90vw] my-8 lg:my-12 mx-auto gap-8 lg:gap-16">
          {/* Left/bottom (Text Content) */}
          <div className="text-center lg:text-left max-w-2xl space-y-4 lg:space-y-6">
            <h1 className="font-semibold text-primary text-xl md:text-2xl lg:text-3xl xl:text-5xl leading-snug lg:leading-tight">
              Create and enhance stunning images{" "}
              <span className="text-secondary font-bold text-xl md:text-2xl lg:text-3xl xl:text-5xl">
                with Refyned
              </span>{" "}
              — free and online.
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-main">
              Enhance. Erase. Generate. Convert. Compress.{" "}
              <br className="hidden sm:block" />
              All without losing quality, with Refyned.
            </p>

            <Button className="mt-4 sm:mt-6 px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base md:text-lg text-main font-semibold rounded-3xl bg-secondary hover:scale-105 transition duration-300 ease-in-out flex items-center group mx-auto lg:mx-0">
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
                className="opacity-80 scale-80 group-hover:scale-100 transition-all duration-300 ml-2"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Button>
          </div>

          {/* Right/top (Image Grid) */}
          <div className="grid grid-cols-3 gap-3 max-w-[70vw] lg:max-w-xl ">
            {/* Column 1 */}
            <div className="flex flex-col gap-4">
              <div className="w-full aspect-[3/4] p-2">
                <img
                  src="images/green2.jpg"
                  alt=""
                  className="w-full h-full rounded-3xl object-cover"
                />
              </div>
              <div className="w-full aspect-square p-2">
                <img
                  src="images/orange2.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>

            {/* Column 2 */}
            <div className="hidden lg:flex flex-col gap-4">
              <div className="w-full aspect-square p-2">
                <img
                  src="images/orange1.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full aspect-[3/4] p-2">
                <img
                  src="images/green1.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>

            {/* Column 3 */}
            <div className="flex items-center justify-center p-2">
              <img
                src="images/orange3.jpg"
                alt=""
                className="w-full aspect-[2/3] object-cover rounded-full"
              />
            </div>
            <div className="lg:hidden flex flex-col gap-4">
              <div className="w-full aspect-square p-2">
                <img
                  src="images/orange1.jpg"
                  alt=""
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="w-full aspect-[3/4] p-2">
                <img
                  src="images/green1.jpg"
                  alt=""
                  className="w-full h-full object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Hero;
