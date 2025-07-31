"use client";
import Component from "../ui/3iconcomponent";
import { motion } from "framer-motion";

const ThreeCard = () => {
  return (
    <div className="flex flex-col items-center space-y-8 p-2 bg-secondary w-full rounded-3xl my-8">
      <div className="flex flex-col items-center space-y-2 mt-16">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl font-bold text-main leading-snug"
        >
          Your Creative Spark Just Met Its Smartest Match
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-2xl text-gray-200 leading-snug"
        >
          Clarity You Can See, Speed You Can Feel!
        </motion.h2>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-[90vw] mx-auto my-16"
      >
        <Component
          type="generate"
          Heading="AI Generation"
          SubHeading="Create stunning visuals and assets using intelligent generation tools."
        />
        <Component
          type="enhance"
          Heading="Image Enhancement"
          SubHeading="Restore clarity, resolution, and detail with cutting-edge AI."
        />
        <Component
          type="tools"
          Heading="Utility Tools"
          SubHeading="All-in-one tools for background removal, size reduction, and changing format."
        />
      </motion.div>
    </div>
  );
};

export default ThreeCard;
