"use client";
import { motion } from "framer-motion";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const fadeIn = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Feature = () => {
  return (
    <div className="flex flex-col items-center space-y-8 w-full my-24 px-4 sm:px-6">
      <motion.h1
        className="text-main font-bold text-center text-wrap max-w-3xl text-xl sm:text-2xl md:text-3xl lg:text-5xl"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.3 }}
        variants={fadeIn}
        custom={0}
      >
        An entire stack of tools that keeps your Creativity moving
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-4 p-2 sm:p-4 md:p-6 rounded-xl w-full max-w-[90vw]">
        {/* Card 1 */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-3 row-span-3 bg-card rounded-2xl shadow-xl p-6 flex flex-col justify-between"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          custom={1}
        >
          <div>
            <div className="text-xs lg:text-sm text-main">
              Powered by Refyned AI
            </div>
            <div className="flex items-center justify-start space-x-4 my-4">
              <img
                src="/images/blur.webp"
                className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-xl border-2 shadow-2xl border-gray-300"
                alt="Blurred"
              />
              <ArrowRightAltIcon fontSize="medium" className="text-main" />
              <img
                src="/images/clear.webp"
                className="w-16 h-16 sm:w-18 sm:h-18 object-cover rounded-xl border-2 shadow-2xl border-gray-300"
                alt="Clear"
              />
            </div>
          </div>
          <h3 className="text-main text-base sm:text-lg lg:text-xl">
            AI Image Enhancement
          </h3>
          <p className="text-gray-300 text-sm lg:text-md">
            Restore clarity, remove noise, and enhance details instantly using
            AI-powered enhancement.
          </p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-3 row-span-3 bg-card rounded-2xl shadow-xl p-6 flex flex-col relative overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          custom={2}
        >
          <h3 className="text-main text-base sm:text-lg md:text-xl">
            Seamless Format Conversion
          </h3>
          <p className="text-gray-300 text-sm md:text-md mt-1 mb-6">
            Convert images between JPG, PNG, WEBP, and more. Preserve quality,
            save time.
          </p>
          <div className="flex items-center justify-center space-x-[10px] sm:space-x-[20px] mb-4">
            <img
              src="images/jpg.webp"
              alt="JPG"
              className="w-14 h-20 lg:w-24 lg:h-30 object-contain rotate-[-10deg]"
            />
            <img
              src="images/pdf.webp"
              alt="PDF"
              className="w-14 h-20 lg:w-24 lg:h-30 object-contain mb-2"
            />
            <img
              src="images/png.webp"
              alt="PNG"
              className="w-14 h-20 lg:w-24 lg:h-30 object-contain rotate-[10deg]"
            />
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-2 row-span-3 bg-card rounded-2xl shadow-xl p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          custom={3}
        >
          <div className="text-xs text-main bg-white/20 rounded-full w-fit px-3 py-1 mb-3">
            Smart Tools
          </div>
          <div className="flex items-center justify-center my-6">
            <img
              src="images/file.webp"
              alt="Big file"
              className="w-10 h-14 object-cover"
            />
            <img
              src="images/exchange.webp"
              alt="Exchange"
              className="w-6 h-6 object-cover mx-2"
            />
            <img
              src="images/file.webp"
              alt="Small file"
              className="w-8 h-10 object-cover"
            />
          </div>
          <h3 className="text-main text-base sm:text-lg">
            Smart Image Compression
          </h3>
          <p className="text-gray-300 text-sm mt-1">
            Shrink file sizes without quality loss. Optimized for web, mobile,
            and email.
          </p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="col-span-1 sm:col-span-2 md:col-span-4 row-span-3 bg-card rounded-2xl shadow-xl p-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
          variants={fadeIn}
          custom={4}
        >
          <h3 className="text-main text-base sm:text-lg">
            Turn Prompts into Pictures with One Click
          </h3>
          <p className="text-gray-300 text-sm mt-2">
            Type anything you imagine, and we will generate a beautiful image in
            seconds.
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {["Web Optimized", "High Fidelity", "Instant Output"].map(
              (label, i) => (
                <div
                  key={i}
                  className="px-3 py-1 rounded-full text-xs sm:text-sm text-main bg-white/10"
                >
                  {label}
                </div>
              )
            )}
          </div>

          <div className="flex items-center justify-center p-4 mt-6">
            <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 pl-4 shadow-inner w-full max-w-2xl">
              {/* Mobile input */}
              <input
                type="text"
                disabled
                value="Generate an image ..."
                className="block lg:hidden w-full bg-transparent focus:outline-none text-sm text-main placeholder-gray-400"
              />

              {/* Desktop input */}
              <input
                type="text"
                disabled
                value="Generate an image of a sunset"
                className="hidden lg:block w-full bg-transparent focus:outline-none text-md text-main placeholder-gray-400"
              />

              <button
                disabled
                className="bg-secondary text-main font-medium py-2 px-4 rounded-full flex items-center gap-2"
              >
                <span className="text-sm">Generating</span>
                <svg
                  className="w-4 h-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8H4z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Feature;
