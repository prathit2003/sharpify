"use client";

import useUIStore from "@/app/store/UIatom";

const AbouT = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full h-full my-8">
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-4 lg:p-8 my-2 mx-8 lg:mx-12">
          <img
            src="/images/about1.webp"
            alt="about"
            className="w-auto aspect-square max-w-1/2"
          ></img>

          <div className="text-center">
            <h1 className="text-white font-bold text-md lg:text-xl xl:text-2xl leading-tight">
              Finalize the vision with Sharpify
            </h1>
            <p className="text-sm md:text-base lg:text-md xl:text-lg text-main max-w-lg mt-2 lg:mt-4">
              Want to do extra tweaks to your newly-upscaled photo? You don’t
              even have to switch to a different app. Use Picsart’s
              best-in-class photo editor to take advantage of AI editing tools
              like the background remover, AI image generator, collage maker,
              and so much more. All this in one, easy-to-use interface.
            </p>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-evenly p-4 lg:p-8  mx-8 lg:mx-12 lg:-mt-4">
          <img
            src="/images/about2.webp"
            alt="about"
            className="w-auto aspect-square max-w-1/2"
          ></img>

          <div className="text-center">
            <h1 className="text-white font-bold text-md lg:text-xl xl:text-2xl leading-tight">
              Preserve even the tiniest details
            </h1>
            <p className="text-sm md:text-base lg:text-md xl:text-lg text-main max-w-lg mt-2 lg:mt-4">
              Freely upscale your images with no quality loss whatsoever. You
              don’t have to settle for upscaled images with distorted details
              anymore. Thanks to advanced AI models that have been pre-trained
              on millions of other images, the image enhancer will upscale
              images while maintaining your visual’s clarity and detail.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AbouT;
