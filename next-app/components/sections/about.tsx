"use client";

import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AbouT = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-card rounded-2xl justify-between md:py-8 md:px-4 px-4 py-2 my-16 mx-8 h-[80vh] overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/3 flex flex-row h-1/3 w-full md:flex-col md:px-4 p-4 md:py-0 justify-between space-x-16 md:space-x-0 md:h-full md:mr-8"
      >
        <div className="flex flex-row md:items-center justify-start">
          <DashboardIcon
            sx={{
              fontSize: { xs: 16, md: 24 },
              color: "#f9e8c0",
            }}
            className="mt-1 md:mt-0"
          />
          <h1 className="ml-2 text-main font-semibold  text-base sm:text-lg  md:text-xl lg:text-2xl text-left">
            About
          </h1>
        </div>
        <div className="space-y-2">
          <h3 className="text-main text-base sm:text-lg md:text-xl lg:text-2xl font-medium text-left">
            Empowering Creativity Through <br className="hidden md:block" />{" "}
            AI-Driven Image Enhancement
          </h3>
          <p className="text-gray-400  text-xs sm:text-sm md:text-base lg:text-lg text-wrap ">
            Refyned is revolutionizing how creators, developers, and everyday
            users enhance visuals, from touch-ups and noise removal to
            resolution fixes and stunning transformations instantly and
            beautifully.
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-2/3 w-[90%] md:h-full rounded-xl h-2/3 md:rounded-xl overflow-hidden"
      >
        <img
          src="/images/about.webp"
          alt="about section image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AbouT;
