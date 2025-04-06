"use client";

import useUIStore from "@/app/store/UIatom";

const AbouT = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  return (
    <div className="flex flex-col justify-center items-center p-10">
      {/* Section 1 */}
      <div className="flex flex-row w-2/3 h-2/3 items-center justify-between mx-10">
        {/* Image */}
        <div className="w-1/2 px-4 flex justify-center">
          <img
            src="/images/about1.webp"
            alt="About Image 1"
            className="w-full h-auto rounded-lg"
          />
        </div>

        <div className="w-1/2 text-left">
          <h1 className="font-medium text-3xl text-black mb-4">
            Finalize the vision with Sharpify
          </h1>
          <p className="text-2xl min-md:text-lg text-gray-500">
            Want to do extra tweaks to your newly-upscaled photo? You don’t even
            have to switch to a different app. Use Picsart’s best-in-class photo
            editor to take advantage of AI editing tools like the background
            remover, AI image generator, collage maker, and so much more. All
            this in one, easy-to-use interface.
          </p>
        </div>
      </div>

      {/* Section 2 (Reversed) */}
      <div className="flex flex-row-reverse w-2/3 h-2/3 items-center justify-between gap-4 mx-10">
        {/* Image */}
        <div className="w-1/2 px-4 flex justify-center">
          <img
            src="/images/about2.webp"
            alt="About Image 2"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Text Content */}
        <div className="w-1/2 pl-20">
          <h1 className="font-medium text-3xl text-black mb-4">
            Preserve even the tiniest details
          </h1>
          <p className="text-2xl min-md:text-lg text-gray-500">
            Freely upscale your images with no quality loss whatsoever. You
            don’t have to settle for upscaled images with distorted details
            anymore. Thanks to advanced AI models that have been pre-trained on
            millions of other images, the image enhancer will upscale images
            while maintaining your visual’s clarity and detail.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AbouT;
