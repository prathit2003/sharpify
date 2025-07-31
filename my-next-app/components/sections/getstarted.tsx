"use client";
import { BoltRounded, AutoAwesomeRounded } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";
export default function GetStarted() {
  const router = useRouter();
  const handlegetstarted = () => {
    router.push("/tools");
  };
  return (
    <div className="relative isolate overflow-hidden bg-header mt-16 py-12  md:py-16 rounded-3xl">
      <div className="w-full px-6 md:px-8 lg:px-12">
        <div className="mx-8 grid  grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-xl lg:text-4xl  tracking-tight text-main">
              discover the power of AI image enhancement
            </h2>
            <p className="mt-4 text-sm lg:text-lg text-gray-300">
              Enhance your images effortlessly with our AI-powered tool. Say
              goodbye to manual editing and hello to stunning results in
              seconds. Experience the future of image enhancement today and
              unlock your creativity with AI.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <Button
                onClick={handlegetstarted}
                className="mt-4 sm:mt-6 px-5 py-3 sm:px-6 sm:py-4 text-sm sm:text-base md:text-lg text-main font-semibold rounded-3xl bg-secondary hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out flex items-center group mx-auto lg:mx-0"
              >
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
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <BoltRounded className="h-6 w-6 text-secondary" />
              </div>
              <dt className="mt-4 text-xl lg:text-4xl  text-main">
                Create Stunning AI Art.
              </dt>
              <dd className="mt-2 text-sm lg:text-lg text-gray-400">
                Generate high-quality, visually striking images in seconds using
                advanced AI, just describe your idea and watch it turn into
                creative visuals.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <AutoAwesomeRounded className="h-6 w-6 text-secondary" />
              </div>
              <dt className="mt-4 text-xl lg:text-4xl text-main">
                enhance image resolution
              </dt>
              <dd className="mt-2 text-sm lg:text-lg text-gray-400">
                Boost the resolution of your images without losing quality. Our
                AI algorithms intelligently enhance details, making your photos
                sharper and more vibrant.
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
