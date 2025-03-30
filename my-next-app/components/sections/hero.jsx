"use client";
import { Button } from "@/components/ui/button";
import useUIStore from "@/app/store/UIatom";
import InfiniteScroll from "./infinitescrool";

const HeroSection = () => {
  const {} = useUIStore();
  const handleClick = () => {
    console.log("Button clicked!");
  };

  return (
    <>
      <section className="flex items-center justify-between w-full pt-25 bg-white">
        <img
          src="/icons/socials.svg"
          alt="AI Enhancer"
          className="self-center w-1/8 h-1/2 object-cover my-10 p-20"
        />

        <div className="my-10 p-6 flex-col justify-center ">
          <div>
            <p
              className="text-black text-7xl font-semibold
            "
            >
              AI That Transforms Your Images Like a Pro, In Just One Click!
            </p>
          </div>

          <Button
            className="bg-blk my-4 text-white text-lg font-bold rounded"
            onClick={handleClick}
          >
            Get Started
          </Button>
        </div>
        <img
          src="/images/heroimg.jpg"
          alt="AI Enhancer"
          className=" self-center w-1/5 h-1/4 p-10 m-10 object-cover"
        ></img>
      </section>
      <div className="my-6 py-6">
        <InfiniteScroll />
      </div>
    </>
  );
};

export default HeroSection;
