"use client";

import { motion, AnimatePresence } from "framer-motion";
import QuizIcon from "@mui/icons-material/Quiz";
import { useState } from "react";
import Minus from "@mui/icons-material/Remove";
import Plus from "@mui/icons-material/Add";
import { Button } from "../ui/button";

const faqs = [
  {
    question: "How does AI enhancement improve my images?",
    answer:
      "Our AI automatically enhances image sharpness, reduces noise, improves colors, and increases resolution for a professional look.",
  },
  {
    question: "Can I remove the background from an image?",
    answer:
      "Yes! Our AI accurately detects and removes backgrounds while preserving fine details, making your image ready for any use case.",
  },
  {
    question: "How do I crop my image to the desired size?",
    answer:
      "You can easily crop images by selecting your preferred dimensions. The AI ensures high quality even after cropping.",
  },
  {
    question: "Can I change the size and format of my image?",
    answer:
      "Absolutely! You can upscale images, reduce file size without losing quality, and convert between formats like PNG, JPG, and WebP.",
  },
  {
    question: "How does your AI Enhancer work?",
    answer:
      "Our AI uses advanced deep learning models to enhance image quality, remove noise, and upscale resolution.",
  },
  {
    question: "Can I enhance black-and-white photos?",
    answer:
      "Yes! Our AI can colorize black-and-white images and restore details for a more realistic look.",
  },
  {
    question: "What image formats does the AI support?",
    answer: "We support JPEG, PNG, and WEBP formats for both input and output.",
  },
  {
    question: "Is my uploaded image stored permanently?",
    answer:
      "No, we prioritize privacy. Your images are processed securely and automatically deleted after enhancement.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="relative w-full overflow-hidden flex flex-col items-center  my-16 px-4 md:px-8 lg:px-12 max-w-[70vw] mx-auto">
      {/* Header section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        viewport={{ once: false }}
        className="w-full flex items-end justify-between mb-8"
      >
        <div className="space-y-2 text-left">
          <motion.div
            initial={{ rotate: -15, opacity: 0 }}
            whileInView={{ rotate: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 120, damping: 8 }}
          >
            <QuizIcon
              sx={{
                fontSize: { xs: 48, md: 96 },
                color: "#ff9900",
              }}
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-xl md:text-3xl lg:text-4xl font-bold text-main"
          >
            Your questions <br /> resolved in one place
          </motion.h1>
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-sm md:text-md lg:text-xl text-gray-400"
          >
            Frequently Asked Questions from our users and their answers.
          </motion.h3>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button className="p-4 sm:text-md md:text-lg lg:text-xl text-main rounded-xl bg-secondary hover:scale-105 transition duration-300 ease-in-out mr-2">
            Contact us
          </Button>
        </motion.div>
      </motion.div>

      {/* FAQs */}
      <div className="lg:space-y-4 space-y-2 w-full md:w-[80%] mt-4 md:mt-6 lg:mt-8">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className="relative bg-main shadow-xl rounded-xl p-4 mb-8"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: false, amount: 0.3 }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full text-left transition duration-300"
              >
                <span className="text-main semibold text-xs sm:text-sm md:text-base lg:text-lg ">
                  {faq.question}
                </span>
                <motion.span
                  initial={false}
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <Minus className="text-secondary lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 h-2 w-2" />
                  ) : (
                    <Plus className="text-secondary lg:w-6 lg:h-6 md:w-4 md:h-4 sm:w-3 sm:h-3 w-2 h-2" />
                  )}
                </motion.span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="content"
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: "auto" },
                      collapsed: { opacity: 0, height: 0 },
                    }}
                    transition={{ duration: 0.4, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg  mx-4 px-2 py-2">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
