"use client";

import { motion } from "framer-motion";
import DashboardIcon from "@mui/icons-material/Dashboard";

const AbouT = () => {
  return (
    <div className="flex items-center bg-card rounded-2xl justify-between pl-8 py-8 my-16 mx-8 h-[80vh] overflow-hidden">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.6, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.3 }}
        className="w-1/3 flex flex-col justify-between h-full pr-6"
      >
        <div className="flex items-center mt-4">
          <DashboardIcon
            sx={{
              fontSize: { xs: 12, md: 24 },
              color: "#f9e8c0",
            }}
          />
          <h1 className="ml-2 text-main font-semibold text-sm  md:text-xl lg:text-3xl text-left">
            About
          </h1>
        </div>
        <div className="space-y-4 mb-4">
          <h3 className="text-main text-sm md:text-xl lg:text-3xl">
            Empowering Creativity Through AI-Driven Image Enhancement
          </h3>
          <p className="text-gray-400 text-xs md:text-md lg:text-lg">
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
        className="w-2/3 h-full rounded-l-xl overflow-hidden"
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
