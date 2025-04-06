"use client";
import { Button } from "@/components/ui/button";
import useUIStore from "@/app/store/UIatom";
import InfiniteScroll from "./infinitescrool";
import { useRouter } from "next/navigation";
import { FaArrowRight } from "react-icons/fa";

const HeroSection = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/dashboard");
  };

  return (
    <>
      <section className="flex items-center justify-between w-full pt-25 bg-white">
        <div className="my-10 mx-12 p-6 flex-col justify-center">
          <p className="text-black text-7xl font-medium">
            AI That Transforms Your Images Like a Pro, In Just One Click!
          </p>

          <div className="flex items-center space-x-2 my-4">
            <Button
              className="bg-blk text-white text-xl font-medium px-6 py-3 rounded transition-all duration-300 hover:bg-gray-900 hover:scale-110"
              onClick={handleClick}
            >
              Get Started
            </Button>

            <div
              className="w-8 h-8 flex items-center justify-center bg-black text-white rounded-full transition-all duration-300 hover:scale-110 cursor-pointer"
              onClick={handleClick}
            >
              <FaArrowRight className="text-lg " />
            </div>
          </div>
        </div>

        <img
          src="/images/heroimg.jpg"
          alt="AI Enhancer"
          className="self-center w-1/5 h-1/4 p-10 m-10  rounded-sm z-10 object-cover"
        />
      </section>

      <div className="my-4">
        <InfiniteScroll />
      </div>
    </>
  );
};

export default HeroSection;
