"use client";

import useUIStore from "@/app/store/UIatom";
import Component from "../ui/3iconcomponent";

const ThreeCard = () => {
  const {} = useUIStore();
  return (
    <div className="flex flex-col lg:flex-row items-center space-y-10 md:space-y-12 lg:space-y-0 lg:space-x-8 p-2 my-10 lg:p-10">
      <Component
        iconPath="icons/CameraEnhance.svg"
        Heading="powered by real esrgan "
        SubHeading="real esrgan AI Enhance is trained to identify and correct issues such as noise, blurriness, and low contrast."
      />
      <Component
        iconPath="icons/2xicon.svg"
        Heading="Momentary resolution increase"
        SubHeading="Boost pixel count and get that crispy clear image quality in a matter of seconds."
      />
      <Component
        iconPath="icons/SparklingDiamond.svg"
        Heading="Increased detail, decreased blur"
        SubHeading="Get rid of blur and keep precious moments in high resolution with the AI photo enhancer."
      />
    </div>
  );
};

export default ThreeCard;
