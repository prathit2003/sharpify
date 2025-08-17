"use client";

import { PrecisionManufacturing } from "@mui/icons-material";
import { motion } from "framer-motion";
const Loader = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center min-h-[200px]">
        <motion.div
          className="flex items-center justify-center rounded-full p-6 bg-gradient-to-br from-purple-500 to-purple-700 shadow-lg"
          animate={{ rotate: 360 }}
          transition={{
            repeat: Infinity,
            duration: 1.2,
            ease: "linear",
          }}
        >
          <PrecisionManufacturing style={{ fontSize: 50, color: "white" }} />
        </motion.div>
        <p className="text-purple-700 mt-4 font-semibold animate-pulse text-lg">
          Working on your Image
        </p>
      </div>
    </>
  );
};

export default Loader;
