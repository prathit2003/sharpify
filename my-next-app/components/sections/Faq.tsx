"use client";
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
    <div className="max-w-[70vw] p-4 my-16">
      {/* Wrap everything in a flex container */}
      <div className="w-full flex items-end justify-between mb-8 p-4">
        {/* Left section: Icon + Text */}
        <div className="space-y-2 text-left">
          <QuizIcon
            sx={{
              fontSize: { xs: 48, md: 96 },
              color: "#ff9900",
            }}
          />
          <h1 className="text-xl md:text-3xl lg:text-4xl text-main">
            Your questions <br /> resolved in one place
          </h1>
          <h3 className="text-sm md:text-md lg:text-xl text-gray-500">
            Frequently Asked Questions from our users and their answers.
          </h3>
        </div>

        {/* Right section: CTA button */}
        <Button className="p-4 sm:text-md md:text-lg lg:text-xl text-main rounded-xl bg-secondary hover:scale-105 transition duration-300 ease-in-out mr-2 ">
          Contact us
        </Button>
      </div>

      {/* FAQs */}
      <div className="lg:space-y-4 space-y-2 w-full">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-white pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left lg:text-xl md:text-lg text-sm py-4 px-4 transition duration-300"
            >
              <span className="text-white">{faq.question}</span>
              {openIndex === index ? (
                <Minus className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3 text-secondary" />
              ) : (
                <Plus className="lg:w-6 lg:h-6 md:w-4 md:h-4 w-3 h-3 text-secondary" />
              )}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-400 lg:text-xl md:text-lg text-sm mx-4 px-2">
                {faq.answer}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
