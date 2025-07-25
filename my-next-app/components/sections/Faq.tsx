"use client";

import { useState } from "react";
import Minus from "@mui/icons-material/Remove";
import Plus from "@mui/icons-material/Add";

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
    <div className="max-w-3xl p-10 lg:p-12 my-20 text-white">
      <h2 className="lg:text-3xl sm:text-lg md:text-xl font-semibold mb-12 text-center text-white">
        Frequently Asked Questions
      </h2>
      <div className="lg:space-y-4 space-y-2">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-heading pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left lg:text-xl md:text-lg text-sm py-4 px-15 md:px-4 transition duration-300"
            >
              <span className="text-white lg:text-xl md:text-lg text-sm">
                {faq.question}
              </span>
              {openIndex === index ? (
                <Minus className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3" />
              ) : (
                <Plus className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-main lg:text-xl md:text-lg text-sm mx-4 px-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
