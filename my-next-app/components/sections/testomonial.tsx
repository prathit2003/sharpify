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
    profilepicSrc: "images/testmonial1.jpg",
    name: "Aanya Patel",
    about: "History Student",
    rating: 5,
  },
  {
    comment:
      "As a freelance designer, I’ve saved hours using the image generator for mockups. Just a prompt, and I get clean, usable assets.",
    profilepicSrc: "images/testmonial2.jpg",
    name: "Jordan Liu",
    about: "Freelance Designer",
    rating: 4,
  },
  {
    comment:
      "I needed high-quality AI art for a school project, and this site made it super easy. The results were sharp, colorful, and impressive!",
    profilepicSrc: "images/testmonial3.jpg",
    name: "Meera Sharma",
    about: "High School Student",
    rating: 5,
  },
  {
    comment:
      "The enhancement tool fixed blurry images I thought were unusable. It's fast, simple, and a must-have for content creators.",
    profilepicSrc: "images/testmonial4.jpg",
    name: "Rohan Verma",
    about: "Content Creator",
    rating: 4,
  },
  {
    comment:
      "From concept to visual in seconds — this AI generator helps me pitch product ideas faster than ever before. Huge time saver!",
    profilepicSrc: "images/testmonial5.jpg",
    name: "Tanya Desai",
    about: "Startup Founder",
    rating: 5,
  },
];

const Testimonial: React.FC = () => {
  return (
    <div className="flex flex-col items-center space-y-8 py-4 w-full my-16 rounded-3xl overflow-hidden">
      {/* Headings */}
      <div className="flex flex-col items-center space-y-4 mt-12">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-5xl font-bold text-main"
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
          className="text-center text-2xl md:text-3xl text-gray-200 leading-snug"
        >
          read what they say!
        </motion.h2>
      </div>

      {/* Scrolling Testimonials */}
      <div className="w-full overflow-hidden p-8">
        <div className="flex animate-infinite-scroll-slow space-x-8">
          {[...testimonials, ...testimonials].map((testimonial, index) => (
            <Component
              key={index}
              comment={testimonial.comment}
              profilepicSrc={testimonial.profilepicSrc}
              name={testimonial.name}
              about={testimonial.about}
              rating={testimonial.rating}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
