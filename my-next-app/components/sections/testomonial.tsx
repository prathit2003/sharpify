"use client";

import useUIStore from "@/app/store/UIatom";

const Testominial: React.FC = () => {
  const {} = useUIStore();

  return (
    <>
      <div className="w-full flex flex-col justify-center items-center my-20 px-20">
        <div className="px-20  text-center">
          <h1 className="text-3xl font-semibold">
            The only image enhancer you’ll ever need
          </h1>
          <p className="text-main text-xl my-2 ">
            Thanks to an intuitive user interface and instant results, the
            Picsart photo enhancer is the perfect tool to rely on. Get automatic
            results with image quality enhancer’s state-of-the-art AI technology
            and give your photos a visual makeover with no extra hassle. 
          </p>
        </div>

        <img
          src="/icons/rating.svg"
          alt="Icon"
          className="w-1/4 h-1/4 py-2"
        ></img>

        <div className="flex flex-row justify-center gap-6  mx-10 ">
          {/* Testimonial Card 1 */}
          <div className="flex flex-col items-center min-w-[300px] md:w-1/2 rounded-lg border border-gray-300 shadow-md py-6 px-10 bg-white">
            <img
              className="self-start"
              src="/icons/QuoteLeft.svg"
              alt="quotes"
            />
            <p className="text-gray-700 text-center m-3">
              "I am super happy with Al Enhance I spend a lot of time on my
              photos, quality is so important to me! I'm not always so lucky, so
              I choose to do what I can to fix them. The results have often felt
              like miracles after using Al Enhance."
            </p>
            <img
              className="self-end"
              src="/icons/QuoteRight.svg"
              alt="quotes"
            />
            <div className="flex items-center mt-4 mx-auto pl-4">
              <div
                className="w-12 h-12 rounded-full bg-center bg-cover mr-5"
                style={{ backgroundImage: "url('/images/pfp1.jpg')" }}
              ></div>
              <div className="text-left">
                <h1 className="font-bold text-heading text-xl">
                  Emily Johnson
                </h1>
                <p className="text-lg text-gray-700">
                  UI/UX Designer at Creatix Solutions
                </p>
              </div>
            </div>
          </div>

          {/* Testimonial Card 2 */}
          <div className="flex flex-col items-center min-w-[300px] md:w-1/2 rounded-lg border border-gray-300 shadow-md py-6 px-10 bg-white">
            <img
              className="self-start"
              src="/icons/QuoteLeft.svg"
              alt="quotes"
            />
            <p className="text-gray-700 text-center m-3">
              Most are viewing AI as a replacement to artists, but I think we
              can actually use it as a tool - like with AI Enhance- and it
              becomes more of a companion in the ride of creativity. Suddenly,
              artistic possibilities are increased and endless.
            </p>
            <img
              className="self-end"
              src="/icons/QuoteRight.svg"
              alt="quotes"
            />
            <div className="flex items-center mt-4 mx-auto pl-4">
              <div
                className="w-12 h-12 rounded-full bg-center bg-cover mr-5"
                style={{ backgroundImage: "url('/images/pfp2.jpg')" }}
              ></div>
              <div className="text-left">
                <h1 className="font-bold text-heading text-xl">John Smith</h1>
                <p className="text-lg text-gray-700">
                  Senior Frontend Devloper at TechNova Inc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testominial;
