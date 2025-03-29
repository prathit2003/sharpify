"use client";
import { Button } from "@/components/ui/button";
import useUIStore from "@/app/store/UIatom";

const HeroSection = () => {
  const {} = useUIStore();

  return (
    <section className="relative   bg-[url('/images/background7.jpg')] bg-cover bg-center bg-no-repeat flex flex-row items-center justify-between h-screen w-full py-60 px-20">
      <div className="ml-10 max-w-xl pt-10">
        <h1 className="text-black text-4xl font-semibold">
          AI That Transforms Your Images Like a Pro, In Just One Click!
        </h1>
        <p className=" text-gray-900 text-2xl mt-2">
          Remove noise, sharpen edges, upscale resolution, and restore details
          instantly. Our AI-powered tools bring your images to life with
          precision and ease.
        </p>
        <Button className="mt-4 bg-transparent border border-black text-black hover:bg-black hover:text-white">
          Get Started
        </Button>
      </div>
      <div className="relative w-1/3 h-3/3 border-2 border-black rounded-2xl flex flex-col items-center justify-center p-4 mr-8">
        {/* Upload Button */}
        <button className=" absolute top-6 bg-black text-white px-4 py-2 rounded-lg">
          Upload File
        </button>

        {/* Dashed Inner Rectangle */}
        <div className="absolute bottom-4 w-5/6 h-1/2 border-2 border-dashed border-gray-900 rounded-lg flex items-center justify-center">
          <p className="text-gray-900">Drop or drag here</p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
