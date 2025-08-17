import { Button } from "./button";
import ForumIcon from "@mui/icons-material/Forum";
import SearchIcon from "@mui/icons-material/Search";
import FilterIcon from "@mui/icons-material/Filter";
import CancelIcon from "@mui/icons-material/Cancel";
import useUIStore from "@/app/store/UIatom";
const Sidebar = () => {
  const { setIsMobileMenuOpen } = useUIStore();
  return (
    <>
      <div className="relative flex-col items-start justify-around p-4 md:p-0 lg:p-4 space-y-4 h-full w-full bg-card rounded-xl z-10">
        <div className="absolute top-2 right-2 p-1 text-main hover:text-gray-400 md:hidden">
          <CancelIcon
            className="cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        </div>
        <div className="flex flex-col items-start space-y-2 sm:space-y-4 p-2 md:p-4 w-full">
          <div className="space-y-1 sm:space-y-2">
            <p className="text-left font-semibold text-[10px] sm:text-xs  md:text-sm lg:text-base text-main">
              Current Storage
            </p>
            <p className="text-left  text-[10px] sm:text-xs md:text-sm  lg:text-base  text-main">
              0 Bytes / 100 MB used
            </p>
            <p className="text-left  text-[10px] sm:text-xs md:text-sm  lg:text-base  text-gray-400">
              Enjoy up to 10 GB more storage with Pro.
            </p>
          </div>
          <Button className="text-main bg-secondary text-[10px] md:font-semibold sm:text-xs md:text-sm lg:text-base p-1 sm:px-4 sm:py-2  md:px-6 md:py-4 rounded-2xl hover:scale-105 transition-all duration-300 w-full">
            Upgrade to Pro
          </Button>
        </div>
        <div className="space-y-3">
          <Button className="flex items-center justify-start bg-none md:space-x-2 text-main hover:text-gray-400 text-[10px] sm:text-sm md:text-base transition-colors">
            <ForumIcon fontSize="small" />
            <span>New chat</span>
          </Button>
          <Button className="flex items-center justify-start bg-none md:space-x-2 text-main hover:text-gray-400 text-[10px] sm:text-sm md:text-base transition-colors">
            <SearchIcon fontSize="small" />
            <span>Search chats</span>
          </Button>
          <Button className="flex items-center justify-start bg-none md:space-x-2 text-main hover:text-gray-400 text-[10px] sm:text-sm md:text-base transition-colors">
            <FilterIcon fontSize="small" />
            <span>library</span>
          </Button>
        </div>
        <div className="flex flex-col p-2 md:p-4">
          <h1 className="text-gray-400 text-[10px] sm:text-sm md:text-base lg:text-lg">
            chats
          </h1>
        </div>
      </div>
    </>
  );
};
export default Sidebar;
