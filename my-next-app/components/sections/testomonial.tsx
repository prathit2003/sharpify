"use client";

import useUIStore from "@/app/store/UIatom";

const Testominial = () => {
  const {} = useUIStore();

  return (
    <>
      <div className="w-full h-screen flex flex-col justify-center items-center px-4">
        <div className="px-20 py-4 text-center">
          <h1 className="text-3xl font-semibold">
            The only image enhancer you’ll ever need
          </h1>
          <p className="text-gray-500 text-xl ">
            Thanks to an intuitive user interface and instant results, the
            Picsart photo enhancer is the perfect tool to rely on. Get automatic
            results with image quality enhancer’s state-of-the-art AI technology
            and give your photos a visual makeover with no extra hassle. 
          </p>
        </div>

        <img
          src="/icons/rating.svg"
          alt="Icon"
          className="w-1/4 h-1/4 py-4"
        ></img>

        <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full max-w-4xl">
          <div className="flex flex-col items-center w-1/2 rounded-lg border border-gray-300 shadow-md p-4 bg-white">
            <img src="/icons/QuoteLeft.svg" alt="qoutes"></img>
            <img src="/icons/quoteright.svg" alt="qoutes"></img>
          </div>
          <div className="flex flex-col items-center w-1/2 rounded-lg border border-gray-300 shadow-md p-4 bg-white">
            <img src="/icons/QuoteLeft.svg" alt="qoutes"></img>
            <img src="/icons/quoteright.svg" alt="qoutes"></img>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testominial;
