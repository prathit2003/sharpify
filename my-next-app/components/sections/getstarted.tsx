"use client";

import { CameraAlt } from "@mui/icons-material";
import { useRouter } from "next/navigation";
export default function GetStarted() {
  const router = useRouter();
  const handlegetstarted = () => {
    router.push("/dashboard");
  };
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 mt-10 py-16 sm:py-24 lg:py-32">
      <div className="w-full px-6 lg:px-8">
        <div className="mx-8 grid  grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-xl lg:text-4xl  tracking-tight text-white">
              discover the power of AI image enhancement
            </h2>
            <p className="mt-4 text-sm lg:text-lg text-gray-300">
              Enhance your images effortlessly with our AI-powered tool. Say
              goodbye to manual editing and hello to stunning results in
              seconds. Experience the future of image enhancement today and
              unlock your creativity with AI.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <button
                type="submit"
                onClick={handlegetstarted}
                className="flex-none rounded-2xl bg-gradient-purple px-3.5 py-2.5 text-sm font-bold  text-white shadow-xs focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Get Started
              </button>
            </div>
          </div>
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:pt-2">
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="h-6 w-6 text-purple"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                  />
                </svg>
              </div>
              <dt className="mt-4 text-xl lg:text-4xl  text-white">
                colorize your images
              </dt>
              <dd className="mt-2 text-sm lg:text-lg text-gray-400">
                Bring your black-and-white photos to life with vibrant colors
                using our advanced AI technology. Transform old memories into
                vivid, colorful moments effortlessly.
              </dd>
            </div>
            <div className="flex flex-col items-start">
              <div className="rounded-md bg-white/5 p-2 ring-1 ring-white/10">
                <CameraAlt className="h-6 w-6 text-purple-500 " />
              </div>
              <dt className="mt-4 text-xl lg:text-4xl text-white">
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
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1155/678 w-[72.1875rem] bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30"
        />
      </div>
    </div>
  );
}
