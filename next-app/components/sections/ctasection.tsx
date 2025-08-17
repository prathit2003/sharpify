"use client";
import { BuildRounded } from "@mui/icons-material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

export default function GetStarted() {
  const router = useRouter();
  const handleEnhance = () => {
    router.push("/tools?section=enhanceimage");
  };
  const handleTools = () => {
    router.push("/tools?section=reducesize");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex  items-center space-x-2 md:space-x-4 lg:space-x-8 justify-between bg-card rounded-3xl mt-10 mb-4 sm:mt-12 sm:mb-6 md:mt-16 md:mb-8 w-[80vw] md:w-[70vw] overflow-hidden h-[30vh] md:h-[50vh]"
    >
      {/* Text Section */}
      <div className="flex flex-col justify-center text-center text-main  space-y-3 p-4 md:p-8 ml-1 sm:ml-2 lg:ml-4 max-w-2/3">
        <h1 className="text-sm sm:text-base md:text-xl lg:text-2xl font-medium  leading-snug text-wrap">
          Discover the power of AI image enhancement and genration
        </h1>
        <p className="text-[8px] sm:text-xs md:text-base lg:text-lg opacity-70 leading-relaxed text-wrap">
          Enhance your images effortlessly with our AI-powered tool. Say goodbye
          to manual editing and hello to stunning results in seconds.
        </p>
        <div className="mt-2  flex items-center justify-center space-x-2 md:space-x-4">
          <Button
            variant="secondary"
            onClick={handleTools}
            className=" px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg text-main font-medium rounded-2xl bg-main border-2 h-4 sm:h-6 md:h-10 lg:h-12 border-white hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out flex items-center group"
          >
            <BuildRounded className="m-1 text-main transition-colors duration-300 h-2 sm:h-3 md:h-5 aspect-square" />
            tools
          </Button>
          <Button
            variant="secondary"
            onClick={handleEnhance}
            className="w-fit px-2 py-1 text-xs sm:text-sm md:text-base lg:text-lg text-main font-medium rounded-2xl bg-secondary h-4 sm:h-6 md:h-10 lg:12 hover:scale-105 hover:cursor-pointer transition duration-300 ease-in-out flex items-center group"
          >
            enhance
            <ArrowForwardIcon className=" text-main transition-colors duration-300 h-2 sm:h-3 md:h-5 aspect-square" />
          </Button>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center w-1/3 -mr-4 h-full">
        <img
          src="icons/CTAicon.svg"
          alt="CTA Decorative Image"
          className="w-full h-full object-cover"
        />
      </div>
    </motion.div>
  );
}
