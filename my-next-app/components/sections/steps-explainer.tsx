"use client";

import useUIStore from "@/app/store/UIatom";

const StepExplainer = () => {
  const {} = useUIStore();

  return (
    <div className="relative bg-black w-full flex flex-col justify-center z-20 rounded-3xl -mt-16 py-20 px-8">
      <h1 className="text-center text-white text-4xl font-semibold">
        Effortless Image Enhancement: Clear & Perfect in Just a Few Clicks!
      </h1>

      <div className="flex justify-between items-center px-10 mt-10 gap-10">
        {/* Image Container */}
        <div className="w-1/3 p-2 overflow-hidden rounded-xl">
          <img
            className="object-cover w-full h-auto transition-transform duration-300 hover:scale-105"
            src="/images/pexels-lastly-1671643.jpg"
            alt="image"
          />
        </div>

        {/* Steps Section */}
        <div className="flex flex-col gap-4 px-10 py-5 w-2/3">
          {[...Array(4)].map(
            (
              _,
              i // Corrected array initialization
            ) => (
              <div
                key={i}
                className="flex flex-row items-center p-4 transition-all duration-300 ease-in-out border border-transparent rounded-2xl hover:border-white hover:shadow-[0_10px_25px_rgba(255,255,255,0.2)] hover:scale-105"
              >
                <h1 className="text-4xl p-5 text-white">{i + 1}</h1>
                <div className="py-2">
                  <h1 className="text-white text-2xl">
                    Choose Enhancement Options
                  </h1>
                  <p className="text-gray-400 text-lg">
                    Select from background removal, upscaling, colour
                    correction, or sharpening.
                  </p>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default StepExplainer;
