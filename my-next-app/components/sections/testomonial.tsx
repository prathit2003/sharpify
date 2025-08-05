"use client";
import { motion } from "framer-motion";
import Component from "../ui/testmonialcomponent";
interface componentprops {
  comment: string;
  profilepicSrc: string;
  name: string;
  about: string;
  rating: number;
}

const testimonials: componentprops[] = [
  {
    comment:
      "I uploaded an old black-and-white photo of my grandparents, and the AI brought it to life with stunning colors. Absolutely magical!",
    profilepicSrc: "images/testmonial1.webp",
    name: "Aanya Patel",
    about: "History Student",
    rating: 5,
  },
  {
    comment:
      "As a freelance designer, I’ve saved hours using the image generator for mockups. Just a prompt, and I get clean, usable assets.",
    profilepicSrc: "images/testmonial2.webp",
    name: "Jordan Liu",
    about: "Freelance Designer",
    rating: 4,
  },
  {
    comment:
      "I needed high-quality AI art for a school project, and this site made it super easy. The results were sharp, colorful, and impressive!",
    profilepicSrc: "images/testmonial3.webp",
    name: "Meera Sharma",
    about: "High School Student",
    rating: 5,
  },
  {
    comment:
      "The enhancement tool fixed blurry images I thought were unusable. It's fast, simple, and a must-have for content creators.",
    profilepicSrc: "images/testmonial4.webp",
    name: "Rohan Verma",
    about: "Content Creator",
    rating: 4,
  },
  {
    comment:
      "From concept to visual in seconds — this AI generator helps me pitch product ideas faster than ever before. Huge time saver!",
    profilepicSrc: "images/testmonial5.webp",
    name: "Tanya Desai",
    about: "Startup Founder",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-4 md:space-y-8 w-full my-8 md:my-16 rounded-3xl overflow-hidden">
      {/* Headings */}
      <div className="flex flex-col items-center space-y-1 lg:space-y-2 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-main"
        >
          don’t take our word for it.
          <br />
          over 1000+ users trust us.
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 leading-snug"
        >
          read what they say!
        </motion.h2>
      </div>

      {/* Scrolling Testimonials */}
      <div className="w-full overflow-hidden py-10 relative">
        <div className="absolute top-0 left-0 h-full w-18 md:w-24 z-10 fade-left pointer-events-none"></div>

        <div className="flex animate-infinite-scroll-slow space-x-2 sm:space-x-4 md:space-x-6 lg:space-x-8 w-max">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Component key={index} {...testimonial} />
          ))}
        </div>

        <div className="absolute top-0 right-0 h-full w-18 md:w-24 z-10 fade-right pointer-events-none"></div>
      </div>
    </div>
  );
};

export default Testimonial;
