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
    <div className="flex flex-col items-center max-w-sm w-full overflow-hidden m-6 bg-none ">
      <div className="w-1/3 aspect-square rounded-full bg-header transition duration-300  flex items-center justify-center p-5">
        <img src={iconPath} alt="icon" className="w-2/3 h-2/3 z-3" />
      </div>
      <div className="p-2 mt-2 text-center">
        <h1 className="text-white font-bold text-lg">{Heading}</h1>
        <p className="text-main text-md">{SubHeading}</p>
      </div>
    </div>
  );
};
export default ComPonent;
