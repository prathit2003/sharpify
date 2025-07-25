"use client";

import useUIStore from "@/app/store/UIatom";

const Testimonial: React.FC = () => {
  const {} = useUIStore();

  return (
    <div className="w-full flex flex-col justify-center items-center my-2 px-12 py-20 sm:px-16 md:px-18 lg:px-40">
      <div className="text-center p-4 max-w-3xl">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-semibold">
          The only image enhancer you’ll ever need
        </h1>
        <p className="text-main text-xs sm:text-base my-2">
          Thanks to an intuitive user interface and instant results, the
          sharpify photo enhancer is the perfect tool to rely on. Get automatic
          results with image quality enhancer’s state-of-the-art AI technology
          and give your photos a visual makeover with no extra hassle.
        </p>
      </div>

      <img
        src="icons\ratingIcon.svg"
        alt="Icon"
        className="w-1/2 sm:w-1/3 md:w-1/4"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl ">
        {/* Testimonial Card 1 */}
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 lg:p-6 bg-header">
          <img
            className="self-start w-6 sm:w-8 lg:w-10 aspect-square"
            src="/icons/QuoteLeft.svg"
            alt="quotes"
          />
          <p className="text-white text-xs sm:text-sm text-center m-4">
            "I am super happy with Al Enhance! I spend a lot of time on my
            photos, quality is so important to me! I'm not always so lucky, so I
            choose to do what I can to fix them. The results have often felt
            like miracles after using Al Enhance."
          </p>
          <img
            className="self-end w-6 sm:w-8 lg:w-10 aspect-square"
            src="/icons/QuoteRight.svg"
            alt="quotes"
          />
          <div className="flex justify-center items-center p-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-center bg-cover mr-4"
              style={{ backgroundImage: "url('/images/pfp1.jpg')" }}
            ></div>
            <div className="text-left">
              <h1 className="font-bold text-white text-sm sm:text-base">
                Emily Johnson
              </h1>
              <p className="text-xs sm:text-sm text-white font-semibold">
                UI/UX Designer at Creatix Solutions
              </p>
            </div>
          </div>
        </div>

        {/* Testimonial Card 2 */}
        <div className="flex flex-col items-center rounded-lg shadow-md p-4 lg:p-6 bg-header">
          <img
            className="self-start w-6 sm:w-8 lg:w-10 aspect-square"
            src="/icons/QuoteLeft.svg"
            alt="quotes"
          />
          <p className="text-white text-xs sm:text-sm text-center m-4">
            Most are viewing AI as a replacement to artists, but I think we can
            actually use it as a tool — like with AI Enhance — and it becomes
            more of a companion in the ride of creativity. Suddenly, artistic
            possibilities are increased and endless.
          </p>
          <img
            className="self-end w-6 sm:w-8 lg:w-10 aspect-square"
            src="/icons/QuoteRight.svg"
            alt="quotes"
          />
          <div className="flex justify-center items-center p-4">
            <div
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-center bg-cover mr-4"
              style={{ backgroundImage: "url('/images/pfp2.jpg')" }}
            ></div>
            <div className="text-left">
              <h1 className="font-bold text-white text-sm sm:text-base">
                John Smith
              </h1>
              <p className="text-xs sm:text-sm text-white font-semibold">
                Senior Frontend Developer at TechNova Inc.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
