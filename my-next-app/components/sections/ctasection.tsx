"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function GetStarted() {
  const router = useRouter();
  const handlegetstarted = () => {
    router.push("/tools/enhanceimage");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex flex-col md:flex-row items-center justify-center space-x-8 md:justify-between bg-card rounded-3xl mt-10 mb-4 sm:mt-12 sm:mb-6 md:mt-16 md:mb-8 w-[70vw] overflow-hidden h-[50vh] p-6 sm:p-10"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center text-left text-main  space-y-4 pr-6">
        <h1 className="text-base sm:text-lg md:text-2xl lg:text-3xl font-bold leading-snug">
          discover the power of AI image enhancement and genration
        </h1>
        <p className="text-xs sm:text-sm md:text-base lg:text-lg opacity-80 leading-relaxed">
          Enhance your images effortlessly with our AI-powered tool. Say goodbye
          to manual editing and hello to stunning results in seconds. Experience
          the future of image enhancement today and unlock your creativity with
          AI.
        </p>
        <Button
          variant="secondary"
          onClick={handlegetstarted}
          className="w-fit px-6 py-3 text-sm sm:text-base md:text-lg text-main font-semibold rounded-2xl bg-secondary hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out flex items-center group"
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

      {/* Image Section */}
      <div className="flex justify-center items-center w-1/3 h-full">
        <img
          src="icons/CTA.svg"
          alt="CTA Decorative Image"
          className="max-h-[70%] object-contain"
        />
      </div>
    </motion.div>
  );
}
