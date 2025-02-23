"use client";

import { Box, Button } from "@mui/material";
import { Typography, Link } from '@mui/material';
import { FaChevronDown, FaFileImage } from "react-icons/fa";
import { useState } from "react";

import { FaRegFileImage, FaRocket, FaPaintBrush, FaImage, FaMagic, FaSync, FaPalette, FaPhoneAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import UploadImage from "@/components/ui/imageuploader";

export default function Home() {
  const [openAccordion, setOpenAccordion] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };
  function FAQItem({ question, answer }: { question: string; answer: string }) {
    const [isOpen, setIsOpen] = useState(false);

    return (

      <div className="bg-gray-700 p-4 rounded-md cursor-pointer animate__animated animate__fadeIn" onClick={() => setIsOpen(!isOpen)}>
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold">{question}</h3>
          <span className="text-blue-400 transition-transform transform" style={{ transform: isOpen ? "rotate(180deg)" : "rotate(0deg)" }}>
            <FaChevronDown />
          </span>
        </div>
        {isOpen && <p className="mt-2 text-gray-300">{answer}</p>}
      </div>
    );
  }
  return (
    <div className="bg-gray-900 text-white font-sans min-h-screen">

      <header className="bg-black/50 backdrop-blur-md fixed top-0 left-0 w-full z-50 p-6 animate__animated animate__fadeInDown">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-semibold text-blue-500">AI Image Enhancer</h1>
          <nav className="space-x-6 text-lg">
            <a href="#home" className="hover:text-blue-400 transition">Home</a>
            <a href="#features" className="hover:text-blue-400 transition">Features</a>
            <a href="#operations" className="hover:text-blue-400 transition">Operations</a>
            <a href="#howitworks" className="hover:text-blue-400 transition">How It Works</a>
            <a href="#contact" className="hover:text-blue-400 transition">Contact</a>
          </nav>
        </div>
      </header>

      <div>
        <div className="container py-24 lg:py-32 animate__animated animate__fadeIn">
          <div className="flex justify-center">
            <a
              className="inline-flex items-center gap-x-2 border text-sm p-1 ps-3 rounded-full transition"
              href="#"
            >
              AI Image Enhancer - Join the waitlist
              <span className="py-1.5 px-2.5 inline-flex justify-center items-center gap-x-2 rounded-full bg-muted-foreground/15 font-semibold text-sm">
                <svg
                  className="flex-shrink-0 w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m9 18 6-6-6-6" />
                </svg>
              </span>
            </a>
          </div>

          <div className="mt-5 max-w-2xl text-center mx-auto">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Enhance Your Images with AI Technology
            </h1>
          </div>

          <div className="mt-5 max-w-3xl text-center mx-auto">
            <p className="text-xl text-muted-foreground">
              Transform and enhance your images with our powerful AI tools.
              Improve quality, fix colors, and remove noise effortlessly.
            </p>
          </div>

          <div className="mt-8 gap-3 flex justify-center">
            <Button size="large" variant="contained" color="primary">
              Get started
            </Button>
            <Button size="large" variant="outlined" color="primary">
              Learn more
            </Button>
          </div>
        </div>
      </div>
      <UploadImage></UploadImage>

      <section id="operations" className="py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12 animate__animated animate__fadeIn">
          Image Operations
        </h2>
        <div className="flex justify-center gap-8 px-4 flex-wrap">
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-gray-700 transition duration-300 ease-in-out w-80">
            <span className="text-4xl text-blue-400 mx-auto mb-4 block">
              <FaMagic />
            </span>
            <h3 className="text-2xl font-semibold mb-4">Enhance Image</h3>
            <p className="text-lg mb-6">Improve quality, sharpen details, and fix colors with AI.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white transition duration-300 ease-in-out">
              Enhance
            </button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-gray-700 transition duration-300 ease-in-out w-80">
            <span className="text-4xl text-blue-400 mx-auto mb-4 block">
              <FaPaintBrush />
            </span>
            <h3 className="text-2xl font-semibold mb-4">Edit Image</h3>
            <p className="text-lg mb-6">Crop, resize, and modify images effortlessly.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white transition duration-300 ease-in-out">
              Edit
            </button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-gray-700 transition duration-300 ease-in-out w-80">
            <span className="text-4xl text-blue-400 mx-auto mb-4 block">
              <FaSync />
            </span>
            <h3 className="text-2xl font-semibold mb-4">Change Format</h3>
            <p className="text-lg mb-6">Convert images between formats like JPG, PNG, and more.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white transition duration-300 ease-in-out">
              Convert
            </button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-gray-700 transition duration-300 ease-in-out w-80">
            <span className="text-4xl text-blue-400 mx-auto mb-4 block">
              <FaPalette />
            </span>
            <h3 className="text-2xl font-semibold mb-4">Colorize Image</h3>
            <p className="text-lg mb-6">Bring black & white photos to life with AI colorization.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white transition duration-300 ease-in-out">
              Colorize
            </button>
          </div>

          <div className="bg-gray-800 p-8 rounded-lg shadow-xl text-center hover:bg-gray-700 transition duration-300 ease-in-out w-80">
            <span className="text-4xl text-blue-400 mx-auto mb-4 block">
              <FaRegFileImage />
            </span>
            <h3 className="text-2xl font-semibold mb-4">Remove Background</h3>
            <p className="text-lg mb-6">Easily remove backgrounds from images using AI.</p>
            <button className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-full text-white transition duration-300 ease-in-out">
              Remove
            </button>
          </div>
        </div>
      </section>

      <section id="howitworks" className="py-16 bg-gray-900">
        <h2 className="text-3xl font-semibold text-center mb-12 animate__animated animate__fadeIn">
          How It Works
        </h2>
        <div className="max-w-5xl mx-auto space-y-12">


          <div className="flex items-center gap-8">
            <span className="text-5xl text-blue-400">
              <FaRegFileImage />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Step 1: Image Filtering</h3>
              <p className="text-lg text-gray-300">
                Our AI removes noise, blurs, and unwanted distortions from the image to enhance its clarity.
              </p>
            </div>
          </div>


          <div className="flex items-center gap-8 flex-row-reverse">
            <span className="text-5xl text-blue-400">
              <FaMagic />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Step 2: Fixing Pixel Edges</h3>
              <p className="text-lg text-gray-300">
                The AI refines and smooths pixel edges, improving sharpness and restoring lost details.
              </p>
            </div>
          </div>


          <div className="flex items-center gap-8">
            <span className="text-5xl text-blue-400">
              <FaPalette />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Step 3: AI Colorization</h3>
              <p className="text-lg text-gray-300">
                AI analyzes and enhances colors, making the image more vibrant and visually appealing.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-8 flex-row-reverse">
            <span className="text-5xl text-blue-400">
              <FaFileImage />
            </span>
            <div>
              <h3 className="text-2xl font-semibold">Step 4: Final Enhanced Image</h3>
              <p className="text-lg text-gray-300">
                The final AI-processed image is high-quality, sharp, and ready to be used professionally.
              </p>
            </div>
          </div>

        </div>
      </section>
      <section id="faqs" className="py-16 bg-gray-800">
        <h2 className="text-3xl font-semibold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6">
          <FAQItem
            question="What is AI Image Enhancer?"
            answer="AI Image Enhancer is a tool that improves image quality by removing noise, fixing edges, enhancing colors, and upscaling resolution."
          />
          <FAQItem
            question="Is this service free to use?"
            answer="We offer a free version with limited features. A premium version with advanced enhancements is also available."
          />
          <FAQItem
            question="What types of images does it support?"
            answer="It supports PNG, JPG, JPEG, and BMP image formats."
          />
          <FAQItem
            question="How long does it take to enhance an image?"
            answer="The enhancement process usually takes a few seconds, depending on the image size and complexity."
          />
          <FAQItem
            question="Does it work on mobile devices?"
            answer="Yes! Our website is fully responsive and works on desktops, tablets, and smartphones."
          />
          <FAQItem
            question="Will my original image be modified?"
            answer="No, we create a separate enhanced version while keeping your original image unchanged."
          />
          <FAQItem
            question="Is my data secure?"
            answer="Yes, we do not store or share any uploaded images. All processing happens securely in real-time."
          />
        </div>
      </section>


      <section id="contact" className="py-16 bg-gray-900 text-center">
        <h2 className="text-3xl font-semibold text-white mb-12 animate__animated animate__fadeIn">
          Contact Us
        </h2>
        <p className="text-lg mb-6">Have questions or need support? Get in touch with us.</p>
        <div className="flex justify-center gap-6 text-3xl">
          <a href="https://facebook.com" className="text-blue-500 hover:text-blue-400 transition">
            <FaFacebook />
          </a>
          <a href="https://twitter.com" className="text-blue-400 hover:text-blue-300 transition">
            <FaTwitter />
          </a>
          <a href="https://instagram.com" className="text-pink-500 hover:text-pink-400 transition">
            <FaInstagram />
          </a>
        </div>
      </section>
      <Box sx={{ py: 4, backgroundColor: '#3f51b5', color: 'white', textAlign: 'center' }}>
        <Typography variant="body1">© 2025 AI Enhancer. All rights reserved.</Typography>
        <Link href="#" color="inherit" sx={{ ml: 2 }}>
          Privacy Policy
        </Link>
        <Link href="#" color="inherit" sx={{ ml: 2 }}>
          Terms of Service
        </Link>
      </Box>
    </div>
  );
}
