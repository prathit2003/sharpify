const Feature = () => {
  return (
    <>
      <div className="flex flex-col items-center space-y-8 w-full my-24">
        <h1 className="text-main lg:text-5xl md:text-3xl sm:text-xl text-lg text-center text-wrap max-w-3xl">
          An entire stack of tools that keeps your Creativity moving
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 p-6 rounded-xl w-[90vw]">
          {/* Card 1: Tall Hero Card */}
          <div className="col-span-3 row-span-3 bg-card rounded-2xl shadow-xl p-6 flex flex-col justify-between">
            <div>
              <div className="text-xs mb-2 text-main">
                Powered by Refyned AI
              </div>
              <pre className="bg-white/20 text-main text-sm rounded-2xl p-4 overflow-auto">
                {`const EnhanceImage = ({ file }) => {
                   return AI.enhance(file)
              }`}
              </pre>
            </div>
            <div className="flex items-center justify-start">
              <h3 className=" text-main text-lg mt-4">AI Image Enhancement</h3>
            </div>
            <p className="text-gray-300 text-sm mt-1">
              Restore clarity, remove noise, and enhance details instantly using
              AI-powered enhancement.
            </p>
          </div>

          {/* Card 2: Top Right */}
          <div className="col-span-3 bg-card row-span-3 rounded-2xl shadow-xl p-6 flex text-left flex-col relative overflow-hidden">
            <h3 className="text-main text-lg md:text-xl">
              Seamless Format Conversion
            </h3>
            <p className="text-gray-300 text-sm md:text-md mt-1 mb-8">
              Convert images between JPG, PNG, WEBP, and more. Preserve quality,
              save time.
            </p>

            {/* File type illustrations */}
            <div className="flex  items-center justify-center space-x-[20px] mb-6">
              <img
                src="images/jpg.png"
                alt="JPG"
                className="w-20 h-24 object-contain rotate-[-10deg]"
              />
              <img
                src="images/pdf.png"
                alt="PDF"
                className="w-20 h-24 object-contain mb-2"
              />
              <img
                src="images/png.png"
                alt="PNG"
                className="w-20 h-24 object-contain rotate-[10deg]"
              />
            </div>
          </div>

          {/* Card 3: Bottom Left */}
          <div className="col-span-2 bg-card row-span-3 rounded-2xl shadow-xl p-6">
            <div className="text-xs text-main bg-white/20 rounded-full w-fit px-3 py-1 mb-3">
              Smart Tools
            </div>
            <div className="flex items-center justify-center my-8">
              <img
                src="images/file.png"
                alt="image dipecting big file"
                className="w-15 h-20 object-cover"
              />
              <img
                src="images/exchange.png"
                alt="image dipecting big file"
                className="w-8 h-8 object-cover mx-2"
              />
              <img
                src="images/file.png"
                alt="image dipecting small file"
                className="w-10 h-12 object-cover"
              />
            </div>
            <h3 className=" text-main text-lg">Smart Image Compression</h3>
            <p className="text-gray-300 text-sm mt-1">
              Shrink file sizes without quality loss. Optimized for web, mobile,
              and email.
            </p>
          </div>

          {/* Card 4: Bottom Right */}
          <div className="col-span-4 bg-card row-span-3 rounded-2xl shadow-xl p-6">
            <h3 className=" text-main text-lg">
              Turn Prompts into Pictures with One Click
            </h3>
            <p className="text-gray-300 text-sm mt-2">
              Type anything you imagine, and we will generate a beautiful image
              in seconds.
            </p>
            <div className="flex space-x-2 mt-4">
              <div className="px-3 py-1 rounded-full text-sm text-main">
                Web Optimized
              </div>
              <div className="px-3 py-1 rounded-full text-sm text-main">
                High Fidelity
              </div>
              <div className="px-3 py-1 rounded-full text-sm text-main">
                Instant Output
              </div>
            </div>
            <div className="flex items-center justify-center p-4 mt-8">
              <div className="flex items-center bg-white/20 backdrop-blur-md border border-white/30 rounded-full p-2 pl-4 shadow-inner w-[100%] max-w-2xl">
                <input
                  type="text"
                  disabled
                  value="Generate an image of a robot painting a sunset"
                  className="flex-grow bg-transparent focus:outline-none text-sm md:text-base text-main placeholder-gray-400"
                />
                <button
                  disabled
                  className="bg-main text-white font-medium py-2 px-4 rounded-full flex items-center gap-2"
                >
                  <span className="text-sm">Generating</span>
                  <svg
                    className="w-4 h-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8H4z"
                    ></path>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feature;
