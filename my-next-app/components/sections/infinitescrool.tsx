const InfiniteScroll = () => {
  const words = [
    { index: "1", text: "Change Background" },
    { index: "2", text: "Enhance Image" },
    { index: "3", text: "Upscale Image" },
    { index: "4", text: "Color Correction" },
    { index: "5", text: "Sharpen Image" },
    { index: "6", text: "Change Format" },
    { index: "7", text: "Change Size" },
  ];

  return (
    <>
      <div className="flex overflow-hidden">
        <div className="flex flex-col ">
          <ul className="flex gap-4 text-black py-2 animate-infinite-scroll ">
            {[...words, ...words, ...words].map((word, index) => {
              return (
                <li
                  key={`scroll-1-${index}`}
                  className="whitespace-nowrap bg-white shadow-md rounded-md p-2"
                >
                  {word.text}
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-4 text-black py-2 animate-infinite-scroll-reverse ">
            {[...words, ...words, ...words].map((word, index) => {
              return (
                <li
                  key={`scroll-2-${index}`}
                  className="whitespace-nowrap bg-white shadow-md rounded-md p-2"
                >
                  {word.text}
                </li>
              );
            })}
          </ul>
          <ul className="flex gap-4 text-black py-2 animate-infinite-scroll ">
            {[...words, ...words, ...words].map((word, index) => {
              return (
                <li
                  key={`scroll-3-${index}`}
                  className="whitespace-nowrap bg-white shadow-md rounded-md p-2"
                >
                  {word.text}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default InfiniteScroll;
