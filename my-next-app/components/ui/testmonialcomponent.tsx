import StarRateIcon from "@mui/icons-material/StarRate";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
interface componentprops {
  comment: string;
  profilepicSrc: string;
  name: string;
  about: string;
  rating: number;
}
const Component: React.FC<componentprops> = ({
  comment,
  profilepicSrc,
  name,
  about,
  rating,
}) => {
  return (
    <div
      className="flex flex-col justify-between p-8 rounded-3xl bg-card border border-white/10 
             shadow-[inset_0_1px_0_rgba(255,255,255,0.05),0_20px_40px_rgba(0,0,0,0.7)] 
             aspect-[6/3] transform hover:scale-[1.02] transition-all duration-700 ease-in-out 
             space-y-6 max-w-2xl bg-[--bg] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.08),0_25px_50px_rgba(0,0,0,0.8)]"
    >
      {/* Comment */}
      <p className="text-center font-medium leading-relaxed text-white/90 text-base md:text-lg lg:text-xl">
        {comment}
      </p>

      {/* Profile and Rating Section */}
      <div className="flex items-center justify-between space-x-20 w-full">
        {/* Profile */}
        <div className="flex items-center gap-4">
          <img
            src={profilepicSrc}
            alt="testimonial profile"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover shadow-md"
          />
          <div className="flex flex-col text-nowrap">
            <h1 className="text-white font-semibold text-sm/2 md:text-md mb-2">
              {name}
            </h1>
            <h3 className="text-white/50 text-xs/2 md:text-sm">{about}</h3>
          </div>
        </div>

        {/* Rating */}
        <div className="flex items-center space-x-1">
          {Array.from({ length: 5 }, (_, index) =>
            index < rating ? (
              <StarRateIcon key={index} className="text-secondary" />
            ) : (
              <StarOutlineIcon key={index} className="text-secondary" />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Component;
