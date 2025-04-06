import { useState } from "react";
import { Minus, Plus } from "lucide-react";

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
    <div className="max-w-3xl mx-auto p-6 my-20 text-black">
      <h2 className="text-3xl font-semibold mb-6 text-center text-black">
        Frequently Asked Questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-400 pb-3">
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left text-xl p-4 transition duration-300"
            >
              <span className="text-black text-xl">{faq.question}</span>
              {openIndex === index ? <Minus size={24} /> : <Plus size={24} />}
            </button>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                openIndex === index
                  ? "max-h-40 opacity-100 py-2"
                  : "max-h-0 opacity-0"
              }`}
            >
              <p className="text-gray-700 mx-4 px-2">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
