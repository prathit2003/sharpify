"use client";
interface IconGalleryProps {
  iconPath: string;
  Heading: string;
  SubHeading: string;
}
const ComPonent: React.FC<IconGalleryProps> = ({
  iconPath,
  Heading,
  SubHeading,
}) => {
  return (
    <div className="flex flex-col items-center max-w-sm w-full overflow-hidden m-5 p-10 bg-white">
      <div className="w-2/5 aspect-square rounded-full bg-black shadow-lg shadow-gray-800/70 ring-gray-800 transition duration-300  flex items-center justify-center p-5">
        <img src={iconPath} alt="icon" className="w-2/3 h-2/3 z-3 pl-1 pb-1 " />
      </div>
      <div className="p-2 mt-2 text-center">
        <h1 className="text-xl font-semibold">{Heading}</h1>
        <p className="text-gray-600">{SubHeading}</p>
      </div>
    </div>
  );
};
export default ComPonent;
