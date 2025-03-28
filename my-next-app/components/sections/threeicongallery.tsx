"use client";

import useUIStore from "@/app/store/UIatom";
import Component from "../ui/3iconcomponent";

const ThreeCard = () => {
  const {} = useUIStore();
  return (
    <div className="flex flex-row h-screen justify-around gap-2 py-10 my-30 mx-5">
      <Component
        iconPath="icons/enhancementicon.svg"
        Heading="powered by real esrgan "
        SubHeading="real esrgan AI Enhance is trained to identify and correct issues such as noise, blurriness, and low contrast."
      />
      <Component
        iconPath="icons/2xicon.svg"
        Heading="Momentary resolution increase"
        SubHeading="Boost pixel count and get that crispy clear image quality in a matter of seconds."
      />
      <Component
        iconPath="icons/diamond.svg"
        Heading="Increased detail, decreased blur"
        SubHeading="Get rid of blur and keep precious moments in high resolution with the AI photo enhancer."
      />
    </div>
  );
};

export default ThreeCard;
