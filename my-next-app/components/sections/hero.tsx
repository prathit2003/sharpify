"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

const col1images = [
  { src: "images/grid3.webp" },
  { src: "images/grid4.webp" },
  { src: "images/grid5.webp" },
];
const col2images = [
  { src: "images/grid6.webp" },
  { src: "images/grid8.webp" },
  { src: "images/grid9.webp" },
];

const Hero = () => {
  return (
    <section className="relative flex flex-col-reverse lg:flex-row items-center justify-between px-4 sm:px-8 lg:px-16 py-12 gap-12 w-full min-h-screen overflow-hidden">
      {/* Background Grid */}
      <motion.div
        className="absolute inset-0 overflow-hidden backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0.5, 0.8, 0.5],
          y: [0, 12, 0], // parallax bounce
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-white [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        >
          <defs>
            <pattern
              id="blogverse-pattern"
              x="50%"
              y={-1}
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>

          <svg x="50%" y={-1} className="overflow-visible fill-white">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>

          <rect
            fill="url(#blogverse-pattern)"
            width="100%"
            height="100%"
            strokeWidth={0}
          />
        </svg>
      </motion.div>

      {/* Left Content */}
      <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 max-w-xl w-full z-10">
        <h1 className="text-main text-2xl sm:text-3xl md:text-4xl font-bold leading-snug">
          Create and enhance stunning images with Refyned,
          <br className="hidden sm:block" /> free and online.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-xl">
          Enhance. Erase. Generate. Convert. Compress. All without losing
          quality, with Refyned.
        </p>

        <div>
          <Button className="text-sm sm:text-base md:text-lg px-6 py-3 rounded-xl bg-secondary text-main font-semibold shadow-md hover:scale-105 transition-transform flex items-center gap-2">
            Get Started <ArrowRightAltIcon fontSize="small" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
          <div className="flex -space-x-4">
            {["orange1.webp", "green1.webp", "orange2.webp", "green2.webp"].map(
              (src, i) => (
                <img
                  key={i}
                  src={`images/${src}`}
                  alt="User"
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-gray-200 object-cover shadow-lg"
                />
              )
            )}
          </div>
          <p className="text-gray-400 text-sm sm:text-md lg:text-lg max-w-[220px]">
            Join 1000+ users and start enhancing your images now!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
