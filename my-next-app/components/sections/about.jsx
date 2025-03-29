"use client";

import useUIStore from "@/app/store/UIatom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
const AbouT = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex flex-col justify-center my-10 p-10">
      {/* Section 1 */}
      <motion.div
        className="flex flex-col md:flex-row items-center justify-between w-full max-h-92 px-4 md:px-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Image */}
        <motion.div
          className="w-full md:w-4/3 aspect-square"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <img
            src="/images/about1.webp"
            alt="About Image 1"
            className="w-full rounded-lg"
          />
        </motion.div>
        <div className="text-left px-4 mt-6 md:mt-0">
          <h1
            className="font-bold text-xl md:text-2xl text-black mb-4"
            fillRule="evenodd"
            clipRule="evenodd"
          >
            Finalize the vision with sharpify
          </h1>
          <p className="text-lg md:text-xl text-gray-500">
            Want to do extra tweaks to your newly-upscaled photo? You don’t even
            have to switch to a different app. Use Picsart’s best-in-class photo
            editor to take advantage of AI editing tools like the background
            remover, AI image generator, collage maker, and so much more. All
            this in one, easy-to-use interface.
          </p>
        </div>
      </motion.div>

      {/* Section 2 (Reversed) */}
      <motion.div
        className="flex flex-col-reverse md:flex-row-reverse items-center justify-between w-full max-h-92 px-4 md:px-20 mt-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <motion.div
          className="w-full md:w-3/4 aspect-square"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <img
            src="/images/about2.webp"
            alt="About Image 2"
            className="w-full rounded-lg"
          />
        </motion.div>
        {/* Text Content */}
        <div className="text-left pl-4 md:pl-12 mt-6 md:mt-0">
          <h1 className="font-bold text-2xl text-black mb-4">
            Preserve even the tiniest details
          </h1>
          <p className="text-xl text-gray-500">
            Freely upscale your images with no quality loss whatsoever. You
            don’t have to settle for upscaled images with distorted details
            anymore. Thanks to advanced AI models that have been pre-trained on
            millions of other images, the image enhancer will upscale images
            while maintaining your visual’s clarity and detail.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default AbouT;
