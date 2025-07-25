"use client";
import { Button } from "../ui/button";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import useUIStore from "@/app/store/UIatom";
const Navbar = () => {
  const { isMobileMenuOpen, setIsMobileMenuOpen } = useUIStore();
  const router = useRouter();
  return (
    <div className="md:bg-header bg-main fixed top-0 left-0 w-full z-5">
      <div className="flex justify-between  items-center py-6 px-8 lg:px-10 lg:py-8">
        <div className="flex items-center space-x-16">
          <img
            src="/icons/sharpify.svg"
            alt="Icon"
            className="h-[50%] w-25 lg:w-30"
          />
          <nav className="hidden pb-1 lg:flex lg:space-x-8 ">
            {["Dashboard", "Create", "Generate", "API", "Contact"].map(
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

        <div className="hidden lg:flex items-center ">
          <Button
            onClick={() => {
              router.push("/signup");
            }}
            className="text-purple rounded-2xl text-lg  px-4 py-2 hover:underline transition duration-300 ease-in-out  hover:scale-105 "
          >
            Signup
          </Button>
          <div className="h-8 w-[1px] bg-white"></div>
          <Button
            variant="outline"
            onClick={() => {
              router.push("/signin");
            }}
            className=" bg-gradient-purple rounded-2xl text-white font-bold text-lg pb-2 transition-all duration-300  hover:scale-105 mx-4"
          >
            Signin
          </Button>
        </div>

        <Button
          className="lg:hidden !p-0"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <CloseIcon /> : <MenuIcon />}
        </Button>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-header flex flex-col items-center space-y-4 py-4">
          {["Dashboard", "Create", "Generate", "API", "Contact"].map((item) => (
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
              className="text-purple rounded-2xl text-lg  px-4 py-2 hover:underline transition duration-300 ease-in-out  hover:scale-105 "
            >
              signup
            </Button>
            <Button
              onClick={() => {
                router.push("/signin");
              }}
              className="bg-gradient-purple rounded-2xl text-white text-lg pb-2 transition-all duration-300  hover:scale-105 mx-4"
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
