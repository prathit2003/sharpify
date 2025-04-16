"use client";

import useUIStore from "@/app/store/UIatom";

const AbouT = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  return (
    <>
      <div className="flex flex-col items-center justify-between w-full h-full my-8">
        <div className="flex items-center justify-between p-4 my-2 mx-8">
          <div>
            <img
              src="/images/about1.webp"
              alt="about"
              className="w-auto h-auto max-w-2xl"
            ></img>
          </div>
          <div>
            <h1 className="text-cyan font-bold text-3xl leading-tight">
              Finalize the vision with Sharpify
            </h1>
            <p className="text-lg text-main max-w-lg mt-2">
              Want to do extra tweaks to your newly-upscaled photo? You don’t
              even have to switch to a different app. Use Picsart’s
              best-in-class photo editor to take advantage of AI editing tools
              like the background remover, AI image generator, collage maker,
              and so much more. All this in one, easy-to-use interface.
            </p>
          </div>
        </div>
        <div className=" flex flex-row-reverse items-center justify-between p-4 my-2 mx-8">
          <div>
            <img
              src="/images/about2.webp"
              alt="about"
              className="w-auto h-auto max-w-2xl"
            ></img>
          </div>
          <div>
            <h1 className=" text-cyan font-bold text-3xl leading-tight">
              Preserve even the tiniest details
            </h1>
            <p className="text-lg text-main max-w-lg mt-2">
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
