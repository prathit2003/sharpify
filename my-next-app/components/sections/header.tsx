"use client";
import { Button } from "../ui/button";
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
  const router = useRouter();
  return (
    <div className="bg-header fixed top-0 left-0 w-full  border-b-1 border-white z-50">
      <div className="flex justify-between  items-center py-4 px-12 md:px-8 ">
        <div className="flex items-center space-x-16">
          <img
            src="/icons/sharpify.svg"
            alt="Icon"
            className="h-8 w-15 md:h-14 md:w-30"
          />
          <nav className="hidden pb-1 md:flex md:space-x-8 ">
            {["Dashboard", "Contact", "Features", "About"].map(
              (item, index) => (
                <a
                  key={index}
                  href={`${item.toLowerCase()}`}
                  className="relative text-md text-main hover:text-white transition duration-300 ease-in-out hover:scale-105"
                >
                  {item}
                </a>
              )
            )}
          </nav>
        </div>

        <div className="hidden md:flex items-center ">
          <SearchIcon
            className="text-white mr-2 cursor-pointer"
            onClick={() => console.log("Search icon clicked")}
          />

          <Button
            onClick={() => {
              router.push("/signup");
            }}
            className="text-cyan rounded-2xl text-lg  px-4 py-2 hover:underline transition duration-300 ease-in-out  hover:scale-105 "
          >
            Signup
          </Button>
          <div className="h-8 w-[1px] bg-white"></div>
          <Button
            variant="outline"
            onClick={() => {
              router.push("/signin");
            }}
            className="border-purple orbitron-font bg-cyan rounded-2xl text-heading text-lg pb-2 transition-all duration-300  hover:scale-105 mx-4"
          >
            Signin
          </Button>
        </div>

        <Button
          className="md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-black flex flex-col items-center space-y-4 py-4">
          {["Dashboard", "Contact", "Features", "About"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-lg text-white hover:underline"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col items-center space-y-3 mt-3">
            <Button
              onClick={() => {
                router.push("/signup");
              }}
              className="text-lg  transition duration-300 ease-in-out  hover:scale-105 "
            >
              start creating
            </Button>
            <div className="h-6 w-[1px] bg-white"></div>
            <Button
              onClick={() => {
                router.push("/signin");
              }}
              className="border-2 text-lg px-4 py-2 bg-transparent rounded-md transition-all duration-300  hover:scale-105"
            >
              signin
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
