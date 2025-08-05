"use client";

import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AbouT = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-card rounded-2xl justify-between md:pl-8 md:py-8 px-4 pt-4 my-16 mx-8 h-[80vh] overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-1/3 flex flex-row h-1/3 w-full md:flex-col p-4  justify-between space-x-16 md:space-x-0 md:h-full md:pr-6"
      >
        <div className="flex md:items-center items-start">
          <DashboardIcon
            sx={{
              fontSize: { xs: 16, md: 24 },
              color: "#f9e8c0",
            }}
          />
          <h1 className="ml-2 text-main font-semibold text-sm  md:text-xl lg:text-3xl text-left">
            About
          </h1>
        </div>
        <div className="md:space-y-4 md:mb-4 ">
          <h3 className="text-main text-base sm:text-lg md:text-xl lg:text-2xl font-bold ">
            Empowering Creativity Through <br /> AI-Driven Image Enhancement
          </h3>
          <p className="text-gray-400 text-xs md:text-sm lg:text-base text-wrap">
            At Refyned, we're redefining the way creators, developers, and
            everyday users improve their visuals. Whether you're touching up a
            photo, removing noise, fixing resolution, or transforming old
            visuals into stunning high-quality assets, Refyned gets it done
            instantly and beautifully.
          </p>
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="md:w-2/3 w-[90%] md:h-full rounded-t-xl h-2/3 md:rounded-l-xl overflow-hidden"
      >
        <img
          src="images/about.webp"
          alt="about section image"
          className="w-full h-full object-cover"
        />
      </motion.div>
    </div>
  );
};

export default AbouT;
